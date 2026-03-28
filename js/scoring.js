const MAX_REROLLS = 10;

export function selectMove(activeMoves, scores, lastMoveId) {
  for (let attempt = 0; attempt < MAX_REROLLS; attempt++) {
    const idx = Math.floor(Math.random() * activeMoves.length);
    const move = activeMoves[idx];

    // Never pick the same move twice in a row (if there's more than one option)
    if (move.id === lastMoveId && activeMoves.length > 1) continue;

    const score = scores[move.id] ?? 0.5;

    // score = probability we keep this pick
    // Low score (mastered) → likely skip. High score (struggling) → likely keep.
    if (Math.random() < score) {
      return move;
    }
  }

  // Fallback: pick the highest-score (hardest) move, excluding last move if possible
  const candidates = activeMoves.length > 1
    ? activeMoves.filter(m => m.id !== lastMoveId)
    : activeMoves;
  return candidates.reduce((worst, m) =>
    (scores[m.id] ?? 0.5) > (scores[worst.id] ?? 0.5) ? m : worst
  );
}

export function recordCorrect(moveId, scores) {
  const current = scores[moveId] ?? 0.5;
  scores[moveId] = current / 2;
  return scores[moveId];
}

export function recordWrong(moveId, scores) {
  const current = scores[moveId] ?? 0.5;
  scores[moveId] = current + (1 - current) / 2;
  return scores[moveId];
}

export function shouldExpand(scores) {
  return Object.values(scores).some(s => s < 0.1);
}

export function computeProgress(scores, totalMoves) {
  if (totalMoves === 0) return 0;
  let sum = 0;
  for (const s of Object.values(scores)) {
    sum += (1 - s);
  }
  return sum / totalMoves;
}
