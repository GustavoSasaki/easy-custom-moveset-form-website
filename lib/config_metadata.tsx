export interface CharacterConfig {
  name: string
  // Movement
  swimming_speed: number
  gravity: number
  fall_gravity: number
  airborne_deceleration_speed: number
  walking_speed: number
  in_air_speed: number
  hold_walking_speed: number
  crawling_speed: number
  grounded_slowing_speed: number
  // Jumps
  jump_strength: number
  single_jump_strength: number
  double_jump_strength: number
  triple_jump_strength: number
  back_flip_strength: number
  side_flip_strength: number
  long_jump_strength: number
  kick_jump_strength: number
  disable_double_jump: boolean
  // Dive
  dive_y_vel: number
  dive_velocity: number
  dive_max_velocity: number
  always_dive_first: boolean
  // Ground Pound Dive
  ground_pound_dive_on: boolean
  ground_pound_dive_y_vel: number
  ground_pound_dive_forward_vel: number
  // Long Jump
  long_jump_velocity_multiplier: number
  long_jump_max_velocity: number
  // Mr L Jump
  mr_l_jump_on: boolean
  mr_l_jump_strength: number
  mr_l_gravity: number
  mr_l_air_speed: number
  play_mr_l_anticipation_audio: boolean
  // Twirling
  back_flip_twirling_on: boolean
  side_flip_twirling_on: boolean
  triple_jump_twirling_on: boolean
  triple_jump_twirling_when: string
  twirling_ground_pound_on: boolean
  twirling_dive_on: boolean
  twirling_gravity: number
  fast_twirling_on: boolean
  fast_twirling_gravity: number
  twirling_speed: number
  disable_twirling_land: boolean
  // Ground Pound
  ground_pound_antecipation_speed_up: string
  ground_pound_gravity: number
  ground_pound_max_y_vel: number
  ground_pound_shake: number
  // Ground Pound Jump
  ground_pound_jump_on: boolean
  ground_pound_jump_strength: number
  ground_pound_jump_forward_vel: number
  ground_pound_jump_dive_on: boolean
  // Waft Fart
  waft_fart_on: boolean
  waft_fart_velocity: number
  waft_fart_strength: number
  waft_fart_per_level: number
  // Glide Dive
  glide_dive_on: boolean
  glide_dive_forward_vel: number
  glide_dive_slowdown: number
  glide_dive_angle_speed: number
  glide_dive_min_forward_speed: number
  glide_dive_max_time: number
  glide_dive_y_vel: number
  glide_dive_render_with_wing_cap: boolean
  glide_dive_disable_spin: boolean
  // Wall Slide
  wall_slide_on: boolean
  wall_slide_gravity: number
  wall_slide_max_gravity: number
  wall_slide_jump_forward_vel: number
  wall_slide_jump_strength: number
  wall_slide_same_wall: boolean
  // In Air Jump
  in_air_jump: number
  in_air_jump_strength: number
  in_air_jump_forward_vel_multiplier: number
  in_air_jump_forward_vel_slowdown: number
  in_air_jump_forward_vel: number
  // Super Side Flip
  super_side_flip_on: boolean
  super_side_flip_strength: number
  super_side_flip_convert_foward_vel: number
  super_side_flip_add_foward_vel: number
  super_side_flip_kick_strength: number
  super_side_flip_gravity: number
  super_side_flip_max_gravity: number
  super_side_flip_min_velocity: number
  // Long Jump Triple Jump
  long_jump_triple_jump_on: boolean
  long_jump_triple_jump_strength: number
  long_jump_triple_jump_add_forward_vel: number
  // Yoshi Flutter
  yoshi_flutter_on: boolean
  yoshi_flutter_angle_speed: number
  yoshi_flutter_cooldown: number
  yoshi_flutter_stength_descending: number
  yoshi_flutter_stength_ascending: number
  yoshi_flutter_max_y_vel: number
  yoshi_flutter_reactivations: number
  yoshi_flutter_speed: number
  yoshi_flutter_max_time: number
  // Peel Out
  peel_out_on: boolean
  peel_out_max_vel: number
  peel_out_slowdown: number
  peel_out_jump_reset_vel: boolean
  // Sonic Jump
  sonic_jump_on: boolean
  sonic_jump_strength: number
  sonic_jump_add_forward_vel: number
  // Sonic Dash
  charge_sonic_dash_on: boolean
  sonic_dash_max_vel: number
  sonic_dash_slowdown: number
  sonic_dash_slowdown_water: number
  sonic_dash_slowdown_lava: number
  sonic_dash_angle_speed: number
  // Drop Dash
  drop_dash_on: boolean
  drop_dash_charge_vel: number
  drop_dash_gravity: number
  // Damage
  bad_gas_damage_multiplier: number
  water_damage_multiplier: number
  snow_water_damage_multiplier: number
  burning_damage_multiplier: number
  lava_damage_multiplier: number
  water_enemy_damage_multiplier: number
  piranha_plant_damage_multiplier: number
  flying_enemy_damage_multiplier: number
  goomba_damage_multiplier: number
  bat_damage_multiplier: number
  // Resistances
  disable_burning: boolean
  disable_damage: boolean
  disable_breath_heal: boolean
  disable_fall_damage: boolean
  disable_coin_heal: boolean
  knockback_resistance: number
  coin_heal_multiplier: number
  one_hit: boolean
  // Other
  explode_on_death: boolean
  kick_dive_on: boolean
  dive_kick_on: boolean
  dive_ground_pound_on: boolean
  saultube_jump_animation: boolean
  kill_toad: boolean
  kill_pink_bomb_on: boolean,
  dive_angle_speed: number

  all_jumps_angle_speed: number; 
  basic_jump_angle_speed: number; 
  special_jump_angle_speed: number; 
  special_triple_jump_on: boolean; 
  disable_special_triple_jump_bounce: boolean; 
  single_jump_animation: string; 
  triple_jump_animation: string;
  special_triple_jump_animation_speedup: number;
  ground_pound_dive_change_direction_on: boolean;
  // Moveset
  moveset_description: string
}

