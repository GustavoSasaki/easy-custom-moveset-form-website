"use client"

import React, { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"

interface ImportLuaButtonProps {
  /** Function that handles the raw string content of the file */
  onFileRead: (content: string) => void
  label?: string
}

export function ImportLuaButton({ onFileRead, label = "Import" }: ImportLuaButtonProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const content = e.target?.result as string
      onFileRead(content)
      
      // Clear input so the same file can be selected again later
      if (fileInputRef.current) fileInputRef.current.value = ""
    }
    reader.readAsText(file)
  }

  return (
    <div className="flex-1">
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept=".lua,.txt"
        onChange={handleChange}
      />
      <Button
        variant="outline"
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="md:px-6 w-full border-2 bg-transparent font-bold uppercase tracking-wide gap-3 text-muted-foreground border-muted-foreground hover:bg-secondary/50"
      >
        <Share2 className="h-4 w-4 rotate-180" />
        {label}
      </Button>
    </div>
  )
}