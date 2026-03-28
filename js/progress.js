const PREFIX = 'kumite_';
const VERSION = 1;

export function save(gameId, data) {
  const payload = {
    version: VERSION,
    scores: data.scores,
    activeCount: data.activeCount,
    lastPlayed: Date.now(),
  };
  localStorage.setItem(PREFIX + gameId, JSON.stringify(payload));
}

export function load(gameId) {
  const raw = localStorage.getItem(PREFIX + gameId);
  if (!raw) return null;
  try {
    const data = JSON.parse(raw);
    if (data.version !== VERSION) return null;
    return data;
  } catch {
    return null;
  }
}

export function reset(gameId) {
  localStorage.removeItem(PREFIX + gameId);
}
