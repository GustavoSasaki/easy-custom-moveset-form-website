"use client"

import { useState } from "react"
import { CharacterConfigForm } from "@/components/character-config-form"
import { Gamepad2, Globe } from "lucide-react"
import { translations, type Language } from "@/lib/translations"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const languageNames: Record<Language, string> = {
  en: "English",
  es: "Espanol",
  pt: "Portugues",
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en")
  const t = translations[language]

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b-2 border-border bg-card">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Gamepad2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold uppercase tracking-wide sm:text-xl">
                {t.title}
              </h1>
              <p className="text-xs text-muted-foreground sm:text-sm">
                {t.subtitle}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 border-2 bg-transparent">
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">{languageNames[language]}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("en")}>
                  <span className="mr-2">🇺🇸</span> English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("es")}>
                  <span className="mr-2">🇪🇸</span> Espanol
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("pt")}>
                  <span className="mr-2">🇧🇷</span> Portugues
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:py-8 pt-8">
        {/* Hero Section */}
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-2xl font-bold uppercase tracking-wide text-balance sm:text-3xl lg:text-4xl">
            {t.heroTitle}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
            {t.heroDescription}
          </p>
        </div>

        {/* Config Form */}
        <CharacterConfigForm translations={t} />
      </div>

      {/* Footer */}
      <footer className="mt-12 border-t-2 border-border bg-card py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            {t.footer}
          </p>
        </div>
      </footer>
    </main>
  )
}
