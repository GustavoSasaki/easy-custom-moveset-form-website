import * as React from "react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { HelpCircle } from "lucide-react"

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

interface SegmentedOptionProps<T extends string> {
  label: string // This will be the translated string from the parent
  value: T
  options: { 
    value: T; 
    labelKey: string; // Change 'label' to 'labelKey'
    isNew?: boolean 
  }[]
  onChange: (value: T) => void
  tooltip?: string
  isNew?: boolean
  t: any // Pass your translation function here
}

export function SegmentedOption<T extends string>({
  label,
  value,
  options,
  onChange,
  tooltip,
  isNew,
  t, // Use the translation hook/function
}: SegmentedOptionProps<T>) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-1.5">
        <Label className="text-sm font-medium cursor-pointer font-bold">
          {label}
        </Label>
        {isNew && (
  <span className="ml-1 px-1.5 py-0.5 text-[10px] font-black uppercase tracking-tighter 
                   bg-sky-500/10 text-sky-500 border border-sky-500/20 rounded-md">
    New
  </span>)}
        <TooltipIcon tooltip={tooltip} />
      </div>

      <div className="flex p-1 bg-secondary/50 border-2 border-border rounded-lg gap-1">
        {options.map((option) => {
          const isActive = value === option.value
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={cn(
                "relative flex-1 px-2 py-1.5 text-[10px] font-bold uppercase transition-all rounded-md",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              {/* Translate the option label using the key */}
              <span className="relative z-10">{option.labelKey}</span>
              

            </button>
          )
        })}
      </div>
    </div>
  )
}