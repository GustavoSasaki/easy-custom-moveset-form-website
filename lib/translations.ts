export type Language = "en" | "es" | "pt"

export const translations = {
  en: {
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
    characterName: "Character Name (Case Sensitive)",
    enterCharacterName: "Enter character name",
    
    // Categories
    movement: "Movement",
    jumps: "Jumps",
    specialAbilities: "Special Abilities",
    sonicAbilities: "Sonic Abilities",
    twirling: "Twirling",
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
    instruction0: "Fill the name field, it should be the same as in Chracter Select menu (Case Sensitive)",
    instruction1: "Configure the rest of the options for your character",
    instruction2: "Download the generated Lua config file without renaming the file",
    instruction3: "Place the file in  mods/Easy-Custom-Movesets/moveset_configs folder",
    instruction4: "Enable Chracter Select, Easy Custom Moveset and your Character mod in-game",
    instruction5: "Select your character and play!",
    
    // Language
    language: "Language",
    
    // Code preview
    showCode: "Show Code",
    hideCode: "Hide Code",

    hideShowInstructions: "Hide How to Install",
    showInstruction: "Show How to Install",
    
    // Tooltips - Add your descriptions here
    tooltips: {
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
      groundPoundDive: "Dive forward during a ground pound.",
      
      // Sonic Abilities
      peelOut: "Charge up speed while standing still, then release for a burst of speed.",
      sonicDash: "Charge and release a powerful forward dash.",
      dropDash: "Land from a jump while spinning to immediately gain speed.",
      
      // Twirling
      backFlipTwirling: "After a backflip start spin with slower descent.",
      sideFlipTwirling: "After a sideflip start spin with slower descent.",
      tripleJumpTwirling: "After a triple jump start spin with slower descent.",
      
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
    },
  },
  
  es: {
    // Header
    title: "Easy Custom Moveset",
    subtitle: "Generador de Movesets",
    
    // Hero
    heroTitle: "Crea Tu Personaje Personalizado",
    heroDescription: "Configura movesets unicos para tus personajes de SM64 Coop. Ajusta habilidades, multiplicadores de dano y resistencias para crear el estilo de juego perfecto.",
    
    // Footer
    footer: "Hecho para la comunidad de SM64 Coop. No afiliado con Nintendo.",
    
    // Form sections
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
    movesetDescription: "Descripcion del Moveset",
    optional: "opcional",
    noGameplayEffect: "Sem Efeito no Gameplay",
    
    // Advanced settings
    advancedSettings: "Configuracion Avanzada",
    
    // Glide dive settings
    forwardVelocity: "Velocidad Frontal",
    slowdown: "Desaceleración de Velocidad",
    angleSpeed: "Velocidad de Angulo",
    minForwardSpeed: "Velocidad mínima de Avance antes de Detenerse",
    maxTime: "Tiempo Máximo Antes de Parar",
    yVelocity: "Velocidad Y",
    renderWithWingCap: "Renderizar con Wing Cap",
    disableSpin: "Desactivar Animación de Giro",
    
    // Ground pound jump settings
    strength: "Fuerza",
    groundPoundJumpDive: "Picada desde Salto de Golpe",
    
    // Wall slide settings
    maxGravity: "Gravedad Maxima",
    jumpForwardVelocity: "Velocidad Frontal del Salto",
    sameWallJump: "Salto en Misma Pared",
    
    // Yoshi flutter settings
    cooldown: "Tiempo de Espera",
    strengthDescending: "Fuerza (Descendiendo)",
    strengthAscending: "Fuerza (Ascendiendo)",
    maxYVelocity: "Velocidad Y Maxima",
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
    downloadConfig: "Descargar Config",
    
    // Instructions
    howToUse: "Como Usar",
    instruction1: "Configura tu personaje usando las opciones de arriba",
    instruction2: "Descarga el archivo de configuracion Lua generado",
    instruction3: "Coloca el archivo en tu carpeta de mods de SM64 Coop",
    instruction4: "Activa el mod Easy Custom Moveset en el juego",
    instruction5: "Selecciona tu personaje y juega!",
    
    // Language
    language: "Idioma",
    
    // Code preview
    showCode: "Mostrar Codigo",
    hideCode: "Ocultar Codigo",
    
    // Tooltips
    tooltips: {
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
    },
  },
  
  pt: {
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
    
    // Categories
    movement: "Movimento",
    jumps: "Pulos",
    specialAbilities: "Habilidades Especiais",
    sonicAbilities: "Habilidades do Sonic",
    twirling: "Giros",
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
    movesetDescription: "Descricao do Moveset",
    optional: "opcional",
    noGameplayEffect: "ningún efecto en el juego",
    
    // Advanced settings
    advancedSettings: "Configuracoes Avancadas",
    
    // Glide dive settings
    forwardVelocity: "Velocidade Frontal",
    slowdown: "Desaceleracao de Velocidade",
    angleSpeed: "Velocidade do Angulo",
    minForwardSpeed: "Velocidade Minima Frontal Antes de Parar",
    maxTime: "Tempo Máximo Antes de Parar",
    yVelocity: "Velocidade Y",
    renderWithWingCap: "Renderizar com Wing Cap",
    disableSpin: "Desativar Animação de Giro",
    
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
    downloadConfig: "Baixar Config",
    
    // Instructions
    howToUse: "Como Usar",
    instruction1: "Configure seu personagem usando as opcoes acima",
    instruction2: "Baixe o arquivo de configuracao Lua gerado",
    instruction3: "Coloque o arquivo na pasta de mods do SM64 Coop",
    instruction4: "Ative o mod Easy Custom Moveset no jogo",
    instruction5: "Selecione seu personagem e jogue!",
    
    // Language
    language: "Idioma",
    
    // Code preview
    showCode: "Mostrar Codigo",
    hideCode: "Ocultar Codigo",
    
    // Tooltips
    tooltips: {
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
    },
  },
}

export type TranslationKeys = keyof typeof translations.en
