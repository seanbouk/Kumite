const MAX_BUFFER = 120;

// Adjacent cardinals for diagonal directions
const DIAGONAL_CARDINALS = {
  1: [2, 4], // down-back
  3: [2, 6], // down-forward
  7: [4, 8], // up-back
  9: [6, 8], // up-forward
};

// Fuzzy direction matching — which actual inputs satisfy a wanted direction.
// E.g., if the pattern wants ↘ (3), we also accept ↓ (2) or → (6).
// If the pattern wants ↓ (2), we also accept ↙ (1) or ↘ (3).
// This mimics real fighting game leniency.
const FUZZY_MATCH = {
  1: [1, 2, 4],       // ↙ also accepts ↓, ←
  2: [2, 1, 3],       // ↓ also accepts ↙, ↘
  3: [3, 2, 6],       // ↘ also accepts ↓, →
  4: [4, 1, 7],       // ← also accepts ↙, ↖
  5: [5],             // neutral is just neutral
  6: [6, 3, 9],       // → also accepts ↘, ↗
  7: [7, 4, 8],       // ↖ also accepts ←, ↑
  8: [8, 7, 9],       // ↑ also accepts ↖, ↗
  9: [9, 6, 8],       // ↗ also accepts →, ↑
};

class InputBuffer {
  constructor() {
    this.buffer = [];
    this.prevDirection = 5;
    this.prevButtons = [];
  }

  push(snapshot) {
    const { direction, newlyPressed, timestamp } = snapshot;
    const dirChanged = direction !== this.prevDirection;
    const hasNewButtons = newlyPressed.length > 0;

    if (dirChanged || hasNewButtons) {
      this.buffer.push({
        direction,
        buttons: hasNewButtons ? [...newlyPressed] : [],
        time: timestamp,
      });

      if (this.buffer.length > MAX_BUFFER) {
        this.buffer.splice(0, this.buffer.length - MAX_BUFFER);
      }
    }

    this.prevDirection = direction;
    this.prevButtons = snapshot.buttons;
  }

  clear() {
    this.buffer = [];
  }

  match(pattern) {
    switch (pattern.type) {
      case 'sequence': return this._matchSequence(pattern);
      case 'charge': return this._matchCharge(pattern);
      case 'rotation': return this._matchRotation(pattern);
      case 'mash': return this._matchMash(pattern);
      default: return false;
    }
  }

  // ---- SEQUENCE MATCHING ----
  // Finds ordered directions in the buffer ending with a button press.
  // Allows non-matching intermediates for tolerance.
  _matchSequence(pattern) {
    const { directions, button, maxTime, buttonTiming } = pattern;
    const buf = this.buffer;
    if (buf.length === 0) return false;

    const now = buf[buf.length - 1].time;

    // Find the most recent matching button press
    let buttonIdx = -1;
    for (let i = buf.length - 1; i >= 0; i--) {
      if (now - buf[i].time > (maxTime || 500)) break;
      if (this._buttonMatches(buf[i].buttons, button)) {
        buttonIdx = i;
        break;
      }
    }
    if (buttonIdx === -1) return false;

    const buttonTime = buf[buttonIdx].time;

    if (buttonTiming === 'after') {
      // MK-style: directions must all complete before the button event
      return this._findDirectionsBefore(directions, buttonIdx, maxTime || 500);
    }

    // Capcom-style: last direction can be simultaneous with or just before button
    // Walk backward from button to find directions in reverse order
    // Uses fuzzy matching — adjacent directions are accepted
    let seqIdx = directions.length - 1;

    // Check if the button event itself has the last direction
    if (this._dirFuzzyMatch(buf[buttonIdx].direction, directions[seqIdx])) {
      seqIdx--;
    }

    for (let i = buttonIdx - 1; i >= 0 && seqIdx >= 0; i--) {
      if (buttonTime - buf[i].time > (maxTime || 500)) break;
      if (this._dirFuzzyMatch(buf[i].direction, directions[seqIdx])) {
        seqIdx--;
      }
    }

    return seqIdx < 0;
  }

  _findDirectionsBefore(directions, buttonIdx, maxTime) {
    const buf = this.buffer;
    const buttonTime = buf[buttonIdx].time;
    let seqIdx = directions.length - 1;

    for (let i = buttonIdx - 1; i >= 0 && seqIdx >= 0; i--) {
      if (buttonTime - buf[i].time > maxTime) break;
      if (this._dirFuzzyMatch(buf[i].direction, directions[seqIdx])) {
        seqIdx--;
      }
    }
    return seqIdx < 0;
  }

