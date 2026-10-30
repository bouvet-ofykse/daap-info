import { Mail, MessageSquare, Phone } from 'lucide-react'
import { dapInfo } from '@/lib/dap-info'
import { SectionHeading } from './section-heading'

export function RsvpSection() {
  const { svar } = dapInfo
  const emne = encodeURIComponent('Svar på dåp – Aksel og Henrik')

  return (
    <section id="svar" aria-labelledby="svar-tittel" className="mx-auto grid max-w-5xl scroll-mt-20 gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
      <div className="flex flex-col gap-5">
        <SectionHeading id="svar-tittel" eyebrow="Kommer du?" title="Gi oss beskjed" />
        <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
          {'Vi setter stor pris på svar innen '}
          <strong className="font-medium text-foreground">{svar.frist}</strong>
          {', så vi vet hvor mange vi blir til middagen. Husk å nevne eventuelle allergier.'}
        </p>
      </div>

      <ul className="flex flex-col gap-3 self-end">
        {svar.kontakter.map((kontakt) => (
            <li
                key={kontakt.telefon}
                className="flex items-center justify-between gap-4 rounded-lg border border-border bg-card px-5 py-4"
            >
            <span className="flex flex-col">
              <span className="text-sm text-muted-foreground">{kontakt.navn}</span>
              <span className="font-serif text-2xl text-card-foreground tabular-nums">{kontakt.visning}</span>
            </span>
              <span className="flex shrink-0 items-center gap-2">
              <a
                  href={`tel:${kontakt.telefon}`}
                  aria-label={`Ring ${kontakt.navn}`}
                  className="rounded-md p-2 text-accent transition-colors hover:bg-muted"
              >
                <Phone className="size-5" aria-hidden="true" />
              </a>
              <a
                  href={`sms:${kontakt.telefon}`}
                  aria-label={`Send SMS til ${kontakt.navn}`}
                  className="rounded-md p-2 text-accent transition-colors hover:bg-muted"
              >
                <MessageSquare className="size-5" aria-hidden="true" />
              </a>
            </span>
            </li>
        ))}
        <li>
          <a
            href={`mailto:${svar.epost}?subject=${emne}`}
            className="flex items-center justify-between gap-4 rounded-lg bg-primary px-5 py-4 text-primary-foreground transition-opacity hover:opacity-90"
          >
            <span className="flex flex-col">
              <span className="text-sm opacity-80">Eller send e-post</span>
              <span className="break-all font-serif text-2xl">{svar.epost}</span>
            </span>
            <Mail className="size-5 shrink-0" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </section>
  )
}
