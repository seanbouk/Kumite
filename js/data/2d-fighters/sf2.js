export default {
  id: 'sf2',
  name: 'STREET FIGHTER II',
  subtitle: 'THE WORLD WARRIOR',
  buttonLayout: 'capcom6',
  moves: [
    // === RYU ===
    { id: 'ryu_hadouken', name: 'Hadouken', character: 'Ryu', description: 'Quarter circle forward + Punch', inputDisplay: '↓ ↘ → + P', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'anyPunch', maxTime: 800 }, difficulty: 1 },
    { id: 'ryu_shoryuken', name: 'Shoryuken', character: 'Ryu', description: 'Dragon punch motion + Punch', inputDisplay: '→ ↓ ↘ + P', pattern: { type: 'sequence', directions: [6, 2, 3], button: 'anyPunch', maxTime: 800 }, difficulty: 2 },
    { id: 'ryu_tatsumaki', name: 'Tatsumaki Senpukyaku', character: 'Ryu', description: 'Quarter circle back + Kick', inputDisplay: '↓ ↙ ← + K', pattern: { type: 'sequence', directions: [2, 1, 4], button: 'anyKick', maxTime: 800 }, difficulty: 1 },

    // === KEN ===
    { id: 'ken_hadouken', name: 'Hadouken', character: 'Ken', description: 'Quarter circle forward + Punch', inputDisplay: '↓ ↘ → + P', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'anyPunch', maxTime: 800 }, difficulty: 1 },
    { id: 'ken_shoryuken', name: 'Shoryuken', character: 'Ken', description: 'Dragon punch motion + Punch', inputDisplay: '→ ↓ ↘ + P', pattern: { type: 'sequence', directions: [6, 2, 3], button: 'anyPunch', maxTime: 800 }, difficulty: 2 },
    { id: 'ken_tatsumaki', name: 'Tatsumaki Senpukyaku', character: 'Ken', description: 'Quarter circle back + Kick', inputDisplay: '↓ ↙ ← + K', pattern: { type: 'sequence', directions: [2, 1, 4], button: 'anyKick', maxTime: 800 }, difficulty: 1 },

    // === CHUN-LI ===
    { id: 'chunli_kikoken', name: 'Kikoken', character: 'Chun-Li', description: 'Charge back, then forward + Punch', inputDisplay: '← (hold) → + P', pattern: { type: 'charge', chargeDirection: 4, releaseDirection: 6, button: 'anyPunch', chargeTime: 400, maxTime: 1500 }, difficulty: 2 },
    { id: 'chunli_spinning_bird_kick', name: 'Spinning Bird Kick', character: 'Chun-Li', description: 'Charge down, then up + Kick', inputDisplay: '↓ (hold) ↑ + K', pattern: { type: 'charge', chargeDirection: 2, releaseDirection: 8, button: 'anyKick', chargeTime: 400, maxTime: 1500 }, difficulty: 2 },
    { id: 'chunli_lightning_legs', name: 'Hyakuretsukyaku', character: 'Chun-Li', description: 'Mash Kick rapidly', inputDisplay: 'K K K K K', pattern: { type: 'mash', button: 'anyKick', count: 5, maxTime: 1000 }, difficulty: 1 },

    // === GUILE ===
    { id: 'guile_sonic_boom', name: 'Sonic Boom', character: 'Guile', description: 'Charge back, then forward + Punch', inputDisplay: '← (hold) → + P', pattern: { type: 'charge', chargeDirection: 4, releaseDirection: 6, button: 'anyPunch', chargeTime: 400, maxTime: 1500 }, difficulty: 2 },
    { id: 'guile_flash_kick', name: 'Flash Kick', character: 'Guile', description: 'Charge down, then up + Kick', inputDisplay: '↓ (hold) ↑ + K', pattern: { type: 'charge', chargeDirection: 2, releaseDirection: 8, button: 'anyKick', chargeTime: 400, maxTime: 1500 }, difficulty: 2 },

    // === ZANGIEF ===
    { id: 'zangief_spd', name: 'Spinning Piledriver', character: 'Zangief', description: 'Full 360 rotation + Punch', inputDisplay: '360° + P', pattern: { type: 'rotation', cardinals: [2, 4, 6, 8], button: 'anyPunch', maxTime: 800 }, difficulty: 3 },
    { id: 'zangief_lariat', name: 'Double Lariat', character: 'Zangief', description: 'All 3 Punches simultaneously', inputDisplay: 'PPP', pattern: { type: 'mash', button: 'anyPunch', count: 1, maxTime: 300 }, difficulty: 1 },
    { id: 'zangief_banishing_flat', name: 'Banishing Flat', character: 'Zangief', description: 'Dragon punch motion + Punch', inputDisplay: '→ ↓ ↘ + P', pattern: { type: 'sequence', directions: [6, 2, 3], button: 'anyPunch', maxTime: 800 }, difficulty: 2 },

    // === DHALSIM ===
    { id: 'dhalsim_yoga_fire', name: 'Yoga Fire', character: 'Dhalsim', description: 'Quarter circle forward + Punch', inputDisplay: '↓ ↘ → + P', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'anyPunch', maxTime: 800 }, difficulty: 1 },
    { id: 'dhalsim_yoga_flame', name: 'Yoga Flame', character: 'Dhalsim', description: 'Half circle back + Punch', inputDisplay: '→ ↘ ↓ ↙ ← + P', pattern: { type: 'sequence', directions: [6, 3, 2, 1, 4], button: 'anyPunch', maxTime: 1000 }, difficulty: 2 },
    { id: 'dhalsim_yoga_blast', name: 'Yoga Blast', character: 'Dhalsim', description: 'Half circle back + Kick', inputDisplay: '→ ↘ ↓ ↙ ← + K', pattern: { type: 'sequence', directions: [6, 3, 2, 1, 4], button: 'anyKick', maxTime: 1000 }, difficulty: 2 },
    { id: 'dhalsim_yoga_teleport', name: 'Yoga Teleport', character: 'Dhalsim', description: 'Dragon punch motion + All Punches or Kicks', inputDisplay: '→ ↓ ↘ + PPP/KKK', pattern: { type: 'sequence', directions: [6, 2, 3], button: 'anyPunch', maxTime: 800 }, difficulty: 3 },

    // === E. HONDA ===
    { id: 'honda_hundred_hand', name: 'Hundred Hand Slap', character: 'E. Honda', description: 'Mash Punch rapidly', inputDisplay: 'P P P P P', pattern: { type: 'mash', button: 'anyPunch', count: 5, maxTime: 1000 }, difficulty: 1 },
    { id: 'honda_sumo_headbutt', name: 'Sumo Headbutt', character: 'E. Honda', description: 'Charge back, then forward + Punch', inputDisplay: '← (hold) → + P', pattern: { type: 'charge', chargeDirection: 4, releaseDirection: 6, button: 'anyPunch', chargeTime: 400, maxTime: 1500 }, difficulty: 2 },
    { id: 'honda_sumo_splash', name: 'Sumo Splash', character: 'E. Honda', description: 'Charge down, then up + Kick', inputDisplay: '↓ (hold) ↑ + K', pattern: { type: 'charge', chargeDirection: 2, releaseDirection: 8, button: 'anyKick', chargeTime: 400, maxTime: 1500 }, difficulty: 2 },
    { id: 'honda_oicho_throw', name: 'Oicho Throw', character: 'E. Honda', description: 'Half circle back + Punch', inputDisplay: '→ ↘ ↓ ↙ ← + P', pattern: { type: 'sequence', directions: [6, 3, 2, 1, 4], button: 'anyPunch', maxTime: 1000 }, difficulty: 2 },

    // === BLANKA ===
    { id: 'blanka_ball', name: 'Rolling Attack', character: 'Blanka', description: 'Charge back, then forward + Punch', inputDisplay: '← (hold) → + P', pattern: { type: 'charge', chargeDirection: 4, releaseDirection: 6, button: 'anyPunch', chargeTime: 400, maxTime: 1500 }, difficulty: 2 },
    { id: 'blanka_vertical_ball', name: 'Vertical Rolling', character: 'Blanka', description: 'Charge down, then up + Kick', inputDisplay: '↓ (hold) ↑ + K', pattern: { type: 'charge', chargeDirection: 2, releaseDirection: 8, button: 'anyKick', chargeTime: 400, maxTime: 1500 }, difficulty: 2 },
    { id: 'blanka_electricity', name: 'Electric Thunder', character: 'Blanka', description: 'Mash Punch rapidly', inputDisplay: 'P P P P P', pattern: { type: 'mash', button: 'anyPunch', count: 5, maxTime: 1000 }, difficulty: 1 },

    // === BALROG (BOXER) ===
    { id: 'balrog_dash_straight', name: 'Dash Straight', character: 'Balrog', description: 'Charge back, then forward + Punch', inputDisplay: '← (hold) → + P', pattern: { type: 'charge', chargeDirection: 4, releaseDirection: 6, button: 'anyPunch', chargeTime: 400, maxTime: 1500 }, difficulty: 2 },
    { id: 'balrog_dash_upper', name: 'Dash Upper', character: 'Balrog', description: 'Charge back, then forward + Kick', inputDisplay: '← (hold) → + K', pattern: { type: 'charge', chargeDirection: 4, releaseDirection: 6, button: 'anyKick', chargeTime: 400, maxTime: 1500 }, difficulty: 2 },
    { id: 'balrog_headbutt', name: 'Buffalo Headbutt', character: 'Balrog', description: 'Charge down, then up + Punch', inputDisplay: '↓ (hold) ↑ + P', pattern: { type: 'charge', chargeDirection: 2, releaseDirection: 8, button: 'anyPunch', chargeTime: 400, maxTime: 1500 }, difficulty: 2 },

    // === VEGA (CLAW) ===
    { id: 'vega_wall_dive', name: 'Flying Barcelona Attack', character: 'Vega', description: 'Charge down, then up + Kick', inputDisplay: '↓ (hold) ↑ + K', pattern: { type: 'charge', chargeDirection: 2, releaseDirection: 8, button: 'anyKick', chargeTime: 400, maxTime: 1500 }, difficulty: 2 },
    { id: 'vega_roll', name: 'Rolling Crystal Flash', character: 'Vega', description: 'Charge back, then forward + Punch', inputDisplay: '← (hold) → + P', pattern: { type: 'charge', chargeDirection: 4, releaseDirection: 6, button: 'anyPunch', chargeTime: 400, maxTime: 1500 }, difficulty: 2 },

    // === SAGAT ===
    { id: 'sagat_tiger_shot_high', name: 'High Tiger Shot', character: 'Sagat', description: 'Quarter circle forward + Punch', inputDisplay: '↓ ↘ → + P', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'anyPunch', maxTime: 800 }, difficulty: 1 },
    { id: 'sagat_tiger_shot_low', name: 'Low Tiger Shot', character: 'Sagat', description: 'Quarter circle forward + Kick', inputDisplay: '↓ ↘ → + K', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'anyKick', maxTime: 800 }, difficulty: 1 },
    { id: 'sagat_tiger_uppercut', name: 'Tiger Uppercut', character: 'Sagat', description: 'Dragon punch motion + Punch', inputDisplay: '→ ↓ ↘ + P', pattern: { type: 'sequence', directions: [6, 2, 3], button: 'anyPunch', maxTime: 800 }, difficulty: 2 },
    { id: 'sagat_tiger_knee', name: 'Tiger Knee', character: 'Sagat', description: 'Dragon punch motion + Kick', inputDisplay: '→ ↓ ↘ + K', pattern: { type: 'sequence', directions: [6, 2, 3], button: 'anyKick', maxTime: 800 }, difficulty: 2 },

    // === M. BISON (DICTATOR) ===
    { id: 'bison_psycho_crusher', name: 'Psycho Crusher', character: 'M. Bison', description: 'Charge back, then forward + Punch', inputDisplay: '← (hold) → + P', pattern: { type: 'charge', chargeDirection: 4, releaseDirection: 6, button: 'anyPunch', chargeTime: 400, maxTime: 1500 }, difficulty: 2 },
    { id: 'bison_scissors_kick', name: 'Scissors Kick', character: 'M. Bison', description: 'Charge back, then forward + Kick', inputDisplay: '← (hold) → + K', pattern: { type: 'charge', chargeDirection: 4, releaseDirection: 6, button: 'anyKick', chargeTime: 400, maxTime: 1500 }, difficulty: 2 },
    { id: 'bison_head_stomp', name: 'Head Press', character: 'M. Bison', description: 'Charge down, then up + Kick', inputDisplay: '↓ (hold) ↑ + K', pattern: { type: 'charge', chargeDirection: 2, releaseDirection: 8, button: 'anyKick', chargeTime: 400, maxTime: 1500 }, difficulty: 2 },
    { id: 'bison_devil_reverse', name: 'Devil Reverse', character: 'M. Bison', description: 'Charge down, then up + Punch', inputDisplay: '↓ (hold) ↑ + P', pattern: { type: 'charge', chargeDirection: 2, releaseDirection: 8, button: 'anyPunch', chargeTime: 400, maxTime: 1500 }, difficulty: 2 },
  ],
};
