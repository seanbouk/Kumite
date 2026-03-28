import InputBuffer from './input-buffer.js';
import { selectMove, recordCorrect, recordWrong, shouldExpand, computeProgress } from './scoring.js';
import { save, load } from './progress.js';
import {
  setMoveDisplay, clearMoveDisplay, updateInputDisplay,
  setTimerBar, resetTimerBar, flashResult, dismissWrongResult,
  updateProgressBar, updateStats,
} from './ui.js';

const COUNTDOWN_SECONDS = 8;
const INITIAL_ACTIVE = 3;

let gameData = null;
let scores = {};
let activeCount = INITIAL_ACTIVE;
let streak = 0;
let currentMove = null;
let state = 'idle'; // idle | waiting | judging | result-correct | result-wrong
let inputBuffer = new InputBuffer();
let timerStart = 0;
let rafId = null;
let inputHandler = null;

export function start(game, gamepadModule) {
  gameData = game;
  inputBuffer = new InputBuffer();
  streak = 0;

  // Load saved progress
  const saved = load(game.id);
  if (saved) {
    scores = saved.scores;
    activeCount = saved.activeCount;
  } else {
    scores = {};
    activeCount = INITIAL_ACTIVE;
  }

  // Cap activeCount to available moves
  activeCount = Math.min(activeCount, game.moves.length);

  // Set up input listener
  if (inputHandler) {
    gamepadModule.removeInput(inputHandler);
  }
  inputHandler = (snapshot) => {
    inputBuffer.push(snapshot);
    updateInputDisplay(snapshot.direction, snapshot.buttons);

    if (state === 'waiting' && currentMove) {
      checkInput();
    } else if (state === 'result-wrong' && snapshot.newlyPressed.length > 0) {
      dismissWrongResult();
    }
  };
  gamepadModule.onInput(inputHandler);

  updateUI();
  nextRound();
}

export function stop(gamepadModule) {
  state = 'idle';
  if (rafId) cancelAnimationFrame(rafId);
  if (inputHandler) {
    gamepadModule.removeInput(inputHandler);
    inputHandler = null;
  }
}

function getActiveMoves() {
  // Sort by difficulty, take first activeCount
  const sorted = [...gameData.moves].sort((a, b) => a.difficulty - b.difficulty);
  return sorted.slice(0, activeCount);
}

function nextRound() {
  const active = getActiveMoves();
  currentMove = selectMove(active, scores);
  inputBuffer.clear();

  // Show character name + move name — no input notation (user should know it)
  setMoveDisplay(gameData.name, currentMove.name, '', currentMove.character);
  resetTimerBar();

  state = 'waiting';
  timerStart = performance.now();
  if (rafId) cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(waitLoop);
}

function waitLoop(now) {
  if (state !== 'waiting') return;

  const elapsed = now - timerStart;
  const fraction = 1 - (elapsed / (COUNTDOWN_SECONDS * 1000));
  setTimerBar(fraction);

  if (fraction <= 0) {
    onWrong();
    return;
  }

  rafId = requestAnimationFrame(waitLoop);
}

function checkInput() {
  if (!currentMove || state !== 'waiting') return;

  // Handle mash-type moves
  if (currentMove.pattern.type === 'mash') {
    if (checkMash(currentMove.pattern)) {
      onCorrect();
    }
    return;
  }

  if (inputBuffer.match(currentMove.pattern)) {
    onCorrect();
  }
}

// Mash detection: count recent button presses
let mashCount = 0;
let mashLastTime = 0;

function checkMash(pattern) {
  const buf = inputBuffer.buffer;
  const now = performance.now();
  let count = 0;

  for (let i = buf.length - 1; i >= 0; i--) {
    if (now - buf[i].time > (pattern.maxTime || 1000)) break;
    if (buf[i].buttons.length > 0 && inputBuffer._buttonMatches(buf[i].buttons, pattern.button)) {
      count++;
    }
  }

  return count >= (pattern.count || 5);
}

async function onCorrect() {
  state = 'judging';
  if (rafId) cancelAnimationFrame(rafId);

  const newScore = recordCorrect(currentMove.id, scores);
  streak++;

  // Check if we should expand the pool
  if (shouldExpand(scores) && activeCount < gameData.moves.length) {
    activeCount++;
  }

  saveProgress();
  updateUI();

  state = 'result-correct';
  await flashResult('correct', currentMove.inputDisplay);

  state = 'idle';
  nextRound();
}

async function onWrong() {
  state = 'judging';
  if (rafId) cancelAnimationFrame(rafId);

  recordWrong(currentMove.id, scores);
  streak = 0;

  saveProgress();
  updateUI();

  state = 'result-wrong';
  await flashResult('wrong', currentMove.inputDisplay);

  state = 'idle';
  nextRound();
}

function saveProgress() {
  save(gameData.id, { scores, activeCount });
}

function updateUI() {
  const progress = computeProgress(scores, gameData.moves.length);
  updateProgressBar(progress);
  updateStats(activeCount, streak);
}

export function getState() {
  return { state, gameData, scores, activeCount, streak };
}
