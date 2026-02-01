"use client"

import { useState, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Download, Copy, Check, Sparkles } from "lucide-react"

interface CharacterConfig {
  name: string
  glide_dive_on: boolean
  water_damage_multiplier: number
  disable_burning: boolean
  disable_breath_heal: boolean
  ground_pound_jump_on: boolean
  knockback_resistance: number
  water_enemy_damage_multiplier: number
  piranha_plant_damage_multiplier: number
  moveset_description: string
}

const defaultConfig: CharacterConfig = {
  name: "MyCharacter",
  glide_dive_on: false,
  water_damage_multiplier: 100,
  disable_burning: false,
  disable_breath_heal: false,
  ground_pound_jump_on: false,
  knockback_resistance: 0,
  water_enemy_damage_multiplier: 100,
  piranha_plant_damage_multiplier: 100,
  moveset_description: "",
}

// Preset characters for quick selection
const presets: { name: string; config: Partial<CharacterConfig> }[] = [
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
    name: "Tank",
    config: {
      name: "Tank",
      glide_dive_on: false,
      water_damage_multiplier: 50,
      disable_burning: true,
      disable_breath_heal: false,
      ground_pound_jump_on: true,
      knockback_resistance: 100,
      water_enemy_damage_multiplier: 50,
      piranha_plant_damage_multiplier: 25,
      moveset_description: "ground pound jump, high resistance",
    },
  },
  {
    name: "Glider",
    config: {
      name: "Glider",
      glide_dive_on: true,
      water_damage_multiplier: 100,
      disable_burning: false,
      disable_breath_heal: false,
      ground_pound_jump_on: false,
      knockback_resistance: 0,
      water_enemy_damage_multiplier: 100,
      piranha_plant_damage_multiplier: 100,
      moveset_description: "glide dive",
    },
  },
]

