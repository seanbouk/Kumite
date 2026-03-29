export default {
  id: 'sc6',
  name: 'SOULCALIBUR VI',
  subtitle: 'BANDAI NAMCO',
  buttonLayout: 'sc4',
  moves: [
    // --- Mitsurugi ---
    { id: 'mitsu_6a', name: 'Rushing Slash', character: 'Mitsurugi', description: 'Fast mid horizontal', inputDisplay: '6A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'mitsu_3b', name: 'Shin Kick Slice', character: 'Mitsurugi', description: 'Mid vertical launcher', inputDisplay: '3B', pattern: { type: 'press', direction: 3, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'mitsu_2a', name: 'Low Slash', character: 'Mitsurugi', description: 'Quick low horizontal', inputDisplay: '2A', pattern: { type: 'press', direction: 2, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'mitsu_4b', name: 'Reverse Strike', character: 'Mitsurugi', description: 'Step-back vertical', inputDisplay: '4B', pattern: { type: 'press', direction: 4, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'mitsu_1k', name: 'Low Kick', character: 'Mitsurugi', description: 'Low sweep kick', inputDisplay: '1K', pattern: { type: 'press', direction: 1, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'mitsu_aab', name: 'Double Horizontal to Vertical', character: 'Mitsurugi', description: 'A,A,B string', inputDisplay: 'A,A,B', pattern: { type: 'buttonString', buttons: ['hA', 'hA', 'vB'], maxTime: 600 }, difficulty: 2 },
    { id: 'mitsu_236b', name: 'Mist', character: 'Mitsurugi', description: 'QCF stance transition', inputDisplay: '↓ ↘ → B', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'vB', maxTime: 800 }, difficulty: 2 },
    { id: 'mitsu_66a', name: 'Advancing Slash', character: 'Mitsurugi', description: 'Running horizontal attack', inputDisplay: '66A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },

    // --- Sophitia ---
    { id: 'soph_6a', name: 'Olympus Cannon', character: 'Sophitia', description: 'Mid horizontal elbow', inputDisplay: '6A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'soph_3b', name: 'Angel Strike', character: 'Sophitia', description: 'Advancing vertical slash', inputDisplay: '3B', pattern: { type: 'press', direction: 3, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'soph_1a', name: 'Low Horizon', character: 'Sophitia', description: 'Low horizontal from crouch', inputDisplay: '1A', pattern: { type: 'press', direction: 1, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'soph_4b', name: 'Aegis Thrust', character: 'Sophitia', description: 'Retreating mid vertical', inputDisplay: '4B', pattern: { type: 'press', direction: 4, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'soph_236b', name: 'Angel Step', character: 'Sophitia', description: 'Advancing stance transition', inputDisplay: '↓ ↘ → B', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'vB', maxTime: 800 }, difficulty: 2 },
    { id: 'soph_aab', name: 'Divine Combo', character: 'Sophitia', description: 'A,A,B string', inputDisplay: 'A,A,B', pattern: { type: 'buttonString', buttons: ['hA', 'hA', 'vB'], maxTime: 600 }, difficulty: 2 },
    { id: 'soph_66b', name: 'Holy Smash', character: 'Sophitia', description: 'Running vertical slash', inputDisplay: '66B', pattern: { type: 'press', direction: 6, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },

    // --- Kilik ---
    { id: 'kilik_6a', name: 'Upper Swing', character: 'Kilik', description: 'Mid horizontal staff swing', inputDisplay: '6A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'kilik_3b', name: 'Thrusting Strike', character: 'Kilik', description: 'Mid vertical thrust', inputDisplay: '3B', pattern: { type: 'press', direction: 3, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'kilik_2a', name: 'Low Sweep', character: 'Kilik', description: 'Low horizontal sweep', inputDisplay: '2A', pattern: { type: 'press', direction: 2, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'kilik_1k', name: 'Leg Sweep', character: 'Kilik', description: 'Low kick sweep', inputDisplay: '1K', pattern: { type: 'press', direction: 1, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'kilik_bbb', name: 'Monument', character: 'Kilik', description: 'B,B,B string', inputDisplay: 'B,B,B', pattern: { type: 'buttonString', buttons: ['vB', 'vB', 'vB'], maxTime: 600 }, difficulty: 2 },
    { id: 'kilik_44a', name: 'Retreating Spin', character: 'Kilik', description: 'Step-back horizontal', inputDisplay: '44A', pattern: { type: 'press', direction: 4, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'kilik_236b', name: 'Bo Rush', character: 'Kilik', description: 'Advancing staff combo', inputDisplay: '↓ ↘ → B', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'vB', maxTime: 800 }, difficulty: 2 },

    // --- Xianghua ---
    { id: 'xiang_6a', name: 'Mei Hua', character: 'Xianghua', description: 'Forward horizontal slash', inputDisplay: '6A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'xiang_3b', name: 'Lotus Strike', character: 'Xianghua', description: 'Crouching vertical thrust', inputDisplay: '3B', pattern: { type: 'press', direction: 3, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'xiang_2a', name: 'Low Sting', character: 'Xianghua', description: 'Quick low horizontal', inputDisplay: '2A', pattern: { type: 'press', direction: 2, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'xiang_aab', name: 'Dancing Blades', character: 'Xianghua', description: 'A,A,B string', inputDisplay: 'A,A,B', pattern: { type: 'buttonString', buttons: ['hA', 'hA', 'vB'], maxTime: 600 }, difficulty: 2 },
    { id: 'xiang_4b', name: 'Retreat Slash', character: 'Xianghua', description: 'Backstep mid vertical', inputDisplay: '4B', pattern: { type: 'press', direction: 4, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'xiang_66b', name: 'Rushing Thrust', character: 'Xianghua', description: 'Running vertical', inputDisplay: '66B', pattern: { type: 'press', direction: 6, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'xiang_236a', name: 'Lian Hua', character: 'Xianghua', description: 'QCF horizontal stance', inputDisplay: '↓ ↘ → A', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'hA', maxTime: 800 }, difficulty: 2 },

    // --- Nightmare ---
    { id: 'night_6a', name: 'Shadow Buster', character: 'Nightmare', description: 'Mid horizontal slash', inputDisplay: '6A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'night_3b', name: 'Shadow Slicer', character: 'Nightmare', description: 'Low vertical launcher', inputDisplay: '3B', pattern: { type: 'press', direction: 3, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'night_1a', name: 'Shadow Sweep', character: 'Nightmare', description: 'Low horizontal sweep', inputDisplay: '1A', pattern: { type: 'press', direction: 1, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'night_4b', name: 'Dark Shadow', character: 'Nightmare', description: 'Step-back power vertical', inputDisplay: '4B', pattern: { type: 'press', direction: 4, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'night_aab', name: 'Night Terror Combo', character: 'Nightmare', description: 'A,A,B string', inputDisplay: 'A,A,B', pattern: { type: 'buttonString', buttons: ['hA', 'hA', 'vB'], maxTime: 600 }, difficulty: 2 },
    { id: 'night_66b', name: 'Grim Stride', character: 'Nightmare', description: 'Running overhead slash', inputDisplay: '66B', pattern: { type: 'press', direction: 6, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'night_236b', name: 'Night Side Stance', character: 'Nightmare', description: 'Stance transition', inputDisplay: '↓ ↘ → B', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'vB', maxTime: 800 }, difficulty: 2 },

    // --- Ivy ---
    { id: 'ivy_6a', name: 'Raging Strike', character: 'Ivy', description: 'Forward horizontal slash', inputDisplay: '6A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'ivy_3b', name: 'Insanity Light', character: 'Ivy', description: 'Mid vertical whip strike', inputDisplay: '3B', pattern: { type: 'press', direction: 3, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'ivy_1a', name: 'Serpent\'s Embrace', character: 'Ivy', description: 'Low horizontal sweep', inputDisplay: '1A', pattern: { type: 'press', direction: 1, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'ivy_4a', name: 'Exile', character: 'Ivy', description: 'Retreating horizontal', inputDisplay: '4A', pattern: { type: 'press', direction: 4, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'ivy_bbb', name: 'Howling Spirits', character: 'Ivy', description: 'B,B,B string', inputDisplay: 'B,B,B', pattern: { type: 'buttonString', buttons: ['vB', 'vB', 'vB'], maxTime: 600 }, difficulty: 2 },
    { id: 'ivy_236a', name: 'Summon Suffering Setup', character: 'Ivy', description: 'Coiling stance transition', inputDisplay: '↓ ↘ → A', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'hA', maxTime: 800 }, difficulty: 2 },
    { id: 'ivy_214b', name: 'Spiral Lust', character: 'Ivy', description: 'QCB whip extension', inputDisplay: '↓ ↙ ← B', pattern: { type: 'sequence', directions: [2, 1, 4], button: 'vB', maxTime: 800 }, difficulty: 2 },

    // --- Maxi ---
    { id: 'maxi_6a', name: 'Rising Dragon', character: 'Maxi', description: 'Forward horizontal nunchaku', inputDisplay: '6A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'maxi_3b', name: 'Dragon Killer', character: 'Maxi', description: 'Crouching vertical', inputDisplay: '3B', pattern: { type: 'press', direction: 3, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'maxi_2a', name: 'Shin Breaker', character: 'Maxi', description: 'Low horizontal', inputDisplay: '2A', pattern: { type: 'press', direction: 2, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'maxi_aab', name: 'Fury Storm', character: 'Maxi', description: 'A,A,B nunchaku combo', inputDisplay: 'A,A,B', pattern: { type: 'buttonString', buttons: ['hA', 'hA', 'vB'], maxTime: 600 }, difficulty: 2 },
    { id: 'maxi_bbb', name: 'Dragon Frenzy', character: 'Maxi', description: 'B,B,B nunchaku string', inputDisplay: 'B,B,B', pattern: { type: 'buttonString', buttons: ['vB', 'vB', 'vB'], maxTime: 600 }, difficulty: 2 },
    { id: 'maxi_4b', name: 'Retreat Whip', character: 'Maxi', description: 'Retreating vertical', inputDisplay: '4B', pattern: { type: 'press', direction: 4, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'maxi_66a', name: 'Blazing Phoenix', character: 'Maxi', description: 'Running horizontal', inputDisplay: '66A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },

    // --- Taki ---
    { id: 'taki_6a', name: 'Ninja Cannon', character: 'Taki', description: 'Forward horizontal slash', inputDisplay: '6A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'taki_3b', name: 'Shadow Ripper', character: 'Taki', description: 'Crouching vertical stab', inputDisplay: '3B', pattern: { type: 'press', direction: 3, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'taki_2a', name: 'Shin Slash', character: 'Taki', description: 'Low horizontal', inputDisplay: '2A', pattern: { type: 'press', direction: 2, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'taki_1k', name: 'Shadow Sweep', character: 'Taki', description: 'Low sweep kick', inputDisplay: '1K', pattern: { type: 'press', direction: 1, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'taki_aab', name: 'Ninja Rush', character: 'Taki', description: 'A,A,B fast string', inputDisplay: 'A,A,B', pattern: { type: 'buttonString', buttons: ['hA', 'hA', 'vB'], maxTime: 600 }, difficulty: 2 },
    { id: 'taki_236b', name: 'Possession', character: 'Taki', description: 'QCF stance transition', inputDisplay: '↓ ↘ → B', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'vB', maxTime: 800 }, difficulty: 2 },
    { id: 'taki_66b', name: 'Shadow Dart', character: 'Taki', description: 'Running vertical stab', inputDisplay: '66B', pattern: { type: 'press', direction: 6, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },

    // --- Voldo ---
    { id: 'voldo_6a', name: 'Blind Thrust', character: 'Voldo', description: 'Forward horizontal claw', inputDisplay: '6A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'voldo_3b', name: 'Rat Chase', character: 'Voldo', description: 'Crouching vertical', inputDisplay: '3B', pattern: { type: 'press', direction: 3, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'voldo_2a', name: 'Lunatic Stinger', character: 'Voldo', description: 'Low horizontal claw', inputDisplay: '2A', pattern: { type: 'press', direction: 2, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'voldo_1k', name: 'Worm Sweep', character: 'Voldo', description: 'Low kick sweep', inputDisplay: '1K', pattern: { type: 'press', direction: 1, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'voldo_aab', name: 'Blind Rush', character: 'Voldo', description: 'A,A,B claw string', inputDisplay: 'A,A,B', pattern: { type: 'buttonString', buttons: ['hA', 'hA', 'vB'], maxTime: 600 }, difficulty: 2 },
    { id: 'voldo_4b', name: 'Mantis Crawl Slash', character: 'Voldo', description: 'Retreating vertical', inputDisplay: '4B', pattern: { type: 'press', direction: 4, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'voldo_236b', name: 'Mantis Crawl', character: 'Voldo', description: 'Stance transition', inputDisplay: '↓ ↘ → B', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'vB', maxTime: 800 }, difficulty: 2 },

    // --- Siegfried ---
    { id: 'sieg_6a', name: 'Side Slash', character: 'Siegfried', description: 'Mid horizontal slash', inputDisplay: '6A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'sieg_3b', name: 'Piercing Strike', character: 'Siegfried', description: 'Mid vertical slash', inputDisplay: '3B', pattern: { type: 'press', direction: 3, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'sieg_1a', name: 'Low Sweep Slash', character: 'Siegfried', description: 'Low horizontal', inputDisplay: '1A', pattern: { type: 'press', direction: 1, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'sieg_4b', name: 'Base Hold', character: 'Siegfried', description: 'Retreating stance vertical', inputDisplay: '4B', pattern: { type: 'press', direction: 4, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'sieg_aab', name: 'Chief Hold Combo', character: 'Siegfried', description: 'A,A,B string', inputDisplay: 'A,A,B', pattern: { type: 'buttonString', buttons: ['hA', 'hA', 'vB'], maxTime: 600 }, difficulty: 2 },
    { id: 'sieg_66b', name: 'Stampede', character: 'Siegfried', description: 'Running power vertical', inputDisplay: '66B', pattern: { type: 'press', direction: 6, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'sieg_236b', name: 'Side Hold', character: 'Siegfried', description: 'Stance transition', inputDisplay: '↓ ↘ → B', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'vB', maxTime: 800 }, difficulty: 2 },

    // --- Zasalamel ---
    { id: 'zasa_6a', name: 'Phantom Reaper', character: 'Zasalamel', description: 'Forward scythe horizontal', inputDisplay: '6A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'zasa_3b', name: 'Rift Splitter', character: 'Zasalamel', description: 'Crouching vertical scythe', inputDisplay: '3B', pattern: { type: 'press', direction: 3, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'zasa_2a', name: 'Low Reap', character: 'Zasalamel', description: 'Low horizontal sweep', inputDisplay: '2A', pattern: { type: 'press', direction: 2, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'zasa_1k', name: 'Ankle Reaper', character: 'Zasalamel', description: 'Low kick', inputDisplay: '1K', pattern: { type: 'press', direction: 1, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'zasa_aab', name: 'Death Combo', character: 'Zasalamel', description: 'A,A,B string', inputDisplay: 'A,A,B', pattern: { type: 'buttonString', buttons: ['hA', 'hA', 'vB'], maxTime: 600 }, difficulty: 2 },
    { id: 'zasa_66b', name: 'Onslaught', character: 'Zasalamel', description: 'Running overhead scythe', inputDisplay: '66B', pattern: { type: 'press', direction: 6, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'zasa_214a', name: 'Abyss Gate', character: 'Zasalamel', description: 'QCB curse attack', inputDisplay: '↓ ↙ ← A', pattern: { type: 'sequence', directions: [2, 1, 4], button: 'hA', maxTime: 800 }, difficulty: 2 },

    // --- Astaroth ---
    { id: 'asta_6a', name: 'Bull Rush', character: 'Astaroth', description: 'Forward axe horizontal', inputDisplay: '6A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'asta_3b', name: 'Hades Crush', character: 'Astaroth', description: 'Overhead axe slam', inputDisplay: '3B', pattern: { type: 'press', direction: 3, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'asta_2a', name: 'Low Axe Sweep', character: 'Astaroth', description: 'Low horizontal sweep', inputDisplay: '2A', pattern: { type: 'press', direction: 2, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'asta_1k', name: 'Titan Stomp', character: 'Astaroth', description: 'Low kick stomp', inputDisplay: '1K', pattern: { type: 'press', direction: 1, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'asta_66b', name: 'Titan Charge', character: 'Astaroth', description: 'Running overhead slam', inputDisplay: '66B', pattern: { type: 'press', direction: 6, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'asta_aab', name: 'Axe Barrage', character: 'Astaroth', description: 'A,A,B string', inputDisplay: 'A,A,B', pattern: { type: 'buttonString', buttons: ['hA', 'hA', 'vB'], maxTime: 600 }, difficulty: 2 },
    { id: 'asta_214b', name: 'Poseidon Tide Rush', character: 'Astaroth', description: 'QCB grab setup', inputDisplay: '↓ ↙ ← B', pattern: { type: 'sequence', directions: [2, 1, 4], button: 'vB', maxTime: 800 }, difficulty: 2 },

    // --- Cervantes ---
    { id: 'cerv_6a', name: 'Pirate\'s Cross', character: 'Cervantes', description: 'Forward horizontal slash', inputDisplay: '6A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'cerv_3b', name: 'Dread Slash', character: 'Cervantes', description: 'Crouching vertical', inputDisplay: '3B', pattern: { type: 'press', direction: 3, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'cerv_2a', name: 'Low Cutlass', character: 'Cervantes', description: 'Low horizontal', inputDisplay: '2A', pattern: { type: 'press', direction: 2, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'cerv_4b', name: 'Iceberg Circular', character: 'Cervantes', description: 'Retreating vertical', inputDisplay: '4B', pattern: { type: 'press', direction: 4, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'cerv_aab', name: 'Storm Combo', character: 'Cervantes', description: 'A,A,B string', inputDisplay: 'A,A,B', pattern: { type: 'buttonString', buttons: ['hA', 'hA', 'vB'], maxTime: 600 }, difficulty: 2 },
    { id: 'cerv_236b', name: 'Geo Da Ray', character: 'Cervantes', description: 'QCF gun shot', inputDisplay: '↓ ↘ → B', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'vB', maxTime: 800 }, difficulty: 2 },
    { id: 'cerv_66a', name: 'Anchor Storm', character: 'Cervantes', description: 'Running horizontal', inputDisplay: '66A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },

    // --- Raphael ---
    { id: 'raph_6a', name: 'Enchant Thrust', character: 'Raphael', description: 'Forward rapier horizontal', inputDisplay: '6A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'raph_3b', name: 'Shadow Evade', character: 'Raphael', description: 'Crouching vertical thrust', inputDisplay: '3B', pattern: { type: 'press', direction: 3, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'raph_2a', name: 'Low Sting', character: 'Raphael', description: 'Low horizontal slash', inputDisplay: '2A', pattern: { type: 'press', direction: 2, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'raph_4b', name: 'Retreat Thrust', character: 'Raphael', description: 'Retreating vertical', inputDisplay: '4B', pattern: { type: 'press', direction: 4, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'raph_bbb', name: 'Fencing Rush', character: 'Raphael', description: 'B,B,B rapier string', inputDisplay: 'B,B,B', pattern: { type: 'buttonString', buttons: ['vB', 'vB', 'vB'], maxTime: 600 }, difficulty: 2 },
    { id: 'raph_236b', name: 'Preparation', character: 'Raphael', description: 'Stance transition', inputDisplay: '↓ ↘ → B', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'vB', maxTime: 800 }, difficulty: 2 },
    { id: 'raph_66b', name: 'Lunging Thrust', character: 'Raphael', description: 'Running rapier stab', inputDisplay: '66B', pattern: { type: 'press', direction: 6, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },

    // --- Tira ---
    { id: 'tira_6a', name: 'Jolly Slash', character: 'Tira', description: 'Forward ring blade horizontal', inputDisplay: '6A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'tira_3b', name: 'Gloomy Chop', character: 'Tira', description: 'Crouching vertical', inputDisplay: '3B', pattern: { type: 'press', direction: 3, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'tira_2a', name: 'Low Ring Sweep', character: 'Tira', description: 'Low horizontal', inputDisplay: '2A', pattern: { type: 'press', direction: 2, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'tira_1k', name: 'Mood Kick', character: 'Tira', description: 'Low sweep kick', inputDisplay: '1K', pattern: { type: 'press', direction: 1, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'tira_aab', name: 'Jolly Combo', character: 'Tira', description: 'A,A,B string', inputDisplay: 'A,A,B', pattern: { type: 'buttonString', buttons: ['hA', 'hA', 'vB'], maxTime: 600 }, difficulty: 2 },
    { id: 'tira_66b', name: 'Happy Charge', character: 'Tira', description: 'Running vertical', inputDisplay: '66B', pattern: { type: 'press', direction: 6, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'tira_236a', name: 'Mood Change', character: 'Tira', description: 'Jolly/Gloomy stance switch', inputDisplay: '↓ ↘ → A', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'hA', maxTime: 800 }, difficulty: 2 },

    // --- Groh ---
    { id: 'groh_6a', name: 'Soul Charge Slash', character: 'Gr\u00F8h', description: 'Forward horizontal', inputDisplay: '6A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'groh_3b', name: 'Aval Thrust', character: 'Gr\u00F8h', description: 'Crouching vertical', inputDisplay: '3B', pattern: { type: 'press', direction: 3, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'groh_2a', name: 'Low Saber', character: 'Gr\u00F8h', description: 'Low horizontal', inputDisplay: '2A', pattern: { type: 'press', direction: 2, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'groh_4b', name: 'Retreat Thrust', character: 'Gr\u00F8h', description: 'Backstep vertical', inputDisplay: '4B', pattern: { type: 'press', direction: 4, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'groh_aab', name: 'Twin Saber Rush', character: 'Gr\u00F8h', description: 'A,A,B string', inputDisplay: 'A,A,B', pattern: { type: 'buttonString', buttons: ['hA', 'hA', 'vB'], maxTime: 600 }, difficulty: 2 },
    { id: 'groh_66b', name: 'Avenger Charge', character: 'Gr\u00F8h', description: 'Running vertical slash', inputDisplay: '66B', pattern: { type: 'press', direction: 6, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'groh_236b', name: 'Avenger Stance', character: 'Gr\u00F8h', description: 'Double saber stance', inputDisplay: '↓ ↘ → B', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'vB', maxTime: 800 }, difficulty: 2 },

    // --- Azwel ---
    { id: 'azwel_6a', name: 'Axiom Slash', character: 'Azwel', description: 'Forward weapon summon horizontal', inputDisplay: '6A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'azwel_3b', name: 'Paradigm Shift', character: 'Azwel', description: 'Crouching vertical weapon', inputDisplay: '3B', pattern: { type: 'press', direction: 3, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'azwel_2a', name: 'Low Theory', character: 'Azwel', description: 'Low horizontal sweep', inputDisplay: '2A', pattern: { type: 'press', direction: 2, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'azwel_4b', name: 'Retreating Axiom', character: 'Azwel', description: 'Backstep vertical', inputDisplay: '4B', pattern: { type: 'press', direction: 4, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'azwel_aab', name: 'Knowledge Combo', character: 'Azwel', description: 'A,A,B string', inputDisplay: 'A,A,B', pattern: { type: 'buttonString', buttons: ['hA', 'hA', 'vB'], maxTime: 600 }, difficulty: 2 },
    { id: 'azwel_66b', name: 'Rushing Theory', character: 'Azwel', description: 'Running vertical', inputDisplay: '66B', pattern: { type: 'press', direction: 6, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'azwel_236a', name: 'Weapon Swap', character: 'Azwel', description: 'Summon weapon stance', inputDisplay: '↓ ↘ → A', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'hA', maxTime: 800 }, difficulty: 2 },

    // --- Seong Mi-na ---
    { id: 'mina_6a', name: 'Fang Sweep', character: 'Seong Mi-na', description: 'Forward halberd horizontal', inputDisplay: '6A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'mina_3b', name: 'Heaven\'s Gate', character: 'Seong Mi-na', description: 'Crouching vertical thrust', inputDisplay: '3B', pattern: { type: 'press', direction: 3, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'mina_2a', name: 'Low Halberd Sweep', character: 'Seong Mi-na', description: 'Low horizontal', inputDisplay: '2A', pattern: { type: 'press', direction: 2, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'mina_1k', name: 'Ankle Sweep', character: 'Seong Mi-na', description: 'Low kick', inputDisplay: '1K', pattern: { type: 'press', direction: 1, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'mina_aab', name: 'Fang Rush', character: 'Seong Mi-na', description: 'A,A,B string', inputDisplay: 'A,A,B', pattern: { type: 'buttonString', buttons: ['hA', 'hA', 'vB'], maxTime: 600 }, difficulty: 2 },
    { id: 'mina_66b', name: 'Lunging Thrust', character: 'Seong Mi-na', description: 'Running halberd strike', inputDisplay: '66B', pattern: { type: 'press', direction: 6, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'mina_236b', name: 'Full Moon', character: 'Seong Mi-na', description: 'QCF long-range poke', inputDisplay: '↓ ↘ → B', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'vB', maxTime: 800 }, difficulty: 2 },

    // --- Talim ---
    { id: 'talim_6a', name: 'Wind Sault', character: 'Talim', description: 'Forward tonfa horizontal', inputDisplay: '6A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'talim_3b', name: 'Wind Fury', character: 'Talim', description: 'Crouching vertical', inputDisplay: '3B', pattern: { type: 'press', direction: 3, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'talim_2a', name: 'Low Wind', character: 'Talim', description: 'Low horizontal', inputDisplay: '2A', pattern: { type: 'press', direction: 2, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'talim_aab', name: 'Breeze Combo', character: 'Talim', description: 'A,A,B string', inputDisplay: 'A,A,B', pattern: { type: 'buttonString', buttons: ['hA', 'hA', 'vB'], maxTime: 600 }, difficulty: 2 },
    { id: 'talim_4b', name: 'Retreat Gale', character: 'Talim', description: 'Backstep vertical', inputDisplay: '4B', pattern: { type: 'press', direction: 4, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'talim_236a', name: 'Wind Charmer', character: 'Talim', description: 'Advancing stance', inputDisplay: '↓ ↘ → A', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'hA', maxTime: 800 }, difficulty: 2 },
    { id: 'talim_66b', name: 'Gale Rush', character: 'Talim', description: 'Running vertical', inputDisplay: '66B', pattern: { type: 'press', direction: 6, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },

    // --- Yoshimitsu ---
    { id: 'yoshi_6a', name: 'Stone Fist', character: 'Yoshimitsu', description: 'Forward horizontal', inputDisplay: '6A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'yoshi_3b', name: 'Poison Wind', character: 'Yoshimitsu', description: 'Crouching vertical', inputDisplay: '3B', pattern: { type: 'press', direction: 3, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'yoshi_2a', name: 'Low Spin', character: 'Yoshimitsu', description: 'Low horizontal', inputDisplay: '2A', pattern: { type: 'press', direction: 2, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'yoshi_1k', name: 'Leg Sweep', character: 'Yoshimitsu', description: 'Low kick', inputDisplay: '1K', pattern: { type: 'press', direction: 1, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'yoshi_aab', name: 'Ninja Combo', character: 'Yoshimitsu', description: 'A,A,B string', inputDisplay: 'A,A,B', pattern: { type: 'buttonString', buttons: ['hA', 'hA', 'vB'], maxTime: 600 }, difficulty: 2 },
    { id: 'yoshi_236b', name: 'Manji Dragonfly', character: 'Yoshimitsu', description: 'Helicopter stance', inputDisplay: '↓ ↘ → B', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'vB', maxTime: 800 }, difficulty: 2 },
    { id: 'yoshi_214a', name: 'Suicide', character: 'Yoshimitsu', description: 'Self-impale attack', inputDisplay: '↓ ↙ ← A', pattern: { type: 'sequence', directions: [2, 1, 4], button: 'hA', maxTime: 800 }, difficulty: 3 },

    // --- Cassandra ---
    { id: 'cass_6a', name: 'Athena Strike', character: 'Cassandra', description: 'Forward horizontal', inputDisplay: '6A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'cass_3b', name: 'Seraphim Kick', character: 'Cassandra', description: 'Crouching vertical', inputDisplay: '3B', pattern: { type: 'press', direction: 3, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'cass_2a', name: 'Shield Poke', character: 'Cassandra', description: 'Low horizontal', inputDisplay: '2A', pattern: { type: 'press', direction: 2, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'cass_4b', name: 'Divine Punishment', character: 'Cassandra', description: 'Backstep vertical', inputDisplay: '4B', pattern: { type: 'press', direction: 4, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'cass_aab', name: 'Angel Rush', character: 'Cassandra', description: 'A,A,B string', inputDisplay: 'A,A,B', pattern: { type: 'buttonString', buttons: ['hA', 'hA', 'vB'], maxTime: 600 }, difficulty: 2 },
    { id: 'cass_66b', name: 'Shield Charge', character: 'Cassandra', description: 'Running vertical', inputDisplay: '66B', pattern: { type: 'press', direction: 6, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'cass_236b', name: 'Angel Step', character: 'Cassandra', description: 'QCF stance', inputDisplay: '↓ ↘ → B', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'vB', maxTime: 800 }, difficulty: 2 },

    // --- Amy ---
    { id: 'amy_6a', name: 'Rose Petal', character: 'Amy', description: 'Forward rapier horizontal', inputDisplay: '6A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'amy_3b', name: 'Thorn Stab', character: 'Amy', description: 'Crouching vertical thrust', inputDisplay: '3B', pattern: { type: 'press', direction: 3, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'amy_2a', name: 'Low Rose', character: 'Amy', description: 'Low horizontal', inputDisplay: '2A', pattern: { type: 'press', direction: 2, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'amy_4b', name: 'Retreat Thorn', character: 'Amy', description: 'Backstep vertical', inputDisplay: '4B', pattern: { type: 'press', direction: 4, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'amy_bbb', name: 'Rose Flurry', character: 'Amy', description: 'B,B,B rapier string', inputDisplay: 'B,B,B', pattern: { type: 'buttonString', buttons: ['vB', 'vB', 'vB'], maxTime: 600 }, difficulty: 2 },
    { id: 'amy_236b', name: 'Crimson Rose', character: 'Amy', description: 'QCF rose stance', inputDisplay: '↓ ↘ → B', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'vB', maxTime: 800 }, difficulty: 2 },
    { id: 'amy_66b', name: 'Piercing Rose', character: 'Amy', description: 'Running vertical thrust', inputDisplay: '66B', pattern: { type: 'press', direction: 6, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },

    // --- Hilde ---
    { id: 'hilde_6a', name: 'Regalia Strike', character: 'Hilde', description: 'Forward horizontal', inputDisplay: '6A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'hilde_3b', name: 'Crown Splitter', character: 'Hilde', description: 'Crouching vertical', inputDisplay: '3B', pattern: { type: 'press', direction: 3, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'hilde_2a', name: 'Low Guard', character: 'Hilde', description: 'Low horizontal', inputDisplay: '2A', pattern: { type: 'press', direction: 2, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'hilde_4b', name: 'Fortress Wall', character: 'Hilde', description: 'Retreating vertical', inputDisplay: '4B', pattern: { type: 'press', direction: 4, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'hilde_aab', name: 'Regal Combo', character: 'Hilde', description: 'A,A,B string', inputDisplay: 'A,A,B', pattern: { type: 'buttonString', buttons: ['hA', 'hA', 'vB'], maxTime: 600 }, difficulty: 2 },
    { id: 'hilde_66b', name: 'Charging Lance', character: 'Hilde', description: 'Running lance thrust', inputDisplay: '66B', pattern: { type: 'press', direction: 6, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'hilde_236b', name: 'Mystic Star', character: 'Hilde', description: 'QCF lance charge', inputDisplay: '↓ ↘ → B', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'vB', maxTime: 800 }, difficulty: 2 },

    // --- Setsuka ---
    { id: 'setsu_6a', name: 'Cherry Blossom', character: 'Setsuka', description: 'Forward iaido horizontal', inputDisplay: '6A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'setsu_3b', name: 'Moon Slash', character: 'Setsuka', description: 'Crouching vertical', inputDisplay: '3B', pattern: { type: 'press', direction: 3, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'setsu_2a', name: 'Low Petal', character: 'Setsuka', description: 'Low horizontal', inputDisplay: '2A', pattern: { type: 'press', direction: 2, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'setsu_4b', name: 'Retreat Draw', character: 'Setsuka', description: 'Backstep vertical', inputDisplay: '4B', pattern: { type: 'press', direction: 4, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'setsu_aab', name: 'Petal Storm', character: 'Setsuka', description: 'A,A,B string', inputDisplay: 'A,A,B', pattern: { type: 'buttonString', buttons: ['hA', 'hA', 'vB'], maxTime: 600 }, difficulty: 2 },
    { id: 'setsu_236b', name: 'Umbrella Stance', character: 'Setsuka', description: 'QCF iaido stance', inputDisplay: '↓ ↘ → B', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'vB', maxTime: 800 }, difficulty: 2 },
    { id: 'setsu_66b', name: 'Rushing Draw', character: 'Setsuka', description: 'Running iaido slash', inputDisplay: '66B', pattern: { type: 'press', direction: 6, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },

    // --- Hwang ---
    { id: 'hwang_6a', name: 'Heaven\'s Will', character: 'Hwang', description: 'Forward horizontal', inputDisplay: '6A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'hwang_3b', name: 'Rising Phoenix', character: 'Hwang', description: 'Crouching vertical launcher', inputDisplay: '3B', pattern: { type: 'press', direction: 3, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'hwang_2a', name: 'Low Blade', character: 'Hwang', description: 'Low horizontal', inputDisplay: '2A', pattern: { type: 'press', direction: 2, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'hwang_4b', name: 'Retreating Crane', character: 'Hwang', description: 'Backstep vertical', inputDisplay: '4B', pattern: { type: 'press', direction: 4, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'hwang_aab', name: 'Dragon Combo', character: 'Hwang', description: 'A,A,B string', inputDisplay: 'A,A,B', pattern: { type: 'buttonString', buttons: ['hA', 'hA', 'vB'], maxTime: 600 }, difficulty: 2 },
    { id: 'hwang_236b', name: 'Talisman Stance', character: 'Hwang', description: 'QCF power-up stance', inputDisplay: '↓ ↘ → B', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'vB', maxTime: 800 }, difficulty: 2 },
    { id: 'hwang_66b', name: 'Charging Dragon', character: 'Hwang', description: 'Running vertical', inputDisplay: '66B', pattern: { type: 'press', direction: 6, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },

    // --- Haohmaru ---
    { id: 'haoh_6a', name: 'Sake Splash', character: 'Haohmaru', description: 'Forward horizontal slash', inputDisplay: '6A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'haoh_3b', name: 'Crescent Moon', character: 'Haohmaru', description: 'Crouching vertical', inputDisplay: '3B', pattern: { type: 'press', direction: 3, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'haoh_2a', name: 'Low Sake', character: 'Haohmaru', description: 'Low horizontal', inputDisplay: '2A', pattern: { type: 'press', direction: 2, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'haoh_4b', name: 'Retreat Slash', character: 'Haohmaru', description: 'Backstep vertical', inputDisplay: '4B', pattern: { type: 'press', direction: 4, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'haoh_236a', name: 'Senpuu Retsu Zan', character: 'Haohmaru', description: 'QCF tornado projectile', inputDisplay: '↓ ↘ → A', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'hA', maxTime: 800 }, difficulty: 2 },
    { id: 'haoh_623b', name: 'Kogetsu Zan', character: 'Haohmaru', description: 'DP anti-air slash', inputDisplay: '→ ↓ ↘ B', pattern: { type: 'sequence', directions: [6, 2, 3], button: 'vB', maxTime: 800 }, difficulty: 2 },
    { id: 'haoh_214a', name: 'Resshin Zan', character: 'Haohmaru', description: 'QCB overhead slash', inputDisplay: '↓ ↙ ← A', pattern: { type: 'sequence', directions: [2, 1, 4], button: 'hA', maxTime: 800 }, difficulty: 2 },

    // --- 2B ---
    { id: '2b_6a', name: 'Pod Charge', character: '2B', description: 'Forward horizontal slash', inputDisplay: '6A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: '2b_3b', name: 'Cruel Oath', character: '2B', description: 'Crouching vertical', inputDisplay: '3B', pattern: { type: 'press', direction: 3, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: '2b_2a', name: 'Low Scanner', character: '2B', description: 'Low horizontal', inputDisplay: '2A', pattern: { type: 'press', direction: 2, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: '2b_1k', name: 'Sweep Program', character: '2B', description: 'Low sweep kick', inputDisplay: '1K', pattern: { type: 'press', direction: 1, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: '2b_aab', name: 'YoRHa Combo', character: '2B', description: 'A,A,B string', inputDisplay: 'A,A,B', pattern: { type: 'buttonString', buttons: ['hA', 'hA', 'vB'], maxTime: 600 }, difficulty: 2 },
    { id: '2b_236b', name: 'Pod Fire', character: '2B', description: 'QCF pod shot', inputDisplay: '↓ ↘ → B', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'vB', maxTime: 800 }, difficulty: 2 },
    { id: '2b_66b', name: 'Dash Assault', character: '2B', description: 'Running vertical slash', inputDisplay: '66B', pattern: { type: 'press', direction: 6, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },

    // --- Inferno ---
    { id: 'inferno_6a', name: 'Flame Slash', character: 'Inferno', description: 'Forward horizontal fire', inputDisplay: '6A', pattern: { type: 'press', direction: 6, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'inferno_3b', name: 'Hellfire Strike', character: 'Inferno', description: 'Crouching vertical', inputDisplay: '3B', pattern: { type: 'press', direction: 3, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'inferno_2a', name: 'Low Ember', character: 'Inferno', description: 'Low horizontal', inputDisplay: '2A', pattern: { type: 'press', direction: 2, buttons: ['hA'], maxTime: 300 }, difficulty: 1 },
    { id: 'inferno_4b', name: 'Retreat Blaze', character: 'Inferno', description: 'Backstep vertical', inputDisplay: '4B', pattern: { type: 'press', direction: 4, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'inferno_aab', name: 'Infernal Combo', character: 'Inferno', description: 'A,A,B fire string', inputDisplay: 'A,A,B', pattern: { type: 'buttonString', buttons: ['hA', 'hA', 'vB'], maxTime: 600 }, difficulty: 2 },
    { id: 'inferno_66b', name: 'Blazing Charge', character: 'Inferno', description: 'Running vertical fire', inputDisplay: '66B', pattern: { type: 'press', direction: 6, buttons: ['vB'], maxTime: 300 }, difficulty: 1 },
    { id: 'inferno_236b', name: 'Soul Blaze', character: 'Inferno', description: 'QCF fire attack', inputDisplay: '↓ ↘ → B', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'vB', maxTime: 800 }, difficulty: 2 },
  ],
};
