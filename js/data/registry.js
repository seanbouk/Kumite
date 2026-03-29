// Central game registry — metadata loads immediately, move data lazy-loads on selection
export const CATEGORIES = [
  { id: 'all', label: 'ALL' },
  { id: '2d', label: '2D FIGHTERS' },
  { id: '3d', label: '3D FIGHTERS' },
  { id: 'platform', label: 'PLATFORM' },
];

export const GAME_REGISTRY = [
  // --- 2D FIGHTERS ---
  { id: 'sf2', name: 'STREET FIGHTER II', subtitle: 'THE WORLD WARRIOR', category: '2d', buttonLayout: 'capcom6', module: () => import('./2d-fighters/sf2.js') },
  { id: 'sf5', name: 'STREET FIGHTER V', subtitle: 'CHAMPION EDITION', category: '2d', buttonLayout: 'capcom6', module: () => import('./2d-fighters/sf5.js') },
  { id: 'sf6', name: 'STREET FIGHTER 6', subtitle: 'CAPCOM', category: '2d', buttonLayout: 'capcom6', module: () => import('./2d-fighters/sf6.js') },
  { id: 'mk2', name: 'MORTAL KOMBAT II', subtitle: 'MIDWAY', category: '2d', buttonLayout: 'mk', module: () => import('./2d-fighters/mk2.js') },
  { id: 'mk11', name: 'MORTAL KOMBAT 11', subtitle: 'NETHERREALM', category: '2d', buttonLayout: 'mk', module: () => import('./2d-fighters/mk11.js') },
  { id: 'mk1', name: 'MORTAL KOMBAT 1', subtitle: '2023', category: '2d', buttonLayout: 'mk', module: () => import('./2d-fighters/mk1.js') },
  { id: 'ggs', name: 'GUILTY GEAR STRIVE', subtitle: 'ARC SYSTEM WORKS', category: '2d', buttonLayout: 'anime6', module: () => import('./2d-fighters/ggs.js') },
  { id: 'kof15', name: 'KING OF FIGHTERS XV', subtitle: 'SNK', category: '2d', buttonLayout: 'neogeo4', module: () => import('./2d-fighters/kof15.js') },
  { id: 'dbfz', name: 'DRAGON BALL FIGHTERZ', subtitle: 'ARC SYSTEM WORKS', category: '2d', buttonLayout: 'anime6', module: () => import('./2d-fighters/dbfz.js') },
  { id: 'gbvsr', name: 'GRANBLUE FANTASY VS RISING', subtitle: 'ARC SYSTEM WORKS', category: '2d', buttonLayout: 'anime6', module: () => import('./2d-fighters/gbvsr.js') },
  { id: 'mbtl', name: 'MELTY BLOOD TYPE LUMINA', subtitle: 'FRENCH-BREAD', category: '2d', buttonLayout: 'anime6', module: () => import('./2d-fighters/mbtl.js') },
  { id: 'bbcf', name: 'BLAZBLUE CENTRAL FICTION', subtitle: 'ARC SYSTEM WORKS', category: '2d', buttonLayout: 'anime6', module: () => import('./2d-fighters/bbcf.js') },
  { id: 'p4au', name: 'PERSONA 4 ARENA ULTIMAX', subtitle: 'ARC SYSTEM WORKS', category: '2d', buttonLayout: 'anime6', module: () => import('./2d-fighters/p4au.js') },
  { id: 'inj2', name: 'INJUSTICE 2', subtitle: 'NETHERREALM', category: '2d', buttonLayout: 'mk', module: () => import('./2d-fighters/inj2.js') },
  { id: 'ffs', name: 'FATAL FURY SPECIAL', subtitle: 'SNK NEO GEO', category: '2d', buttonLayout: 'neogeo4', module: () => import('./2d-fighters/fatal-fury.js') },
  { id: 'mk3', name: 'MORTAL KOMBAT 3', subtitle: 'ULTIMATE', category: '2d', buttonLayout: 'mk', module: () => import('./2d-fighters/mk3.js') },

  // --- 3D FIGHTERS ---
  { id: 'tekken3', name: 'TEKKEN 3', subtitle: 'NAMCO', category: '3d', buttonLayout: 'tekken4', module: () => import('./tekken/tekken3.js') },
  { id: 'tekken7', name: 'TEKKEN 7', subtitle: 'BANDAI NAMCO', category: '3d', buttonLayout: 'tekken4', module: () => import('./tekken/tekken7.js') },
  { id: 'tekken8', name: 'TEKKEN 8', subtitle: 'BANDAI NAMCO', category: '3d', buttonLayout: 'tekken4', module: () => import('./tekken/tekken8.js') },
  { id: 'sc6', name: 'SOULCALIBUR VI', subtitle: 'BANDAI NAMCO', category: '3d', buttonLayout: 'sc4', module: () => import('./3d-fighters/sc6.js') },
  { id: 'vf5', name: 'VIRTUA FIGHTER 5', subtitle: 'ULTIMATE SHOWDOWN', category: '3d', buttonLayout: 'vf3', module: () => import('./3d-fighters/vf5.js') },

  // --- PLATFORM FIGHTERS ---
  { id: 'ssbu', name: 'SMASH BROS ULTIMATE', subtitle: 'NINTENDO', category: 'platform', buttonLayout: 'smash', module: () => import('./platform/ssbu.js') },
];

// Load game data by ID
export async function loadGameData(gameId) {
  const entry = GAME_REGISTRY.find(g => g.id === gameId);
  if (!entry) return null;
  const mod = await entry.module();
  return mod.default;
}
