"use client"

import React from "react"
import { logEvent } from "./../app/actions/logEvent";
import { useState, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"
import { Download, Sparkles, ChevronDown, HelpCircle, Check, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import type { translations } from "@/lib/translations"
import { ImportLuaButton } from "./ImportLuaButton";
import { SegmentedOption } from "./SegmentedOption";
import { CharacterConfig, CONFIG_METADATA, defaultConfig } from "@/lib/config_metadata";
import posthog from "posthog-js";

type Translations = typeof translations.en






const CONFIG_METADATA_NOT_CAOTIC: Partial<Record<keyof CharacterConfig, { min?: number; max?: number; step?: number; options?: string[] }>> = {
  // --- Movement (Percentages) ---
  swimming_speed: { min: 0, max: 250, step: 1 },
  gravity: { min: 50, max: 150, step: 1 },
  fall_gravity: { min: 50, max: 150, step: 1 },
  airborne_deceleration_speed: { min: 0, max: 200, step: 1 },
  walking_speed: { min: 50, max: 200, step: 1 },
  in_air_speed: { min: 50, max: 200, step: 1 },
  hold_walking_speed: { min: 50, max: 200, step: 1 },
  crawling_speed: { min: 50, max: 200, step: 1 },
  grounded_slowing_speed: { min: 50, max: 200, step: 1 },

  // --- Jumps ---
  jump_strength: { min: 50, max: 200, step: 1 },
  single_jump_strength: { min: 50, max: 200, step: 1 },
  double_jump_strength: { min: 50, max: 200, step: 1 },
  triple_jump_strength: { min: 50, max: 200, step: 1 ,},
  back_flip_strength: { min: 50, max: 200, step: 1 },
  side_flip_strength: { min: 50, max: 200, step: 1 },
  long_jump_strength: { min: 50, max: 200, step: 1 },
  kick_jump_strength: { min: 50, max: 200, step: 1 },

  // --- Dive & Ground Pound ---
  dive_y_vel: { min: -20, max: 40, step: 1 },
  dive_velocity: { min: 50, max: 200, step: 1 },
  dive_max_velocity: { min: 50, max: 200, step: 1 },
  ground_pound_dive_y_vel: { min: -20, max: 40, step: 1 },
  ground_pound_dive_forward_vel: { min: 0, max: 200, step: 1 },
  long_jump_velocity_multiplier: { min: 50, max: 200, step: 1 },
  long_jump_max_velocity: { min: 50, max: 200, step: 1 },

  // --- Mr. L ---
  mr_l_jump_strength: { min: 50, max: 200, step: 1 },
  mr_l_gravity: { min: 50, max: 200, step: 1 },
  mr_l_air_speed: { min: 20, max: 200, step: 1 },

  // --- Twirling ---
  triple_jump_twirling_when: { options: ["fall", "jump", "always"] },
  twirling_gravity: { min: 50, max: 200, step: 1 },
  fast_twirling_gravity: { min: 50, max: 200, step: 1 },
  twirling_speed: { min: 50, max: 200, step: 1 },

  // --- Ground Pound Config ---
  ground_pound_antecipation_speed_up: { options: ["zero", "low", "high"] },
  ground_pound_gravity: { min: 50, max: 200, step: 1 },
  ground_pound_max_y_vel: { min: 50, max: 200, step: 1 },
  ground_pound_shake: { min: 0, max: 200, step: 1 },
  ground_pound_jump_strength: { min: 50, max: 200, step: 1 },
  ground_pound_jump_forward_vel: { min: 0, max: 50, step: 1 },

  // --- Waft (Wario) ---
  waft_fart_velocity: { min: 50, max: 200, step: 1 },
  waft_fart_strength: { min: 50, max: 200, step: 1 },
  waft_fart_per_level: { min: 1, max: 5, step: 1 },

  // --- Glide Dive ---
  glide_dive_forward_vel: { min: 50, max: 200, step: 1 },
  glide_dive_slowdown: { min: 0, max: 1, step: 0.05 },
  glide_dive_angle_speed: { min: 10, max: 200, step: 1 },
  glide_dive_min_forward_speed: { min: 100, max: 1500, step: 10 },
  glide_dive_max_time: { min: 10, max: 1500, step: 10 },
  glide_dive_y_vel: { min: -20, max: 10, step: 1 },

  // --- Wall Slide ---
  wall_slide_gravity: { min: 0.1, max: 2.0, step: 0.05 },
  wall_slide_max_gravity: { min: 0.1, max: 1.5, step: 0.05 },
  wall_slide_jump_forward_vel: { min: 0, max: 100, step: 1 },
  wall_slide_jump_strength: { min: 20, max: 150, step: 1 },

  // --- Air Jump ---
  in_air_jump: { min: 0, max: 5, step: 1 },
  in_air_jump_strength: { min: 10, max: 200, step: 1 },
  in_air_jump_forward_vel_multiplier: { min: 0, max: 1.5, step: 0.05 },
  in_air_jump_forward_vel_slowdown: { min: 0, max: 1.0, step: 0.05 },
  in_air_jump_forward_vel: { min: 0, max: 100, step: 1 },

  // --- Super Side Flip ---
  super_side_flip_strength: { min: 20, max: 200, step: 1 },
  super_side_flip_convert_foward_vel: { min: 0, max: 200, step: 1 },
  super_side_flip_add_foward_vel: { min: 0, max: 100, step: 1 },
  super_side_flip_kick_strength: { min: 50, max: 300, step: 1 },
  super_side_flip_gravity: { min: 10, max: 200, step: 1 },
  super_side_flip_max_gravity: { min: 10, max: 200, step: 1 },
  super_side_flip_min_velocity: { min: 0, max: 100, step: 1 },

  // --- Yoshi Flutter ---
  yoshi_flutter_angle_speed: { min: 10, max: 200, step: 1 },
  yoshi_flutter_cooldown: { min: 0, max: 60, step: 1 },
  yoshi_flutter_stength_descending: { min: 0, max: 50, step: 1 },
  yoshi_flutter_stength_ascending: { min: 0, max: 50, step: 1 },
  yoshi_flutter_max_y_vel: { min: 5, max: 100, step: 1 },
  yoshi_flutter_reactivations: { min: 0, max: 10, step: 1 },
  yoshi_flutter_speed: { min: 0.1, max: 5.0, step: 0.1 },
  yoshi_flutter_max_time: { min: 5, max: 120, step: 1 },

  // --- Sonic Mechanics ---
  peel_out_max_vel: { min: 50, max: 200, step: 1 },
  peel_out_slowdown: { min: 0, max: 2, step: 0.05 },
  sonic_jump_strength: { min: 10, max: 200, step: 1 },
  sonic_jump_add_forward_vel: { min: 0, max: 100, step: 1 },
  sonic_dash_max_vel: { min: 50, max: 300, step: 1 },
  sonic_dash_slowdown: { min: 0, max: 2, step: 0.05 },
  sonic_dash_slowdown_water: { min: 0, max: 2, step: 0.05 },
  sonic_dash_slowdown_lava: { min: 0, max: 5, step: 0.05 },
  sonic_dash_angle_speed: { min: 10, max: 200, step: 1 },
  drop_dash_charge_vel: { min: 10, max: 200, step: 1 },
  drop_dash_gravity: { min: 10, max: 200, step: 1 },

  // --- Damage & Resistance ---
  bad_gas_damage_multiplier: { min: 0, max: 250, step: 10 },
  water_damage_multiplier: { min: 0, max: 250, step: 10 },
  snow_water_damage_multiplier: { min: 0, max: 250, step: 10 },
  burning_damage_multiplier: { min: 0, max: 250, step: 10 },
  lava_damage_multiplier: { min: 0, max: 250, step: 10 },
  knockback_resistance: { min: 0, max: 200, step: 1 },
  coin_heal_multiplier: { min: 0, max: 500, step: 10 },
};

const presets: { name: string; config: Partial<CharacterConfig> }[] = [
  {
    name: "Default (Mario)",
    config: {
      moveset_description: "Default moveset",
    },
  },
  {
    name: "Charizard",
    config: {
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
      in_air_jump: 3,
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
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <button
          type="button" // Critical: prevents form submission
          className="ml-1 inline-flex items-center cursor-help text-muted-foreground hover:text-primary transition-colors outline-none"
          // On mobile, prevent ghost clicks but allow Radix to handle the toggle
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <HelpCircle className="h-3.5 w-3.5" />
          <span className="sr-only">Info</span>
        </button>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        align="center"
        className="max-w-[250px]" // Prevents tooltip from overflowing mobile screens
      >
        {/* Changed tooltipText to tooltip */}
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  )
}

function NumberInput({
  value,
  onChange,
  label,
  suffix = "",
  tooltip,
  configKey
}: {
  value: number
  onChange: (value: number) => void
  label: string
  suffix?: string
  tooltip?: string,
  configKey: keyof typeof CONFIG_METADATA,
}) {
  const metadata = CONFIG_METADATA[configKey]
  const min = metadata ? metadata?.min ?? 0 : 0
  const max = metadata ? metadata?.max ?? 999 : 999
  const step = metadata ?metadata!.step ?? 1 : 1
  const isNew = metadata ?metadata!.isNew ?? false : false

  const [isEditing, setIsEditing] = React.useState(false)
  const [inputValue, setInputValue] = React.useState(value.toString())

  // Update local input if the value changes externally (e.g. Presets)
  React.useEffect(() => {
    setInputValue(value.toString())
  }, [value])

  const handleBlur = () => {
    setIsEditing(false)
    let num = Number.parseFloat(inputValue)
    if (isNaN(num)) num = value

    // Clamp values between min and max
    const clamped = Math.max(min, Math.min(max, num))
    onChange(clamped)
    setInputValue(clamped.toString())
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleBlur()
    if (e.key === 'Escape') {
      setInputValue(value.toString())
      setIsEditing(false)
    }
  }

  return (
<div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5"> {/* Added gap */}
          <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            {label}
          </Label>
          
          {/* THE NEW BADGE */}
{isNew && (
  <span className="ml-1 px-1.5 py-0.5 text-[10px] font-black uppercase tracking-tighter 
                   bg-sky-500/10 text-sky-500 border border-sky-500/20 rounded-md">
    New
  </span>
)}
          
          <TooltipIcon tooltip={tooltip} />
        </div>

        <div className="flex items-center gap-1">
          {isEditing ? (
            <input
              autoFocus
              className="w-12 bg-transparent text-right text-xs font-bold text-primary outline-none border-b border-primary/50 focus:border-primary"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
            />
          ) : (
            <span
              onClick={() => setIsEditing(true)}
              className="cursor-text text-xs font-bold text-primary hover:bg-primary/10 px-1 rounded transition-colors"
            >
              {value}
            </span>
          )}
          <span className="text-[10px] font-bold text-primary opacity-70">{suffix}</span>
        </div>
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
  isNew
}: {
  id: string
  label: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  className?: string
  tooltip?: string,
    isNew?: boolean
}) {
  return (
    <div className={cn("flex items-center justify-between rounded-lg border-2 border-border bg-secondary/50 p-3 ", className)}>
      <div className="flex items-center">
        <Label htmlFor={id} className="text-sm font-medium cursor-pointer font-bold">
          {label}
        </Label>
                  {/* THE NEW BADGE */}
{isNew && (
  <span className="ml-1 px-1.5 py-0.5 text-[10px] font-black uppercase tracking-tighter 
                   bg-sky-500/10 text-sky-500 border border-sky-500/20 rounded-md">
    New
  </span>
)}

        <TooltipIcon tooltip={tooltip} />
      </div>
      <Switch id={id} checked={checked} onCheckedChange={onCheckedChange} />
    </div>
  )
}

function CreditBadge({ name, url }: { name: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="ml-1.5 inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-semibold
                 bg-amber-500/10 text-amber-600 border border-amber-500/20 rounded-md
                 hover:bg-amber-500/20 transition-colors"
    >
      by {name}
      <ExternalLink className="h-2.5 w-2.5" />
    </a>
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
  isNew,
  hasNewSetting,
  credit,
}: {
  title: string
  enabled: boolean
  onEnabledChange: (enabled: boolean) => void
  children: React.ReactNode
  defaultOpen?: boolean
  advancedSettingsLabel: string
  tooltip?: string
  isNew?: boolean
  hasNewSetting?: boolean
  credit?: { name: string; url: string }
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="rounded-lg border-2 border-border overflow-hidden">
      <div className="flex items-center justify-between bg-secondary/50 p-3">
        <div className="flex items-center">
          <Label className="text-sm font-bold cursor-pointer">{title}</Label>
          {isNew && (
  <span className="ml-1 px-1.5 py-0.5 text-[10px] font-black uppercase tracking-tighter 
                   bg-sky-500/10 text-sky-500 border border-sky-500/20 rounded-md">
    New
  </span>)}
  {hasNewSetting && (
  <span className="ml-1 px-1.5 py-0.5 text-[10px] font-black uppercase tracking-tighter 
                   bg-sky-500/10 text-sky-500 border border-sky-500/20 rounded-md">
    New Setting
  </span>)}
          {credit && <CreditBadge name={credit.name} url={credit.url} />}
          <TooltipIcon tooltip={tooltip} />
        </div>
        <Switch checked={enabled} onCheckedChange={onEnabledChange} />
      </div>
      {enabled && (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="flex w-full items-center justify-between border-t border-border bg-muted/30 px-3 py-2 text-xs font-medium text-muted-foreground hover:bg-muted/50 transition-colors">
            <div>
            {advancedSettingsLabel}
            {hasNewSetting && (
  <span className="ml-1 px-1.5 py-0.5 text-[10px] font-black uppercase tracking-tighter 
                   bg-sky-500/10 text-sky-500 border border-sky-500/20 rounded-md">
    New
  </span>)}
  </div>

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

interface AdvancedCollapsibleProps {
  label: string;
  isNew?: boolean;
  defaultOpen?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function AdvancedCollapsible({
  label,
  isNew = false,
  defaultOpen = false,
  children,
  className,
}: AdvancedCollapsibleProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={cn("w-full pt-2", className)}
    >
      <CollapsibleTrigger className="group flex w-full items-center justify-between rounded-md border border-border bg-muted/30 px-3 py-2 text-xs font-bold uppercase text-muted-foreground hover:bg-muted/50 transition-colors">
        <div className="flex items-center gap-2">
          <span>{label}</span>
          
          {/* That "Cool" Badge we built */}
          {isNew && (
            <span className="rounded bg-sky-500/10 px-1.5 py-0.5 text-[9px] font-black leading-none text-sky-500 ring-1 ring-inset ring-sky-500/20">
              NEW
            </span>
          )}
        </div>

        <ChevronDown 
          className={cn(
            "h-4 w-4 shrink-0 transition-transform duration-200", 
            isOpen && "rotate-180"
          )} 
        />
      </CollapsibleTrigger>

      <CollapsibleContent className="mt-1 ml-1 space-y-3 border-l-2 border-border/50 pl-3 pt-3">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
}

export function CharacterConfigForm({ translations: t }: { translations: Translations }) {
  const [config, setConfig] = useState<CharacterConfig>(defaultConfig)
  const [showCode, setShowCode] = useState(false)
  const [showInstructions, setShowInstructions] = useState(false)
  const [shareCommunity, setShareCommunity] = useState(true)

  const updateConfig = useCallback(<K extends keyof CharacterConfig>(
    key: K,
    value: CharacterConfig[K]
  ) => {
    if (key === "name") {
      value = value.toLowerCase()
    }
    setConfig((prev) => ({ ...prev, [key]: value }))
  }, [])

  const generateLuaCode = useCallback(() => {
    const movesetDesc = config.moveset_description
    const lines: string[] = ["return {", `    name = '${config.name}',`]

    // Helper to add non-default values
    const addIfNotDefault = (key: keyof CharacterConfig) => {
      const val = config[key]
      const defaultVal = CONFIG_METADATA[key] ? CONFIG_METADATA[key].default : null
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
    addIfNotDefault("swimming_speed")
    addIfNotDefault("gravity")
    addIfNotDefault("fall_gravity")
    addIfNotDefault("airborne_deceleration_speed")
    addIfNotDefault("walking_speed")
    addIfNotDefault("in_air_speed")
    addIfNotDefault("hold_walking_speed")
    addIfNotDefault("crawling_speed")
    addIfNotDefault("grounded_slowing_speed")

    // Jumps
    addIfNotDefault("jump_strength")
    addIfNotDefault("single_jump_strength")
    addIfNotDefault("double_jump_strength")
    addIfNotDefault("triple_jump_strength")
    addIfNotDefault("back_flip_strength")
    addIfNotDefault("side_flip_strength")
    addIfNotDefault("long_jump_strength")
    addIfNotDefault("kick_jump_strength")
    addIfNotDefault("disable_double_jump")

    // Dive
    addIfNotDefault("dive_y_vel")
    addIfNotDefault("dive_velocity")
    addIfNotDefault("dive_max_velocity")
    addIfNotDefault("always_dive_first")

    // Ground Pound Dive
    if (config.ground_pound_dive_on) {
      lines.push(`    ground_pound_dive_on = true,`)
      addIfNotDefault("ground_pound_dive_y_vel")
      addIfNotDefault("ground_pound_dive_forward_vel")
      addIfNotDefault("ground_pound_dive_change_direction_on")
    }

    // Long Jump
    addIfNotDefault("long_jump_velocity_multiplier")
    addIfNotDefault("long_jump_max_velocity")

    // Mr L Jump
    if (config.mr_l_jump_on) {
      lines.push(`    mr_l_jump_on = true,`)
      addIfNotDefault("mr_l_jump_strength")
      addIfNotDefault("mr_l_gravity")
      addIfNotDefault("mr_l_air_speed")
      addIfNotDefault("play_mr_l_anticipation_audio")
    }

    // Twirling
    addIfNotDefault("back_flip_twirling_on")
    addIfNotDefault("side_flip_twirling_on")
    addIfNotDefault("triple_jump_twirling_on")
    if (config.triple_jump_twirling_on) addIfNotDefault("triple_jump_twirling_when")
    addIfNotDefault("twirling_ground_pound_on")
    addIfNotDefault("twirling_dive_on")
    addIfNotDefault("twirling_gravity")
    addIfNotDefault("fast_twirling_on")
    addIfNotDefault("fast_twirling_gravity")
    addIfNotDefault("twirling_speed")
    addIfNotDefault("disable_twirling_land")


    // Ground Pound
    addIfNotDefault("ground_pound_antecipation_speed_up")
    addIfNotDefault("ground_pound_gravity")
    addIfNotDefault("ground_pound_max_y_vel")
    addIfNotDefault("ground_pound_shake")

    // Ground Pound Jump
    if (config.ground_pound_jump_on) {
      lines.push(`    ground_pound_jump_on = true,`)
      addIfNotDefault("ground_pound_jump_strength")
      addIfNotDefault("ground_pound_jump_forward_vel")
      addIfNotDefault("ground_pound_jump_dive_on")
    }

    // Waft Fart
    if (config.waft_fart_on) {
      lines.push(`    waft_fart_on = true,`)
      addIfNotDefault("waft_fart_velocity")
      addIfNotDefault("waft_fart_strength")
      addIfNotDefault("waft_fart_per_level")
    }

    // Glide Dive
    if (config.glide_dive_on) {
      lines.push(`    glide_dive_on = true,`)
      addIfNotDefault("glide_dive_forward_vel")
      addIfNotDefault("glide_dive_slowdown")
      addIfNotDefault("glide_dive_angle_speed")
      addIfNotDefault("glide_dive_min_forward_speed")
      addIfNotDefault("glide_dive_max_time")
      addIfNotDefault("glide_dive_y_vel")
      addIfNotDefault("glide_dive_render_with_wing_cap")
      addIfNotDefault("glide_dive_disable_spin")
    }

    // Wall Slide
    if (config.wall_slide_on) {
      lines.push(`    wall_slide_on = true,`)
      addIfNotDefault("wall_slide_gravity")
      addIfNotDefault("wall_slide_max_gravity")
      addIfNotDefault("wall_slide_jump_forward_vel")
      addIfNotDefault("wall_slide_jump_strength")
      addIfNotDefault("wall_slide_same_wall")
    }

    // In Air Jump
    if (config.in_air_jump > 0) {
      lines.push(`    in_air_jump = ${config.in_air_jump},`)
      addIfNotDefault("in_air_jump_strength")
      addIfNotDefault("in_air_jump_forward_vel_multiplier")
      addIfNotDefault("in_air_jump_forward_vel_slowdown")
      addIfNotDefault("in_air_jump_forward_vel")
    }

    // Super Side Flip
    if (config.super_side_flip_on) {
      lines.push(`    super_side_flip_on = true,`)
      addIfNotDefault("super_side_flip_strength")
      addIfNotDefault("super_side_flip_convert_foward_vel")
      addIfNotDefault("super_side_flip_add_foward_vel")
      addIfNotDefault("super_side_flip_kick_strength")
      addIfNotDefault("super_side_flip_gravity")
      addIfNotDefault("super_side_flip_max_gravity")
      addIfNotDefault("super_side_flip_min_velocity")
    }

    // Long Jump Triple Jump
    if (config.long_jump_triple_jump_on) {
      lines.push(`    long_jump_triple_jump_on = true,`)
      addIfNotDefault("long_jump_triple_jump_strength")
      addIfNotDefault("long_jump_triple_jump_add_forward_vel")
    }

    // Yoshi Flutter
    if (config.yoshi_flutter_on) {
      lines.push(`    yoshi_flutter_on = true,`)
      addIfNotDefault("yoshi_flutter_angle_speed")
      addIfNotDefault("yoshi_flutter_cooldown")
      addIfNotDefault("yoshi_flutter_stength_descending")
      addIfNotDefault("yoshi_flutter_stength_ascending")
      addIfNotDefault("yoshi_flutter_max_y_vel")
      addIfNotDefault("yoshi_flutter_reactivations")
      addIfNotDefault("yoshi_flutter_speed")
      addIfNotDefault("yoshi_flutter_max_time")
    }

    // Peel Out
    if (config.peel_out_on) {
      lines.push(`    peel_out_on = true,`)
      addIfNotDefault("peel_out_max_vel")
      addIfNotDefault("peel_out_slowdown")
      addIfNotDefault("peel_out_jump_reset_vel")
    }

    // Sonic Jump
    if (config.sonic_jump_on) {
      lines.push(`    sonic_jump_on = true,`)
      addIfNotDefault("sonic_jump_strength")
      addIfNotDefault("sonic_jump_add_forward_vel")
    }

    // Sonic Dash
    if (config.charge_sonic_dash_on) {
      lines.push(`    charge_sonic_dash_on = true,`)
      addIfNotDefault("sonic_dash_max_vel")
      addIfNotDefault("sonic_dash_slowdown")
      addIfNotDefault("sonic_dash_slowdown_water")
      addIfNotDefault("sonic_dash_slowdown_lava")
      addIfNotDefault("sonic_dash_angle_speed")
    }

    // Drop Dash
    if (config.drop_dash_on) {
      lines.push(`    drop_dash_on = true,`)
      addIfNotDefault("drop_dash_charge_vel")
      addIfNotDefault("drop_dash_gravity")
    }

    // Damage multipliers
    addIfNotDefault("bad_gas_damage_multiplier")
    addIfNotDefault("water_damage_multiplier")
    addIfNotDefault("snow_water_damage_multiplier")
    addIfNotDefault("burning_damage_multiplier")
    addIfNotDefault("lava_damage_multiplier")
    addIfNotDefault("water_enemy_damage_multiplier")
    addIfNotDefault("piranha_plant_damage_multiplier")
    addIfNotDefault("flying_enemy_damage_multiplier")
    addIfNotDefault("goomba_damage_multiplier")
    addIfNotDefault("bat_damage_multiplier")

    // Resistances
    addIfNotDefault("disable_burning")
    addIfNotDefault("disable_damage")
    addIfNotDefault("disable_breath_heal")
    addIfNotDefault("disable_fall_damage")
    addIfNotDefault("disable_coin_heal")
    addIfNotDefault("knockback_resistance")
    addIfNotDefault("coin_heal_multiplier")
    addIfNotDefault("one_hit")

    // Other
    addIfNotDefault("explode_on_death")
    addIfNotDefault("kick_dive_on")
    addIfNotDefault("dive_kick_on")
    addIfNotDefault("dive_ground_pound_on")
    addIfNotDefault("saultube_jump_animation")
    addIfNotDefault("kill_toad")
    addIfNotDefault("kill_pink_bomb_on")


    addIfNotDefault("dive_angle_speed")
    addIfNotDefault("all_jumps_angle_speed")
    addIfNotDefault("basic_jump_angle_speed")
    addIfNotDefault("special_jump_angle_speed")
    addIfNotDefault("special_triple_jump_on")
    addIfNotDefault("disable_special_triple_jump_bounce")
    addIfNotDefault("single_jump_animation")
    addIfNotDefault("triple_jump_animation")
    addIfNotDefault("special_triple_jump_animation_speedup")


    // Umbrella Glide
    if (config.chaorrin_umbrella_glide_on) {
      lines.push(`    chaorrin_umbrella_glide_on = true,`)
      addIfNotDefault("chaorrin_umbrella_animation")
      addIfNotDefault("chaorrin_umbrella_element")
      addIfNotDefault("chaorrin_umbrella_max_timer")
      addIfNotDefault("chaorrin_umbrella_vertical_speed")
      addIfNotDefault("chaorrin_umbrella_glide_forward_speed")
      addIfNotDefault("chaorrin_umbrella_caps_foward_speed")
    }

    lines.push(`    moveset_description = "${movesetDesc}",`)
    lines.push(`    fromInitialTable = false`)
    lines.push("}")

    return lines.join("\n")
  }, [config])


  // 1. Add this state if it's not already there
  const [showNameError, setShowNameError] = useState(false);

  // 3. THE FIXED DOWNLOAD FUNCTION
  const handleDownload = useCallback(() => {
    // Validation check
    if (!config.name || config.name.trim() === "") {
      setShowNameError(true);
      document.body.style.overflow = 'hidden'; // Lock scroll when modal is open
      return;
    }

    // Execution logic
    const luaCode = generateLuaCode();
    const blob = new Blob([luaCode], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${config.name.toLowerCase().replace(/\s+/g, "_")}_ecm_moveset.lua`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    if (shareCommunity) {
      logEvent(luaCode);
      posthog.capture('download', { luaCode })
    }
  }, [generateLuaCode, config.name, shareCommunity]);

  const closePlaceholderModal = () => {
    setShowNameError(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const applyPreset = useCallback(
    (preset: (typeof presets)[number]) => {
      setConfig({
        ...defaultConfig,
        ...preset.config,
        name: config.name, // current name
      })
    },
    [config.name]
  )

  const handleRandomize = useCallback(() => {
    const randomized = { ...config };

    (Object.keys(defaultConfig) as Array<keyof CharacterConfig>).forEach((key) => {
      // 1. Skip non-configurable metadata
      if (key === 'name' || key === 'moveset_description') return;

      const meta = CONFIG_METADATA_NOT_CAOTIC[key];
      const defaultValue = defaultConfig[key];

      // 2. Handle Enums/Strings (twirling_when, ground_pound_speed_up)
      if (meta && 'options' in meta && meta.options) {
        const randomIndex = Math.floor(Math.random() * meta.options.length);
        // We cast to any here because TypeScript can be picky with dynamic key mapping
        randomized[key] = meta.options[randomIndex] as any;
      }

      // 3. Handle Numbers (in_air_jump, gravity, etc.)
      else if (typeof defaultValue === 'number') {
        const min = meta?.min ?? 0;
        const max = meta?.max ?? 200;
        const step = meta?.step ?? 1;

        const raw = Math.random() * (max - min) + min;
        const stepped = Math.round(raw / step) * step;

        // Fixed to 2 decimals to avoid floating point weirdness in the generated Lua
        randomized[key] = Number(stepped.toFixed(2));
      }

      // 4. Handle Booleans
      else if (typeof defaultValue === 'boolean') {
        if(key != "disable_double_jump"){
          randomized[key] = Math.random() > 0.5;
        }else {
          randomized[key] = Math.random() > 0.95;
        }
      }
    });

    setConfig(randomized);
  }, [config, setConfig]);

  const handleImportLua = (content: string) => {
    // Now 'content' is the actual text of the file
    const newConfig = { ...defaultConfig };

    const pattern = /(\w+)\s*=\s*([^,{}]+)/g;
    let match;

    while ((match = pattern.exec(content)) !== null) {
      const key = match[1].trim() as keyof CharacterConfig;
      let val: any = match[2].trim();

      // Cleaning quotes and converting types
      if (val === "true") val = true;
      else if (val === "false") val = false;
      else if (val.startsWith("'") || val.startsWith('"')) {
        val = val.substring(1, val.length - 1);
      } else if (!isNaN(Number(val))) {
        val = Number(val);
      }

      if (key in newConfig) {
        (newConfig as any)[key] = val;
      }
    }

    setConfig(newConfig);
  };

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
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleRandomize}
                    className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/50 hover:from-purple-500/20 hover:to-pink-500/20"
                  >
                    <Sparkles className="mr-2 h-4 w-4 text-purple-500" />
                    Randomize
                  </Button>
                </div>
              </div>

              {/* Character Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-bold uppercase tracking-wide">
                  {t.characterName}
                </Label>
                <Input
                  placeholder={t.enterCharacterName}
                  value={config.name}
                  onChange={(e) => setConfig({ ...config, name: e.target.value })}
                  className={cn(
                    "border-2",
                    showNameError && !config.name.trim()
                      ? "border-destructive ring-2 ring-destructive/20 animate-bounce"
                      : "border-input"
                  )}
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
    {/* --- Standard Stats (Always Visible) --- */}
    <NumberInput 
      label={t.walkingSpeed} 
      value={config.walking_speed} 
      onChange={(v) => updateConfig("walking_speed", v)} 
      configKey={"walking_speed"} suffix="%" 
      tooltip={t.tooltips?.walkingSpeed} 
    />
    <NumberInput 
      label={t.inAirSpeed} 
      value={config.in_air_speed} 
      onChange={(v) => updateConfig("in_air_speed", v)} 
      configKey={"in_air_speed"} suffix="%" 
      tooltip={t.tooltips?.inAirSpeed} 
    />
    <NumberInput 
      label={t.gravity} 
      value={config.gravity} 
      onChange={(v) => updateConfig("gravity", v)} 
      configKey={"gravity"} suffix="%" 
      tooltip={t.tooltips?.gravity} 
    />
    <NumberInput 
      label={t.fallGravity} 
      value={config.fall_gravity} 
      onChange={(v) => updateConfig("fall_gravity", v)} 
      configKey={"fall_gravity"} suffix="%" 
      tooltip={t.tooltips?.fallGravity} 
    />

    {/* --- Advanced Settings (Collapsible) --- */}
    <AdvancedCollapsible label={t.advancedSettings || "Advanced Settings"} >

          <NumberInput 
          label={t.swimmingSpeed} 
          value={config.swimming_speed} 
          onChange={(v) => updateConfig("swimming_speed", v)} 
          configKey={"swimming_speed"} suffix="%" 
          tooltip={t.tooltips?.swimmingSpeed} 
        />
        <NumberInput
          label={t.holdWalkingSpeed}
          value={config.hold_walking_speed}
          onChange={(v) => updateConfig("hold_walking_speed", v)}
          configKey={"hold_walking_speed"} suffix="%"
          tooltip={t.tooltips?.holdWalkingSpeed}
        />
        <NumberInput
          label={t.crawlingSpeed}
          value={config.crawling_speed}
          onChange={(v) => updateConfig("crawling_speed", v)}
          configKey={"crawling_speed"}
             suffix="%"
          tooltip={t.tooltips?.crawlingSpeed}
        />
        <NumberInput
          label={t.groundedSlowingSpeed}
          value={config.grounded_slowing_speed}
          onChange={(v) => updateConfig("grounded_slowing_speed", v)}
                    configKey={"grounded_slowing_speed"}
          suffix="%"
          tooltip={t.tooltips?.groundedSlowingSpeed}
        />
        <NumberInput
          label={t.airborneDecelerationSpeed}
          value={config.airborne_deceleration_speed}
          onChange={(v) => updateConfig("airborne_deceleration_speed", v)}
          configKey={"airborne_deceleration_speed"}
           suffix="%"
          tooltip={t.tooltips?.airborneDecelerationSpeed}
        />

    </AdvancedCollapsible>
  </CardContent>
</Card>

          {/* Jump Stats */}
          <Card className="border-2 border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold uppercase tracking-wide">{t.jumps}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <NumberInput label={t.jumpStrength} value={config.jump_strength} 
              onChange={(v) => updateConfig("jump_strength", v)} 
              configKey="jump_strength"
               suffix="%" tooltip={t.tooltips?.jumpStrength} />
              <NumberInput label={t.doubleJumpStrength} value={config.double_jump_strength} 
              configKey="double_jump_strength"
              onChange={(v) => updateConfig("double_jump_strength", v)}  suffix="%" tooltip={t.tooltips?.doubleJumpStrength} />
              <NumberInput label={t.tripleJumpStrength} 
                            configKey="triple_jump_strength"
                            suffix="%" 
              value={config.triple_jump_strength} onChange={(v) => updateConfig("triple_jump_strength", v)}
               tooltip={t.tooltips?.tripleJumpStrength} />
              <NumberInput label={t.longJumpStrength} value={config.long_jump_strength}
              onChange={(v) => updateConfig("long_jump_strength", v)} 
              configKey="long_jump_strength" suffix="%" tooltip={t.tooltips?.longJumpStrength} />
              <NumberInput label={t.backFlipStrength} value={config.back_flip_strength} onChange={(v) => updateConfig("back_flip_strength", v)} 
              configKey="back_flip_strength"
              suffix="%" tooltip={t.tooltips?.backFlipStrength} />
              
          {/* --- Advanced Settings (Collapsible) --- */}       
              
              
              <NumberInput label={t.sideFlipStrength} value={config.side_flip_strength}
               onChange={(v) => updateConfig("side_flip_strength", v)}
                configKey="side_flip_strength"
                suffix="%" tooltip={t.tooltips?.sideFlipStrength} />


                    <AdvancedCollapsible isNew label={t.advancedSettings || "Advanced Settings"} >
      <>
                                        <NumberInput
  label={t.longJumpVelMultiplier}
  value={config.long_jump_velocity_multiplier}
  onChange={(v) => setConfig({ ...config, long_jump_velocity_multiplier: v })}
   suffix="%"
   configKey="long_jump_velocity_multiplier"
  tooltip={t.tooltips.longJumpVelMultiplier}
/>

                                  <NumberInput
  label={t.all_jumps_angle_speed}
  value={config.all_jumps_angle_speed}
  onChange={(v) => setConfig({ ...config, all_jumps_angle_speed: v })}
   suffix="%"
   configKey="all_jumps_angle_speed"
  tooltip={t.tooltips.all_jumps_angle_speed}
/>

                                  <NumberInput
  label={t.basic_jump_angle_speed}
  value={config.basic_jump_angle_speed}
  onChange={(v) => setConfig({ ...config, basic_jump_angle_speed: v })}
   suffix="%"
   configKey="basic_jump_angle_speed"
  tooltip={t.tooltips.basic_jump_angle_speed}
/>

                                  <NumberInput
  label={t.special_jump_angle_speed}
  value={config.special_jump_angle_speed}
  onChange={(v) => setConfig({ ...config, special_jump_angle_speed: v })}
   suffix="%"
   configKey="special_jump_angle_speed"
  tooltip={t.tooltips.special_jump_angle_speed}
/>


                    <ToggleOption id="special_triple_jump_on" 
                    label={t.special_triple_jump_on} 
                    checked={config.special_triple_jump_on} 
                    onCheckedChange={(v) => updateConfig("special_triple_jump_on", v)}
                     tooltip={t.tooltips?.special_triple_jump_on} 
                     isNew
                     />

                                         <ToggleOption id="disable_special_triple_jump_bounce" 
                    label={t.disable_special_triple_jump_bounce} 
                    checked={config.disable_special_triple_jump_bounce} 
                    onCheckedChange={(v) => updateConfig("disable_special_triple_jump_bounce", v)}
                     tooltip={t.tooltips?.disable_special_triple_jump_bounce}
                     isNew 
                     />


                    <ToggleOption id="disable_double_jump" label={t.disableDoubleJump} checked={config.disable_double_jump} onCheckedChange={(v) => updateConfig("disable_double_jump", v)} tooltip={t.tooltips?.disableDoubleJump} />
      </>
      </AdvancedCollapsible> 
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
<NumberInput
  label={t.forwardVelocity}
  value={config.glide_dive_forward_vel}
  onChange={(v) => updateConfig("glide_dive_forward_vel", v)}
  configKey="glide_dive_forward_vel"
  tooltip={t.tooltips?.glideDiveForwardVel}
/>

<NumberInput
  label={t.slowdown}
  value={config.glide_dive_slowdown}
  onChange={(v) => updateConfig("glide_dive_slowdown", v)}
  configKey="glide_dive_slowdown"
  tooltip={t.tooltips?.glideDiveSlowdown}
/>

<NumberInput
  label={t.angleSpeed}
  value={config.glide_dive_angle_speed}
  onChange={(v) => updateConfig("glide_dive_angle_speed", v)}
  configKey="glide_dive_angle_speed"
  tooltip={t.tooltips?.glideDiveAngleSpeed}
/>

<NumberInput
  label={t.minForwardSpeed}
  value={config.glide_dive_min_forward_speed}
  onChange={(v) => updateConfig("glide_dive_min_forward_speed", v)}
  configKey="glide_dive_min_forward_speed"
  tooltip={t.tooltips?.glideDiveMinForwardSpeed}
/>

<NumberInput
  label={t.maxTime}
  value={config.glide_dive_max_time}
  onChange={(v) => updateConfig("glide_dive_max_time", v)}
  configKey="glide_dive_max_time"
  tooltip={t.tooltips?.glideDiveMaxTime}
/>

<NumberInput
  label={t.yVelocity}
  value={config.glide_dive_y_vel}
  onChange={(v) => updateConfig("glide_dive_y_vel", v)}
  configKey="glide_dive_y_vel"
  tooltip={t.tooltips?.glideDiveYVel}
/>
                <ToggleOption id="glide_dive_wing_cap" label={t.renderWithWingCap} checked={config.glide_dive_render_with_wing_cap} onCheckedChange={(v) => updateConfig("glide_dive_render_with_wing_cap", v)} tooltip={t.tooltips?.glideDiveWingCap} />
                <ToggleOption id="glide_dive_disable_spin" label={t.disableSpin} checked={config.glide_dive_disable_spin} onCheckedChange={(v) => updateConfig("glide_dive_disable_spin", v)} tooltip={t.tooltips?.glideDiveDisableSpin} />
              </AbilitySection>

              {/* Umbrella Glide */}
              <AbilitySection
                title={t.umbrellaGlide ?? "Umbrella Glide"}
                enabled={config.chaorrin_umbrella_glide_on}
                onEnabledChange={(v) => updateConfig("chaorrin_umbrella_glide_on", v)}
                advancedSettingsLabel={t.advancedSettings}
                tooltip={t.tooltips?.umbrellaGlide}
                isNew
                credit={{ name: "chaorrin", url: "https://mods.sm64coopdx.com/mods/big-the-cat-and-froggy.473/" }}
              >
                <SegmentedOption
                  label={t.chaorrin_umbrella_animation ?? "Umbrella Animation"}
                  value={config.chaorrin_umbrella_animation}
                  onChange={(val) => updateConfig("chaorrin_umbrella_animation", val)}
                  t={t}
                  isNew={CONFIG_METADATA.chaorrin_umbrella_animation.isNew}
                  options={(CONFIG_METADATA.chaorrin_umbrella_animation.options ?? ["default"]).map((opt) => ({ value: opt, labelKey: opt }))}
                  tooltip={t.tooltips?.umbrellaAnimation}
                />
                <SegmentedOption
                  label={t.chaorrin_umbrella_element ?? "Element"}
                  value={config.chaorrin_umbrella_element}
                  onChange={(val) => updateConfig("chaorrin_umbrella_element", val)}
                  t={t}
                  isNew={CONFIG_METADATA.chaorrin_umbrella_element.isNew}
                  options={(CONFIG_METADATA.chaorrin_umbrella_element.options ?? ["none"]).map((opt) => ({ value: opt, labelKey: opt }))}
                  tooltip={t.tooltips?.umbrellaElement}
                />
                <NumberInput
                  label={t.chaorrin_umbrella_max_timer ?? "Max Glide Time"}
                  value={config.chaorrin_umbrella_max_timer}
                  onChange={(v) => updateConfig("chaorrin_umbrella_max_timer", v)}
                  configKey="chaorrin_umbrella_max_timer"
                  tooltip={t.tooltips?.umbrellaMaxTimer}
                />
                <NumberInput
                  label={t.chaorrin_umbrella_vertical_speed ?? "Vertical Descent Speed"}
                  value={config.chaorrin_umbrella_vertical_speed}
                  onChange={(v) => updateConfig("chaorrin_umbrella_vertical_speed", v)}
                  configKey="chaorrin_umbrella_vertical_speed"
                  tooltip={t.tooltips?.umbrellaVerticalSpeed}
                />
                <NumberInput
                  label={t.chaorrin_umbrella_glide_forward_speed ?? "Glide Forward Speed"}
                  value={config.chaorrin_umbrella_glide_forward_speed}
                  onChange={(v) => updateConfig("chaorrin_umbrella_glide_forward_speed", v)}
                  configKey="chaorrin_umbrella_glide_forward_speed"
                  suffix="%"
                  tooltip={t.tooltips?.umbrellaForwardSpeed}
                />
                <ToggleOption
                  id="umbrella_caps_forward_speed"
                  label={t.chaorrin_umbrella_caps_foward_speed ?? "Cap Forward Speed"}
                  checked={config.chaorrin_umbrella_caps_foward_speed}
                  onCheckedChange={(v) => updateConfig("chaorrin_umbrella_caps_foward_speed", v)}
                  isNew={CONFIG_METADATA.chaorrin_umbrella_caps_foward_speed.isNew}
                  tooltip={t.tooltips?.umbrellaCapsForwardSpeed}
                />
              </AbilitySection>

              {/* Ground Pound Jump */}
              <AbilitySection title={t.groundPoundJump} enabled={config.ground_pound_jump_on} onEnabledChange={(v) => updateConfig("ground_pound_jump_on", v)} advancedSettingsLabel={t.advancedSettings} tooltip={t.tooltips?.groundPoundJump}>
                <NumberInput label={t.strength} value={config.ground_pound_jump_strength} onChange={(v) => updateConfig("ground_pound_jump_strength", v)} 
                configKey="ground_pound_jump_strength"
                 />
                <NumberInput label={t.forwardVelocity} value={config.ground_pound_jump_forward_vel} onChange={(v) => updateConfig("ground_pound_jump_forward_vel", v)}
                 configKey="ground_pound_jump_forward_vel"/>
                <ToggleOption id="gp_jump_dive" label={t.groundPoundJumpDive} checked={config.ground_pound_jump_dive_on} onCheckedChange={(v) => updateConfig("ground_pound_jump_dive_on", v)} />
              </AbilitySection>

              {/* Wall Slide */}
              <AbilitySection title={t.wallSlide} enabled={config.wall_slide_on} onEnabledChange={(v) => updateConfig("wall_slide_on", v)} advancedSettingsLabel={t.advancedSettings} tooltip={t.tooltips?.wallSlide}>
      <NumberInput
  label={t.gravity}
  value={config.wall_slide_gravity}
  onChange={(v) => updateConfig("wall_slide_gravity", v)}
  configKey="wall_slide_gravity"
/>

<NumberInput
  label={t.maxGravity}
  value={config.wall_slide_max_gravity}
  onChange={(v) => updateConfig("wall_slide_max_gravity", v)}
  configKey="wall_slide_max_gravity"
/>

<NumberInput
  label={t.jumpForwardVelocity}
  value={config.wall_slide_jump_forward_vel}
  onChange={(v) => updateConfig("wall_slide_jump_forward_vel", v)}
  configKey="wall_slide_jump_forward_vel"
/>

<NumberInput
  label={t.jumpStrength}
  value={config.wall_slide_jump_strength}
  onChange={(v) => updateConfig("wall_slide_jump_strength", v)}
  configKey="wall_slide_jump_strength"
/>
                <ToggleOption id="wall_slide_same_wall" label={t.sameWallJump} checked={config.wall_slide_same_wall} onCheckedChange={(v) => updateConfig("wall_slide_same_wall", v)} />
              </AbilitySection>

              {/* Yoshi Flutter */}
              <AbilitySection title={t.yoshiFlutter} enabled={config.yoshi_flutter_on} onEnabledChange={(v) => updateConfig("yoshi_flutter_on", v)} advancedSettingsLabel={t.advancedSettings} tooltip={t.tooltips?.yoshiFlutter}>
<NumberInput
  label={t.angleSpeed}
  value={config.yoshi_flutter_angle_speed}
  onChange={(v) => updateConfig("yoshi_flutter_angle_speed", v)}
  configKey="yoshi_flutter_angle_speed"
/>

<NumberInput
  label={t.cooldown}
  value={config.yoshi_flutter_cooldown}
  onChange={(v) => updateConfig("yoshi_flutter_cooldown", v)}
  configKey="yoshi_flutter_cooldown"
/>

<NumberInput
  label={t.strengthDescending}
  value={config.yoshi_flutter_stength_descending}
  onChange={(v) => updateConfig("yoshi_flutter_stength_descending", v)}
  configKey="yoshi_flutter_stength_descending"
/>

<NumberInput
  label={t.strengthAscending}
  value={config.yoshi_flutter_stength_ascending}
  onChange={(v) => updateConfig("yoshi_flutter_stength_ascending", v)}
  configKey="yoshi_flutter_stength_ascending"
/>

<NumberInput
  label={t.maxYVelocity}
  value={config.yoshi_flutter_max_y_vel}
  onChange={(v) => updateConfig("yoshi_flutter_max_y_vel", v)}
  configKey="yoshi_flutter_max_y_vel"
/>

<NumberInput
  label={t.reactivations}
  value={config.yoshi_flutter_reactivations}
  onChange={(v) => updateConfig("yoshi_flutter_reactivations", v)}
  configKey="yoshi_flutter_reactivations"
/>

<NumberInput
  label={t.speed}
  value={config.yoshi_flutter_speed}
  onChange={(v) => updateConfig("yoshi_flutter_speed", v)}
  configKey="yoshi_flutter_speed"
/>

<NumberInput
  label={t.maxTime}
  value={config.yoshi_flutter_max_time}
  onChange={(v) => updateConfig("yoshi_flutter_max_time", v)}
  configKey="yoshi_flutter_max_time"
/>
              </AbilitySection>

              {/* Mr L Jump */}
              <AbilitySection title={t.mrLJump} enabled={config.mr_l_jump_on} onEnabledChange={(v) => updateConfig("mr_l_jump_on", v)} advancedSettingsLabel={t.advancedSettings} tooltip={t.tooltips?.mrLJump}>
<NumberInput
  label={t.jumpStrength}
  value={config.mr_l_jump_strength}
  onChange={(v) => updateConfig("mr_l_jump_strength", v)}
  configKey="mr_l_jump_strength"
/>

<NumberInput
  label={t.gravity}
  value={config.mr_l_gravity}
  onChange={(v) => updateConfig("mr_l_gravity", v)}
  configKey="mr_l_gravity"
/>

<NumberInput
  label={t.airSpeed}
  value={config.mr_l_air_speed}
  onChange={(v) => updateConfig("mr_l_air_speed", v)}
  configKey="mr_l_air_speed"
/>
                <ToggleOption id="mr_l_audio" label={t.playAnticipationAudio} checked={config.play_mr_l_anticipation_audio} onCheckedChange={(v) => updateConfig("play_mr_l_anticipation_audio", v)} />
              </AbilitySection>

              {/* Super Side Flip */}
              <AbilitySection title={t.superSideFlip} enabled={config.super_side_flip_on} onEnabledChange={(v) => updateConfig("super_side_flip_on", v)} advancedSettingsLabel={t.advancedSettings} tooltip={t.tooltips?.superSideFlip}>
<NumberInput
  label={t.strength}
  value={config.super_side_flip_strength}
  onChange={(v) => updateConfig("super_side_flip_strength", v)}
  configKey="super_side_flip_strength"
/>

<NumberInput
  label={t.convertForwardVelocity}
  value={config.super_side_flip_convert_foward_vel}
  onChange={(v) => updateConfig("super_side_flip_convert_foward_vel", v)}
  configKey="super_side_flip_convert_foward_vel"
/>

<NumberInput
  label={t.addForwardVelocity}
  value={config.super_side_flip_add_foward_vel}
  onChange={(v) => updateConfig("super_side_flip_add_foward_vel", v)}
  configKey="super_side_flip_add_foward_vel"
/>

<NumberInput
  label={t.kickStrength}
  value={config.super_side_flip_kick_strength}
  onChange={(v) => updateConfig("super_side_flip_kick_strength", v)}
  configKey="super_side_flip_kick_strength"
/>

<NumberInput
  label={t.gravity}
  value={config.super_side_flip_gravity}
  onChange={(v) => updateConfig("super_side_flip_gravity", v)}
  configKey="super_side_flip_gravity"
/>

<NumberInput
  label={t.maxGravity}
  value={config.super_side_flip_max_gravity}
  onChange={(v) => updateConfig("super_side_flip_max_gravity", v)}
  configKey="super_side_flip_max_gravity"
/>

<NumberInput
  label={t.minVelocity}
  value={config.super_side_flip_min_velocity}
  onChange={(v) => updateConfig("super_side_flip_min_velocity", v)}
  configKey="super_side_flip_min_velocity"
/>
              </AbilitySection>

              {/* In Air Jump */}
              <div className="rounded-lg border-2 border-border overflow-hidden">
                <div className="bg-secondary/50 p-3">
                  <NumberInput label={t.inAirJumps} value={config.in_air_jump}
                   onChange={(v) => updateConfig("in_air_jump", v)} 
                   configKey="in_air_jump" tooltip={t.tooltips?.inAirJump} />
                </div>
                {config.in_air_jump > 0 && (
                  <Collapsible>
                    <CollapsibleTrigger className="flex w-full items-center justify-between border-t border-border bg-muted/30 px-3 py-2 text-xs font-medium text-muted-foreground hover:bg-muted/50 transition-colors">
                      {t.advancedSettings}
                      <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="space-y-3 p-3 bg-card/50">
<NumberInput
  label={t.jumpStrength}
  value={config.in_air_jump_strength}
  onChange={(v) => updateConfig("in_air_jump_strength", v)}
  configKey="in_air_jump_strength"
/>

<NumberInput
  label={t.forwardVelMultiplier}
  value={config.in_air_jump_forward_vel_multiplier}
  onChange={(v) => updateConfig("in_air_jump_forward_vel_multiplier", v)}
  configKey="in_air_jump_forward_vel_multiplier"
/>

<NumberInput
  label={t.forwardVelSlowdown}
  value={config.in_air_jump_forward_vel_slowdown}
  onChange={(v) => updateConfig("in_air_jump_forward_vel_slowdown", v)}
  configKey="in_air_jump_forward_vel_slowdown"
/>

<NumberInput
  label={t.forwardVelocity}
  value={config.in_air_jump_forward_vel}
  onChange={(v) => updateConfig("in_air_jump_forward_vel", v)}
  configKey="in_air_jump_forward_vel"
/>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                )}
              </div>

              {/* Waft Fart */}
              <AbilitySection title={t.waftFart} enabled={config.waft_fart_on} onEnabledChange={(v) => updateConfig("waft_fart_on", v)} advancedSettingsLabel={t.advancedSettings} tooltip={t.tooltips?.waftFart}>
<NumberInput
  label={t.velocity}
  value={config.waft_fart_velocity}
  onChange={(v) => updateConfig("waft_fart_velocity", v)}
  configKey="waft_fart_velocity"
/>

<NumberInput
  label={t.strength}
  value={config.waft_fart_strength}
  onChange={(v) => updateConfig("waft_fart_strength", v)}
  configKey="waft_fart_strength"
/>

<NumberInput
  label={t.perLevel}
  value={config.waft_fart_per_level}
  onChange={(v) => updateConfig("waft_fart_per_level", v)}
  configKey="waft_fart_per_level"
/>
              </AbilitySection>

              {/* Long Jump Triple Jump */}
              <AbilitySection title={t.longJumpTripleJump} enabled={config.long_jump_triple_jump_on} onEnabledChange={(v) => updateConfig("long_jump_triple_jump_on", v)} advancedSettingsLabel={t.advancedSettings} tooltip={t.tooltips?.longJumpTripleJump}>
<NumberInput
  label={t.strength}
  value={config.long_jump_triple_jump_strength}
  onChange={(v) => updateConfig("long_jump_triple_jump_strength", v)}
  configKey="long_jump_triple_jump_strength"
/>

<NumberInput
  label={t.addForwardVelocity}
  value={config.long_jump_triple_jump_add_forward_vel}
  onChange={(v) => updateConfig("long_jump_triple_jump_add_forward_vel", v)}
  configKey="long_jump_triple_jump_add_forward_vel"
/>
              </AbilitySection>

              {/* Ground Pound Dive */}
              <AbilitySection hasNewSetting title={t.groundPoundDive} enabled={config.ground_pound_dive_on} onEnabledChange={(v) => updateConfig("ground_pound_dive_on", v)} advancedSettingsLabel={t.advancedSettings} tooltip={t.tooltips?.groundPoundDive}>
                <NumberInput label={t.yVelocity} 
                value={config.ground_pound_dive_y_vel} 
                onChange={(v) => updateConfig("ground_pound_dive_y_vel", v)} 
                configKey="ground_pound_dive_y_vel" />
                <NumberInput label={t.forwardVelocity} value={config.ground_pound_dive_forward_vel} 
                onChange={(v) => updateConfig("ground_pound_dive_forward_vel", v)} 
                configKey="ground_pound_dive_forward_vel" />


<ToggleOption id="ground_pound_dive_change_direction_on" label={t.ground_pound_dive_change_direction_on}  isNew
checked={config.ground_pound_dive_change_direction_on} onCheckedChange={(v) => updateConfig("ground_pound_dive_change_direction_on", v)}
 tooltip={t.tooltips?.ground_pound_dive_change_direction_on} />

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
                <NumberInput label={t.maxVelocity} value={config.peel_out_max_vel} 
                onChange={(v) => updateConfig("peel_out_max_vel", v)} 
                configKey="peel_out_max_vel"/>
                <NumberInput label={t.slowdown} value={config.peel_out_slowdown} 
                onChange={(v) => updateConfig("peel_out_slowdown", v)} 
                configKey="peel_out_slowdown"/>
                <ToggleOption id="peel_out_reset" label={t.jumpResetVelocity} checked={config.peel_out_jump_reset_vel} onCheckedChange={(v) => updateConfig("peel_out_jump_reset_vel", v)} />
              </AbilitySection>

              {/* Sonic Jump */}
              <AbilitySection title={t.sonicJump} enabled={config.sonic_jump_on} onEnabledChange={(v) => updateConfig("sonic_jump_on", v)} advancedSettingsLabel={t.advancedSettings} tooltip={t.tooltips?.sonicJump}>
                <NumberInput label={t.strength} value={config.sonic_jump_strength}
                 onChange={(v) => updateConfig("sonic_jump_strength", v)}
                 configKey="sonic_jump_strength" />
                <NumberInput label={t.addForwardVelocity}
                 value={config.sonic_jump_add_forward_vel} 
                 onChange={(v) => updateConfig("sonic_jump_add_forward_vel", v)} 
                 configKey="sonic_jump_add_forward_vel" />
              </AbilitySection>

              {/* Sonic Dash */}
              <AbilitySection title={t.chargeSonicDash} enabled={config.charge_sonic_dash_on} onEnabledChange={(v) => updateConfig("charge_sonic_dash_on", v)} advancedSettingsLabel={t.advancedSettings} tooltip={t.tooltips?.sonicDash}>
<NumberInput
  label={t.maxVelocity}
  value={config.sonic_dash_max_vel}
  onChange={(v) => updateConfig("sonic_dash_max_vel", v)}
  configKey="sonic_dash_max_vel"
/>

<NumberInput
  label={t.slowdown}
  value={config.sonic_dash_slowdown}
  onChange={(v) => updateConfig("sonic_dash_slowdown", v)}
  configKey="sonic_dash_slowdown"
/>

<NumberInput
  label={t.slowdownWater}
  value={config.sonic_dash_slowdown_water}
  onChange={(v) => updateConfig("sonic_dash_slowdown_water", v)}
  configKey="sonic_dash_slowdown_water"
/>

<NumberInput
  label={t.slowdownLava}
  value={config.sonic_dash_slowdown_lava}
  onChange={(v) => updateConfig("sonic_dash_slowdown_lava", v)}
  configKey="sonic_dash_slowdown_lava"
/>

<NumberInput
  label={t.angleSpeed}
  value={config.sonic_dash_angle_speed}
  onChange={(v) => updateConfig("sonic_dash_angle_speed", v)}
  configKey="sonic_dash_angle_speed"
/>
              </AbilitySection>

              {/* Drop Dash */}
              <AbilitySection title={t.dropDash} enabled={config.drop_dash_on} onEnabledChange={(v) => updateConfig("drop_dash_on", v)} advancedSettingsLabel={t.advancedSettings} tooltip={t.tooltips?.dropDash}>
                <NumberInput label={t.chargeVelocity} 
                value={config.drop_dash_charge_vel} 
                onChange={(v) => updateConfig("drop_dash_charge_vel", v)} 
                configKey="drop_dash_charge_vel" />
                <NumberInput label={t.gravity} value={config.drop_dash_gravity} 
                onChange={(v) => updateConfig("drop_dash_gravity", v)} 
                configKey="drop_dash_gravity" />
              </AbilitySection>
            </CardContent>
          </Card>



                    {/* Dive */}
          <Card className="border-2 border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold uppercase tracking-wide">{t.dive}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">

              <div className="space-y-4">
  <NumberInput
    label={t.dive_y_vel}
    configKey="dive_y_vel"
    value={config.dive_y_vel}
    onChange={(v) => setConfig({ ...config, dive_y_vel: v })}
    tooltip={t.tooltips?.dive_y_vel}
    suffix=""
  />

  <NumberInput
    label={t.dive_velocity}
    configKey="dive_velocity"
    value={config.dive_velocity}
    onChange={(v) => setConfig({ ...config, dive_velocity: v })}
    tooltip={t.tooltips?.dive_velocity}
    suffix="%"
  />

  <NumberInput
    label={t.dive_max_velocity}
    configKey="dive_max_velocity"
    value={config.dive_max_velocity}
    onChange={(v) => setConfig({ ...config, dive_max_velocity: v })}
    tooltip={t.tooltips?.dive_max_velocity}
    suffix="%"
  />
</div>

                                                            <NumberInput
  label={t.dive_angle_speed}
  value={config.dive_angle_speed}
  onChange={(v) => setConfig({ ...config, dive_angle_speed: v })}
   suffix="%"
   configKey="dive_angle_speed"
  tooltip={t.tooltips.all_jumps_angle_speed}
/>

                                  <ToggleOption id="kick_dive" label={t.kickDive} checked={config.kick_dive_on} onCheckedChange={(v) => updateConfig("kick_dive_on", v)} tooltip={t.tooltips?.kickDive} />
              <ToggleOption id="dive_kick" label={t.diveKick} checked={config.dive_kick_on} onCheckedChange={(v) => updateConfig("dive_kick_on", v)} tooltip={t.tooltips?.diveKick} />
           
                         <ToggleOption id="dive_gp" label={t.diveGroundPound} checked={config.dive_ground_pound_on} onCheckedChange={(v) => updateConfig("dive_ground_pound_on", v)} tooltip={t.tooltips?.diveGroundPound} />

              <ToggleOption id="always_dive_first" label={t.alwaysDiveFirst} checked={config.always_dive_first} onCheckedChange={(v) => updateConfig("always_dive_first", v)} tooltip={t.tooltips?.alwaysDiveFirst} />
        
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
            <NumberInput
  label={t.knockbackResistance}
  value={config.knockback_resistance}
  onChange={(v) => updateConfig("knockback_resistance", v)}
  configKey="knockback_resistance"
  suffix="%"
  tooltip={t.tooltips?.knockbackResistance}
/>

<NumberInput
  label={t.coinHealMultiplier}
  value={config.coin_heal_multiplier}
  onChange={(v) => updateConfig("coin_heal_multiplier", v)}
  configKey="coin_heal_multiplier"
  suffix="%"
  tooltip={t.tooltips?.coinHealMultiplier}
/>

<NumberInput
  label={t.waterDamage}
  value={config.water_damage_multiplier}
  onChange={(v) => updateConfig("water_damage_multiplier", v)}
  configKey="water_damage_multiplier"
  suffix="%"
  tooltip={t.tooltips?.waterDamage}
/>

<NumberInput
  label={t.lavaDamage}
  value={config.lava_damage_multiplier}
  onChange={(v) => updateConfig("lava_damage_multiplier", v)}
  configKey="lava_damage_multiplier"
  suffix="%"
  tooltip={t.tooltips?.lavaDamage}
/>

<NumberInput
  label={t.burningDamage}
  value={config.burning_damage_multiplier}
  onChange={(v) => updateConfig("burning_damage_multiplier", v)}
  configKey="burning_damage_multiplier"
  suffix="%"
  tooltip={t.tooltips?.burningDamage}
/>

<NumberInput
  label={t.badGasDamage}
  value={config.bad_gas_damage_multiplier}
  onChange={(v) => updateConfig("bad_gas_damage_multiplier", v)}
  configKey="bad_gas_damage_multiplier"
  suffix="%"
  tooltip={t.tooltips?.badGasDamage}
/>

<NumberInput
  label={t.waterEnemyDamage}
  value={config.water_enemy_damage_multiplier}
  onChange={(v) => updateConfig("water_enemy_damage_multiplier", v)}
  configKey="water_enemy_damage_multiplier"
  suffix="%"
  tooltip={t.tooltips?.waterEnemyDamage}
/>

<NumberInput
  label={t.piranhaPlantDamage}
  value={config.piranha_plant_damage_multiplier}
  onChange={(v) => updateConfig("piranha_plant_damage_multiplier", v)}
  configKey="piranha_plant_damage_multiplier"
  suffix="%"
  tooltip={t.tooltips?.piranhaPlantDamage}
/>

<NumberInput
  label={t.goombaDamage}
  value={config.goomba_damage_multiplier}
  onChange={(v) => updateConfig("goomba_damage_multiplier", v)}
  configKey="goomba_damage_multiplier"
  suffix="%"
  tooltip={t.tooltips?.goombaDamage}
/>

<NumberInput
  label={t.flyingEnemyDamage}
  value={config.flying_enemy_damage_multiplier}
  onChange={(v) => updateConfig("flying_enemy_damage_multiplier", v)}
  configKey="flying_enemy_damage_multiplier"
  suffix="%"
  tooltip={t.tooltips?.flyingEnemyDamage}
/>

<NumberInput
  label={t.batDamage}
  value={config.bat_damage_multiplier}
  onChange={(v) => updateConfig("bat_damage_multiplier", v)}
  configKey="bat_damage_multiplier"
  suffix="%"
  tooltip={t.tooltips?.batDamage}
/>
            </CardContent>
          </Card>


          {/* Twirling */}
          <Card className="border-2 border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold uppercase tracking-wide">{t.twirling}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                            <ToggleOption id="triple_jump_twirling" label={t.tripleJumpTwirling} checked={config.triple_jump_twirling_on} onCheckedChange={(v) => updateConfig("triple_jump_twirling_on", v)} tooltip={t.tooltips?.tripleJumpTwirling} />
              <ToggleOption id="fast_twirling" label={t.fastTwirling} checked={config.fast_twirling_on} onCheckedChange={(v) => updateConfig("fast_twirling_on", v)} tooltip={t.tooltips?.fastTwirling} />
                <ToggleOption id="disable_twirling_land" label={t.disableTwirlingLand} checked={config.disable_twirling_land} onCheckedChange={(v) => updateConfig("disable_twirling_land", v)} tooltip={t.tooltips?.disableTwirlingLand} />
                            <NumberInput label={t.twirlingGravity} value={config.twirling_gravity} onChange={(v) => updateConfig("twirling_gravity", v)} 
              configKey="twirling_gravity" tooltip={t.tooltips?.twirlingGravity} />
              <NumberInput label={t.twirlingSpeed} value={config.twirling_speed}
               onChange={(v) => updateConfig("twirling_speed", v)} 
               configKey="twirling_speed" tooltip={t.tooltips?.twirlingSpeed} />
                                   <AdvancedCollapsible label={t.advancedSettings || "Advanced Settings"} >
      <>
                    <ToggleOption id="back_flip_twirling" label={t.backFlipTwirling} checked={config.back_flip_twirling_on} onCheckedChange={(v) => updateConfig("back_flip_twirling_on", v)} tooltip={t.tooltips?.backFlipTwirling} />
              <ToggleOption id="side_flip_twirling" label={t.sideFlipTwirling} checked={config.side_flip_twirling_on} onCheckedChange={(v) => updateConfig("side_flip_twirling_on", v)} tooltip={t.tooltips?.sideFlipTwirling} />
      <ToggleOption id="twirling_dive" label={t.twirlingDive} checked={config.twirling_dive_on} onCheckedChange={(v) => updateConfig("twirling_dive_on", v)} tooltip={t.tooltips?.twirlingDive} />
                      <ToggleOption id="twirling_gp" label={t.twirlingGroundPound} checked={config.twirling_ground_pound_on} onCheckedChange={(v) => updateConfig("twirling_ground_pound_on", v)} tooltip={t.tooltips?.twirlingGroundPound} />
      </>
      </AdvancedCollapsible>
            
            </CardContent>
          </Card>

          {/* Other Options */}
          <Card className="border-2 border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold uppercase tracking-wide">{t.otherOptions}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 lg:grid-cols-2">
              <ToggleOption id="explode_on_death" label={t.explodeOnDeath} checked={config.explode_on_death} onCheckedChange={(v) => updateConfig("explode_on_death", v)} tooltip={t.tooltips?.explodeOnDeath} />
              <ToggleOption id="kill_toad" label={t.killToad} checked={config.kill_toad} onCheckedChange={(v) => updateConfig("kill_toad", v)} tooltip={t.tooltips?.killToad} />
                                                          <ToggleOption id="kill_pink_bomb" label={t.killPinkBobomb} checked={config.kill_pink_bomb_on} onCheckedChange={(v) => updateConfig("kill_pink_bomb_on", v)} tooltip={t.tooltips?.killPinkBobomb} />





            </CardContent>
          </Card>

                    <Card className="border-2 border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold uppercase tracking-wide">{t.animation}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">

              <SegmentedOption
  label={t.single_jump_animation}
  value={config.single_jump_animation}
  onChange={(val) => setConfig({ ...config, single_jump_animation: val })}
  t={t} // Pass the function down
  isNew
  options={[
    { value: "default", labelKey: "default", isNew: true },
    { value: "special", labelKey: "special", isNew: true },
    { value: "special_v2", labelKey: "special_V2", isNew: true },
  ]}
  tooltip={t.tooltips.single_jump_animation}
/>


<SegmentedOption
  label={t.triple_jump_animation}
  value={config.triple_jump_animation}
  onChange={(val) => setConfig({ ...config, triple_jump_animation: val })}
  t={t} // Pass the function down
  isNew
  options={[
    { value: "default", labelKey: "default", isNew: true },
    { value: "special", labelKey: "special", isNew: true },
    { value: "special_v2", labelKey: "special_V2", isNew: true },
  ]}
  tooltip={t.tooltips.triple_jump_animation}
/>

<AdvancedCollapsible label={t.advancedSettings || "Advanced Settings"} isNew >
<NumberInput
label={t.special_triple_jump_animation_speedup}
value={config.special_triple_jump_animation_speedup}
onChange={(v) => updateConfig("special_triple_jump_animation_speedup", v)}
configKey="special_triple_jump_animation_speedup"
/>
<ToggleOption id="saultube_anim" label={t.saultubeJumpAnimation} checked={config.saultube_jump_animation} onCheckedChange={(v) => updateConfig("saultube_jump_animation", v)} tooltip={t.tooltips?.saultubeJumpAnimation} />
            
  </AdvancedCollapsible>


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
        <div className="sticky bottom-0 z-10 -mx-4 bg-background/95 backdrop-blur-sm px-3 py-2 lg:p-4 border-t-2 border-border lg:relative lg:mx-0 lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:border-t-0 lg:w-96 lg:flex-shrink-0">
          <div className="lg:sticky lg:top-4 space-y-3">
            {/* Action Buttons */}
            <div className="flex gap-2 flex-col">


              <Button onClick={handleDownload} className="flex-1 border-2 border-primary font-bold uppercase tracking-wide text-lg lg:h-20">
                <Download className="mr-2 h-4 w-4" />
                {t.downloadConfig}
              </Button>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setShareCommunity(!shareCommunity)}
                  className=" md:px-6 flex-1 border-2 bg-transparent font-bold uppercase tracking-wide md:gap-3 text-muted-foreground border-muted-foreground"
                >
                  <div className={`
                  flex items-center justify-center w-5 h-5 rounded border-2 transition-all duration-200 border-muted-foreground
                  ${shareCommunity
                      ? "bg-primary border-primary text-white"
                      : "bg-transparent border-current"}
                `}>
                    {shareCommunity && <Check className="w-4 h-4 stroke-[3] border-muted-foreground" />}
                  </div>

                  {/* Using translations from your previous prompt */}
                  {t.shareWithCommunity || "Community Share"}
                </Button>

                <ImportLuaButton onFileRead={handleImportLua} label={t.importFile} />
              </div>
            </div>

            {/* Toggle Code Preview - Mobile only */}
            <Button
              variant="ghost"
              onClick={() => setShowCode(!showCode)}
              className="w-full text-sm text-muted-foreground  hidden"
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
              className="w-full text-md lg:text-sm text-muted-foreground lg:hidden mb-2 lg:mb-12"
            >
              <ChevronDown className={cn("mr-2 h-4 w-4 transition-transform", showInstructions && "rotate-180")} />
              {showInstructions ? t.hideShowInstructions || "Hide How to Install" : t.showInstruction || "Show How to Install"}
            </Button>

            <div className={cn("lg:block", showInstructions ? "block" : "hidden")}>
              <Card className=" border-2 border-border">
                <CardHeader>
                  <CardTitle className="text-xl font-bold uppercase tracking-wide">{t.howToUse}</CardTitle>
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

      {showNameError && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closePlaceholderModal}
          />

          {/* Modal Card */}
          <div className="relative w-full max-w-md bg-card border-2 border-border p-6 rounded-xl shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center gap-3 text-destructive mb-4">
              <Sparkles className="h-6 w-6" />
              <h2 className="text-xl font-bold uppercase tracking-tight">
                {t.characterName} Required
              </h2>
            </div>

            <p className="text-foreground font-semibold mb-4 text-sm">
              {t.instruction0}
            </p>

            <div className="bg-muted/50 rounded-lg p-4 border border-border mb-6">
              <h4 className="text-xl font-bold uppercase text-muted-foreground mb-3 tracking-widest">
                {t.howToUse}
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-[10px] font-bold">1</span>
                  {t.instruction0}
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-[10px] font-bold">2</span>
                  {t.instruction1}
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-[10px] font-bold">3</span>
                  {t.instruction2}
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-[10px] font-bold">4</span>
                  {t.instruction3}
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-[10px] font-bold">5</span>
                  {t.instruction4}
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-[10px] font-bold">5</span>
                  {t.instruction5}
                </li>
              </ul>
            </div>

            <button
              onClick={closePlaceholderModal}
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </TooltipProvider>
  )
}
