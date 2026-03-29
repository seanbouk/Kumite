import * as gamepad from './gamepad.js';
import * as quiz from './quiz.js';
import { showScreen, setGamepadStatus, setTitlePrompt, buildGameGrid, setSelectedCard, buildCategoryTabs } from './ui.js';
import { GAME_REGISTRY, CATEGORIES, loadGameData } from './data/registry.js';

let currentScreen = 'screen-title';
let selectedGameIndex = 0;
let selectedCategory = 'all';
let filteredGames = [...GAME_REGISTRY];
let gamepadConnected = false;

function getFilteredGames() {
  if (selectedCategory === 'all') return [...GAME_REGISTRY];
  return GAME_REGISTRY.filter(g => g.category === selectedCategory);
}

function refreshGameGrid() {
  filteredGames = getFilteredGames();
  selectedGameIndex = 0;
  buildGameGrid(filteredGames, onGameClick);
  if (filteredGames.length > 0) setSelectedCard(0);
}

function onGameClick(game) {
  const idx = filteredGames.indexOf(game);
  if (idx >= 0) selectedGameIndex = idx;
  startGame(game);
}

function onCategorySelect(catId) {
  selectedCategory = catId;
  refreshGameGrid();
}

// --- SCREEN ROUTING ---
function goTo(screenId) {
  currentScreen = screenId;
  showScreen(screenId);
}

// --- TITLE SCREEN ---
function onTitleInput(snapshot) {
  if (!gamepadConnected) return;
  if (snapshot.newlyPressed.length > 0) {
    goTo('screen-select');
    setSelectedCard(selectedGameIndex);
  }
}

// --- SELECT SCREEN ---
function onSelectInput(snapshot) {
  if (currentScreen !== 'screen-select') return;
  if (snapshot.newlyPressed.some(b => !['block', 'shield'].includes(b))) {
    startGame(filteredGames[selectedGameIndex]);
  }
}

let prevMenuDir = 5;
function onMenuNav(snapshot) {
  if (currentScreen !== 'screen-select') {
    prevMenuDir = 5;
    return;
  }

  const dir = snapshot.direction;
  if (dir !== prevMenuDir) {
    if (dir === 6 && prevMenuDir !== 6) {
      selectedGameIndex = (selectedGameIndex + 1) % filteredGames.length;
      setSelectedCard(selectedGameIndex);
    } else if (dir === 4 && prevMenuDir !== 4) {
      selectedGameIndex = (selectedGameIndex - 1 + filteredGames.length) % filteredGames.length;
      setSelectedCard(selectedGameIndex);
    } else if (dir === 8 && prevMenuDir !== 8) {
      // Up: previous category
      const cats = CATEGORIES;
      const idx = cats.findIndex(c => c.id === selectedCategory);
      const newIdx = (idx - 1 + cats.length) % cats.length;
      onCategorySelect(cats[newIdx].id);
      buildCategoryTabs(CATEGORIES, selectedCategory, onCategorySelect);
    } else if (dir === 2 && prevMenuDir !== 2) {
      // Down: next category
      const cats = CATEGORIES;
      const idx = cats.findIndex(c => c.id === selectedCategory);
      const newIdx = (idx + 1) % cats.length;
      onCategorySelect(cats[newIdx].id);
      buildCategoryTabs(CATEGORIES, selectedCategory, onCategorySelect);
    }
    prevMenuDir = dir;
  }
}

async function startGame(registryEntry) {
  if (!registryEntry) return;
  goTo('screen-quiz');
  const gameData = await loadGameData(registryEntry.id);
  if (gameData) {
    quiz.start(gameData, gamepad);
  }
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
});

// --- INIT ---
function init() {
  buildCategoryTabs(CATEGORIES, selectedCategory, onCategorySelect);
  refreshGameGrid();
  gamepad.init();
  goTo('screen-title');

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
