'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const lenker = [
  { href: '#program', label: 'Program' },
  { href: '#steder', label: 'Steder' },
  { href: '#praktisk', label: 'Praktisk' },
  { href: '#bilder', label: 'Bilder' },
  { href: '#svar', label: 'Svar' },
  { href: '#faq', label: 'FAQ' },
]

export function SiteHeader() {
  const [menyApen, settMenyApen] = useState(false)

  return (
    <header className="sticky top-0 z-20 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="relative mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="font-serif text-xl text-foreground">
          {'A H'}
        </a>

        <nav aria-label="Hovedmeny" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-muted-foreground">
            {lenker.map((lenke) => (
              <li key={lenke.href}>
                <a href={lenke.href} className="transition-colors hover:text-foreground">
                  {lenke.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          aria-label={menyApen ? 'Lukk meny' : 'Åpne meny'}
          aria-expanded={menyApen}
          aria-controls="mobilmeny"
          onClick={() => settMenyApen(!menyApen)}
          className="rounded-md p-2 text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:hidden"
        >
          {menyApen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>

        {menyApen && (
          <nav
            id="mobilmeny"
            aria-label="Hovedmeny"
            className="absolute top-full right-5 left-5 border border-border bg-background p-2 shadow-lg md:hidden"
          >
            <ul className="flex flex-col text-sm text-muted-foreground">
              {lenker.map((lenke) => (
                <li key={lenke.href}>
                  <a
                    href={lenke.href}
                    onClick={() => settMenyApen(false)}
                    className="block rounded-sm px-4 py-3 transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {lenke.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
