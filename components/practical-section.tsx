import { dapInfo } from '@/lib/dap-info'
import { SectionHeading } from './section-heading'

export function PracticalSection() {
  const fadderGrupper = (['Aksel', 'Henrik'] as const).map((barn) => ({
    barn,
    faddere: dapInfo.faddere.filter((f) => f.for === barn || f.for === 'Begge'),
  }))

  return (
    <section id="praktisk" aria-labelledby="praktisk-tittel" className="scroll-mt-20 bg-secondary">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-5 py-16 md:py-24">
        <SectionHeading id="praktisk-tittel" eyebrow="Godt å vite" title="Praktisk informasjon" />

        <dl className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {dapInfo.praktisk.map((info) => (
            <div key={info.tittel} className="flex flex-col gap-2 border-t border-border pt-5">
              <dt className="font-serif text-2xl text-foreground">{info.tittel}</dt>
              <dd className="leading-relaxed text-muted-foreground">{info.tekst}</dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-col gap-6 rounded-lg bg-card p-6 sm:p-8">
          <h3 className="font-serif text-3xl text-card-foreground">Faddere</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {fadderGrupper.map((gruppe) => (
              <div key={gruppe.barn} className="flex flex-col gap-2">
                <p className="text-sm tracking-widest text-accent uppercase">{gruppe.barn}</p>
                <ul className="flex flex-col gap-1 text-card-foreground">
                  {gruppe.faddere.map((fadder) => (
                    <li key={fadder.navn}>{fadder.navn}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
