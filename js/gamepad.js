let connectedPad = null;
let prevSnapshot = null;
let listeners = [];
let polling = false;

// Numpad notation from d-pad/stick
// 7 8 9    UB U UF
// 4 5 6    B  N F
// 1 2 3    DB D DF
function axisToDirection(x, y) {
  const DEADZONE = 0.25;
  const dx = Math.abs(x) > DEADZONE ? Math.sign(x) : 0; // -1=left, 1=right
  const dy = Math.abs(y) > DEADZONE ? Math.sign(y) : 0;  // -1=up, 1=down
  // Map to numpad
  if (dx === 0 && dy === 0) return 5;
  if (dx === 0 && dy === -1) return 8;
  if (dx === 1 && dy === -1) return 9;
  if (dx === 1 && dy === 0) return 6;
  if (dx === 1 && dy === 1) return 3;
  if (dx === 0 && dy === 1) return 2;
  if (dx === -1 && dy === 1) return 1;
  if (dx === -1 && dy === 0) return 4;
  if (dx === -1 && dy === -1) return 7;
  return 5;
}

function dpadToDirection(gp) {
  const up = gp.buttons[12]?.pressed;
  const down = gp.buttons[13]?.pressed;
  const left = gp.buttons[14]?.pressed;
  const right = gp.buttons[15]?.pressed;

  if (!up && !down && !left && !right) return null; // no d-pad input

  const dy = (down ? 1 : 0) - (up ? 1 : 0);
  const dx = (right ? 1 : 0) - (left ? 1 : 0);
  return axisToDirection(dx, dy);
}

function readDirection(gp) {
  // D-pad priority
  const dpad = dpadToDirection(gp);
  if (dpad !== null) return dpad;
  // Fall back to left stick
  return axisToDirection(gp.axes[0] || 0, gp.axes[1] || 0);
}

// Button mapping (standard gamepad layout)
// Face: 0=A/Cross, 1=B/Circle, 2=X/Square, 3=Y/Triangle
// Shoulders: 4=LB, 5=RB, 6=LT, 7=RT
const BUTTON_MAP = {
  2: 'lp',   // X / Square
  3: 'mp',   // Y / Triangle
  5: 'hp',   // RB
  0: 'lk',   // A / Cross
  1: 'mk',   // B / Circle
  4: 'hk',   // LB
  6: 'block', // LT
};

const BUTTON_INDICES = Object.keys(BUTTON_MAP).map(Number);

function readButtons(gp) {
  const pressed = [];
  for (const idx of BUTTON_INDICES) {
    if (gp.buttons[idx]?.pressed) {
      pressed.push(BUTTON_MAP[idx]);
    }
  }
  return pressed;
}

function makeSnapshot(gp) {
  return {
    direction: readDirection(gp),
    buttons: readButtons(gp),
    timestamp: performance.now(),
  };
}

function snapshotChanged(a, b) {
  if (!a || !b) return true;
  if (a.direction !== b.direction) return true;
  if (a.buttons.length !== b.buttons.length) return true;
  for (let i = 0; i < a.buttons.length; i++) {
    if (a.buttons[i] !== b.buttons[i]) return true;
  }
  return false;
}

// Detect newly pressed buttons (edge detection)
function getNewlyPressed(prev, curr) {
  if (!prev) return curr;
  return curr.filter(b => !prev.includes(b));
}

function pollLoop() {
  if (!polling) return;
  const gamepads = navigator.getGamepads();
  let gp = null;

  // Find our connected pad
  if (connectedPad !== null) {
    gp = gamepads[connectedPad];
  }
  if (!gp) {
    // Try to find any connected gamepad
    for (const pad of gamepads) {
      if (pad) {
        gp = pad;
        connectedPad = pad.index;
        break;
      }
    }
  }

  if (gp) {
    const snap = makeSnapshot(gp);
    const newlyPressed = getNewlyPressed(
      prevSnapshot ? prevSnapshot.buttons : [],
      snap.buttons
    );

    // Notify listeners with current state + newly pressed
    for (const fn of listeners) {
      fn({
        direction: snap.direction,
        buttons: snap.buttons,
        newlyPressed,
        timestamp: snap.timestamp,
      });
    }
    prevSnapshot = snap;
  }

  requestAnimationFrame(pollLoop);
}

export function init() {
  window.addEventListener('gamepadconnected', (e) => {
    connectedPad = e.gamepad.index;
    window.dispatchEvent(new CustomEvent('kumite-gamepad', {
      detail: { connected: true, name: e.gamepad.id }
    }));
  });

  window.addEventListener('gamepaddisconnected', (e) => {
    if (e.gamepad.index === connectedPad) {
      connectedPad = null;
      prevSnapshot = null;
    }
    window.dispatchEvent(new CustomEvent('kumite-gamepad', {
      detail: { connected: false, name: '' }
    }));
  });

  polling = true;
  requestAnimationFrame(pollLoop);
}

export function onInput(callback) {
  listeners.push(callback);
}

export function removeInput(callback) {
  listeners = listeners.filter(fn => fn !== callback);
}

export function isConnected() {
  return connectedPad !== null;
}
