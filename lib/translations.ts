export type Language = "en" | "es" | "pt"

export const translations = {
  en: {
    animation: "Animation",
      single_jump_animation: "Single Jump Animation",
  triple_jump_animation: "Triple Jump Animation",
  dive_angle_speed: "Dive Angle Speed",
  all_jumps_angle_speed: "Jumps Angle Speed",
  basic_jump_angle_speed: "Basic Jump Angle Speed",
  special_jump_angle_speed: "Special Jump Angle Speed",
  special_triple_jump_on: "Enable Special Triple Jump",
  disable_special_triple_jump_bounce: "Disable Triple Jump Bounce",
  "dive_y_vel": "Dive Vertical Velocity",
  "dive_velocity": "Dive Power",
  "dive_max_velocity": "Dive Speed Limit",

    // Header
    title: "Easy Custom Moveset",
    subtitle: "Moveset Generator",
    
    // Hero
    heroTitle: "Create Your Custom Moveset",
    heroDescription: "Configure unique movesets for your SM64 Coop characters. Adjust abilities, damage multipliers, and resistances to create the perfect playstyle.",
    
    // Footer
    footer: "Made for the SM64 Coop community. Not affiliated with Nintendo.",
    
    // Form sections
    characterConfig: "Character Config",
    quickPresets: "Quick Presets",
    characterName: "Character Name",
    enterCharacterName: "Enter character name",
    
    // Categories
    movement: "Movement",
    jumps: "Jumps",
    specialAbilities: "Special Abilities",
    sonicAbilities: "Sonic Abilities",
    twirling: "Twirling",
    dive: "Dive",
    damageResistance: "Damage & Resistance",
    otherOptions: "Other Options",
    
    // Movement stats
    walkingSpeed: "Walking Speed",
    swimmingSpeed: "Swimming Speed",
    inAirSpeed: "In Air Speed",
    gravity: "Gravity",
    fallGravity: "Fall Gravity",
    
    // Jump stats
    jumpStrength: "Jump Strength",
    doubleJumpStrength: "Double Jump Strength",
    tripleJumpStrength: "Triple Jump Strength",
    longJumpStrength: "Long Jump Strength",
    backFlipStrength: "Back Flip Strength",
    sideFlipStrength: "Side Flip Strength",
    disableDoubleJump: "Disable Double Jump",
    
    // Special abilities
    glideDive: "Glide Dive",
    groundPoundJump: "Ground Pound Jump",
    wallSlide: "Wall Slide",
    yoshiFlutter: "Yoshi Flutter",
    mrLJump: "Mr L Jump (Luigi)",
    superSideFlip: "Super Side Flip",
    inAirJumps: "Jumps in the Air",
    waftFart: "Waft Fart (Wario)",
    longJumpTripleJump: "Long Jump Triple Jump",
    groundPoundDive: "Ground Pound Dive",
    
    // Sonic abilities
    peelOut: "Peel Out",
    sonicJump: "Sonic Jump",
    chargeSonicDash: "Charge Sonic Dash",
    dropDash: "Drop Dash",
    
    // Twirling
    backFlipTwirling: "Back Flip Twirling",
    sideFlipTwirling: "Side Flip Twirling",
    tripleJumpTwirling: "Triple Jump Twirling",
    twirlingGroundPound: "Twirling Ground Pound",
    twirlingDive: "Twirling Dive",
    fastTwirling: "Fast Twirling",
    twirlingGravity: "Twirling Gravity",
    twirlingSpeed: "Twirling Speed",
    
    // Damage & Resistance
    fireImmunity: "Fire Immunity",
    invincible: "Invincible",
    disableBreathHeal: "Disable Breath Heal",
    noFallDamage: "No Fall Damage",
    oneHitKO: "One Hit KO",
    explodeOnDeath: "Explode on Death",
    knockbackResistance: "Knockback Resistance",
    coinHealMultiplier: "Coin Heal Multiplier",
    waterDamage: "Water Damage",
    lavaDamage: "Lava Damage",
    burningDamage: "Burning Damage",
    badGasDamage: "Bad Gas Damage",
    waterEnemyDamage: "Water Enemy Damage",
    piranhaPlantDamage: "Piranha Plant Damage",
    goombaDamage: "Goomba Damage",
    flyingEnemyDamage: "Flying Enemy Damage",
    batDamage: "Bat Damage",
    
    // Other options
    kickDive: "Kick Dive",
    diveKick: "Dive Kick",
    diveGroundPound: "Dive Ground Pound",
    alwaysDiveFirst: "Always Dive First",
    saultubeJumpAnimation: "Saultube Jump Animation",
    killToad: "Kill Toad",
    killPinkBobomb: "Kill Pink Bob-omb",
    
    // Moveset description
    movesetDescription: "Moveset Description",
    optional: "optional",
    noGameplayEffect: "No Gameplay Effect",
    
    // Advanced settings
    advancedSettings: "Advanced Settings",
    
    // Glide dive settings
    forwardVelocity: "Forward Velocity",
    slowdown: "Speed Slowdown",
    angleSpeed: "Angle Speed",
    minForwardSpeed: "Min Forward Speed Before Stopping",
    maxTime: "Max Time Before Stopping",
    yVelocity: "Y Velocity",
    renderWithWingCap: "Render with Wing Cap",
    disableSpin: "Disable Spin Animation",
    
    // Ground pound jump settings
    strength: "Strength",
    groundPoundJumpDive: "Ground Pound Jump Dive",
    
    // Wall slide settings
    maxGravity: "Max Gravity",
    jumpForwardVelocity: "Jump Forward Velocity",
    sameWallJump: "Same Wall Jump",
    
    // Yoshi flutter settings
    cooldown: "Cooldown",
    strengthDescending: "Strength (Descending)",
    strengthAscending: "Strength (Ascending)",
    maxYVelocity: "Max Y Velocity",
    reactivations: "Reactivations",
    speed: "Speed",
    
    // Mr L settings
    airSpeed: "Air Speed",
    playAnticipationAudio: "Play Anticipation Audio",
    
    // Super side flip settings
    convertForwardVelocity: "Convert Forward Velocity",
    addForwardVelocity: "Add Forward Velocity",
    kickStrength: "Kick Strength",
    minVelocity: "Min Velocity",
    
    // In air jump settings
    forwardVelMultiplier: "Forward Vel Multiplier",
    forwardVelSlowdown: "Forward Vel Slowdown",
    
    // Waft fart settings
    velocity: "Velocity",
    perLevel: "Per Level",
    
    // Peel out settings
    maxVelocity: "Max Velocity",
    jumpResetVelocity: "Jump Reset Velocity",
    
    // Sonic dash settings
    slowdownWater: "Slowdown (Water)",
    slowdownLava: "Slowdown (Lava)",
    
    // Drop dash settings
    chargeVelocity: "Charge Velocity",
    
    // Generated config
    generatedConfig: "Generated Config",
    
    // Action buttons
    downloadConfig: "Download Config",
    
    // Instructions
    howToUse: "How to Use",
    instruction0: "Fill the name field, it should be the same as in Chracter Select menu",
    instruction1: "Configure the rest of the options for your character",
    instruction2: "Download the generated Lua config file without renaming the file",
    instruction3: "Place the file in  mods/Easy-Custom-Movesets/moveset_configs folder",
    instruction4: "Enable Chracter Select, Easy Custom Moveset and your Character mod in-game",
    instruction5: "Select your character and play!",
    shareWithCommunity: "Community Share",
    importFile:"Import",
    
    // Language
    language: "Language",
    
    // Code preview
    showCode: "Show Code",
    hideCode: "Hide Code",

    hideShowInstructions: "Hide How to Install",
    showInstruction: "Show How to Install",
    // Movement stats section
holdWalkingSpeed: "Hold Walking Speed",
crawlingSpeed: "Crawling Speed",
groundedSlowingSpeed: "Grounded Slowing",
airborneDecelerationSpeed: "Airborne Deceleration",

// Jump/Special section
kickJumpStrength: "Kick Jump Strength",
diveYVel: "Dive Y Velocity",
longJumpVelMultiplier: "Long Jump Multiplier",
longJumpMaxVel: "Long Jump Max Speed",
gpAnticipation: "GP Anticipation Speed",
gpGravity: "GP Gravity",
gpMaxYVel: "GP Max Fall Speed",
gpShake: "GP Shake Intensity",
tripleJumpTwirlingWhen: "Triple Jump Twirling Threshold",
disableTwirlingLand: "Disable Twirling Land",
special_triple_jump_animation_speedup:"Special Triple Animation Speed up",
ground_pound_dive_change_direction_on: "Ground Pound Dive Control Direction",
    
    // Honey Queen Fly
    honeyQueenFly: "Honey Queen Fly",
    honeyQueen_fly_render_cap: "Render Wing Cap",
    honeyQueen_max_fly_timer: "Max Fly Time",
    honeyQueen_render_hud: "Render HUD",
    honeyQueen_fly_animation: "Fly Animation",
    honeyQueen_fly_forward_speed: "Forward Speed",
    honeyQueen_fly_strength: "Fly Strength",

    // Umbrella Glide
    umbrellaGlide: "Umbrella Glide",
    chaorrin_umbrella_animation: "Umbrella Animation",
    chaorrin_umbrella_element: "Element",
    chaorrin_umbrella_max_timer: "Max Glide Time",
    chaorrin_umbrella_vertical_speed: "Vertical Descent Speed",
    chaorrin_umbrella_glide_forward_speed: "Glide Forward Speed",
    chaorrin_umbrella_caps_foward_speed: "Cap Forward Speed",

    // Tooltips - Add your descriptions here
    tooltips: {
      special_triple_jump_animation_speedup: "How much faster the animation plays",
      ground_pound_dive_change_direction_on: "Permits change angle after ground pound dive",
      // Movement
      walkingSpeed: "How fast your character walks on the ground. 100% is normal speed.",
      swimmingSpeed: "How fast your character swims in water. 100% is normal speed.",
      inAirSpeed: "How much control you have while in the air. Higher values = more air control.",
      gravity: "How fast your character falls. Higher values = faster falling.",
      fallGravity: "Gravity applied specifically when falling downward.",

      // Jumps
      jumpStrength: "Overall jump height multiplier. Affects all jump types.",
      doubleJumpStrength: "Height of the second jump in a combo.",
      tripleJumpStrength: "Height of the third jump in a combo.",
      longJumpStrength: "Height and distance of the long jump (Z+A while running).",
      backFlipStrength: "Height of the backflip (A while crouching and moving backward).",
      sideFlipStrength: "Height of the sideflip (A while turning quickly).",
      disableDoubleJump: "Prevents the character from doing a second jump.",
            
      // Special Abilities
      glideDive: "Allows diving and gliding through the air like flying. Great for aerial characters.",
      glideDiveForwardVel: "Initial forward speed when starting the glide.",
      glideDiveSlowdown: "How quickly you lose speed while gliding. 0 = no slowdown.",
      glideDiveAngleSpeed: "How fast you can change direction while gliding.",
      glideDiveMinForwardSpeed: "Minimum speed before the glide ends. Set to 999 for infinite glide.",
      glideDiveMaxTime: "Maximum time you can glide. Set to 999 for unlimited time.",
      glideDiveYVel: "Vertical velocity during glide. Negative = descend, Positive = ascend.",
      glideDiveWingCap: "Display wing cap animation while gliding.",
      glideDiveDisableSpin: "Prevent spinning during the glide dive.",
      
      groundPoundJump: "Jump immediately after a ground pound for extra height.",
      wallSlide: "Slide down walls slowly and jump off them repeatedly.",
      yoshiFlutter: "Rapidly kick legs in the air to gain extra height, like Yoshi.",
      mrLJump: "Bases on Luigi's signature move in Super Paper Mario, first the chracter compress it self while croungthing than jump really high when Z button released",
      superSideFlip: "Enhanced sideflip with more height and forward momentum.",
      inAirJump: "Number of extra jumps you can do while in the air (double jump, triple, etc).",
      waftFart: "Wario's charged fart attack that launches you upward.",
      longJumpTripleJump: "After an long jump, pressing A mkes you do a triple jump.",
      groundPoundDive: "Allows you to transition into a dive directly from a ground pound.",
      
      // Sonic Abilities
      peelOut: "Charge up speed while standing still, then release for a burst of speed.",
      sonicDash: "Charge and release a powerful forward dash.",
      dropDash: "Land from a jump while spinning to immediately gain speed.",
      
      // Twirling (Added)
      backFlipTwirling: "Initiates a slow-descent spin after a backflip.",
      sideFlipTwirling: "Initiates a slow-descent spin after a sideflip.",
      tripleJumpTwirling: "Initiates a slow-descent spin after a triple jump.",
      twirlingGroundPound: "Perform a ground pound while twirling.",
      twirlingDive: "Perform a dive while twirling.",
      fastTwirling: "If press Z while twirling, increase downard movement",
      twirlingGravity: "Adjusts how much gravity affects you while twirling.",
      twirlingSpeed: "Horizontal speed while twirling.",

      // Damage & Resistance
      fireImmunity: "Character cannot be burned by fire or lava surface damage.",
      invincible: "Character takes no damage from any source.",
      disableBreathHeal: "Prevent healing when surfacing from water.",
      noFallDamage: "No damage from falling from high places.",
      oneHitKO: "Character dies in one hit regardless of health.",
      knockbackResistance: "How much you resist being pushed back when hit. 0% = huge knockback, 200% = barely moves.",
      coinHealMultiplier: "How much health coins restore. 0% = no healing, 200% = double healing.",
      waterDamage: "Damage multiplier from drowning. 0% = no damage, 250% = heavy damage.",
      lavaDamage: "Damage multiplier from lava. 0% = no damage.",
      burningDamage: "Damage multiplier from being on fire.",
      badGasDamage: "Damage multiplier from poison gas areas.",
      waterEnemyDamage: "Damage multiplier from water-based enemies.",
      piranhaPlantDamage: "Damage multiplier from piranha plants.",
      goombaDamage: "Damage multiplier from goombas.",
      flyingEnemyDamage: "Damage multiplier from flying enemies.",
      batDamage: "Damage multiplier from bats.",

      // Other
      explodeOnDeath: "Character explodes when dying, damaging nearby enemies.",
      kickDive: "Perform a kick during a dive.",
      diveKick: "Perform a dive during a kick.",
      diveGroundPound: "Do a dive while ground pounding.",
      alwaysDiveFirst: "Always dive when pressing B in air. You will not kick while having little speed.",
      saultubeJumpAnimation: "When doing single/double/triple jump uses saultube animation",
      killToad: "Allows your character to harm Toad NPCs.",
      killPinkBobomb: "Allows your character to harm friendly pink Bob-ombs.",
      holdWalkingSpeed: "Speed when holding the 'Walk' button (usually slow walk).",
  crawlingSpeed: "Speed while crawling on the ground.",
  groundedSlowingSpeed: "How quickly you lose speed while sliding or stopping on ground.",
  airborneDecelerationSpeed: "Speed loss while in the air without input.",
  kickJumpStrength: "Height of the jump performed after a kick.",
  diveYVel: "Vertical boost given when starting a dive.",
  longJumpVelMultiplier: "Multiplies forward speed when starting a long jump.",
  longJumpMaxVel: "Caps the maximum speed allowed during a long jump.",
  gpAnticipation: "The speed of the animation before the character slams down.",
  gpGravity: "How hard gravity pulls you during a ground pound.",
  gpMaxYVel: "Maximum falling speed during a ground pound.",
  gpShake: "The intensity of the screen shake upon landing.",
  tripleJumpTwirlingWhen: "At what height/point the twirl activates during a triple jump.",
  disableTwirlingLand: "If enabled, you won't do the 'spinning land' animation after twirling.",
    
  "dive_y_vel": "The initial upward/downward force when starting a dive.",
    "dive_velocity": "Base horizontal thrust multiplier for the dive.",
    "dive_max_velocity": "The maximum speed allowed during a dive state.",

dive_angle_speed: "How fast the character can rotate/change direction while diving.",
all_jumps_angle_speed: "Rotation speed applied to all jumps.",
basic_jump_angle_speed: "Rotation speed specifically for the basic jump.",
special_jump_angle_speed: "Rotation speed specifically for special jumps.",
special_triple_jump_on: "Enable or disable the special triple jump feature.",
disable_special_triple_jump_bounce: "Prevents bouncing off surfaces after a special triple jump.",
single_jump_animation: "Animation used for single jumps. Default or special style.",
triple_jump_animation: "Animation used for triple jumps. Default, special, or special_v2 style.",
      honeyQueenFly: "Enables a flying ability inspired by Honey Queen. Hold the jump button in the air to fly.",
      honeyQueenFlyRenderCap: "Renders the wing cap on the character while Honey Queen flying.",
      honeyQueenMaxFlyTimer: "Maximum time you can fly before the ability ends.",
      honeyQueenRenderHud: "Displays a HUD indicator while Honey Queen flying is active.",
      honeyQueenFlyAnimation: "Animation played while Honey Queen flying.",
      honeyQueenFlyForwardSpeed: "Horizontal speed while Honey Queen flying, in percent.",
      honeyQueenFlyStrength: "Vertical speed (lift) while Honey Queen flying, in percent.",
      umbrellaGlide: "Enables a slow descent glide using an umbrella. Hold the jump button in the air to activate.",
      umbrellaAnimation: "The animation played while umbrella gliding.",
      umbrellaElement: "Element applied to the umbrella glide attack. Affects what type of damage or effect enemies receive on contact.",
      umbrellaMaxTimer: "Maximum time you can umbrella glide before touching the ground. Set to 999 for unlimited.",
      umbrellaVerticalSpeed: "How fast you descend while umbrella gliding. Uses raw units.",
      umbrellaForwardSpeed: "Horizontal speed while umbrella gliding. Uses toPercent multiplier.",
      umbrellaCapsForwardSpeed: "When enabled, caps horizontal velocity to 20 during umbrella glide.",
},
  },
  
  es: {
    animation: "Animación",
      single_jump_animation: "Animación de Salto Simple",
  triple_jump_animation: "Animación de Triple Salto",
  dive_angle_speed: "Velocidad de Giro en Picada",
  all_jumps_angle_speed: "Velocidad de Giro en los Saltos",
  basic_jump_angle_speed: "Velocidad de Giro Salto Básico",
  special_jump_angle_speed: "Velocidad de Giro Salto Especial",
  special_triple_jump_on: "Habilitar Triple Salto Especial",
  disable_special_triple_jump_bounce: "Desactivar Rebote de Triple Salto",
"dive_y_vel": "Velocidad Vertical de Picado",
  "dive_velocity": "Potencia de Picado",
  "dive_max_velocity": "Límite de Velocidad de Picado",

    // Header
    title: "Easy Custom Moveset",
    subtitle: "Generador de Movesets",
    
    // Hero
    heroTitle: "Crea Tu Personaje Personalizado",
    heroDescription: "Configura movesets unicos para tus personajes de SM64 Coop. Ajusta habilidades, multiplicadores de dano y resistencias para crear el estilo de juego perfecto.",
    
    // Footer
    footer: "Hecho para la comunidad de SM64 Coop. No afiliado con Nintendo.",
    
    // Form sections
    movesetDescription: "Descripción del Moveset",
    characterConfig: "Config del Personaje",
    quickPresets: "Presets Rapidos",
    characterName: "Nombre del Personaje",
    enterCharacterName: "Ingresa el nombre del personaje",
    
    // Categories
    movement: "Movimiento",
    jumps: "Saltos",
    specialAbilities: "Habilidades Especiales",
    sonicAbilities: "Habilidades de Sonic",
    twirling: "Giros",
    dive: "Zambullida",
    damageResistance: "Dano y Resistencia",
    otherOptions: "Otras Opciones",
    
    // Movement stats
    walkingSpeed: "Velocidad al Caminar",
    swimmingSpeed: "Velocidad al Nadar",
    inAirSpeed: "Velocidad en el Aire",
    gravity: "Gravedad",
    fallGravity: "Gravedad al Caer",
    
    // Jump stats
    jumpStrength: "Fuerza de Salto",
    doubleJumpStrength: "Fuerza de Doble Salto",
    tripleJumpStrength: "Fuerza de Triple Salto",
    longJumpStrength: "Fuerza de Salto Largo",
    backFlipStrength: "Fuerza de Voltereta Atras",
    sideFlipStrength: "Fuerza de Voltereta Lateral",
    disableDoubleJump: "Desactivar Doble Salto",
    
    // Special abilities
    glideDive: "Planeo en Picada",
    groundPoundJump: "Salto de Golpe al Suelo",
    wallSlide: "Deslizamiento en Pared",
    yoshiFlutter: "Aleteo de Yoshi",
    mrLJump: "Salto Mr L (Luigi)",
    superSideFlip: "Super Voltereta Lateral",
    inAirJumps: "Saltos en el Aire",
    waftFart: "Pedo Waft (Wario)",
    longJumpTripleJump: "Triple Salto desde Salto Largo",
    groundPoundDive: "Picada desde Golpe al Suelo",
    
    // Sonic abilities
    peelOut: "Peel Out",
    sonicJump: "Salto Sonic",
    chargeSonicDash: "Dash Sonic Cargado",
    dropDash: "Drop Dash",
    
    // Twirling
    backFlipTwirling: "Giro en Voltereta Atras",
    sideFlipTwirling: "Giro en Voltereta Lateral",
    tripleJumpTwirling: "Giro en Triple Salto",
    twirlingGroundPound: "Golpe al Suelo Girando",
    twirlingDive: "Picada Girando",
    fastTwirling: "Giro Rapido",
    twirlingGravity: "Gravedad del Giro",
    twirlingSpeed: "Velocidad del Giro",
    
    // Damage & Resistance
    fireImmunity: "Inmunidad al Fuego",
    invincible: "Invencible",
    disableBreathHeal: "Desactivar Curacion por Respirar",
    noFallDamage: "Sin Dano por Caida",
    oneHitKO: "Muerte de Un Golpe",
    explodeOnDeath: "Explotar al Morir",
    knockbackResistance: "Resistencia al Retroceso",
    coinHealMultiplier: "Multiplicador de Curacion por Monedas",
    waterDamage: "Dano por Agua",
    lavaDamage: "Dano por Lava",
    burningDamage: "Dano por Quemadura",
    badGasDamage: "Dano por Gas Toxico",
    waterEnemyDamage: "Dano de Enemigos de Agua",
    piranhaPlantDamage: "Dano de Planta Pirana",
    goombaDamage: "Dano de Goomba",
    flyingEnemyDamage: "Dano de Enemigos Voladores",
    batDamage: "Dano de Murcielago",
    
    // Other options
    kickDive: "Patada en Picada",
    diveKick: "Picada con Patada",
    diveGroundPound: "Picada a Golpe al Suelo",
    alwaysDiveFirst: "Siempre Picada Primero",
    saultubeJumpAnimation: "Animacion de Salto Saultube",
    killToad: "Matar a Toad",
    killPinkBobomb: "Matar Bob-omb Rosa",
    
    // Moveset description
    optional: "opcional",
    noGameplayEffect: "Sin efecto en el juego",

    // Advanced settings translations
    advancedSettings: "Ajustes Avanzados",
    forwardVelocity: "Velocidad de Avance",
    slowdown: "Desaceleración",
    angleSpeed: "Velocidad de Giro",
    minForwardSpeed: "Velocidad Mínima para Parar",
    maxTime: "Tiempo Máximo",
    yVelocity: "Velocidad Y",
    renderWithWingCap: "Renderizar con Gorra Alada",
    disableSpin: "Desactivar Giro",
        
    // Ground pound jump settings
    strength: "Fuerza",
    groundPoundJumpDive: "Picada desde Salto de Golpe",
    
    // Wall slide settings
    maxGravity: "Gravedad Maxima",
    jumpForwardVelocity: "Velocidad Frontal del Salto",
    sameWallJump: "Salto en Misma Pared",
    
    // Yoshi flutter
    cooldown: "Enfriamiento",
    strengthDescending: "Fuerza (Descenso)",
    strengthAscending: "Fuerza (Ascenso)",
    maxYVelocity: "Velocidad Y Máxima",
    reactivations: "Reactivaciones",
    speed: "Velocidad",
    
    // Mr L settings
    airSpeed: "Velocidad en el Aire",
    playAnticipationAudio: "Reproducir Audio de Anticipacion",
    
    // Super side flip settings
    convertForwardVelocity: "Convertir Velocidad Frontal",
    addForwardVelocity: "Anadir Velocidad Frontal",
    kickStrength: "Fuerza de Patada",
    minVelocity: "Velocidad Minima",
    
    // In air jump settings
    forwardVelMultiplier: "Multiplicador de Vel. Frontal",
    forwardVelSlowdown: "Desaceleracion de Vel. Frontal",
    
    // Waft fart settings
    velocity: "Velocidad",
    perLevel: "Por Nivel",
    
    // Peel out settings
    maxVelocity: "Velocidad Maxima",
    jumpResetVelocity: "Reiniciar Velocidad al Saltar",
    
    // Sonic dash settings
    slowdownWater: "Desaceleracion (Agua)",
    slowdownLava: "Desaceleracion (Lava)",
    
    // Drop dash settings
    chargeVelocity: "Velocidad de Carga",
    
    // Generated config
    generatedConfig: "Config Generada",
    
    // Action buttons
    downloadConfig: "Descargar Configuración",

    // Instructions
    howToUse: "Cómo Usar",
    instruction0: "Completa el campo de nombre; debe ser el mismo que aparece en el menú de Selección de Personaje",
    instruction1: "Configura el resto de las opciones para tu personaje",
    instruction2: "Descarga el archivo de configuración Lua generado sin cambiarle el nombre",
    instruction3: "Coloca el archivo en la carpeta mods/Easy-Custom-Movesets/moveset_configs",
    instruction4: "Activa 'Character Select', 'Easy Custom Moveset' y el mod de tu personaje dentro del juego",
    instruction5: "¡Selecciona tu personaje y a jugar!",
    shareWithCommunity:"Compartir Comunidad",
    importFile:"Importar",

    // Language & Visibility
    language: "Idioma",
    showCode: "Mostrar Código",
    hideCode: "Ocultar Código",
    hideShowInstructions: "Ocultar Instrucciones de Instalación",
    showInstruction: "Mostrar Instrucciones de Instalación",
    special_triple_jump_animation_speedup: "Aceleración de Animación del Triple Salto Especial",
    ground_pound_dive_change_direction_on: "Control de dirección del clavado tras culatazo",

    // Honey Queen Fly
    honeyQueenFly: "Vuelo de Honey Queen",
    honeyQueen_fly_render_cap: "Mostrar Gorra Alada",
    honeyQueen_max_fly_timer: "Tiempo Máximo de Vuelo",
    honeyQueen_render_hud: "Mostrar HUD",
    honeyQueen_fly_animation: "Animación de Vuelo",
    honeyQueen_fly_forward_speed: "Velocidad Frontal",
    honeyQueen_fly_strength: "Fuerza de Vuelo",

    // Umbrella Glide
    umbrellaGlide: "Planeo con Paraguas",
    chaorrin_umbrella_animation: "Animación del Paraguas",
    chaorrin_umbrella_element: "Elemento",
    chaorrin_umbrella_max_timer: "Tiempo Máximo de Planeo",
    chaorrin_umbrella_vertical_speed: "Velocidad de Descenso Vertical",
    chaorrin_umbrella_glide_forward_speed: "Velocidad de Avance al Planear",
    chaorrin_umbrella_caps_foward_speed: "Limitar Velocidad Frontal",
    
    // Tooltips
    tooltips: {
      ground_pound_dive_change_direction_on:"Qué tan rápido se reproduce la animación",
      special_triple_jump_animation_speedup: "Qué tan rápido se reproduce la animación",
"dive_y_vel": "La fuerza inicial hacia arriba o abajo al comenzar un picado.",
    "dive_velocity": "Multiplicador de empuje horizontal base para el picado.",
    "dive_max_velocity": "La velocidad máxima permitida durante el estado de picado.",
    "single_jump_animation": "Cambia el estilo visual de tu primer salto.",
    "triple_jump_animation": "Cambia el estilo visual de tu tercer salto consecutivo.",
      walkingSpeed: "Que tan rapido camina tu personaje. 100% es velocidad normal.",
      swimmingSpeed: "Que tan rapido nada tu personaje. 100% es velocidad normal.",
      inAirSpeed: "Cuanto control tienes en el aire. Valores altos = mas control.",
      gravity: "Que tan rapido cae tu personaje. Valores altos = caida mas rapida.",
      fallGravity: "Gravedad aplicada especificamente al caer.",
      jumpStrength: "Multiplicador de altura de salto. Afecta todos los tipos de salto.",
      doubleJumpStrength: "Altura del segundo salto en un combo.",
      tripleJumpStrength: "Altura del tercer salto en un combo.",
      longJumpStrength: "Altura y distancia del salto largo (Z+A mientras corres).",
      backFlipStrength: "Altura de la voltereta atras (A agachado y moviéndose hacia atras).",
      sideFlipStrength: "Altura de la voltereta lateral (A mientras giras rapidamente).",
      disableDoubleJump: "Evita que el personaje haga un segundo salto.",
      glideDive: "Permite planear por el aire como volando. Ideal para personajes aereos.",
      groundPoundJump: "Salta inmediatamente despues de un golpe al suelo para mayor altura.",
      wallSlide: "Deslizate lentamente por las paredes y salta de ellas repetidamente.",
      yoshiFlutter: "Patalea rapidamente en el aire para ganar altura extra, como Yoshi.",
      mrLJump: "El salto alto de Luigi con menos control aereo, de Super Paper Mario.",
      superSideFlip: "Voltereta lateral mejorada con mas altura y momentum.",
      inAirJump: "Numero de saltos extra que puedes hacer en el aire.",
      waftFart: "El ataque de pedo cargado de Wario que te lanza hacia arriba.",
      peelOut: "Carga velocidad mientras estas quieto, luego suelta para un impulso.",
      sonicDash: "Carga y suelta un dash poderoso hacia adelante.",
      dropDash: "Aterriza de un salto girando para ganar velocidad inmediata.",
      fireImmunity: "El personaje no puede ser quemado por fuego o lava.",
      invincible: "El personaje no recibe dano de ninguna fuente.",
      disableBreathHeal: "Evita curarse al salir del agua.",
      noFallDamage: "Sin dano por caer de lugares altos.",
      oneHitKO: "El personaje muere de un golpe sin importar la salud.",
      knockbackResistance: "Cuanto resistes ser empujado al ser golpeado.",
      coinHealMultiplier: "Cuanta salud restauran las monedas.",
      waterDamage: "Multiplicador de dano por ahogamiento.",
      lavaDamage: "Multiplicador de dano por lava.",
      explodeOnDeath: "El personaje explota al morir, danando enemigos cercanos.",
      longJumpTripleJump: "Después de un salto largo, al presionar A se realiza un triple salto",
      groundPoundDive: "Te permite realizar un picado directamente desde un golpe al suelo.",
      sonicJump: "Un salto especializado que conserva mejor el impulso a altas velocidades.",
      backFlipTwirling: "Inicia un giro de descenso lento después de una voltereta atrás.",
      sideFlipTwirling: "Inicia un giro de descenso lento después de una voltereta lateral.",
      tripleJumpTwirling: "Inicia un giro de descenso lento después de un triple salto.",
      twirlingGroundPound: "Realiza un golpe al suelo mientras estás girando.",
      twirlingDive: "Realiza un picado mientras estás girando.",
      fastTwirling: "Aumenta la velocidad de rotación y respuesta al girar.",
      twirlingGravity: "Ajusta la gravedad mientras giras. Menor valor = más flotabilidad.",
      twirlingSpeed: "Multiplicador de velocidad horizontal durante el giro.",
      burningDamage: "Multiplicador de daño recibido mientras el personaje está en llamas.",
      badGasDamage: "Multiplicador de daño en áreas con gas tóxico.",
      waterEnemyDamage: "Multiplicador de daño de enemigos acuáticos.",
      piranhaPlantDamage: "Multiplicador de daño de Plantas Piraña.",
      goombaDamage: "Multiplicador de daño de Goombas.",
      flyingEnemyDamage: "Multiplicador de daño de enemigos voladores.",
      batDamage: "Multiplicador de daño de murciélagos.",
      kickDive: "Permite patear durante una animación de picado.",
      diveKick: "Permite picar durante una animación de patada.",
      diveGroundPound: "Permite realizar un golpe al suelo mientras buceas/picas.",
      alwaysDiveFirst: "Asegura que presionar B en el aire resulte siempre en un picado.",
      saultubeJumpAnimation: "Cambia las animaciones de salto por una voltereta rodante.",
      killToad: "Permite atacar y eliminar a los NPCs Toad.",
      killPinkBobomb: "Permite atacar y eliminar a los Bob-ombs rosas aliados.",
dive_angle_speed: "Qué tan rápido puede girar el personaje mientras hace un picado.",
all_jumps_angle_speed: "Velocidad de giro aplicada a todos los saltos.",
basic_jump_angle_speed: "Velocidad de giro para el salto básico.",
special_jump_angle_speed: "Velocidad de giro para saltos especiales.",
special_triple_jump_on: "Habilita o deshabilita el triple salto especial.",
disable_special_triple_jump_bounce: "Evita el rebote después de un triple salto especial.",
      honeyQueenFly: "Habilita un vuelo inspirado en Honey Queen. Mantén el botón de salto en el aire para volar.",
      honeyQueenFlyRenderCap: "Muestra la gorra alada mientras se usa el vuelo de Honey Queen.",
      honeyQueenMaxFlyTimer: "Tiempo máximo que puedes volar antes de que la habilidad termine.",
      honeyQueenRenderHud: "Muestra un indicador HUD mientras el vuelo de Honey Queen está activo.",
      honeyQueenFlyAnimation: "Animación reproducida durante el vuelo de Honey Queen.",
      honeyQueenFlyForwardSpeed: "Velocidad horizontal durante el vuelo de Honey Queen, en porcentaje.",
      honeyQueenFlyStrength: "Velocidad vertical (elevación) durante el vuelo de Honey Queen, en porcentaje.",
      umbrellaGlide: "Activa un planeo lento usando un paraguas. Mantén el botón de salto en el aire para activarlo.",
      umbrellaAnimation: "La animación reproducida mientras planeas con el paraguas.",
      umbrellaElement: "Elemento aplicado al ataque de planeo con paraguas. Afecta el tipo de daño o efecto sobre los enemigos al contacto.",
      umbrellaMaxTimer: "Tiempo máximo de planeo con paraguas. Pon 999 para ilimitado.",
      umbrellaVerticalSpeed: "Qué tan rápido desciende al planear con el paraguas.",
      umbrellaForwardSpeed: "Velocidad horizontal durante el planeo con paraguas.",
      umbrellaCapsForwardSpeed: "Cuando está activado, limita la velocidad horizontal a 20 durante el planeo.",
    }
  },
  
  pt: {
    "dive_y_vel": "Velocidade Vertical do Mergulho",
  "dive_velocity": "Poder do Mergulho",
  "dive_max_velocity": "Limite de Velocidade do Mergulho",
        animation: "Animação",
      single_jump_animation: "Animação de Pulo Simples",
  triple_jump_animation: "Animação de Pulo Triplo",
  dive_angle_speed: "Velocidade de Giro do Mergulho",
  all_jumps_angle_speed: "Velocidade de Giro dos Pulos",
  basic_jump_angle_speed: "Velocidade de Giro do Pulo Básico",
  special_jump_angle_speed: "Velocidade de Giro do Pulo Especial",
  special_triple_jump_on: "Ativar Pulo Triplo Especial",
  disable_special_triple_jump_bounce: "Desativar Rebate do Pulo Triplo",

    // Header
    title: "Easy Custom Moveset",
    subtitle: "Gerador de Moveset",
    
    // Hero
    heroTitle: "Crie Seu Personagem Personalizado",
    heroDescription: "Configure movesets unicos para seus personagens de SM64 Coop. Ajuste habilidades, multiplicadores de dano e resistencias para criar o estilo de jogo perfeito.",
    
    // Footer
    footer: "Feito para a comunidade SM64 Coop. Nao afiliado com a Nintendo.",
    
    // Form sections
    characterConfig: "Config do Personagem",
    quickPresets: "Presets Rapidos",
    characterName: "Nome do Personagem",
    enterCharacterName: "Digite o nome do personagem",
    movesetDescription: "Descrição do Moveset",
    // Categories
    movement: "Movimento",
    jumps: "Pulos",
    specialAbilities: "Habilidades Especiais",
    sonicAbilities: "Habilidades do Sonic",
    twirling: "Giros",
    dive: "Mergulho",
    damageResistance: "Dano e Resistencia",
    otherOptions: "Outras Opcoes",
    
    // Movement stats
    walkingSpeed: "Velocidade ao Andar",
    swimmingSpeed: "Velocidade ao Nadar",
    inAirSpeed: "Velocidade no Ar",
    gravity: "Gravidade",
    fallGravity: "Gravidade ao Cair",
       
    // Jump stats
    jumpStrength: "Forca do Pulo",
    doubleJumpStrength: "Forca do Pulo Duplo",
    tripleJumpStrength: "Forca do Pulo Triplo",
    longJumpStrength: "Forca do Pulo Longo",
    backFlipStrength: "Forca do Mortal para Tras",
    sideFlipStrength: "Forca do Mortal Lateral",
    disableDoubleJump: "Desativar Pulo Duplo",
    
    // Special abilities
    glideDive: "Mergulho Planador",
    groundPoundJump: "Pulo de Socao no Chao",
    wallSlide: "Deslizar na Parede",
    yoshiFlutter: "Flutter do Yoshi",
    mrLJump: "Pulo Mr L (Luigi)",
    superSideFlip: "Super Mortal Lateral",
    inAirJumps: "Pulos no Ar",
    waftFart: "Peido Waft (Wario)",
    longJumpTripleJump: "Pulo Triplo do Pulo Longo",
    groundPoundDive: "Mergulho do Socao no Chao",
    
    // Sonic abilities
    peelOut: "Peel Out",
    sonicJump: "Pulo Sonic",
    chargeSonicDash: "Dash Sonic Carregado",
    dropDash: "Drop Dash",
    
    // Twirling
    backFlipTwirling: "Giro no Mortal para Tras",
    sideFlipTwirling: "Giro no Mortal Lateral",
    tripleJumpTwirling: "Giro no Pulo Triplo",
    twirlingGroundPound: "Socao no Chao Girando",
    twirlingDive: "Mergulho Girando",
    fastTwirling: "Giro Rapido",
    twirlingGravity: "Gravidade do Giro",
    twirlingSpeed: "Velocidade do Giro",
    
    // Damage & Resistance
    fireImmunity: "Imunidade ao Fogo",
    invincible: "Invencivel",
    disableBreathHeal: "Desativar Cura por Respirar",
    noFallDamage: "Sem Dano de Queda",
    oneHitKO: "Morte de Um Golpe",
    explodeOnDeath: "Explodir ao Morrer",
    knockbackResistance: "Resistencia ao Empurrao",
    coinHealMultiplier: "Multiplicador de Cura por Moedas",
    waterDamage: "Dano por Agua",
    lavaDamage: "Dano por Lava",
    burningDamage: "Dano por Queimadura",
    badGasDamage: "Dano por Gas Toxico",
    waterEnemyDamage: "Dano de Inimigos da Agua",
    piranhaPlantDamage: "Dano da Planta Piranha",
    goombaDamage: "Dano do Goomba",
    flyingEnemyDamage: "Dano de Inimigos Voadores",
    batDamage: "Dano de Morcego",
    
    // Other options
    kickDive: "Chute Mergulho",
    diveKick: "Mergulho com Chute",
    diveGroundPound: "Mergulho para Socao no Chao",
    alwaysDiveFirst: "Sempre Mergulhar Primeiro",
    saultubeJumpAnimation: "Animacao de Pulo Saultube",
    killToad: "Matar Toad",
    killPinkBobomb: "Matar Bob-omb Rosa",
    
    // Moveset description
    optional: "opcional",
    noGameplayEffect: "Sem efeito no gameplay",

    // Advanced settings translations
    advancedSettings: "Configurações Avançadas",
    forwardVelocity: "Velocidade Frontal",
    slowdown: "Desaceleração",
    angleSpeed: "Velocidade de Ângulo",
    minForwardSpeed: "Velocidade Mínima para Parar",
    maxTime: "Tempo Máximo",
    yVelocity: "Velocidade Y",
    renderWithWingCap: "Renderizar com Wing Cap",
    disableSpin: "Desativar Giro",

    // Ground pound jump settings
    strength: "Forca",
    groundPoundJumpDive: "Mergulho do Pulo de Socao",

    // Wall slide settings
    maxGravity: "Gravidade Maxima",
    jumpForwardVelocity: "Velocidade Frontal do Pulo",
    sameWallJump: "Pulo na Mesma Parede",

    // Yoshi flutter settings
    cooldown: "Tempo de Espera",
    strengthDescending: "Forca (Descendo)",
    strengthAscending: "Forca (Subindo)",
    maxYVelocity: "Velocidade Y Maxima",
    reactivations: "Reativacoes",
    speed: "Velocidade",

    // Mr L settings
    airSpeed: "Velocidade no Ar",
    playAnticipationAudio: "Reproduzir Audio de Anticipacao",

    // Super side flip settings
    convertForwardVelocity: "Converter Velocidade Frontal",
    addForwardVelocity: "Adicionar Velocidade Frontal",
    kickStrength: "Forca do Chute",
    minVelocity: "Velocidade Minima",

    // In air jump settings
    forwardVelMultiplier: "Multiplicador de Vel. Frontal",
    forwardVelSlowdown: "Desaceleracao de Vel. Frontal",

    // Waft fart settings
    velocity: "Velocidade",
    perLevel: "Por Nivel",

    // Peel out settings
    maxVelocity: "Velocidade Maxima",
    jumpResetVelocity: "Resetar Velocidade ao Pular",

    // Sonic dash settings
    slowdownWater: "Desaceleracao (Agua)",
    slowdownLava: "Desaceleracao (Lava)",

    // Drop dash settings
    chargeVelocity: "Velocidade de Carga",

    // Generated config
    generatedConfig: "Config Gerada",

    // Action buttons
// Action buttons
    downloadConfig: "Baixar Configuração",
    
    // Instructions
    howToUse: "Como Usar",
    instruction0: "Preencha o campo de nome; deve ser o mesmo que aparece no menu de Seleção de Personagem",
    instruction1: "Configure o restante das opções para o seu personagem",
    instruction2: "Baixe o arquivo de configuração Lua gerado sem renomear o arquivo",
    instruction3: "Coloque o arquivo na pasta mods/Easy-Custom-Movesets/moveset_configs",
    instruction4: "Ative 'Character Select', 'Easy Custom Moveset' e o mod do seu personagem dentro do jogo",
    instruction5: "Selecione seu personagem e jogue!",
    shareWithCommunity: "Compartilhe com comunidade",
    importFile:"Importar",
    
    // Language & Visibility
    language: "Idioma",
    showCode: "Mostrar Código",
    hideCode: "Esconder Código",
    hideShowInstructions: "Esconder Instruções de Instalação",
    showInstruction: "Mostrar Instruções de Instalação",
    special_triple_jump_animation_speedup: "Acelerar Animação do Salto Triplo Especial",
    ground_pound_dive_change_direction_on:"Controle de direção do mergulho após ground pound",

    // Honey Queen Fly
    honeyQueenFly: "Voo da Honey Queen",
    honeyQueen_fly_render_cap: "Renderizar Boné Alado",
    honeyQueen_max_fly_timer: "Tempo Máximo de Voo",
    honeyQueen_render_hud: "Mostrar HUD",
    honeyQueen_fly_animation: "Animação de Voo",
    honeyQueen_fly_forward_speed: "Velocidade Frontal",
    honeyQueen_fly_strength: "Força de Voo",

    // Umbrella Glide
    umbrellaGlide: "Planar com Guarda-chuva",
    chaorrin_umbrella_animation: "Animação do Guarda-chuva",
    chaorrin_umbrella_element: "Elemento",
    chaorrin_umbrella_max_timer: "Tempo Máximo de Planagem",
    chaorrin_umbrella_vertical_speed: "Velocidade de Descida Vertical",
    chaorrin_umbrella_glide_forward_speed: "Velocidade de Avanço ao Planar",
    chaorrin_umbrella_caps_foward_speed: "Limitar Velocidade Frontal",

    // Tooltips
    tooltips: {
      ground_pound_dive_change_direction_on:"Permite mudar o ângulo após o mergulho depois do ground pound",
      special_triple_jump_animation_speedup: "O quanto mais rápida a animação é reproduzida",
      "dive_y_vel": "A força inicial para cima/baixo ao iniciar um mergulho.",
    "dive_velocity": "Multiplicador base de impulso horizontal para o mergulho.",
    "dive_max_velocity": "A velocidade máxima permitida durante o estado de mergulho.",
      walkingSpeed: "Quao rapido seu personagem anda. 100% e velocidade normal.",
      swimmingSpeed: "Quao rapido seu personagem nada. 100% e velocidade normal.",
      inAirSpeed: "Quanto controle voce tem no ar. Valores altos = mais controle.",
      gravity: "Quao rapido seu personagem cai. Valores altos = queda mais rapida.",
      fallGravity: "Gravidade aplicada especificamente ao cair.",
      jumpStrength: "Multiplicador de altura do pulo. Afeta todos os tipos de pulo.",
      doubleJumpStrength: "Altura do segundo pulo em um combo.",
      tripleJumpStrength: "Altura do terceiro pulo em um combo.",
      longJumpStrength: "Altura e distancia do pulo longo (Z+A enquanto corre).",
      backFlipStrength: "Altura do mortal para tras (A agachado e movendo para tras).",
      sideFlipStrength: "Altura do mortal lateral (A enquanto vira rapidamente).",
      disableDoubleJump: "Impede o personagem de fazer um segundo pulo.",
      glideDive: "Permite mergulhar e planar pelo ar como voando. Otimo para personagens aereos.",
      groundPoundJump: "Pule imediatamente apos um socao no chao para altura extra.",
      wallSlide: "Deslize lentamente nas paredes e pule delas repetidamente.",
      yoshiFlutter: "Chute as pernas rapidamente no ar para ganhar altura extra, como Yoshi.",
      mrLJump: "O pulo alto do Luigi com menos controle aereo, de Super Paper Mario.",
      superSideFlip: "Mortal lateral melhorado com mais altura e momentum.",
      inAirJump: "Numero de pulos extras que voce pode fazer no ar.",
      waftFart: "O ataque de peido carregado do Wario que te lanca para cima.",
      peelOut: "Carregue velocidade parado, depois solte para um impulso.",
      sonicDash: "Carregue e solte um dash poderoso para frente.",
      dropDash: "Aterrisse de um pulo girando para ganhar velocidade imediata.",
      fireImmunity: "O personagem nao pode ser queimado por fogo ou lava.",
      invincible: "O personagem nao recebe dano de nenhuma fonte.",
      disableBreathHeal: "Impede cura ao sair da agua.",
      noFallDamage: "Sem dano por cair de lugares altos.",
      oneHitKO: "O personagem morre de um golpe independente da saude.",
      knockbackResistance: "Quanto voce resiste ser empurrado ao ser atingido.",
      coinHealMultiplier: "Quanta saude as moedas restauram.",
      waterDamage: "Multiplicador de dano por afogamento.",
      lavaDamage: "Multiplicador de dano por lava.",
      explodeOnDeath: "O personagem explode ao morrer, danificando inimigos proximos.",
      longJumpTripleJump: "Depois de um long jump, apertando A é feito um triple jump",
      groundPoundDive: "Permite transicionar para um mergulho diretamente de um socão no chão.",
      sonicJump: "Um pulo especializado que preserva melhor o momento em alta velocidade.",
      backFlipTwirling: "Inicia um giro de descida lenta após um mortal para trás.",
      sideFlipTwirling: "Inicia um giro de descida lenta após um mortal lateral.",
      tripleJumpTwirling: "Inicia um giro de descida lenta após um pulo triplo.",
      twirlingGroundPound: "Realiza um socão no chão enquanto está girando.",
      twirlingDive: "Realiza um mergulho enquanto está girando.",
      fastTwirling: "Aumenta a velocidade de rotação e resposta de movimento ao girar.",
      twirlingGravity: "Ajusta a gravidade enquanto gira. Menor = mais flutuante.",
      twirlingSpeed: "Multiplicador de velocidade horizontal durante o giro.",
      burningDamage: "Multiplicador de dano enquanto o personagem está pegando fogo.",
      badGasDamage: "Multiplicador de dano em salas com gás tóxico.",
      waterEnemyDamage: "Multiplicador de dano de inimigos aquáticos.",
      piranhaPlantDamage: "Multiplicador de dano de Plantas Piranha.",
      goombaDamage: "Multiplicador de dano de Goombas.",
      flyingEnemyDamage: "Multiplicador de dano de inimigos voadores.",
      batDamage: "Multiplicador de dano de morcegos.",
      kickDive: "Permite realizar um chute durante a animação de mergulho.",
      diveKick: "Permite realizar um mergulho durante a animação de chute.",
      diveGroundPound: "Permite ativar um socão no chão durante o mergulho.",
      alwaysDiveFirst: "Garante que apertar B no ar sempre resulte em mergulho em vez de chute.",
      saultubeJumpAnimation: "Substitui animações de pulo por uma animação de rolamento.",
      killToad: "Permite atacar e derrotar os NPCs Toad.",
      killPinkBobomb: "Permite atacar e derrotar os Bob-ombs Rosa amigáveis.",
      dive_angle_speed: "Quão rápido o personagem pode girar/mudar direção durante o mergulho.",
all_jumps_angle_speed: "Velocidade de rotação aplicada a todos os pulos.",
basic_jump_angle_speed: "Velocidade de rotação especificamente para o salto básico.",
special_jump_angle_speed: "Velocidade de rotação especificamente para pulos especiais.",
special_triple_jump_on: "Ativa ou desativa o pulo triplo especial.",
disable_special_triple_jump_bounce: "Impede o personagem de quicar após um pulo triplo especial.",
single_jump_animation: "Animação usada para pulos simples. Padrão ou especial.",
triple_jump_animation: "Animação usada para pulos triplos. Padrão, especial ou special_v2.",
      honeyQueenFly: "Ativa uma habilidade de voo inspirada na Honey Queen. Segure o botão de pulo no ar para voar.",
      honeyQueenFlyRenderCap: "Renderiza o boné alado enquanto usa o voo da Honey Queen.",
      honeyQueenMaxFlyTimer: "Tempo máximo que você pode voar antes da habilidade encerrar.",
      honeyQueenRenderHud: "Exibe um indicador HUD enquanto o voo da Honey Queen está ativo.",
      honeyQueenFlyAnimation: "Animação reproduzida durante o voo da Honey Queen.",
      honeyQueenFlyForwardSpeed: "Velocidade horizontal durante o voo da Honey Queen, em porcentagem.",
      honeyQueenFlyStrength: "Velocidade vertical (sustentação) durante o voo da Honey Queen, em porcentagem.",
      umbrellaGlide: "Ativa uma planagem lenta usando um guarda-chuva. Segure o botão de pulo no ar para ativar.",
      umbrellaAnimation: "A animação reproduzida durante a planagem com guarda-chuva.",
      umbrellaElement: "Elemento aplicado ao ataque de planagem com guarda-chuva. Afeta o tipo de dano ou efeito nos inimigos ao contato.",
      umbrellaMaxTimer: "Tempo máximo de planagem com guarda-chuva. Coloque 999 para ilimitado.",
      umbrellaVerticalSpeed: "Quão rápido você desce durante a planagem com guarda-chuva.",
      umbrellaForwardSpeed: "Velocidade horizontal durante a planagem com guarda-chuva.",
      umbrellaCapsForwardSpeed: "Quando ativado, limita a velocidade horizontal a 20 durante a planagem.",
    }
  },
}

export type TranslationKeys = keyof typeof translations.en
