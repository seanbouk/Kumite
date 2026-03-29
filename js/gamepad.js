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
  const dx = Math.abs(x) > DEADZONE ? Math.sign(x) : 0;
  const dy = Math.abs(y) > DEADZONE ? Math.sign(y) : 0;
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
  if (!up && !down && !left && !right) return null;
  const dy = (down ? 1 : 0) - (up ? 1 : 0);
  const dx = (right ? 1 : 0) - (left ? 1 : 0);
  return axisToDirection(dx, dy);
}

function readDirection(gp) {
  const dpad = dpadToDirection(gp);
  if (dpad !== null) return dpad;
  return axisToDirection(gp.axes[0] || 0, gp.axes[1] || 0);
}

// ---- BUTTON LAYOUTS ----
// Face: 0=A/Cross, 1=B/Circle, 2=X/Square, 3=Y/Triangle
// Shoulders: 4=LB, 5=RB, 6=LT, 7=RT

const LAYOUTS = {
  capcom6: {
    buttons: { 2: 'lp', 3: 'mp', 5: 'hp', 0: 'lk', 1: 'mk', 4: 'hk' },
    macros: {},
  },
  mk: {
    buttons: { 2: 'lp', 3: 'hp', 0: 'lk', 1: 'hk', 6: 'block', 5: 'throw' },
    macros: {},
  },
  neogeo4: {
    buttons: { 2: 'lp', 3: 'mp', 0: 'hp', 1: 'hk' },
    macros: {},
  },
  anime6: {
    // L, M, H, S (special/unique) — used by DBFZ, GBVSR, MBTL, P4AU
    buttons: { 2: 'lp', 3: 'mp', 5: 'hp', 0: 'sp' },
    macros: { 4: ['lp', 'mp'] }, // LB = L+M (common macro)
  },
  tekken4: {
    // 1=LP, 2=RP, 3=LK, 4=RK
    buttons: { 2: 'lp', 3: 'rp', 0: 'lk', 1: 'rk' },
    macros: { 4: ['lp', 'rp'], 5: ['lk', 'rk'], 6: ['lp', 'lk'], 7: ['rp', 'rk'] },
  },
  sc4: {
    // A=horizontal, B=vertical, K=kick, G=guard
    buttons: { 2: 'hA', 3: 'vB', 0: 'K', 1: 'G' },
    macros: { 4: ['hA', 'vB'], 5: ['vB', 'K'], 6: ['hA', 'K'] },
  },
  vf3: {
    // P=punch, K=kick, G=guard
    buttons: { 2: 'P', 0: 'K', 3: 'G' },
    macros: { 4: ['P', 'K'], 5: ['P', 'G'], 6: ['K', 'G'] },
  },
  smash: {
    buttons: { 2: 'attack', 0: 'attack', 3: 'special', 1: 'special', 4: 'shield', 5: 'grab' },
    macros: {},
  },
};

let activeLayout = LAYOUTS.capcom6;

export function setButtonLayout(layoutId) {
  activeLayout = LAYOUTS[layoutId] || LAYOUTS.capcom6;
}

function readButtons(gp) {
  const pressed = [];
  const { buttons, macros } = activeLayout;

  // Direct button mappings
  for (const [idx, name] of Object.entries(buttons)) {
    if (gp.buttons[Number(idx)]?.pressed && !pressed.includes(name)) {
      pressed.push(name);
    }
  }

  // Macro expansions (e.g., Tekken LB = 1+2 -> ['lp', 'rp'])
  for (const [idx, components] of Object.entries(macros)) {
    if (gp.buttons[Number(idx)]?.pressed) {
      for (const c of components) {
        if (!pressed.includes(c)) pressed.push(c);
      }
    }
  }

  return pressed;
}

function makeSnapshot(gp) {
  return {
    direction: readDirection(gp),
    buttons: readButtons(gp),
    rawLB: !!gp.buttons[4]?.pressed,
    rawRB: !!gp.buttons[5]?.pressed,
    timestamp: performance.now(),
  };
}

function getNewlyPressed(prev, curr) {
  if (!prev) return curr;
  return curr.filter(b => !prev.includes(b));
}

function pollLoop() {
  if (!polling) return;
  const gamepads = navigator.getGamepads();
  let gp = null;

  if (connectedPad !== null) {
    gp = gamepads[connectedPad];
  }
  if (!gp) {
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

    // Raw bumper edge detection (layout-independent, for menu nav)
    const newlyLB = snap.rawLB && !(prevSnapshot?.rawLB);
    const newlyRB = snap.rawRB && !(prevSnapshot?.rawRB);

    for (const fn of listeners) {
      fn({
        direction: snap.direction,
        buttons: snap.buttons,
        newlyPressed,
        newlyLB,
        newlyRB,
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