export type Configtype = { 
  default: string | number | boolean; 
  min?: number; 
  max?: number; 
  step?: number; 
  options?: string[]; 
  isNew?: boolean; 
}

export const CONFIG_METADATA: Record<keyof CharacterConfig, Configtype> = {
  // --- Movement & Physics ---
  name: { default: "", options: [] }, // Basic string field
  swimming_speed: { default: 100, min: 0, max: 250, step: 1 },
  gravity: { default: 100, min: 20, max: 250, step: 1 },
  fall_gravity: { default: 100, min: 20, max: 250, step: 1 },
  airborne_deceleration_speed: { default: 100, min: 0, max: 200, step: 1 },
  walking_speed: { default: 100, min: 10, max: 250, step: 1 },
  in_air_speed: { default: 100, min: 10, max: 250, step: 1 },
  hold_walking_speed: { default: 100, min: 10, max: 200, step: 1 },
  crawling_speed: { default: 100, min: 0, max: 150, step: 1 },
  grounded_slowing_speed: { default: 100, min: 0, max: 200, step: 1 },

  // --- Jumps ---
  jump_strength: { default: 100, min: 50, max: 200, step: 1 },
  single_jump_strength: { default: 100, min: 50, max: 200, step: 1 },
  double_jump_strength: { default: 100, min: 50, max: 200, step: 1 },
  triple_jump_strength: { default: 100, min: 50, max: 200, step: 1 },
  back_flip_strength: { default: 100, min: 50, max: 200, step: 1 },
  side_flip_strength: { default: 100, min: 50, max: 200, step: 1 },
  long_jump_strength: { default: 100, min: 50, max: 200, step: 1 },
  kick_jump_strength: { default: 100, min: 50, max: 200, step: 1 },
  disable_double_jump: { default: false },

  // --- Dive & Ground Pound ---
  dive_y_vel: { default: 0, min: -20, max: 40, step: 1 },
  dive_velocity: { default: 100, min: 50, max: 250, step: 1 },
  dive_max_velocity: { default: 100, min: 50, max: 250, step: 1 },
  dive_angle_speed: { default: 0, min: 0, max: 100, step: 1, isNew: true },
  always_dive_first: { default: false },
  ground_pound_dive_on: { default: false },
  ground_pound_dive_y_vel: { default: 0, min: -20, max: 40, step: 1 },
  ground_pound_dive_forward_vel: { default: 100, min: 0, max: 200, step: 1 },
  long_jump_velocity_multiplier: { default: 100, min: 50, max: 200, step: 1 },
  long_jump_max_velocity: { default: 100, min: 50, max: 250, step: 1 },

  // --- Mr. L ---
  mr_l_jump_on: { default: false },
  mr_l_jump_strength: { default: 93, min: 50, max: 200, step: 1 },
  mr_l_gravity: { default: 140, min: 50, max: 250, step: 1 },
  mr_l_air_speed: { default: 60, min: 20, max: 150, step: 1 },
  play_mr_l_anticipation_audio: { default: true },

  // --- Twirling ---
  back_flip_twirling_on: { default: false },
  side_flip_twirling_on: { default: false },
  triple_jump_twirling_on: { default: false },
  triple_jump_twirling_when: { default: "fall", options: ["fall", "jump", "always"] },
  twirling_ground_pound_on: { default: false },
  twirling_dive_on: { default: false },
  twirling_gravity: { default: 100, min: 10, max: 150, step: 1 },
  fast_twirling_on: { default: false },
  fast_twirling_gravity: { default: 100, min: 10, max: 150, step: 1 },
  twirling_speed: { default: 100, min: 50, max: 250, step: 1 },
  disable_twirling_land: { default: false },

  // --- Ground Pound Config ---
  ground_pound_antecipation_speed_up: { default: "zero", options: ["zero", "low", "high"] },
  ground_pound_gravity: { default: 100, min: 50, max: 300, step: 1 },
  ground_pound_max_y_vel: { default: 100, min: 50, max: 250, step: 1 },
  ground_pound_shake: { default: 100, min: 0, max: 250, step: 1 },
  ground_pound_jump_on: { default: false },
  ground_pound_jump_strength: { default: 70, min: 20, max: 150, step: 1 },
  ground_pound_jump_forward_vel: { default: 5, min: 0, max: 50, step: 1 },
  ground_pound_jump_dive_on: { default: false },

  // --- Waft (Wario) ---
  waft_fart_on: { default: false },
  waft_fart_velocity: { default: 100, min: 50, max: 250, step: 1 },
  waft_fart_strength: { default: 93, min: 50, max: 200, step: 1 },
  waft_fart_per_level: { default: 1, min: 1, max: 5, step: 1 },

  // --- Glide Dive ---
  glide_dive_on: { default: false },
  glide_dive_forward_vel: { default: 50, min: 10, max: 150, step: 1 },
  glide_dive_slowdown: { default: 0, min: 0, max: 1, step: 0.05 },
  glide_dive_angle_speed: { default: 75, min: 10, max: 200, step: 1 },
  glide_dive_min_forward_speed: { default: 999, min: 0, max: 1500, step: 10 },
  glide_dive_max_time: { default: 999, min: 10, max: 1500, step: 10 },
  glide_dive_y_vel: { default: -5, min: -20, max: 10, step: 1 },
  glide_dive_render_with_wing_cap: { default: false },
  glide_dive_disable_spin: { default: false },

  // --- Wall Slide ---
  wall_slide_on: { default: false },
  wall_slide_gravity: { default: 0.5, min: 0.1, max: 2.0, step: 0.05 },
  wall_slide_max_gravity: { default: 0.26, min: 0.1, max: 1.5, step: 0.05 },
  wall_slide_jump_forward_vel: { default: 20, min: 0, max: 100, step: 1 },
  wall_slide_jump_strength: { default: 75, min: 20, max: 150, step: 1 },
  wall_slide_same_wall: { default: false },

  // --- Air Jump ---
  in_air_jump: { default: 0, min: 0, max: 5, step: 1 },
  in_air_jump_strength: { default: 42, min: 10, max: 150, step: 1 },
  in_air_jump_forward_vel_multiplier: { default: 0.25, min: 0, max: 1.5, step: 0.05 },
  in_air_jump_forward_vel_slowdown: { default: 0.2, min: 0, max: 1.0, step: 0.05 },
  in_air_jump_forward_vel: { default: 0, min: 0, max: 100, step: 1 },

  // --- Super Side Flip ---
  super_side_flip_on: { default: false },
  super_side_flip_strength: { default: 75, min: 20, max: 200, step: 1 },
  super_side_flip_convert_foward_vel: { default: 100, min: 0, max: 200, step: 1 },
  super_side_flip_add_foward_vel: { default: 20, min: 0, max: 100, step: 1 },
  super_side_flip_kick_strength: { default: 150, min: 50, max: 300, step: 1 },
  super_side_flip_gravity: { default: 75, min: 10, max: 200, step: 1 },
  super_side_flip_max_gravity: { default: 93, min: 10, max: 200, step: 1 },
  super_side_flip_min_velocity: { default: 36, min: 0, max: 100, step: 1 },

  // --- Yoshi Flutter ---
  yoshi_flutter_on: { default: false },
  yoshi_flutter_angle_speed: { default: 90, min: 10, max: 200, step: 1 },
  yoshi_flutter_cooldown: { default: 21, min: 0, max: 60, step: 1 },
  yoshi_flutter_stength_descending: { default: 17, min: 0, max: 50, step: 1 },
  yoshi_flutter_stength_ascending: { default: 6, min: 0, max: 50, step: 1 },
  yoshi_flutter_max_y_vel: { default: 28, min: 5, max: 100, step: 1 },
  yoshi_flutter_reactivations: { default: 2, min: 0, max: 10, step: 1 },
  yoshi_flutter_speed: { default: 1, min: 0.1, max: 5.0, step: 0.1 },
  yoshi_flutter_max_time: { default: 30, min: 5, max: 120, step: 1 },

  // --- Sonic Mechanics ---
  peel_out_on: { default: false },
  peel_out_max_vel: { default: 128, min: 50, max: 250, step: 1 },
  peel_out_slowdown: { default: 0.5, min: 0, max: 2, step: 0.05 },
  peel_out_jump_reset_vel: { default: true },
  sonic_jump_on: { default: false },
  sonic_jump_strength: { default: 60, min: 10, max: 150, step: 1 },
  sonic_jump_add_forward_vel: { default: 10, min: 0, max: 100, step: 1 },
  charge_sonic_dash_on: { default: false },
  sonic_dash_max_vel: { default: 130, min: 50, max: 300, step: 1 },
  sonic_dash_slowdown: { default: 0.5, min: 0, max: 2, step: 0.05 },
  sonic_dash_slowdown_water: { default: 0.5, min: 0, max: 2, step: 0.05 },
  sonic_dash_slowdown_lava: { default: 1.75, min: 0, max: 5, step: 0.05 },
  sonic_dash_angle_speed: { default: 75, min: 10, max: 200, step: 1 },
  drop_dash_on: { default: false },
  drop_dash_charge_vel: { default: 90, min: 10, max: 200, step: 1 },
  drop_dash_gravity: { default: 90, min: 10, max: 200, step: 1 },

  // --- Damage & Resistance ---
  bad_gas_damage_multiplier: { default: 100, min: 0, max: 500, step: 10 },
  water_damage_multiplier: { default: 100, min: 0, max: 500, step: 10 },
  snow_water_damage_multiplier: { default: 100, min: 0, max: 500, step: 10 },
  burning_damage_multiplier: { default: 100, min: 0, max: 500, step: 10 },
  lava_damage_multiplier: { default: 100, min: 0, max: 1000, step: 10 },
  water_enemy_damage_multiplier: { default: 100 },
  piranha_plant_damage_multiplier: { default: 100 },
  flying_enemy_damage_multiplier: { default: 100 },
  goomba_damage_multiplier: { default: 100 },
  bat_damage_multiplier: { default: 100 },
  disable_burning: { default: false },
  disable_damage: { default: false },
  disable_breath_heal: { default: false },
  disable_fall_damage: { default: false },
  disable_coin_heal: { default: false },
  knockback_resistance: { default: 100, min: 0, max: 200, step: 1 },
  coin_heal_multiplier: { default: 100, min: 0, max: 500, step: 10 },
  one_hit: { default: false },
  explode_on_death: { default: false },

  // --- Misc / Logic Toggles ---
  kick_dive_on: { default: false },
  dive_kick_on: { default: false },
  dive_ground_pound_on: { default: false },
  saultube_jump_animation: { default: false },
  kill_toad: { default: false },
  kill_pink_bomb_on: { default: false },
  moveset_description: { default: "" },
  all_jumps_angle_speed: { default: 0, min: 0, max: 100, step: 1, isNew: true },
  basic_jump_angle_speed: { default: 0, min: 0, max: 100, step: 1, isNew: true },
  special_jump_angle_speed: { default: 0, min: 0, max: 100, step: 1, isNew: true },
  special_triple_jump_on: { default: false, options: ["true", "false"], isNew: true },
  disable_special_triple_jump_bounce: { default: false, options: ["true", "false"], isNew: true },
  single_jump_animation: { default: "default", options: ["default", "special"], isNew: true },
  triple_jump_animation: { default: "default", options: ["default", "special", "special_v2"], isNew: true },
  long_jump_triple_jump_on: { default: false },
  long_jump_triple_jump_strength: { default: 100 },
  long_jump_triple_jump_add_forward_vel: { default: 0 },
  special_triple_jump_animation_speedup: { default: 0, min: 0, max: 100, step:5, isNew: true },
  ground_pound_dive_change_direction_on: {default: false, isNew: true}
};


export const defaultConfig: CharacterConfig = Object.fromEntries(
    Object.entries(CONFIG_METADATA).map(([key, value]) => [key, value.default])
) as unknown as CharacterConfig;