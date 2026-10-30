import { ArrowUpRight, Clock, MapPin } from 'lucide-react'
import { dapInfo } from '@/lib/dap-info'
import { SectionHeading } from './section-heading'

export function PlacesSection() {
  return (
    <section id="steder" aria-labelledby="steder-tittel" className="mx-auto flex max-w-5xl scroll-mt-20 flex-col gap-10 px-5 py-16 md:py-24">
      <SectionHeading id="steder-tittel" eyebrow="Hvor" title="Steder" />

      <div className="grid gap-6 md:grid-cols-2">
        {dapInfo.steder.map((sted) => (
          <article key={sted.navn} className="flex flex-col gap-5 rounded-lg border border-border bg-card p-6 sm:p-8">
            <div className="flex flex-col gap-1">
              <p className="text-sm tracking-widest text-muted-foreground uppercase">{sted.rolle}</p>
              <h3 className="font-serif text-3xl text-card-foreground">{sted.navn}</h3>
            </div>

            <ul className="flex flex-col gap-2 text-card-foreground">
              <li className="flex items-center gap-3">
                <MapPin className="size-4 shrink-0 text-accent" aria-hidden="true" />
                <span>{sted.adresse}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="size-4 shrink-0 text-accent" aria-hidden="true" />
                <span>{sted.tid}</span>
              </li>
            </ul>

            {sted.merknad && <p className="leading-relaxed text-muted-foreground">{sted.merknad}</p>}

            <a
              href={sted.kartUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex w-fit items-center gap-1.5 border-b border-foreground pb-0.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Vis i kart
              <ArrowUpRight className="size-4" aria-hidden="true" />
              <span className="sr-only">{`(åpnes i ny fane)`}</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