  // ---- CHARGE MATCHING ----
  _matchCharge(pattern) {
    const { chargeDirection, releaseDirection, button, chargeTime, maxTime } = pattern;
    const buf = this.buffer;
    if (buf.length === 0) return false;

    const now = buf[buf.length - 1].time;

    // Find recent button press
    let buttonIdx = -1;
    for (let i = buf.length - 1; i >= 0; i--) {
      if (now - buf[i].time > (maxTime || 1200)) break;
      if (this._buttonMatches(buf[i].buttons, button)) {
        buttonIdx = i;
        break;
      }
    }
    if (buttonIdx === -1) return false;

    const buttonTime = buf[buttonIdx].time;

    // Find release direction near button press
    let releaseIdx = -1;
    for (let i = buttonIdx; i >= 0; i--) {
      if (buttonTime - buf[i].time > 200) break;
      if (this._dirFuzzyMatch(buf[i].direction, releaseDirection)) {
        releaseIdx = i;
        break;
      }
    }
    if (releaseIdx === -1) return false;

    // Sum charge time before release
    let charged = 0;
    for (let i = releaseIdx - 1; i >= 0; i--) {
      if (buttonTime - buf[i].time > (maxTime || 1200)) break;
      const nextTime = (i + 1 < buf.length) ? buf[i + 1].time : buf[releaseIdx].time;
      if (this._dirFuzzyMatch(buf[i].direction, chargeDirection)) {
        charged += nextTime - buf[i].time;
      } else {
        // Allow brief interruptions < 100ms
        const gap = nextTime - buf[i].time;
        if (gap > 100) break;
      }
    }

    return charged >= (chargeTime || 600);
  }

  // ---- ROTATION MATCHING ----
  _matchRotation(pattern) {
    const { cardinals, button, maxTime } = pattern;
    const buf = this.buffer;
    if (buf.length === 0) return false;

    const now = buf[buf.length - 1].time;

    // Find recent button press
    let buttonIdx = -1;
    for (let i = buf.length - 1; i >= 0; i--) {
      if (now - buf[i].time > (maxTime || 800)) break;
      if (this._buttonMatches(buf[i].buttons, button)) {
        buttonIdx = i;
        break;
      }
    }
    if (buttonIdx === -1) return false;

    const buttonTime = buf[buttonIdx].time;
    const seen = new Set();

    for (let i = buttonIdx; i >= 0; i--) {
      if (buttonTime - buf[i].time > (maxTime || 800)) break;
      const dir = buf[i].direction;
      if (dir === 5) continue;

      // Direct cardinal hit
      if (cardinals.includes(dir)) {
        seen.add(dir);
      }
      // Diagonals count toward adjacent cardinals
      if (DIAGONAL_CARDINALS[dir]) {
        for (const c of DIAGONAL_CARDINALS[dir]) {
          if (cardinals.includes(c)) seen.add(c);
        }
      }

      if (seen.size >= cardinals.length) return true;
    }

    return false;
  }

  // ---- MASH MATCHING ----
  _matchMash(pattern) {
    const { button, count, maxTime } = pattern;
    const buf = this.buffer;
    const now = buf.length > 0 ? buf[buf.length - 1].time : 0;
    let hits = 0;

    for (let i = buf.length - 1; i >= 0; i--) {
      if (now - buf[i].time > (maxTime || 1000)) break;
      if (this._buttonMatches(buf[i].buttons, button)) {
        hits++;
      }
    }
    return hits >= (count || 5);
  }

  // ---- DIRECTION HELPERS ----
  // Fuzzy match: does `actual` satisfy `wanted`?
  // Accepts adjacent directions (e.g., ↓ counts as ↘ and vice versa)
  _dirFuzzyMatch(actual, wanted) {
    if (actual === wanted) return true;
    const accepted = FUZZY_MATCH[wanted];
    return accepted ? accepted.includes(actual) : false;
  }

  // ---- BUTTON HELPERS ----
  _buttonMatches(pressedButtons, required) {
    if (pressedButtons.length === 0) return false;
    if (required === 'anyPunch') {
      return pressedButtons.some(b => b === 'lp' || b === 'mp' || b === 'hp');
    }
    if (required === 'anyKick') {
      return pressedButtons.some(b => b === 'lk' || b === 'mk' || b === 'hk');
    }
    if (required === 'anyButton') {
      return pressedButtons.length > 0;
    }
    return pressedButtons.includes(required);
  }
}

export default InputBuffer;
