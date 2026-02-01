"use client"

import React from "react"

import { useState, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"
import { Download,  Sparkles, ChevronDown, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import type { translations } from "@/lib/translations"

type Translations = typeof translations.en

interface CharacterConfig {
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
  kill_pink_bomb_on: boolean
  // Moveset
  moveset_description: string
}

const defaultConfig: CharacterConfig = {
  name: "MyCharacter",
  swimming_speed: 100,
  gravity: 100,
  fall_gravity: 100,
  airborne_deceleration_speed: 100,
  walking_speed: 100,
  in_air_speed: 100,
  hold_walking_speed: 100,
  crawling_speed: 100,
  grounded_slowing_speed: 100,
  jump_strength: 100,
  single_jump_strength: 100,
  double_jump_strength: 100,
  triple_jump_strength: 100,
  back_flip_strength: 100,
  side_flip_strength: 100,
  long_jump_strength: 100,
  kick_jump_strength: 100,
  disable_double_jump: false,
  dive_y_vel: 0,
  dive_velocity: 100,
  dive_max_velocity: 100,
  always_dive_first: false,
  ground_pound_dive_on: false,
  ground_pound_dive_y_vel: 0,
  ground_pound_dive_forward_vel: 100,
  long_jump_velocity_multiplier: 100,
  long_jump_max_velocity: 100,
  mr_l_jump_on: false,
  mr_l_jump_strength: 93,
  mr_l_gravity: 140,
  mr_l_air_speed: 60,
  play_mr_l_anticipation_audio: true,
  back_flip_twirling_on: false,
  side_flip_twirling_on: false,
  triple_jump_twirling_on: false,
  triple_jump_twirling_when: "fall",
  twirling_ground_pound_on: false,
  twirling_dive_on: false,
  twirling_gravity: 100,
  fast_twirling_on: false,
  fast_twirling_gravity: 100,
  twirling_speed: 100,
  disable_twirling_land: false,
  ground_pound_antecipation_speed_up: "zero",
  ground_pound_gravity: 100,
  ground_pound_max_y_vel: 100,
  ground_pound_shake: 100,
  ground_pound_jump_on: false,
  ground_pound_jump_strength: 70,
  ground_pound_jump_forward_vel: 5,
  ground_pound_jump_dive_on: false,
  waft_fart_on: false,
  waft_fart_velocity: 100,
  waft_fart_strength: 93,
  waft_fart_per_level: 1,
  glide_dive_on: false,
  glide_dive_forward_vel: 50,
  glide_dive_slowdown: 0,
  glide_dive_angle_speed: 75,
  glide_dive_min_forward_speed: 999,
  glide_dive_max_time: 999,
  glide_dive_y_vel: -5,
  glide_dive_render_with_wing_cap: false,
  glide_dive_disable_spin: false,
  wall_slide_on: false,
  wall_slide_gravity: 0.5,
  wall_slide_max_gravity: 0.26,
  wall_slide_jump_forward_vel: 20,
  wall_slide_jump_strength: 75,
  wall_slide_same_wall: false,
  in_air_jump: 0,
  in_air_jump_strength: 42,
  in_air_jump_forward_vel_multiplier: 0.25,
  in_air_jump_forward_vel_slowdown: 0.2,
  in_air_jump_forward_vel: 0,
  super_side_flip_on: false,
  super_side_flip_strength: 75,
  super_side_flip_convert_foward_vel: 100,
  super_side_flip_add_foward_vel: 20,
  super_side_flip_kick_strength: 150,
  super_side_flip_gravity: 75,
  super_side_flip_max_gravity: 93,
  super_side_flip_min_velocity: 36,
  long_jump_triple_jump_on: false,
  long_jump_triple_jump_strength: 100,
  long_jump_triple_jump_add_forward_vel: 0,
  yoshi_flutter_on: false,
  yoshi_flutter_angle_speed: 90,
  yoshi_flutter_cooldown: 21,
  yoshi_flutter_stength_descending: 17,
  yoshi_flutter_stength_ascending: 6,
  yoshi_flutter_max_y_vel: 28,
  yoshi_flutter_reactivations: 2,
  yoshi_flutter_speed: 1,
  yoshi_flutter_max_time: 30,
  peel_out_on: false,
  peel_out_max_vel: 128,
  peel_out_slowdown: 0.5,
  peel_out_jump_reset_vel: true,
  sonic_jump_on: false,
  sonic_jump_strength: 60,
  sonic_jump_add_forward_vel: 10,
  charge_sonic_dash_on: false,
  sonic_dash_max_vel: 130,
  sonic_dash_slowdown: 0.5,
  sonic_dash_slowdown_water: 0.5,
  sonic_dash_slowdown_lava: 1.75,
  sonic_dash_angle_speed: 75,
  drop_dash_on: false,
  drop_dash_charge_vel: 90,
  drop_dash_gravity: 90,
  bad_gas_damage_multiplier: 100,
  water_damage_multiplier: 100,
  snow_water_damage_multiplier: 100,
  burning_damage_multiplier: 100,
  lava_damage_multiplier: 100,
  water_enemy_damage_multiplier: 100,
  piranha_plant_damage_multiplier: 100,
  flying_enemy_damage_multiplier: 100,
  goomba_damage_multiplier: 100,
  bat_damage_multiplier: 100,
  disable_burning: false,
  disable_damage: false,
  disable_breath_heal: false,
  disable_fall_damage: false,
  disable_coin_heal: false,
  knockback_resistance: 100,
  coin_heal_multiplier: 100,
  one_hit: false,
  explode_on_death: false,
  kick_dive_on: false,
  dive_kick_on: false,
  dive_ground_pound_on: false,
  saultube_jump_animation: false,
  kill_toad: false,
  kill_pink_bomb_on: false,
  moveset_description: "",
}

const presets: { name: string; config: Partial<CharacterConfig> }[] = [
  {
    name: "Default (Mario)",
    config: {
      name: "Mario",
      moveset_description: "Default moveset",
    },
  },
  {
    name: "Charizard",
    config: {
      name: "Charizard",
      glide_dive_on: true,
      water_damage_multiplier: 250,
      disable_burning: true,
      disable_breath_heal: true,
      ground_pound_jump_on: true,
      knockback_resistance: 50,
      water_enemy_damage_multiplier: 200,
      piranha_plant_damage_multiplier: 50,
      moveset_description: "glide dive, ground pound jump",
    },
  },
  {
    name: "Luigi",
    config: {
      name: "Luigi",
      mr_l_jump_on: true,
      mr_l_jump_strength: 93,
      mr_l_gravity: 140,
      mr_l_air_speed: 60,
      back_flip_twirling_on: true,
      moveset_description: "mr l jump, back flip twirling",
    },
  },
  {
    name: "Sonic",
    config: {
      name: "Sonic",
      peel_out_on: true,
      charge_sonic_dash_on: true,
      long_jump_velocity_multiplier: 200,
      long_jump_max_velocity: 130,
      airborne_deceleration_speed: 50,
      jump_strength: 95,
      drop_dash_on: true,
      sonic_jump_on: true,
      peel_out_jump_reset_vel: false,
      walking_speed: 252,
      in_air_speed: 222,
      moveset_description: "peel out, sonic dash, drop dash, sonic jump",
    },
  },
  {
    name: "King Penguin",
    config: {
      name: "King Penguin",
      water_damage_multiplier: 0,
      snow_water_damage_multiplier: 0,
      swimming_speed: 300,
      kick_jump_strength: 200,
      hold_walking_speed: 200,
      gravity: 120,
      in_air_speed: 150,
      walking_speed: 150,
      burning_damage_multiplier: 50,
      knockback_resistance: 30,
      moveset_description: "quick character with bad jumps",
    },
  },
  {
    name: 'Ninji',
    config: {
      name: 'Ninji',
      super_side_flip_on: true,
      wall_slide_on: true,
      wall_slide_max_gravity: 0,
      in_air_speed: 150,
      walking_speed: 150,
      jump_strength: 85,
      wall_slide_jump_strength: 60,
      knockback_resistance: -5,
      flying_enemy_damage_multiplier: 200,
      moveset_description: "nimble with wall slide",
    },
  },
    {
    name: 'Connie',
    config: {
      name: 'Connie',
      in_air_jump:3,
      in_air_jump_strength: 25,
      jump_strength: 85,
      walking_speed: 120,
      in_air_speed: 115,
      burning_damage_multiplier: 150,
      lava_damage_multiplier: 150,
      in_air_jump_forward_vel_slowdown: 0,
      long_jump_triple_jump_on: true,
      moveset_description: "has quadruple jumps, but each oen is really",
    }
  }
]

function TooltipIcon({ tooltip }: { tooltip?: string }) {
  if (!tooltip) return null

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button type="button" className="ml-1.5 inline-flex items-center justify-center rounded-full border border-muted-foreground/30 text-muted-foreground hover:text-foreground hover:border-foreground transition-colors p-1 min-w-[28px] min-h-[28px] lg:min-w-[22px] lg:min-h-[22px] lg:p-0.5">
          <HelpCircle className="h-4 w-4 lg:h-3.5 lg:w-3.5" />
          <span className="sr-only">More info</span>
        </button>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-[280px] text-sm">
        {tooltip}
      </TooltipContent>
    </Tooltip>
  )
}

function NumberInput({
  value,
  onChange,
  min = 0,
  max = 999,
  step = 1,
  label,
  suffix = "",
  tooltip,
}: {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
  label: string
  suffix?: string
  tooltip?: string
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Label className="text-xs font-bold ">{label}</Label>
          <TooltipIcon tooltip={tooltip} />
        </div>
        <span className="text-xs font-bold text-primary">{value}{suffix}</span>
      </div>
      <Slider
        value={[value]}
        onValueChange={([v]) => onChange(v)}
        min={min}
        max={max}
        step={step}
        className="cursor-pointer"
      />
    </div>
  )
}

function ToggleOption({
  id,
  label,
  checked,
  onCheckedChange,
  className,
  tooltip,
}: {
  id: string
  label: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  className?: string
  tooltip?: string
}) {
  return (
    <div className={cn("flex items-center justify-between rounded-lg border-2 border-border bg-secondary/50 p-3 ", className)}>
      <div className="flex items-center">
        <Label htmlFor={id} className="text-sm font-medium cursor-pointer font-bold">
          {label}
        </Label>
        <TooltipIcon tooltip={tooltip} />
      </div>
      <Switch id={id} checked={checked} onCheckedChange={onCheckedChange} />
    </div>
  )
}

function AbilitySection({
  title,
  enabled,
  onEnabledChange,
  children,
  defaultOpen = false,
  advancedSettingsLabel,
  tooltip,
}: {
  title: string
  enabled: boolean
  onEnabledChange: (enabled: boolean) => void
  children: React.ReactNode
  defaultOpen?: boolean
  advancedSettingsLabel: string
  tooltip?: string
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="rounded-lg border-2 border-border overflow-hidden">
      <div className="flex items-center justify-between bg-secondary/50 p-3">
        <div className="flex items-center">
          <Label className="text-sm font-bold cursor-pointer">{title}</Label>
          <TooltipIcon tooltip={tooltip} />
        </div>
        <Switch checked={enabled} onCheckedChange={onEnabledChange} />
      </div>
      {enabled && (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="flex w-full items-center justify-between border-t border-border bg-muted/30 px-3 py-2 text-xs font-medium text-muted-foreground hover:bg-muted/50 transition-colors">
            {advancedSettingsLabel}
            <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="space-y-3 p-3 bg-card/50">
              {children}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )}
    </div>
  )
}

export function CharacterConfigForm({ translations: t }: { translations: Translations }) {
  const [config, setConfig] = useState<CharacterConfig>(defaultConfig)
  const [showCode, setShowCode] = useState(false)
  const [showInstructions, setShowInstructions] = useState(false)

  const updateConfig = useCallback(<K extends keyof CharacterConfig>(
    key: K,
    value: CharacterConfig[K]
  ) => {
    setConfig((prev) => ({ ...prev, [key]: value }))
  }, [])

  const generateMovesetDescription = useCallback(() => {
    const moves: string[] = []
    if (config.glide_dive_on) moves.push("glide dive")
    if (config.ground_pound_jump_on) moves.push("ground pound jump")
    if (config.wall_slide_on) moves.push("wall slide")
    if (config.yoshi_flutter_on) moves.push("yoshi flutter")
    if (config.mr_l_jump_on) moves.push("mr l jump")
    if (config.peel_out_on) moves.push("peel out")
    if (config.charge_sonic_dash_on) moves.push("sonic dash")
    if (config.drop_dash_on) moves.push("drop dash")
    if (config.sonic_jump_on) moves.push("sonic jump")
    if (config.super_side_flip_on) moves.push("super side flip")
    if (config.waft_fart_on) moves.push("waft fart")
    if (config.in_air_jump > 0) moves.push(`${config.in_air_jump} air jump(s)`)
    if (config.back_flip_twirling_on || config.side_flip_twirling_on || config.triple_jump_twirling_on) moves.push("twirling")
    return moves.join(", ") || "default moveset"
  }, [config])

  const generateLuaCode = useCallback(() => {
    const movesetDesc = config.moveset_description || generateMovesetDescription()
    const lines: string[] = ["return {", `    name = '${config.name}',`]

    // Helper to add non-default values
    const addIfNotDefault = (key: keyof CharacterConfig, defaultVal: CharacterConfig[keyof CharacterConfig]) => {
      const val = config[key]
      if (val !== defaultVal) {
        if (typeof val === "boolean") {
          lines.push(`    ${key} = ${val},`)
        } else if (typeof val === "string") {
          lines.push(`    ${key} = "${val}",`)
        } else {
          lines.push(`    ${key} = ${val},`)
        }
      }
    }

    // Movement
    addIfNotDefault("swimming_speed", 100)
    addIfNotDefault("gravity", 100)
    addIfNotDefault("fall_gravity", 100)
    addIfNotDefault("airborne_deceleration_speed", 100)
    addIfNotDefault("walking_speed", 100)
    addIfNotDefault("in_air_speed", 100)
    addIfNotDefault("hold_walking_speed", 100)
    addIfNotDefault("crawling_speed", 100)
    addIfNotDefault("grounded_slowing_speed", 100)

    // Jumps
    addIfNotDefault("jump_strength", 100)
    addIfNotDefault("single_jump_strength", 100)
    addIfNotDefault("double_jump_strength", 100)
    addIfNotDefault("triple_jump_strength", 100)
    addIfNotDefault("back_flip_strength", 100)
    addIfNotDefault("side_flip_strength", 100)
    addIfNotDefault("long_jump_strength", 100)
    addIfNotDefault("kick_jump_strength", 100)
    addIfNotDefault("disable_double_jump", false)

    // Dive
    addIfNotDefault("dive_y_vel", 0)
    addIfNotDefault("dive_velocity", 100)
    addIfNotDefault("dive_max_velocity", 100)
    addIfNotDefault("always_dive_first", false)

    // Ground Pound Dive
    if (config.ground_pound_dive_on) {
      lines.push(`    ground_pound_dive_on = true,`)
      addIfNotDefault("ground_pound_dive_y_vel", 0)
      addIfNotDefault("ground_pound_dive_forward_vel", 100)
    }

    // Long Jump
    addIfNotDefault("long_jump_velocity_multiplier", 100)
    addIfNotDefault("long_jump_max_velocity", 100)

    // Mr L Jump
    if (config.mr_l_jump_on) {
      lines.push(`    mr_l_jump_on = true,`)
      addIfNotDefault("mr_l_jump_strength", 93)
      addIfNotDefault("mr_l_gravity", 140)
      addIfNotDefault("mr_l_air_speed", 60)
      addIfNotDefault("play_mr_l_anticipation_audio", true)
    }

    // Twirling
    addIfNotDefault("back_flip_twirling_on", false)
    addIfNotDefault("side_flip_twirling_on", false)
    addIfNotDefault("triple_jump_twirling_on", false)
    if (config.triple_jump_twirling_on) addIfNotDefault("triple_jump_twirling_when", "fall")
    addIfNotDefault("twirling_ground_pound_on", false)
    addIfNotDefault("twirling_dive_on", false)
    addIfNotDefault("twirling_gravity", 100)
    addIfNotDefault("fast_twirling_on", false)
    addIfNotDefault("fast_twirling_gravity", 100)
    addIfNotDefault("twirling_speed", 100)
    addIfNotDefault("disable_twirling_land", false)
  

    // Ground Pound
    addIfNotDefault("ground_pound_antecipation_speed_up", "zero")
    addIfNotDefault("ground_pound_gravity", 100)
    addIfNotDefault("ground_pound_max_y_vel", 100)
    addIfNotDefault("ground_pound_shake", 100)

    // Ground Pound Jump
    if (config.ground_pound_jump_on) {
      lines.push(`    ground_pound_jump_on = true,`)
      addIfNotDefault("ground_pound_jump_strength", 70)
      addIfNotDefault("ground_pound_jump_forward_vel", 5)
      addIfNotDefault("ground_pound_jump_dive_on", false)
    }

    // Waft Fart
    if (config.waft_fart_on) {
      lines.push(`    waft_fart_on = true,`)
      addIfNotDefault("waft_fart_velocity", 100)
      addIfNotDefault("waft_fart_strength", 93)
      addIfNotDefault("waft_fart_per_level", 1)
    }

    // Glide Dive
    if (config.glide_dive_on) {
      lines.push(`    glide_dive_on = true,`)
      addIfNotDefault("glide_dive_forward_vel", 50)
      addIfNotDefault("glide_dive_slowdown", 0)
      addIfNotDefault("glide_dive_angle_speed", 75)
      addIfNotDefault("glide_dive_min_forward_speed", 999)
      addIfNotDefault("glide_dive_max_time", 999)
      addIfNotDefault("glide_dive_y_vel", -5)
      addIfNotDefault("glide_dive_render_with_wing_cap", false)
      addIfNotDefault("glide_dive_disable_spin", false)
    }

    // Wall Slide
    if (config.wall_slide_on) {
      lines.push(`    wall_slide_on = true,`)
      addIfNotDefault("wall_slide_gravity", 0.5)
      addIfNotDefault("wall_slide_max_gravity", 0.26)
      addIfNotDefault("wall_slide_jump_forward_vel", 20)
      addIfNotDefault("wall_slide_jump_strength", 75)
      addIfNotDefault("wall_slide_same_wall", false)
    }

    // In Air Jump
    if (config.in_air_jump > 0) {
      lines.push(`    in_air_jump = ${config.in_air_jump},`)
      addIfNotDefault("in_air_jump_strength", 42)
      addIfNotDefault("in_air_jump_forward_vel_multiplier", 0.25)
      addIfNotDefault("in_air_jump_forward_vel_slowdown", 0.2)
      addIfNotDefault("in_air_jump_forward_vel", 0)
    }

    // Super Side Flip
    if (config.super_side_flip_on) {
      lines.push(`    super_side_flip_on = true,`)
      addIfNotDefault("super_side_flip_strength", 75)
      addIfNotDefault("super_side_flip_convert_foward_vel", 100)
      addIfNotDefault("super_side_flip_add_foward_vel", 20)
      addIfNotDefault("super_side_flip_kick_strength", 150)
      addIfNotDefault("super_side_flip_gravity", 75)
      addIfNotDefault("super_side_flip_max_gravity", 93)
      addIfNotDefault("super_side_flip_min_velocity", 36)
    }

    // Long Jump Triple Jump
    if (config.long_jump_triple_jump_on) {
      lines.push(`    long_jump_triple_jump_on = true,`)
      addIfNotDefault("long_jump_triple_jump_strength", 100)
      addIfNotDefault("long_jump_triple_jump_add_forward_vel", 0)
    }

    // Yoshi Flutter
    if (config.yoshi_flutter_on) {
      lines.push(`    yoshi_flutter_on = true,`)
      addIfNotDefault("yoshi_flutter_angle_speed", 90)
      addIfNotDefault("yoshi_flutter_cooldown", 21)
      addIfNotDefault("yoshi_flutter_stength_descending", 17)
      addIfNotDefault("yoshi_flutter_stength_ascending", 6)
      addIfNotDefault("yoshi_flutter_max_y_vel", 28)
      addIfNotDefault("yoshi_flutter_reactivations", 2)
      addIfNotDefault("yoshi_flutter_speed", 1)
      addIfNotDefault("yoshi_flutter_max_time", 30)
    }

    // Peel Out
    if (config.peel_out_on) {
      lines.push(`    peel_out_on = true,`)
      addIfNotDefault("peel_out_max_vel", 128)
      addIfNotDefault("peel_out_slowdown", 0.5)
      addIfNotDefault("peel_out_jump_reset_vel", true)
    }

    // Sonic Jump
    if (config.sonic_jump_on) {
      lines.push(`    sonic_jump_on = true,`)
      addIfNotDefault("sonic_jump_strength", 60)
      addIfNotDefault("sonic_jump_add_forward_vel", 10)
    }

    // Sonic Dash
    if (config.charge_sonic_dash_on) {
      lines.push(`    charge_sonic_dash_on = true,`)
      addIfNotDefault("sonic_dash_max_vel", 130)
      addIfNotDefault("sonic_dash_slowdown", 0.5)
      addIfNotDefault("sonic_dash_slowdown_water", 0.5)
      addIfNotDefault("sonic_dash_slowdown_lava", 1.75)
      addIfNotDefault("sonic_dash_angle_speed", 75)
    }

    // Drop Dash
    if (config.drop_dash_on) {
      lines.push(`    drop_dash_on = true,`)
      addIfNotDefault("drop_dash_charge_vel", 90)
      addIfNotDefault("drop_dash_gravity", 90)
    }

    // Damage multipliers
    addIfNotDefault("bad_gas_damage_multiplier", 100)
    addIfNotDefault("water_damage_multiplier", 100)
    addIfNotDefault("snow_water_damage_multiplier", 100)
    addIfNotDefault("burning_damage_multiplier", 100)
    addIfNotDefault("lava_damage_multiplier", 100)
    addIfNotDefault("water_enemy_damage_multiplier", 100)
    addIfNotDefault("piranha_plant_damage_multiplier", 100)
    addIfNotDefault("flying_enemy_damage_multiplier", 100)
    addIfNotDefault("goomba_damage_multiplier", 100)
    addIfNotDefault("bat_damage_multiplier", 100)

    // Resistances
    addIfNotDefault("disable_burning", false)
    addIfNotDefault("disable_damage", false)
    addIfNotDefault("disable_breath_heal", false)
    addIfNotDefault("disable_fall_damage", false)
    addIfNotDefault("disable_coin_heal", false)
    addIfNotDefault("knockback_resistance", 100)
    addIfNotDefault("coin_heal_multiplier", 100)
    addIfNotDefault("one_hit", false)

    // Other
    addIfNotDefault("explode_on_death", false)
    addIfNotDefault("kick_dive_on", false)
    addIfNotDefault("dive_kick_on", false)
    addIfNotDefault("dive_ground_pound_on", false)
    addIfNotDefault("saultube_jump_animation", false)
    addIfNotDefault("kill_toad", false)
    addIfNotDefault("kill_pink_bomb_on", false)

    lines.push(`    moveset_description = "${movesetDesc},"`)
    lines.push(`    fromInitialTable = false`)
    lines.push("}")

    return lines.join("\n")
  }, [config, generateMovesetDescription])

  const handleDownload = useCallback(() => {
    const luaCode = generateLuaCode()
    const blob = new Blob([luaCode], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${config.name.replace(/\s+/g, "_")}_ecm_moveset.lua`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }, [generateLuaCode, config.name])

  const applyPreset = useCallback((preset: (typeof presets)[number]) => {
    setConfig({ ...defaultConfig, ...preset.config })
  }, [])

  return (
    <TooltipProvider delayDuration={300}>
      <div className="flex flex-col lg:flex-row lg:gap-8  justify-center">
        {/* Configuration Form */}
        <div className="flex-1 space-y-4 lg:max-w-2xl">
          <Card className="border-2 border-border">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold uppercase tracking-wide">
                {t.characterConfig}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Presets */}
              <div className="space-y-2">
                <Label className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
                  {t.quickPresets}
                </Label>
                <div className="flex flex-wrap gap-2">
                  {presets.map((preset) => (
                    <Button
                      key={preset.name}
                      variant="outline"
                      size="sm"
                      onClick={() => applyPreset(preset)}
                      className="border-2 bg-transparent"
                    >
                      <Sparkles className="mr-1 h-3 w-3" />
                      {preset.name}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Character Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-bold uppercase tracking-wide">
                  {t.characterName}
                </Label>
                <Input
                  id="name"
                  value={config.name}
                  onChange={(e) => updateConfig("name", e.target.value)}
                  placeholder={t.enterCharacterName}
                  className="border-2 font-medium"
                />
              </div>
            </CardContent>
          </Card>

          {/* Movement Stats */}
          <Card className="border-2 border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold uppercase tracking-wide">{t.movement}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <NumberInput label={t.walkingSpeed} value={config.walking_speed} onChange={(v) => updateConfig("walking_speed", v)} min={0} max={300} suffix="%" tooltip={t.tooltips?.walkingSpeed} />
              <NumberInput label={t.swimmingSpeed} value={config.swimming_speed} onChange={(v) => updateConfig("swimming_speed", v)} min={0} max={300} suffix="%" tooltip={t.tooltips?.swimmingSpeed} />
              <NumberInput label={t.inAirSpeed} value={config.in_air_speed} onChange={(v) => updateConfig("in_air_speed", v)} min={0} max={300} suffix="%" tooltip={t.tooltips?.inAirSpeed} />
              <NumberInput label={t.gravity} value={config.gravity} onChange={(v) => updateConfig("gravity", v)} min={0} max={300} suffix="%" tooltip={t.tooltips?.gravity} />
              <NumberInput label={t.fallGravity} value={config.fall_gravity} onChange={(v) => updateConfig("fall_gravity", v)} min={0} max={300} suffix="%" tooltip={t.tooltips?.fallGravity} />
            </CardContent>
          </Card>

          {/* Jump Stats */}
          <Card className="border-2 border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold uppercase tracking-wide">{t.jumps}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <NumberInput label={t.jumpStrength} value={config.jump_strength} onChange={(v) => updateConfig("jump_strength", v)} min={0} max={300} suffix="%" tooltip={t.tooltips?.jumpStrength} />
              <NumberInput label={t.doubleJumpStrength} value={config.double_jump_strength} onChange={(v) => updateConfig("double_jump_strength", v)} min={0} max={300} suffix="%" tooltip={t.tooltips?.doubleJumpStrength} />
              <NumberInput label={t.tripleJumpStrength} value={config.triple_jump_strength} onChange={(v) => updateConfig("triple_jump_strength", v)} min={0} max={300} suffix="%" tooltip={t.tooltips?.tripleJumpStrength} />
              <NumberInput label={t.longJumpStrength} value={config.long_jump_strength} onChange={(v) => updateConfig("long_jump_strength", v)} min={0} max={300} suffix="%" tooltip={t.tooltips?.longJumpStrength} />
              <NumberInput label={t.backFlipStrength} value={config.back_flip_strength} onChange={(v) => updateConfig("back_flip_strength", v)} min={0} max={300} suffix="%" tooltip={t.tooltips?.backFlipStrength} />
              <NumberInput label={t.sideFlipStrength} value={config.side_flip_strength} onChange={(v) => updateConfig("side_flip_strength", v)} min={0} max={300} suffix="%" tooltip={t.tooltips?.sideFlipStrength} />
              <ToggleOption id="disable_double_jump" label={t.disableDoubleJump} checked={config.disable_double_jump} onCheckedChange={(v) => updateConfig("disable_double_jump", v)} tooltip={t.tooltips?.disableDoubleJump} />
            </CardContent>
          </Card>

          {/* Special Abilities */}
          <Card className="border-2 border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold uppercase tracking-wide">{t.specialAbilities}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {/* Glide Dive */}
              <AbilitySection title={t.glideDive} enabled={config.glide_dive_on} onEnabledChange={(v) => updateConfig("glide_dive_on", v)} advancedSettingsLabel={t.advancedSettings} tooltip={t.tooltips?.glideDive}>
                <NumberInput label={t.forwardVelocity} value={config.glide_dive_forward_vel} onChange={(v) => updateConfig("glide_dive_forward_vel", v)} min={0} max={200} tooltip={t.tooltips?.glideDiveForwardVel} />
                <NumberInput label={t.slowdown} value={config.glide_dive_slowdown} onChange={(v) => updateConfig("glide_dive_slowdown", v)} min={0} max={100} step={0.1} tooltip={t.tooltips?.glideDiveSlowdown} />
                <NumberInput label={t.angleSpeed} value={config.glide_dive_angle_speed} onChange={(v) => updateConfig("glide_dive_angle_speed", v)} min={0} max={200} tooltip={t.tooltips?.glideDiveAngleSpeed} />
                <NumberInput label={t.minForwardSpeed} value={config.glide_dive_min_forward_speed} onChange={(v) => updateConfig("glide_dive_min_forward_speed", v)} min={0} max={999} tooltip={t.tooltips?.glideDiveMinForwardSpeed} />
                <NumberInput label={t.maxTime} value={config.glide_dive_max_time} onChange={(v) => updateConfig("glide_dive_max_time", v)} min={0} max={999} tooltip={t.tooltips?.glideDiveMaxTime} />
                <NumberInput label={t.yVelocity} value={config.glide_dive_y_vel} onChange={(v) => updateConfig("glide_dive_y_vel", v)} min={-50} max={50} tooltip={t.tooltips?.glideDiveYVel} />
                <ToggleOption id="glide_dive_wing_cap" label={t.renderWithWingCap} checked={config.glide_dive_render_with_wing_cap} onCheckedChange={(v) => updateConfig("glide_dive_render_with_wing_cap", v)} tooltip={t.tooltips?.glideDiveWingCap} />
                <ToggleOption id="glide_dive_disable_spin" label={t.disableSpin} checked={config.glide_dive_disable_spin} onCheckedChange={(v) => updateConfig("glide_dive_disable_spin", v)} tooltip={t.tooltips?.glideDiveDisableSpin} />
              </AbilitySection>

              {/* Ground Pound Jump */}
              <AbilitySection title={t.groundPoundJump} enabled={config.ground_pound_jump_on} onEnabledChange={(v) => updateConfig("ground_pound_jump_on", v)} advancedSettingsLabel={t.advancedSettings} tooltip={t.tooltips?.groundPoundJump}>
                <NumberInput label={t.strength} value={config.ground_pound_jump_strength} onChange={(v) => updateConfig("ground_pound_jump_strength", v)} min={0} max={200} />
                <NumberInput label={t.forwardVelocity} value={config.ground_pound_jump_forward_vel} onChange={(v) => updateConfig("ground_pound_jump_forward_vel", v)} min={0} max={50} />
                <ToggleOption id="gp_jump_dive" label={t.groundPoundJumpDive} checked={config.ground_pound_jump_dive_on} onCheckedChange={(v) => updateConfig("ground_pound_jump_dive_on", v)} />
              </AbilitySection>

              {/* Wall Slide */}
              <AbilitySection title={t.wallSlide} enabled={config.wall_slide_on} onEnabledChange={(v) => updateConfig("wall_slide_on", v)} advancedSettingsLabel={t.advancedSettings} tooltip={t.tooltips?.wallSlide}>
                <NumberInput label={t.gravity} value={config.wall_slide_gravity} onChange={(v) => updateConfig("wall_slide_gravity", v)} min={0} max={5} step={0.1} />
                <NumberInput label={t.maxGravity} value={config.wall_slide_max_gravity} onChange={(v) => updateConfig("wall_slide_max_gravity", v)} min={0} max={5} step={0.01} />
                <NumberInput label={t.jumpForwardVelocity} value={config.wall_slide_jump_forward_vel} onChange={(v) => updateConfig("wall_slide_jump_forward_vel", v)} min={0} max={100} />
                <NumberInput label={t.jumpStrength} value={config.wall_slide_jump_strength} onChange={(v) => updateConfig("wall_slide_jump_strength", v)} min={0} max={200} />
                <ToggleOption id="wall_slide_same_wall" label={t.sameWallJump} checked={config.wall_slide_same_wall} onCheckedChange={(v) => updateConfig("wall_slide_same_wall", v)} />
              </AbilitySection>

              {/* Yoshi Flutter */}
              <AbilitySection title={t.yoshiFlutter} enabled={config.yoshi_flutter_on} onEnabledChange={(v) => updateConfig("yoshi_flutter_on", v)} advancedSettingsLabel={t.advancedSettings} tooltip={t.tooltips?.yoshiFlutter}>
                <NumberInput label={t.angleSpeed} value={config.yoshi_flutter_angle_speed} onChange={(v) => updateConfig("yoshi_flutter_angle_speed", v)} min={0} max={200} />
                <NumberInput label={t.cooldown} value={config.yoshi_flutter_cooldown} onChange={(v) => updateConfig("yoshi_flutter_cooldown", v)} min={0} max={100} />
                <NumberInput label={t.strengthDescending} value={config.yoshi_flutter_stength_descending} onChange={(v) => updateConfig("yoshi_flutter_stength_descending", v)} min={0} max={100} />
                <NumberInput label={t.strengthAscending} value={config.yoshi_flutter_stength_ascending} onChange={(v) => updateConfig("yoshi_flutter_stength_ascending", v)} min={0} max={100} />
                <NumberInput label={t.maxYVelocity} value={config.yoshi_flutter_max_y_vel} onChange={(v) => updateConfig("yoshi_flutter_max_y_vel", v)} min={0} max={100} />
                <NumberInput label={t.reactivations} value={config.yoshi_flutter_reactivations} onChange={(v) => updateConfig("yoshi_flutter_reactivations", v)} min={0} max={10} />
                <NumberInput label={t.speed} value={config.yoshi_flutter_speed} onChange={(v) => updateConfig("yoshi_flutter_speed", v)} min={0} max={10} step={0.1} />
                <NumberInput label={t.maxTime} value={config.yoshi_flutter_max_time} onChange={(v) => updateConfig("yoshi_flutter_max_time", v)} min={0} max={100} />
              </AbilitySection>

              {/* Mr L Jump */}
              <AbilitySection title={t.mrLJump} enabled={config.mr_l_jump_on} onEnabledChange={(v) => updateConfig("mr_l_jump_on", v)} advancedSettingsLabel={t.advancedSettings} tooltip={t.tooltips?.mrLJump}>
                <NumberInput label={t.jumpStrength} value={config.mr_l_jump_strength} onChange={(v) => updateConfig("mr_l_jump_strength", v)} min={0} max={200} />
                <NumberInput label={t.gravity} value={config.mr_l_gravity} onChange={(v) => updateConfig("mr_l_gravity", v)} min={0} max={300} />
                <NumberInput label={t.airSpeed} value={config.mr_l_air_speed} onChange={(v) => updateConfig("mr_l_air_speed", v)} min={0} max={200} />
                <ToggleOption id="mr_l_audio" label={t.playAnticipationAudio} checked={config.play_mr_l_anticipation_audio} onCheckedChange={(v) => updateConfig("play_mr_l_anticipation_audio", v)} />
              </AbilitySection>

              {/* Super Side Flip */}
              <AbilitySection title={t.superSideFlip} enabled={config.super_side_flip_on} onEnabledChange={(v) => updateConfig("super_side_flip_on", v)} advancedSettingsLabel={t.advancedSettings} tooltip={t.tooltips?.superSideFlip}>
                <NumberInput label={t.strength} value={config.super_side_flip_strength} onChange={(v) => updateConfig("super_side_flip_strength", v)} min={0} max={200} />
                <NumberInput label={t.convertForwardVelocity} value={config.super_side_flip_convert_foward_vel} onChange={(v) => updateConfig("super_side_flip_convert_foward_vel", v)} min={0} max={200} />
                <NumberInput label={t.addForwardVelocity} value={config.super_side_flip_add_foward_vel} onChange={(v) => updateConfig("super_side_flip_add_foward_vel", v)} min={0} max={100} />
                <NumberInput label={t.kickStrength} value={config.super_side_flip_kick_strength} onChange={(v) => updateConfig("super_side_flip_kick_strength", v)} min={0} max={300} />
                <NumberInput label={t.gravity} value={config.super_side_flip_gravity} onChange={(v) => updateConfig("super_side_flip_gravity", v)} min={0} max={200} />
                <NumberInput label={t.maxGravity} value={config.super_side_flip_max_gravity} onChange={(v) => updateConfig("super_side_flip_max_gravity", v)} min={0} max={200} />
                <NumberInput label={t.minVelocity} value={config.super_side_flip_min_velocity} onChange={(v) => updateConfig("super_side_flip_min_velocity", v)} min={0} max={100} />
              </AbilitySection>

              {/* In Air Jump */}
              <div className="rounded-lg border-2 border-border overflow-hidden">
                <div className="bg-secondary/50 p-3">
                  <NumberInput label={t.inAirJumps} value={config.in_air_jump} onChange={(v) => updateConfig("in_air_jump", v)} min={0} max={10} tooltip={t.tooltips?.inAirJump} />
                </div>
                {config.in_air_jump > 0 && (
                  <Collapsible>
                    <CollapsibleTrigger className="flex w-full items-center justify-between border-t border-border bg-muted/30 px-3 py-2 text-xs font-medium text-muted-foreground hover:bg-muted/50 transition-colors">
                      {t.advancedSettings}
                      <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="space-y-3 p-3 bg-card/50">
                        <NumberInput label={t.jumpStrength} value={config.in_air_jump_strength} onChange={(v) => updateConfig("in_air_jump_strength", v)} min={0} max={100} />
                        <NumberInput label={t.forwardVelMultiplier} value={config.in_air_jump_forward_vel_multiplier} onChange={(v) => updateConfig("in_air_jump_forward_vel_multiplier", v)} min={0} max={2} step={0.05} />
                        <NumberInput label={t.forwardVelSlowdown} value={config.in_air_jump_forward_vel_slowdown} onChange={(v) => updateConfig("in_air_jump_forward_vel_slowdown", v)} min={0} max={2} step={0.05} />
                        <NumberInput label={t.forwardVelocity} value={config.in_air_jump_forward_vel} onChange={(v) => updateConfig("in_air_jump_forward_vel", v)} min={0} max={100} />
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                )}
              </div>

              {/* Waft Fart */}
              <AbilitySection title={t.waftFart} enabled={config.waft_fart_on} onEnabledChange={(v) => updateConfig("waft_fart_on", v)} advancedSettingsLabel={t.advancedSettings} tooltip={t.tooltips?.waftFart}>
                <NumberInput label={t.velocity} value={config.waft_fart_velocity} onChange={(v) => updateConfig("waft_fart_velocity", v)} min={0} max={300} />
                <NumberInput label={t.strength} value={config.waft_fart_strength} onChange={(v) => updateConfig("waft_fart_strength", v)} min={0} max={200} />
                <NumberInput label={t.perLevel} value={config.waft_fart_per_level} onChange={(v) => updateConfig("waft_fart_per_level", v)} min={1} max={10} />
              </AbilitySection>

              {/* Long Jump Triple Jump */}
              <AbilitySection title={t.longJumpTripleJump} enabled={config.long_jump_triple_jump_on} onEnabledChange={(v) => updateConfig("long_jump_triple_jump_on", v)} advancedSettingsLabel={t.advancedSettings} tooltip={t.tooltips?.longJumpTripleJump}>
                <NumberInput label={t.strength} value={config.long_jump_triple_jump_strength} onChange={(v) => updateConfig("long_jump_triple_jump_strength", v)} min={0} max={200} />
                <NumberInput label={t.addForwardVelocity} value={config.long_jump_triple_jump_add_forward_vel} onChange={(v) => updateConfig("long_jump_triple_jump_add_forward_vel", v)} min={0} max={100} />
              </AbilitySection>

              {/* Ground Pound Dive */}
              <AbilitySection title={t.groundPoundDive} enabled={config.ground_pound_dive_on} onEnabledChange={(v) => updateConfig("ground_pound_dive_on", v)} advancedSettingsLabel={t.advancedSettings} tooltip={t.tooltips?.groundPoundDive}>
                <NumberInput label={t.yVelocity} value={config.ground_pound_dive_y_vel} onChange={(v) => updateConfig("ground_pound_dive_y_vel", v)} min={-50} max={50} />
                <NumberInput label={t.forwardVelocity} value={config.ground_pound_dive_forward_vel} onChange={(v) => updateConfig("ground_pound_dive_forward_vel", v)} min={0} max={200} />
              </AbilitySection>
            </CardContent>
          </Card>

          {/* Sonic Abilities */}
          <Card className="border-2 border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold uppercase tracking-wide">{t.sonicAbilities}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {/* Peel Out */}
              <AbilitySection title={t.peelOut} enabled={config.peel_out_on} onEnabledChange={(v) => updateConfig("peel_out_on", v)} advancedSettingsLabel={t.advancedSettings} tooltip={t.tooltips?.peelOut}>
                <NumberInput label={t.maxVelocity} value={config.peel_out_max_vel} onChange={(v) => updateConfig("peel_out_max_vel", v)} min={0} max={300} />
                <NumberInput label={t.slowdown} value={config.peel_out_slowdown} onChange={(v) => updateConfig("peel_out_slowdown", v)} min={0} max={5} step={0.1} />
                <ToggleOption id="peel_out_reset" label={t.jumpResetVelocity} checked={config.peel_out_jump_reset_vel} onCheckedChange={(v) => updateConfig("peel_out_jump_reset_vel", v)} />
              </AbilitySection>

              {/* Sonic Jump */}
              <AbilitySection title={t.sonicJump} enabled={config.sonic_jump_on} onEnabledChange={(v) => updateConfig("sonic_jump_on", v)} advancedSettingsLabel={t.advancedSettings} tooltip={t.tooltips?.sonicJump}>
                <NumberInput label={t.strength} value={config.sonic_jump_strength} onChange={(v) => updateConfig("sonic_jump_strength", v)} min={0} max={200} />
                <NumberInput label={t.addForwardVelocity} value={config.sonic_jump_add_forward_vel} onChange={(v) => updateConfig("sonic_jump_add_forward_vel", v)} min={0} max={100} />
              </AbilitySection>

              {/* Sonic Dash */}
              <AbilitySection title={t.chargeSonicDash} enabled={config.charge_sonic_dash_on} onEnabledChange={(v) => updateConfig("charge_sonic_dash_on", v)} advancedSettingsLabel={t.advancedSettings} tooltip={t.tooltips?.sonicDash}>
                <NumberInput label={t.maxVelocity} value={config.sonic_dash_max_vel} onChange={(v) => updateConfig("sonic_dash_max_vel", v)} min={0} max={300} />
                <NumberInput label={t.slowdown} value={config.sonic_dash_slowdown} onChange={(v) => updateConfig("sonic_dash_slowdown", v)} min={0} max={5} step={0.1} />
                <NumberInput label={t.slowdownWater} value={config.sonic_dash_slowdown_water} onChange={(v) => updateConfig("sonic_dash_slowdown_water", v)} min={0} max={5} step={0.1} />
                <NumberInput label={t.slowdownLava} value={config.sonic_dash_slowdown_lava} onChange={(v) => updateConfig("sonic_dash_slowdown_lava", v)} min={0} max={5} step={0.1} />
                <NumberInput label={t.angleSpeed} value={config.sonic_dash_angle_speed} onChange={(v) => updateConfig("sonic_dash_angle_speed", v)} min={0} max={200} />
              </AbilitySection>

              {/* Drop Dash */}
              <AbilitySection title={t.dropDash} enabled={config.drop_dash_on} onEnabledChange={(v) => updateConfig("drop_dash_on", v)} advancedSettingsLabel={t.advancedSettings} tooltip={t.tooltips?.dropDash}>
                <NumberInput label={t.chargeVelocity} value={config.drop_dash_charge_vel} onChange={(v) => updateConfig("drop_dash_charge_vel", v)} min={0} max={200} />
                <NumberInput label={t.gravity} value={config.drop_dash_gravity} onChange={(v) => updateConfig("drop_dash_gravity", v)} min={0} max={200} />
              </AbilitySection>
            </CardContent>
          </Card>

          {/* Damage & Resistance */}
          <Card className="border-2 border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold uppercase tracking-wide">{t.damageResistance}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 lg:grid-cols-2">
              <ToggleOption id="disable_burning" label={t.fireImmunity} checked={config.disable_burning} onCheckedChange={(v) => updateConfig("disable_burning", v)} tooltip={t.tooltips?.fireImmunity} />
              <ToggleOption id="disable_damage" label={t.invincible} checked={config.disable_damage} onCheckedChange={(v) => updateConfig("disable_damage", v)} tooltip={t.tooltips?.invincible} />
              <ToggleOption id="disable_breath_heal" label={t.disableBreathHeal} checked={config.disable_breath_heal} onCheckedChange={(v) => updateConfig("disable_breath_heal", v)} tooltip={t.tooltips?.disableBreathHeal} />
              <ToggleOption id="disable_fall_damage" label={t.noFallDamage} checked={config.disable_fall_damage} onCheckedChange={(v) => updateConfig("disable_fall_damage", v)} tooltip={t.tooltips?.noFallDamage} />
              <ToggleOption id="one_hit" label={t.oneHitKO} checked={config.one_hit} onCheckedChange={(v) => updateConfig("one_hit", v)} tooltip={t.tooltips?.oneHitKO} />
              <NumberInput label={t.knockbackResistance} value={config.knockback_resistance} onChange={(v) => updateConfig("knockback_resistance", v)} min={0} max={200} suffix="%" tooltip={t.tooltips?.knockbackResistance} />
              <NumberInput label={t.coinHealMultiplier} value={config.coin_heal_multiplier} onChange={(v) => updateConfig("coin_heal_multiplier", v)} min={0} max={300} suffix="%" tooltip={t.tooltips?.coinHealMultiplier} />
              <NumberInput label={t.waterDamage} value={config.water_damage_multiplier} onChange={(v) => updateConfig("water_damage_multiplier", v)} min={0} max={500} suffix="%" tooltip={t.tooltips?.waterDamage} />
              <NumberInput label={t.lavaDamage} value={config.lava_damage_multiplier} onChange={(v) => updateConfig("lava_damage_multiplier", v)} min={0} max={500} suffix="%" tooltip={t.tooltips?.lavaDamage} />
              <NumberInput label={t.burningDamage} value={config.burning_damage_multiplier} onChange={(v) => updateConfig("burning_damage_multiplier", v)} min={0} max={500} suffix="%" tooltip={t.tooltips?.burningDamage} />
              <NumberInput label={t.badGasDamage} value={config.bad_gas_damage_multiplier} onChange={(v) => updateConfig("bad_gas_damage_multiplier", v)} min={0} max={500} suffix="%" tooltip={t.tooltips?.badGasDamage} />
              <NumberInput label={t.waterEnemyDamage} value={config.water_enemy_damage_multiplier} onChange={(v) => updateConfig("water_enemy_damage_multiplier", v)} min={0} max={500} suffix="%" tooltip={t.tooltips?.waterEnemyDamage} />
              <NumberInput label={t.piranhaPlantDamage} value={config.piranha_plant_damage_multiplier} onChange={(v) => updateConfig("piranha_plant_damage_multiplier", v)} min={0} max={500} suffix="%" tooltip={t.tooltips?.piranhaPlantDamage} />
              <NumberInput label={t.goombaDamage} value={config.goomba_damage_multiplier} onChange={(v) => updateConfig("goomba_damage_multiplier", v)} min={0} max={500} suffix="%" tooltip={t.tooltips?.goombaDamage} />
              <NumberInput label={t.flyingEnemyDamage} value={config.flying_enemy_damage_multiplier} onChange={(v) => updateConfig("flying_enemy_damage_multiplier", v)} min={0} max={500} suffix="%" tooltip={t.tooltips?.flyingEnemyDamage} />
              <NumberInput label={t.batDamage} value={config.bat_damage_multiplier} onChange={(v) => updateConfig("bat_damage_multiplier", v)} min={0} max={500} suffix="%" tooltip={t.tooltips?.batDamage} />
            </CardContent>
          </Card>

                    {/* Twirling */}
                    <Card className="border-2 border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold uppercase tracking-wide">{t.twirling}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ToggleOption id="back_flip_twirling" label={t.backFlipTwirling} checked={config.back_flip_twirling_on} onCheckedChange={(v) => updateConfig("back_flip_twirling_on", v)} tooltip={t.tooltips?.backFlipTwirling} />
              <ToggleOption id="side_flip_twirling" label={t.sideFlipTwirling} checked={config.side_flip_twirling_on} onCheckedChange={(v) => updateConfig("side_flip_twirling_on", v)} tooltip={t.tooltips?.sideFlipTwirling} />
              <ToggleOption id="triple_jump_twirling" label={t.tripleJumpTwirling} checked={config.triple_jump_twirling_on} onCheckedChange={(v) => updateConfig("triple_jump_twirling_on", v)} tooltip={t.tooltips?.tripleJumpTwirling} />
                  <ToggleOption id="twirling_gp" label={t.twirlingGroundPound} checked={config.twirling_ground_pound_on} onCheckedChange={(v) => updateConfig("twirling_ground_pound_on", v)} />
                  <ToggleOption id="twirling_dive" label={t.twirlingDive} checked={config.twirling_dive_on} onCheckedChange={(v) => updateConfig("twirling_dive_on", v)} />
                  <ToggleOption id="fast_twirling" label={t.fastTwirling} checked={config.fast_twirling_on} onCheckedChange={(v) => updateConfig("fast_twirling_on", v)} />
                  <NumberInput label={t.twirlingGravity} value={config.twirling_gravity} onChange={(v) => updateConfig("twirling_gravity", v)} min={0} max={200} />
                  <NumberInput label={t.twirlingSpeed} value={config.twirling_speed} onChange={(v) => updateConfig("twirling_speed", v)} min={0} max={200} />
            </CardContent>
          </Card>

          {/* Other Options */}
          <Card className="border-2 border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold uppercase tracking-wide">{t.otherOptions}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 lg:grid-cols-2">
              <ToggleOption id="explode_on_death" label={t.explodeOnDeath} checked={config.explode_on_death} onCheckedChange={(v) => updateConfig("explode_on_death", v)} tooltip={t.tooltips?.explodeOnDeath} />
              <ToggleOption id="kick_dive" label={t.kickDive} checked={config.kick_dive_on} onCheckedChange={(v) => updateConfig("kick_dive_on", v)} tooltip={t.tooltips?.kickDive} />
              <ToggleOption id="dive_kick" label={t.diveKick} checked={config.dive_kick_on} onCheckedChange={(v) => updateConfig("dive_kick_on", v)} tooltip={t.tooltips?.diveKick} />
              <ToggleOption id="dive_gp" label={t.diveGroundPound} checked={config.dive_ground_pound_on} onCheckedChange={(v) => updateConfig("dive_ground_pound_on", v)} tooltip={t.tooltips?.diveGroundPound} />
              <ToggleOption id="always_dive_first" label={t.alwaysDiveFirst} checked={config.always_dive_first} onCheckedChange={(v) => updateConfig("always_dive_first", v)} tooltip={t.tooltips?.alwaysDiveFirst} />
              <ToggleOption id="saultube_anim" label={t.saultubeJumpAnimation} checked={config.saultube_jump_animation} onCheckedChange={(v) => updateConfig("saultube_jump_animation", v)} tooltip={t.tooltips?.saultubeJumpAnimation} />
              <ToggleOption id="kill_toad" label={t.killToad} checked={config.kill_toad} onCheckedChange={(v) => updateConfig("kill_toad", v)} tooltip={t.tooltips?.killToad} />
              <ToggleOption id="kill_pink_bomb" label={t.killPinkBobomb} checked={config.kill_pink_bomb_on} onCheckedChange={(v) => updateConfig("kill_pink_bomb_on", v)} tooltip={t.tooltips?.killPinkBobomb} />
            </CardContent>
          </Card>

          {/* Moveset Description */}
          <Card className="border-2 border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold uppercase tracking-wide">{t.movesetDescription}</CardTitle>
              <p className="text-xs text-muted-foreground">({t.optional}) - {t.noGameplayEffect}</p>
            </CardHeader>
            <CardContent className="space-y-2">
              <Input
                value={config.moveset_description}
                onChange={(e) => updateConfig("moveset_description", e.target.value)}
                placeholder={"description"}
                className="border-2 font-medium"
              />
            </CardContent>
          </Card>
        </div>

        {/* Code Preview & Actions - Sticky on mobile, Sidebar on desktop */}
        <div className="sticky bottom-0 z-10 -mx-4 bg-background/95 backdrop-blur-sm p-4 border-t-2 border-border lg:relative lg:mx-0 lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:border-t-0 lg:w-96 lg:flex-shrink-0">
          <div className="lg:sticky lg:top-4 space-y-3">
            {/* Action Buttons */}
            <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
              <Button onClick={handleDownload} className="flex-1 border-2 border-primary font-bold uppercase tracking-wide">
                <Download className="mr-2 h-4 w-4" />
                {t.downloadConfig}
              </Button>
            </div>

            {/* Toggle Code Preview - Mobile only */}
            <Button
              variant="ghost"
              onClick={() => setShowCode(!showCode)}
              className="w-full text-sm text-muted-foreground lg:hidden"
            >
              <ChevronDown className={cn("mr-2 h-4 w-4 transition-transform", showCode && "rotate-180")} />
              {showCode ? t.hideCode || "Hide Code" : t.showCode || "Show Code"}
            </Button>

            {/* Code Preview - Always visible on desktop, toggleable on mobile */}
            <div className={cn("lg:block", showCode ? "block" : "hidden")}>
              <Card className="border-2 border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-bold uppercase tracking-wide">{t.generatedConfig}</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-xs text-background max-h-[60vh] lg:max-h-[50vh]">
                    <code>{generateLuaCode()}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>

            {/* Instructions */}

            <Button
              variant="ghost"
              onClick={() => setShowInstructions(!showInstructions)}
              className="w-full text-sm text-muted-foreground lg:hidden"
            >
              <ChevronDown className={cn("mr-2 h-4 w-4 transition-transform", showInstructions && "rotate-180")} />
              {showInstructions ? t.hideShowInstructions || "Hide How to Install" : t.showInstruction || "Show How to Install"}
            </Button>

            <div className={cn("lg:block", showInstructions ? "block" : "hidden")}>
            <Card className=" border-2 border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-bold uppercase tracking-wide">{t.howToUse}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-inside list-decimal space-y-1 text-sm text-muted-foreground">
                  <li>{t.instruction0}</li>
                  <li>{t.instruction1}</li>
                  <li>{t.instruction2}</li>
                  <li>{t.instruction3}</li>
                  <li>{t.instruction4}</li>
                  <li>{t.instruction5}</li>
                </ol>
              </CardContent>
            </Card>
          </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
