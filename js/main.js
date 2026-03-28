import * as gamepad from './gamepad.js';
import * as quiz from './quiz.js';
import { showScreen, setGamepadStatus, setTitlePrompt, buildGameGrid, setSelectedCard } from './ui.js';

import sf2 from './data/sf2.js';
import mk3 from './data/mk3.js';
import ffs from './data/fatal-fury.js';

const GAMES = [sf2, mk3, ffs];

let currentScreen = 'screen-title';
let selectedGameIndex = 0;
let gamepadConnected = false;

// --- SCREEN ROUTING ---
function goTo(screenId) {
  currentScreen = screenId;
  showScreen(screenId);
}

// --- TITLE SCREEN ---
function onTitleInput(snapshot) {
  if (!gamepadConnected) return;
  // Any button press goes to select screen
  if (snapshot.newlyPressed.length > 0) {
    goTo('screen-select');
    setSelectedCard(selectedGameIndex);
  }
}

// --- SELECT SCREEN ---
function onSelectInput(snapshot) {
  if (currentScreen !== 'screen-select') return;

  // Navigate with d-pad left/right
  if (snapshot.newlyPressed.length === 0 && snapshot.direction !== 5) {
    // Only trigger on direction change (handled by buffer, but we track here too)
  }

  // Accept with any face button
  if (snapshot.newlyPressed.some(b => ['lp', 'mp', 'hp', 'lk', 'mk', 'hk'].includes(b))) {
    startGame(GAMES[selectedGameIndex]);
  }
}

// Track direction changes for menu navigation
let prevMenuDir = 5;
function onMenuNav(snapshot) {
  if (currentScreen !== 'screen-select') {
    prevMenuDir = 5;
    return;
  }

  const dir = snapshot.direction;
  if (dir !== prevMenuDir) {
    if (dir === 6 && prevMenuDir !== 6) {
      // Right
      selectedGameIndex = (selectedGameIndex + 1) % GAMES.length;
      setSelectedCard(selectedGameIndex);
    } else if (dir === 4 && prevMenuDir !== 4) {
      // Left
      selectedGameIndex = (selectedGameIndex - 1 + GAMES.length) % GAMES.length;
      setSelectedCard(selectedGameIndex);
    }
    prevMenuDir = dir;
  }
}

function startGame(game) {
  goTo('screen-quiz');
  quiz.start(game, gamepad);
}

// --- BACK BUTTON ---
document.getElementById('btn-back').addEventListener('click', () => {
  quiz.stop(gamepad);
  goTo('screen-select');
  setSelectedCard(selectedGameIndex);
});

// --- GAMEPAD EVENTS ---
window.addEventListener('kumite-gamepad', (e) => {
  const { connected, name } = e.detail;
  gamepadConnected = connected;
  setGamepadStatus(connected, name);

  if (connected && currentScreen === 'screen-title') {
    setTitlePrompt('PRESS ANY BUTTON');
  } else if (!connected && currentScreen === 'screen-title') {
    setTitlePrompt('CONNECT GAMEPAD TO START');
  }
});

// --- INPUT ROUTING ---
gamepad.onInput((snapshot) => {
  if (currentScreen === 'screen-title') {
    onTitleInput(snapshot);
  } else if (currentScreen === 'screen-select') {
    onSelectInput(snapshot);
    onMenuNav(snapshot);
  }
  // Quiz screen handles its own input via quiz.js
});

// --- INIT ---
function init() {
  buildGameGrid(GAMES, (game) => {
    const idx = GAMES.indexOf(game);
    if (idx >= 0) selectedGameIndex = idx;
    startGame(game);
  });

  setSelectedCard(0);
  gamepad.init();
  goTo('screen-title');

  // Check if gamepad already connected
  const pads = navigator.getGamepads();
  for (const pad of pads) {
    if (pad) {
      gamepadConnected = true;
      setGamepadStatus(true, pad.id);
      setTitlePrompt('PRESS ANY BUTTON');
      break;
    }
  }
}

init();