export function CharacterConfigForm() {
  const [config, setConfig] = useState<CharacterConfig>(defaultConfig)
  const [copied, setCopied] = useState(false)

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
    if (config.knockback_resistance > 50) moves.push("high resistance")
    if (config.disable_burning) moves.push("fire immune")
    return moves.join(", ") || "default moveset"
  }, [config])

  const generateLuaCode = useCallback(() => {
    const movesetDesc = config.moveset_description || generateMovesetDescription()
    return `{
    -- ${config.name} custom character config
    name = '${config.name}',
    glide_dive_on = ${config.glide_dive_on},
    water_damage_multiplier = ${config.water_damage_multiplier},
    disable_burning = ${config.disable_burning},
    disable_breath_heal = ${config.disable_breath_heal},
    ground_pound_jump_on = ${config.ground_pound_jump_on},
    knockback_resistance = ${config.knockback_resistance},
    water_enemy_damage_multiplier = ${config.water_enemy_damage_multiplier},
    piranha_plant_damage_multiplier = ${config.piranha_plant_damage_multiplier},
    moveset_description = "${movesetDesc}"
}`
  }, [config, generateMovesetDescription])

  const handleDownload = useCallback(() => {
    const luaCode = generateLuaCode()
    const blob = new Blob([luaCode], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${config.name.toLowerCase().replace(/\s+/g, "_")}_config.lua`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }, [generateLuaCode, config.name])

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(generateLuaCode())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [generateLuaCode])

  const applyPreset = useCallback((preset: typeof presets[number]) => {
    setConfig((prev) => ({ ...prev, ...preset.config }))
  }, [])

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Configuration Form */}
      <Card className="border-2 border-border">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-bold uppercase tracking-wide">
            Character Config
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Presets */}
          <div className="space-y-2">
            <Label className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
              Quick Presets
            </Label>
            <div className="flex flex-wrap gap-2">
              {presets.map((preset) => (
                <Button
                  key={preset.name}
                  variant="outline"
                  size="sm"
                  onClick={() => applyPreset(preset)}
                  className="border-2"
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
              Character Name
            </Label>
            <Input
              id="name"
              value={config.name}
              onChange={(e) => updateConfig("name", e.target.value)}
              placeholder="Enter character name"
              className="border-2 font-medium"
            />
          </div>

          {/* Toggle Options */}
          <div className="space-y-4">
            <Label className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
              Abilities
            </Label>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center justify-between rounded-lg border-2 border-border bg-secondary/50 p-3">
                <Label htmlFor="glide_dive" className="text-sm font-medium cursor-pointer">
                  Glide Dive
                </Label>
                <Switch
                  id="glide_dive"
                  checked={config.glide_dive_on}
                  onCheckedChange={(checked) => updateConfig("glide_dive_on", checked)}
                />
              </div>

              <div className="flex items-center justify-between rounded-lg border-2 border-border bg-secondary/50 p-3">
                <Label htmlFor="ground_pound" className="text-sm font-medium cursor-pointer">
                  Ground Pound Jump
                </Label>
                <Switch
                  id="ground_pound"
                  checked={config.ground_pound_jump_on}
                  onCheckedChange={(checked) => updateConfig("ground_pound_jump_on", checked)}
                />
              </div>

              <div className="flex items-center justify-between rounded-lg border-2 border-border bg-secondary/50 p-3">
                <Label htmlFor="disable_burning" className="text-sm font-medium cursor-pointer">
                  Fire Immunity
                </Label>
                <Switch
                  id="disable_burning"
                  checked={config.disable_burning}
                  onCheckedChange={(checked) => updateConfig("disable_burning", checked)}
                />
              </div>

              <div className="flex items-center justify-between rounded-lg border-2 border-border bg-secondary/50 p-3">
                <Label htmlFor="disable_breath" className="text-sm font-medium cursor-pointer">
                  Disable Breath Heal
                </Label>
                <Switch
                  id="disable_breath"
                  checked={config.disable_breath_heal}
                  onCheckedChange={(checked) => updateConfig("disable_breath_heal", checked)}
                />
              </div>
            </div>
          </div>

          {/* Slider Options */}
          <div className="space-y-4">
            <Label className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
              Damage & Resistance
            </Label>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium">Water Damage</Label>
                  <span className="text-sm font-bold text-primary">{config.water_damage_multiplier}%</span>
                </div>
                <Slider
                  value={[config.water_damage_multiplier]}
                  onValueChange={([value]) => updateConfig("water_damage_multiplier", value)}
                  min={0}
                  max={500}
                  step={10}
                  className="cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium">Knockback Resistance</Label>
                  <span className="text-sm font-bold text-primary">{config.knockback_resistance}%</span>
                </div>
                <Slider
                  value={[config.knockback_resistance]}
                  onValueChange={([value]) => updateConfig("knockback_resistance", value)}
                  min={0}
                  max={100}
                  step={5}
                  className="cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium">Water Enemy Damage</Label>
                  <span className="text-sm font-bold text-primary">{config.water_enemy_damage_multiplier}%</span>
                </div>
                <Slider
                  value={[config.water_enemy_damage_multiplier]}
                  onValueChange={([value]) => updateConfig("water_enemy_damage_multiplier", value)}
                  min={0}
                  max={500}
                  step={10}
                  className="cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium">Piranha Plant Damage</Label>
                  <span className="text-sm font-bold text-primary">{config.piranha_plant_damage_multiplier}%</span>
                </div>
                <Slider
                  value={[config.piranha_plant_damage_multiplier]}
                  onValueChange={([value]) => updateConfig("piranha_plant_damage_multiplier", value)}
                  min={0}
                  max={500}
                  step={10}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Moveset Description */}
          <div className="space-y-2">
            <Label htmlFor="moveset_desc" className="text-sm font-bold uppercase tracking-wide">
              Moveset Description <span className="font-normal text-muted-foreground">(optional)</span>
            </Label>
            <Input
              id="moveset_desc"
              value={config.moveset_description}
              onChange={(e) => updateConfig("moveset_description", e.target.value)}
              placeholder={generateMovesetDescription() || "Auto-generated from abilities"}
              className="border-2"
            />
          </div>
        </CardContent>
      </Card>

      {/* Code Preview & Download */}
      <div className="space-y-4">
        <Card className="border-2 border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-bold uppercase tracking-wide">
              Generated Config
            </CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="overflow-x-auto rounded-lg border-2 border-border bg-foreground p-4 text-sm text-background">
              <code>{generateLuaCode()}</code>
            </pre>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            onClick={handleDownload}
            className="flex-1 gap-2 font-bold uppercase tracking-wide"
            size="lg"
          >
            <Download className="h-5 w-5" />
            Download Config
          </Button>
          <Button
            onClick={handleCopy}
            variant="outline"
            className="flex-1 gap-2 border-2 font-bold uppercase tracking-wide bg-transparent"
            size="lg"
          >
            {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
            {copied ? "Copied!" : "Copy Code"}
          </Button>
        </div>

        {/* Instructions */}
        <Card className="border-2 border-border bg-secondary/30">
          <CardContent className="pt-4">
            <h3 className="mb-2 font-bold uppercase tracking-wide">How to Use</h3>
            <ol className="list-inside list-decimal space-y-1 text-sm text-muted-foreground">
              <li>Configure your character using the options above</li>
              <li>Download the generated Lua config file</li>
              <li>Place the file in your SM64 Coop mods folder</li>
              <li>Enable the Easy Custom Moveset mod in-game</li>
              <li>Select your character and play!</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
