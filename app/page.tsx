import { CharacterConfigForm } from "@/components/character-config-form"
import { Gamepad2, Github } from "lucide-react"

export default function Home() {
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
                Easy Custom Moveset
              </h1>
              <p className="text-xs text-muted-foreground sm:text-sm">
                SM64 Coop Config Generator
              </p>
            </div>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-border transition-colors hover:bg-secondary"
            aria-label="View on GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-2xl font-bold uppercase tracking-wide text-balance sm:text-3xl lg:text-4xl">
            Create Your Custom Character
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
            Configure unique movesets for your SM64 Coop characters. Adjust abilities, 
            damage multipliers, and resistances to create the perfect playstyle.
          </p>
        </div>

        {/* Config Form */}
        <CharacterConfigForm />
      </div>

      {/* Footer */}
      <footer className="mt-12 border-t-2 border-border bg-card py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Made for the SM64 Coop community. Not affiliated with Nintendo.
          </p>
        </div>
      </footer>
    </main>
  )
}
