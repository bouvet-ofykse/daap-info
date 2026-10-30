import { dapInfo } from '@/lib/dap-info'
import { SectionHeading } from './section-heading'

export function ProgramSection() {
  return (
    <section id="program" aria-labelledby="program-tittel" className="scroll-mt-20 bg-secondary">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-16 md:grid-cols-[1fr_2fr] md:py-24">
        <div className="flex flex-col gap-6">
          <SectionHeading id="program-tittel" eyebrow="Dagen" title="Program" />
          <blockquote className="flex flex-col gap-2 border-l-0 font-serif text-xl italic leading-snug text-muted-foreground">
            {/*<p>{`«${dapInfo.bibelvers.tekst}»`}</p>*/}
            {/*<footer className="font-sans text-sm not-italic tracking-wide">{dapInfo.bibelvers.kilde}</footer>*/}
          </blockquote>
        </div>

        <ol className="flex flex-col">
          {dapInfo.program.map((punkt) => (
            <li
              key={punkt.tid}
              className="grid grid-cols-[4.5rem_1fr] gap-4 border-b border-border py-6 first:pt-0 last:border-b-0 sm:grid-cols-[6rem_1fr]"
            >
              <span className="font-serif text-2xl text-accent tabular-nums">{punkt.tid}</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-medium text-foreground">{punkt.tittel}</h3>
                <p className="leading-relaxed text-muted-foreground">{punkt.beskrivelse}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
