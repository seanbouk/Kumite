export default {
  id: 'vf5',
  name: 'VIRTUA FIGHTER 5',
  subtitle: 'ULTIMATE SHOWDOWN',
  buttonLayout: 'vf3',
  moves: [
    // --- Akira ---
    { id: 'akira_6p', name: 'Tetsuzankou', character: 'Akira', description: 'Shoulder ram, iconic move', inputDisplay: '6P', pattern: { type: 'press', direction: 6, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'akira_3pp', name: 'Byakko Soushouda', character: 'Akira', description: 'Double palm strike', inputDisplay: '3P,P', pattern: { type: 'buttonString', buttons: ['P', 'P'], maxTime: 600 }, difficulty: 2 },
    { id: 'akira_2p', name: 'Low Backfist', character: 'Akira', description: 'Crouching punch', inputDisplay: '2P', pattern: { type: 'press', direction: 2, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'akira_46p', name: 'Mouko Kouhazan', character: 'Akira', description: 'Power body check', inputDisplay: '46P', pattern: { type: 'sequence', directions: [4, 6], button: 'P', maxTime: 600 }, difficulty: 2 },
    { id: 'akira_3k', name: 'Renkantai', character: 'Akira', description: 'Mid kick', inputDisplay: '3K', pattern: { type: 'press', direction: 3, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'akira_2k', name: 'Low Kick', character: 'Akira', description: 'Quick low kick', inputDisplay: '2K', pattern: { type: 'press', direction: 2, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'akira_ppp', name: 'Triple Punch', character: 'Akira', description: 'P,P,P string', inputDisplay: 'P,P,P', pattern: { type: 'buttonString', buttons: ['P', 'P', 'P'], maxTime: 600 }, difficulty: 1 },
    { id: 'akira_236p', name: 'Koboku', character: 'Akira', description: 'QCF elbow strike', inputDisplay: '↓ ↘ → P', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'P', maxTime: 800 }, difficulty: 2 },

    // --- Pai ---
    { id: 'pai_6p', name: 'Renkan Tenshinkyaku', character: 'Pai', description: 'Forward palm strike', inputDisplay: '6P', pattern: { type: 'press', direction: 6, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'pai_3k', name: 'Tenshin Soutai', character: 'Pai', description: 'Mid roundhouse', inputDisplay: '3K', pattern: { type: 'press', direction: 3, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'pai_2p', name: 'Low Punch', character: 'Pai', description: 'Quick crouching punch', inputDisplay: '2P', pattern: { type: 'press', direction: 2, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'pai_2k', name: 'Low Sweep', character: 'Pai', description: 'Low sweep kick', inputDisplay: '2K', pattern: { type: 'press', direction: 2, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'pai_pppk', name: 'Renkan Rush', character: 'Pai', description: 'P,P,P,K string', inputDisplay: 'P,P,P,K', pattern: { type: 'buttonString', buttons: ['P', 'P', 'P', 'K'], maxTime: 800 }, difficulty: 2 },
    { id: 'pai_4p', name: 'Haitenkyaku', character: 'Pai', description: 'Retreating palm', inputDisplay: '4P', pattern: { type: 'press', direction: 4, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'pai_66p', name: 'Advancing Strike', character: 'Pai', description: 'Running palm attack', inputDisplay: '66P', pattern: { type: 'press', direction: 6, buttons: ['P'], maxTime: 300 }, difficulty: 1 },

    // --- Lau ---
    { id: 'lau_6p', name: 'Rushing Palm', character: 'Lau', description: 'Forward palm strike', inputDisplay: '6P', pattern: { type: 'press', direction: 6, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'lau_3k', name: 'Rising Knee', character: 'Lau', description: 'Mid knee strike', inputDisplay: '3K', pattern: { type: 'press', direction: 3, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'lau_2p', name: 'Low Jab', character: 'Lau', description: 'Crouching punch', inputDisplay: '2P', pattern: { type: 'press', direction: 2, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'lau_2k', name: 'Low Sweep', character: 'Lau', description: 'Low kick', inputDisplay: '2K', pattern: { type: 'press', direction: 2, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'lau_pppp', name: 'Renkan Combo', character: 'Lau', description: 'P,P,P,P string', inputDisplay: 'P,P,P,P', pattern: { type: 'buttonString', buttons: ['P', 'P', 'P', 'P'], maxTime: 800 }, difficulty: 2 },
    { id: 'lau_46p', name: 'Lunging Palm', character: 'Lau', description: 'Step-in palm', inputDisplay: '46P', pattern: { type: 'sequence', directions: [4, 6], button: 'P', maxTime: 600 }, difficulty: 2 },
    { id: 'lau_66k', name: 'Advancing Kick', character: 'Lau', description: 'Running knee strike', inputDisplay: '66K', pattern: { type: 'press', direction: 6, buttons: ['K'], maxTime: 300 }, difficulty: 1 },

    // --- Wolf ---
    { id: 'wolf_6p', name: 'Shoulder Tackle', character: 'Wolf', description: 'Forward shoulder ram', inputDisplay: '6P', pattern: { type: 'press', direction: 6, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'wolf_3k', name: 'Axe Kick', character: 'Wolf', description: 'Mid axe kick', inputDisplay: '3K', pattern: { type: 'press', direction: 3, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'wolf_2p', name: 'Low Punch', character: 'Wolf', description: 'Crouching punch', inputDisplay: '2P', pattern: { type: 'press', direction: 2, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'wolf_2k', name: 'Low Kick', character: 'Wolf', description: 'Low sweep', inputDisplay: '2K', pattern: { type: 'press', direction: 2, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'wolf_ppk', name: 'Quick Combo', character: 'Wolf', description: 'P,P,K string', inputDisplay: 'P,P,K', pattern: { type: 'buttonString', buttons: ['P', 'P', 'K'], maxTime: 600 }, difficulty: 1 },
    { id: 'wolf_236p', name: 'Giant Swing', character: 'Wolf', description: 'QCF throw', inputDisplay: '↓ ↘ → P', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'P', maxTime: 800 }, difficulty: 2 },
    { id: 'wolf_66p', name: 'Burning Hammer Rush', character: 'Wolf', description: 'Running shoulder', inputDisplay: '66P', pattern: { type: 'press', direction: 6, buttons: ['P'], maxTime: 300 }, difficulty: 1 },

    // --- Jeffry ---
    { id: 'jeffry_6p', name: 'Elbow Smash', character: 'Jeffry', description: 'Forward elbow', inputDisplay: '6P', pattern: { type: 'press', direction: 6, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'jeffry_3k', name: 'Knee Strike', character: 'Jeffry', description: 'Mid knee', inputDisplay: '3K', pattern: { type: 'press', direction: 3, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'jeffry_2p', name: 'Low Jab', character: 'Jeffry', description: 'Crouching punch', inputDisplay: '2P', pattern: { type: 'press', direction: 2, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'jeffry_2k', name: 'Low Kick', character: 'Jeffry', description: 'Low kick', inputDisplay: '2K', pattern: { type: 'press', direction: 2, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'jeffry_ppk', name: 'Hammer Rush', character: 'Jeffry', description: 'P,P,K string', inputDisplay: 'P,P,K', pattern: { type: 'buttonString', buttons: ['P', 'P', 'K'], maxTime: 600 }, difficulty: 1 },
    { id: 'jeffry_236p', name: 'Power Slam', character: 'Jeffry', description: 'QCF throw', inputDisplay: '↓ ↘ → P', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'P', maxTime: 800 }, difficulty: 2 },
    { id: 'jeffry_66p', name: 'Charging Elbow', character: 'Jeffry', description: 'Running elbow', inputDisplay: '66P', pattern: { type: 'press', direction: 6, buttons: ['P'], maxTime: 300 }, difficulty: 1 },

    // --- Kage ---
    { id: 'kage_6p', name: 'Shippuujin', character: 'Kage', description: 'Forward elbow rush', inputDisplay: '6P', pattern: { type: 'press', direction: 6, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'kage_3k', name: 'Tobi Hiza Geri', character: 'Kage', description: 'Jumping knee', inputDisplay: '3K', pattern: { type: 'press', direction: 3, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'kage_2p', name: 'Low Punch', character: 'Kage', description: 'Crouching punch', inputDisplay: '2P', pattern: { type: 'press', direction: 2, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'kage_2k', name: 'Low Sweep', character: 'Kage', description: 'Low kick', inputDisplay: '2K', pattern: { type: 'press', direction: 2, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'kage_ppk', name: 'Ninja Rush', character: 'Kage', description: 'P,P,K string', inputDisplay: 'P,P,K', pattern: { type: 'buttonString', buttons: ['P', 'P', 'K'], maxTime: 600 }, difficulty: 1 },
    { id: 'kage_236p', name: 'Shinsodan', character: 'Kage', description: 'QCF palm strike', inputDisplay: '↓ ↘ → P', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'P', maxTime: 800 }, difficulty: 2 },
    { id: 'kage_4p', name: 'Jumonji', character: 'Kage', description: 'Cross stance palm', inputDisplay: '4P', pattern: { type: 'press', direction: 4, buttons: ['P'], maxTime: 300 }, difficulty: 1 },

    // --- Sarah ---
    { id: 'sarah_6p', name: 'Elbow Strike', character: 'Sarah', description: 'Forward elbow', inputDisplay: '6P', pattern: { type: 'press', direction: 6, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'sarah_3k', name: 'Flamingo Kick', character: 'Sarah', description: 'Mid kick to stance', inputDisplay: '3K', pattern: { type: 'press', direction: 3, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'sarah_2p', name: 'Low Jab', character: 'Sarah', description: 'Crouching punch', inputDisplay: '2P', pattern: { type: 'press', direction: 2, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'sarah_2k', name: 'Low Sweep', character: 'Sarah', description: 'Low kick', inputDisplay: '2K', pattern: { type: 'press', direction: 2, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'sarah_ppk', name: 'Gatling Combo', character: 'Sarah', description: 'P,P,K string', inputDisplay: 'P,P,K', pattern: { type: 'buttonString', buttons: ['P', 'P', 'K'], maxTime: 600 }, difficulty: 1 },
    { id: 'sarah_66k', name: 'Mirage Kick', character: 'Sarah', description: 'Running high kick', inputDisplay: '66K', pattern: { type: 'press', direction: 6, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'sarah_4k', name: 'Flamingo Stance', character: 'Sarah', description: 'Back kick to stance', inputDisplay: '4K', pattern: { type: 'press', direction: 4, buttons: ['K'], maxTime: 300 }, difficulty: 1 },

    // --- Jacky ---
    { id: 'jacky_6p', name: 'Elbow Strike', character: 'Jacky', description: 'Forward elbow', inputDisplay: '6P', pattern: { type: 'press', direction: 6, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'jacky_3k', name: 'Knee Strike', character: 'Jacky', description: 'Mid knee', inputDisplay: '3K', pattern: { type: 'press', direction: 3, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'jacky_2p', name: 'Low Punch', character: 'Jacky', description: 'Crouching punch', inputDisplay: '2P', pattern: { type: 'press', direction: 2, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'jacky_2k', name: 'Low Kick', character: 'Jacky', description: 'Low sweep', inputDisplay: '2K', pattern: { type: 'press', direction: 2, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'jacky_ppk', name: 'Flash Combo', character: 'Jacky', description: 'P,P,K string', inputDisplay: 'P,P,K', pattern: { type: 'buttonString', buttons: ['P', 'P', 'K'], maxTime: 600 }, difficulty: 1 },
    { id: 'jacky_66p', name: 'Beat Knuckle', character: 'Jacky', description: 'Running punch', inputDisplay: '66P', pattern: { type: 'press', direction: 6, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'jacky_46k', name: 'Spinning Heel', character: 'Jacky', description: 'Step-in spinning kick', inputDisplay: '46K', pattern: { type: 'sequence', directions: [4, 6], button: 'K', maxTime: 600 }, difficulty: 2 },

    // --- Shun ---
    { id: 'shun_6p', name: 'Drunken Elbow', character: 'Shun', description: 'Forward swaying elbow', inputDisplay: '6P', pattern: { type: 'press', direction: 6, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'shun_3k', name: 'Drunken Kick', character: 'Shun', description: 'Mid stumble kick', inputDisplay: '3K', pattern: { type: 'press', direction: 3, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'shun_2p', name: 'Low Slap', character: 'Shun', description: 'Crouching palm', inputDisplay: '2P', pattern: { type: 'press', direction: 2, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'shun_2k', name: 'Low Sweep', character: 'Shun', description: 'Low kick', inputDisplay: '2K', pattern: { type: 'press', direction: 2, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'shun_pppk', name: 'Drunken Flurry', character: 'Shun', description: 'P,P,P,K string', inputDisplay: 'P,P,P,K', pattern: { type: 'buttonString', buttons: ['P', 'P', 'P', 'K'], maxTime: 800 }, difficulty: 2 },
    { id: 'shun_4p', name: 'Drinking', character: 'Shun', description: 'Takes a drink (power up)', inputDisplay: '4P', pattern: { type: 'press', direction: 4, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'shun_236p', name: 'Chouwan', character: 'Shun', description: 'QCF lunging palm', inputDisplay: '↓ ↘ → P', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'P', maxTime: 800 }, difficulty: 2 },

    // --- Lion ---
    { id: 'lion_6p', name: 'Mantis Strike', character: 'Lion', description: 'Forward mantis palm', inputDisplay: '6P', pattern: { type: 'press', direction: 6, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'lion_3k', name: 'Side Kick', character: 'Lion', description: 'Mid side kick', inputDisplay: '3K', pattern: { type: 'press', direction: 3, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'lion_2p', name: 'Low Jab', character: 'Lion', description: 'Crouching punch', inputDisplay: '2P', pattern: { type: 'press', direction: 2, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'lion_2k', name: 'Low Kick', character: 'Lion', description: 'Low kick', inputDisplay: '2K', pattern: { type: 'press', direction: 2, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'lion_ppk', name: 'Mantis Rush', character: 'Lion', description: 'P,P,K string', inputDisplay: 'P,P,K', pattern: { type: 'buttonString', buttons: ['P', 'P', 'K'], maxTime: 600 }, difficulty: 1 },
    { id: 'lion_66p', name: 'Rushing Mantis', character: 'Lion', description: 'Running palm strike', inputDisplay: '66P', pattern: { type: 'press', direction: 6, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'lion_4k', name: 'Heel Drop', character: 'Lion', description: 'Retreating axe kick', inputDisplay: '4K', pattern: { type: 'press', direction: 4, buttons: ['K'], maxTime: 300 }, difficulty: 1 },

    // --- Aoi ---
    { id: 'aoi_6p', name: 'Tenchi In', character: 'Aoi', description: 'Forward palm push', inputDisplay: '6P', pattern: { type: 'press', direction: 6, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'aoi_3k', name: 'Front Kick', character: 'Aoi', description: 'Mid front kick', inputDisplay: '3K', pattern: { type: 'press', direction: 3, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'aoi_2p', name: 'Low Palm', character: 'Aoi', description: 'Crouching palm', inputDisplay: '2P', pattern: { type: 'press', direction: 2, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'aoi_2k', name: 'Low Kick', character: 'Aoi', description: 'Low kick', inputDisplay: '2K', pattern: { type: 'press', direction: 2, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'aoi_ppk', name: 'Aiki Rush', character: 'Aoi', description: 'P,P,K string', inputDisplay: 'P,P,K', pattern: { type: 'buttonString', buttons: ['P', 'P', 'K'], maxTime: 600 }, difficulty: 1 },
    { id: 'aoi_4p', name: 'Reversal Stance', character: 'Aoi', description: 'Parry stance', inputDisplay: '4P', pattern: { type: 'press', direction: 4, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'aoi_236p', name: 'Tenchi In\'you', character: 'Aoi', description: 'QCF advancing palm', inputDisplay: '↓ ↘ → P', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'P', maxTime: 800 }, difficulty: 2 },

    // --- Lei-Fei ---
    { id: 'leifei_6p', name: 'Advancing Palm', character: 'Lei-Fei', description: 'Forward Shaolin palm', inputDisplay: '6P', pattern: { type: 'press', direction: 6, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'leifei_3k', name: 'Crane Kick', character: 'Lei-Fei', description: 'Mid kick to stance', inputDisplay: '3K', pattern: { type: 'press', direction: 3, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'leifei_2p', name: 'Low Fist', character: 'Lei-Fei', description: 'Crouching punch', inputDisplay: '2P', pattern: { type: 'press', direction: 2, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'leifei_2k', name: 'Low Sweep', character: 'Lei-Fei', description: 'Low kick', inputDisplay: '2K', pattern: { type: 'press', direction: 2, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'leifei_ppk', name: 'Shaolin Rush', character: 'Lei-Fei', description: 'P,P,K string', inputDisplay: 'P,P,K', pattern: { type: 'buttonString', buttons: ['P', 'P', 'K'], maxTime: 600 }, difficulty: 1 },
    { id: 'leifei_4p', name: 'Stance Transition', character: 'Lei-Fei', description: 'Back palm to stance', inputDisplay: '4P', pattern: { type: 'press', direction: 4, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'leifei_236k', name: 'Dokuritsu Shiki', character: 'Lei-Fei', description: 'QCF stance kick', inputDisplay: '↓ ↘ → K', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'K', maxTime: 800 }, difficulty: 2 },

    // --- Vanessa ---
    { id: 'vanessa_6p', name: 'Elbow Smash', character: 'Vanessa', description: 'Forward elbow', inputDisplay: '6P', pattern: { type: 'press', direction: 6, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'vanessa_3k', name: 'Front Kick', character: 'Vanessa', description: 'Mid kick', inputDisplay: '3K', pattern: { type: 'press', direction: 3, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'vanessa_2p', name: 'Low Jab', character: 'Vanessa', description: 'Crouching punch', inputDisplay: '2P', pattern: { type: 'press', direction: 2, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'vanessa_2k', name: 'Low Kick', character: 'Vanessa', description: 'Low kick', inputDisplay: '2K', pattern: { type: 'press', direction: 2, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'vanessa_ppk', name: 'Boxing Rush', character: 'Vanessa', description: 'P,P,K string', inputDisplay: 'P,P,K', pattern: { type: 'buttonString', buttons: ['P', 'P', 'K'], maxTime: 600 }, difficulty: 1 },
    { id: 'vanessa_4p', name: 'Intercept Strike', character: 'Vanessa', description: 'Retreating punch', inputDisplay: '4P', pattern: { type: 'press', direction: 4, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'vanessa_236p', name: 'Charge Blow', character: 'Vanessa', description: 'QCF power punch', inputDisplay: '↓ ↘ → P', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'P', maxTime: 800 }, difficulty: 2 },

    // --- Brad ---
    { id: 'brad_6p', name: 'Elbow Lance', character: 'Brad', description: 'Forward elbow strike', inputDisplay: '6P', pattern: { type: 'press', direction: 6, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'brad_3k', name: 'Ducking Kick', character: 'Brad', description: 'Mid kick from sway', inputDisplay: '3K', pattern: { type: 'press', direction: 3, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'brad_2p', name: 'Low Jab', character: 'Brad', description: 'Crouching punch', inputDisplay: '2P', pattern: { type: 'press', direction: 2, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'brad_2k', name: 'Low Kick', character: 'Brad', description: 'Low kick', inputDisplay: '2K', pattern: { type: 'press', direction: 2, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'brad_ppk', name: 'Muay Thai Rush', character: 'Brad', description: 'P,P,K string', inputDisplay: 'P,P,K', pattern: { type: 'buttonString', buttons: ['P', 'P', 'K'], maxTime: 600 }, difficulty: 1 },
    { id: 'brad_66p', name: 'Rushing Elbow', character: 'Brad', description: 'Running elbow', inputDisplay: '66P', pattern: { type: 'press', direction: 6, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'brad_4k', name: 'Sway Back Kick', character: 'Brad', description: 'Retreating kick', inputDisplay: '4K', pattern: { type: 'press', direction: 4, buttons: ['K'], maxTime: 300 }, difficulty: 1 },

    // --- Goh ---
    { id: 'goh_6p', name: 'Tsukami', character: 'Goh', description: 'Forward palm strike', inputDisplay: '6P', pattern: { type: 'press', direction: 6, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'goh_3k', name: 'Front Kick', character: 'Goh', description: 'Mid front kick', inputDisplay: '3K', pattern: { type: 'press', direction: 3, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'goh_2p', name: 'Low Punch', character: 'Goh', description: 'Crouching punch', inputDisplay: '2P', pattern: { type: 'press', direction: 2, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'goh_2k', name: 'Low Sweep', character: 'Goh', description: 'Low kick', inputDisplay: '2K', pattern: { type: 'press', direction: 2, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'goh_ppk', name: 'Judo Rush', character: 'Goh', description: 'P,P,K string', inputDisplay: 'P,P,K', pattern: { type: 'buttonString', buttons: ['P', 'P', 'K'], maxTime: 600 }, difficulty: 1 },
    { id: 'goh_4p', name: 'Parry', character: 'Goh', description: 'Retreating catch', inputDisplay: '4P', pattern: { type: 'press', direction: 4, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'goh_236p', name: 'Tsukami Nage', character: 'Goh', description: 'QCF throw', inputDisplay: '↓ ↘ → P', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'P', maxTime: 800 }, difficulty: 2 },

    // --- El Blaze ---
    { id: 'blaze_6p', name: 'Elbow Rush', character: 'El Blaze', description: 'Forward elbow', inputDisplay: '6P', pattern: { type: 'press', direction: 6, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'blaze_3k', name: 'Dropkick', character: 'El Blaze', description: 'Diving kick', inputDisplay: '3K', pattern: { type: 'press', direction: 3, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'blaze_2p', name: 'Low Jab', character: 'El Blaze', description: 'Crouching punch', inputDisplay: '2P', pattern: { type: 'press', direction: 2, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'blaze_2k', name: 'Low Kick', character: 'El Blaze', description: 'Low kick', inputDisplay: '2K', pattern: { type: 'press', direction: 2, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'blaze_ppk', name: 'Lucha Rush', character: 'El Blaze', description: 'P,P,K string', inputDisplay: 'P,P,K', pattern: { type: 'buttonString', buttons: ['P', 'P', 'K'], maxTime: 600 }, difficulty: 1 },
    { id: 'blaze_66k', name: 'Flying Tackle', character: 'El Blaze', description: 'Running tackle', inputDisplay: '66K', pattern: { type: 'press', direction: 6, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'blaze_236p', name: 'Rocket Discharge', character: 'El Blaze', description: 'QCF grab', inputDisplay: '↓ ↘ → P', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'P', maxTime: 800 }, difficulty: 2 },

    // --- Jean ---
    { id: 'jean_6p', name: 'Advancing Elbow', character: 'Jean', description: 'Forward elbow strike', inputDisplay: '6P', pattern: { type: 'press', direction: 6, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'jean_3k', name: 'Side Kick', character: 'Jean', description: 'Mid side kick', inputDisplay: '3K', pattern: { type: 'press', direction: 3, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'jean_2p', name: 'Low Jab', character: 'Jean', description: 'Crouching punch', inputDisplay: '2P', pattern: { type: 'press', direction: 2, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'jean_2k', name: 'Low Sweep', character: 'Jean', description: 'Low kick', inputDisplay: '2K', pattern: { type: 'press', direction: 2, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'jean_ppk', name: 'Karate Rush', character: 'Jean', description: 'P,P,K string', inputDisplay: 'P,P,K', pattern: { type: 'buttonString', buttons: ['P', 'P', 'K'], maxTime: 600 }, difficulty: 1 },
    { id: 'jean_66p', name: 'Charging Fist', character: 'Jean', description: 'Running fist', inputDisplay: '66P', pattern: { type: 'press', direction: 6, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'jean_46p', name: 'Reverse Body', character: 'Jean', description: 'Step-in body strike', inputDisplay: '46P', pattern: { type: 'sequence', directions: [4, 6], button: 'P', maxTime: 600 }, difficulty: 2 },

    // --- Taka-Arashi ---
    { id: 'taka_6p', name: 'Harite', character: 'Taka-Arashi', description: 'Forward palm slap', inputDisplay: '6P', pattern: { type: 'press', direction: 6, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'taka_3k', name: 'Front Kick', character: 'Taka-Arashi', description: 'Mid kick', inputDisplay: '3K', pattern: { type: 'press', direction: 3, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'taka_2p', name: 'Low Slap', character: 'Taka-Arashi', description: 'Crouching palm', inputDisplay: '2P', pattern: { type: 'press', direction: 2, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'taka_2k', name: 'Low Stomp', character: 'Taka-Arashi', description: 'Low kick', inputDisplay: '2K', pattern: { type: 'press', direction: 2, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'taka_ppk', name: 'Sumo Rush', character: 'Taka-Arashi', description: 'P,P,K string', inputDisplay: 'P,P,K', pattern: { type: 'buttonString', buttons: ['P', 'P', 'K'], maxTime: 600 }, difficulty: 1 },
    { id: 'taka_66p', name: 'Tachiai', character: 'Taka-Arashi', description: 'Running sumo charge', inputDisplay: '66P', pattern: { type: 'press', direction: 6, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'taka_236p', name: 'Dosukoi Slam', character: 'Taka-Arashi', description: 'QCF sumo throw', inputDisplay: '↓ ↘ → P', pattern: { type: 'sequence', directions: [2, 3, 6], button: 'P', maxTime: 800 }, difficulty: 2 },

    // --- Eileen ---
    { id: 'eileen_6p', name: 'Monkey Palm', character: 'Eileen', description: 'Forward monkey palm', inputDisplay: '6P', pattern: { type: 'press', direction: 6, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'eileen_3k', name: 'Monkey Kick', character: 'Eileen', description: 'Mid kick', inputDisplay: '3K', pattern: { type: 'press', direction: 3, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'eileen_2p', name: 'Low Paw', character: 'Eileen', description: 'Crouching punch', inputDisplay: '2P', pattern: { type: 'press', direction: 2, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'eileen_2k', name: 'Low Sweep', character: 'Eileen', description: 'Low kick', inputDisplay: '2K', pattern: { type: 'press', direction: 2, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'eileen_pppk', name: 'Monkey Flurry', character: 'Eileen', description: 'P,P,P,K string', inputDisplay: 'P,P,P,K', pattern: { type: 'buttonString', buttons: ['P', 'P', 'P', 'K'], maxTime: 800 }, difficulty: 2 },
    { id: 'eileen_66p', name: 'Rushing Monkey', character: 'Eileen', description: 'Running palm', inputDisplay: '66P', pattern: { type: 'press', direction: 6, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'eileen_4k', name: 'Back Flip Kick', character: 'Eileen', description: 'Evasive kick', inputDisplay: '4K', pattern: { type: 'press', direction: 4, buttons: ['K'], maxTime: 300 }, difficulty: 1 },

    // --- Siba ---
    { id: 'siba_6p', name: 'Advancing Elbow', character: 'Siba', description: 'Forward elbow', inputDisplay: '6P', pattern: { type: 'press', direction: 6, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'siba_3k', name: 'Mid Kick', character: 'Siba', description: 'Mid roundhouse', inputDisplay: '3K', pattern: { type: 'press', direction: 3, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'siba_2p', name: 'Low Jab', character: 'Siba', description: 'Crouching punch', inputDisplay: '2P', pattern: { type: 'press', direction: 2, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'siba_2k', name: 'Low Kick', character: 'Siba', description: 'Low kick', inputDisplay: '2K', pattern: { type: 'press', direction: 2, buttons: ['K'], maxTime: 300 }, difficulty: 1 },
    { id: 'siba_ppk', name: 'Quick Rush', character: 'Siba', description: 'P,P,K string', inputDisplay: 'P,P,K', pattern: { type: 'buttonString', buttons: ['P', 'P', 'K'], maxTime: 600 }, difficulty: 1 },
    { id: 'siba_66p', name: 'Charging Palm', character: 'Siba', description: 'Running palm', inputDisplay: '66P', pattern: { type: 'press', direction: 6, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
    { id: 'siba_4p', name: 'Retreating Fist', character: 'Siba', description: 'Backstep punch', inputDisplay: '4P', pattern: { type: 'press', direction: 4, buttons: ['P'], maxTime: 300 }, difficulty: 1 },
  ],
};
