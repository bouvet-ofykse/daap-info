const lenker = [
  { href: '#program', label: 'Program' },
  { href: '#steder', label: 'Steder' },
  { href: '#praktisk', label: 'Praktisk' },
  { href: '#svar', label: 'Svar' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="font-serif text-xl text-foreground">
          {'A & H'}
        </a>
        <nav aria-label="Hovedmeny">
          <ul className="flex items-center gap-4 text-sm text-muted-foreground sm:gap-6">
            {lenker.map((lenke) => (
              <li key={lenke.href}>
                <a href={lenke.href} className="transition-colors hover:text-foreground">
                  {lenke.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
