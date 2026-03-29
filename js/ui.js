const DIRECTION_ARROWS = {
  1: '↙', 2: '↓', 3: '↘',
  4: '←', 5: '·', 6: '→',
  7: '↖', 8: '↑', 9: '↗',
};

export function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(screenId);
  if (target) target.classList.add('active');
}

export function setGamepadStatus(connected, name) {
  const el = document.getElementById('gamepad-status');
  const text = document.getElementById('gamepad-text');
  el.classList.toggle('connected', connected);
  el.classList.toggle('disconnected', !connected);
  text.textContent = connected ? name || 'GAMEPAD READY' : 'NO GAMEPAD';
}

export function setMoveDisplay(gameName, moveName, inputDisplay, character) {
  document.getElementById('quiz-game-name').textContent = gameName;
  document.getElementById('quiz-move-name').textContent = moveName;
  document.getElementById('quiz-move-input').textContent = inputDisplay || '';
  const charEl = document.getElementById('quiz-character-name');
  if (charEl) charEl.textContent = character || '';
}

export function clearMoveDisplay() {
  document.getElementById('quiz-move-name').textContent = '';
  document.getElementById('quiz-move-input').textContent = '';
}

export function updateInputDisplay(direction, buttons) {
  const dirEl = document.getElementById('quiz-dir-display');
  const btnEl = document.getElementById('quiz-btn-display');
  dirEl.textContent = DIRECTION_ARROWS[direction] || '·';
  btnEl.textContent = buttons.length ? buttons.join(' ') : '';
}

export function setTimerBar(fraction) {
  const fill = document.getElementById('quiz-timer-fill');
  fill.style.width = `${Math.max(0, fraction * 100)}%`;
  fill.style.transitionDuration = '0.1s';
  fill.classList.remove('warning', 'danger');
  if (fraction < 0.25) fill.classList.add('danger');
  else if (fraction < 0.5) fill.classList.add('warning');
}

export function resetTimerBar() {
  const fill = document.getElementById('quiz-timer-fill');
  fill.style.transitionDuration = '0s';
  fill.style.width = '100%';
  fill.classList.remove('warning', 'danger');
}

let _wrongDismissResolve = null;

function clearResult() {
  const resultEl = document.getElementById('quiz-result-text');
  const hintEl = document.getElementById('quiz-result-hint');
  resultEl.textContent = '';
  resultEl.className = '';
  hintEl.textContent = '';
  hintEl.className = '';
}

export function flashResult(type, inputDisplay) {
  const resultEl = document.getElementById('quiz-result-text');
  const hintEl = document.getElementById('quiz-result-hint');
  const moveInput = document.getElementById('quiz-move-input');

  if (type === 'correct') {
    resultEl.textContent = 'PERFECT!';
    resultEl.className = 'correct';
    moveInput.textContent = inputDisplay || '';
    hintEl.textContent = '';
    hintEl.className = '';
    return new Promise(resolve => {
      setTimeout(() => {
        clearResult();
        resolve();
      }, 800);
    });
  } else {
    resultEl.textContent = "TIME'S UP";
    resultEl.className = 'wrong';
    moveInput.textContent = inputDisplay || '';
    hintEl.textContent = 'PRESS ANY BUTTON';
    hintEl.className = 'blink';
    return new Promise(resolve => {
      _wrongDismissResolve = () => {
        _wrongDismissResolve = null;
        clearResult();
        resolve();
      };
    });
  }
}

export function dismissWrongResult() {
  if (_wrongDismissResolve) _wrongDismissResolve();
}

export function updateProgressBar(fraction) {
  const fill = document.getElementById('progress-bar-fill');
  const value = document.getElementById('progress-bar-value');
  fill.style.width = `${Math.round(fraction * 100)}%`;
  value.textContent = `${Math.round(fraction * 100)}%`;
}

export function updateStats(activeCount, streak) {
  document.getElementById('stat-active').textContent = `MOVES: ${activeCount}`;
  document.getElementById('stat-streak').textContent = `STREAK: ${streak}`;
}

export function setTitlePrompt(text) {
  const el = document.querySelector('.title-prompt');
  if (el) el.textContent = text;
}

export function buildCategoryTabs(categories, activeId, onSelect) {
  const container = document.getElementById('category-tabs');
  if (!container) return;
  container.innerHTML = '';
  categories.forEach(cat => {
    const tab = document.createElement('button');
    tab.className = 'category-tab' + (cat.id === activeId ? ' active' : '');
    tab.textContent = cat.label;
    tab.addEventListener('click', () => onSelect(cat.id));
    container.appendChild(tab);
  });
}

export function buildGameGrid(games, onSelect) {
  const grid = document.getElementById('game-grid');
  grid.innerHTML = '';
  games.forEach((game, index) => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.dataset.index = index;
    // Registry entries don't have .moves — show subtitle only
    card.innerHTML = `
      <div class="game-card-title">${game.name}</div>
      <div class="game-card-sub">${game.subtitle || ''}</div>
    `;
    card.addEventListener('click', () => onSelect(game));
    grid.appendChild(card);
  });
}

export function setSelectedCard(index) {
  document.querySelectorAll('.game-card').forEach((c, i) => {
    c.classList.toggle('selected', i === index);
  });
}
