import { ArrowUpRight, Camera } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { ALBUM_URL } from '@/lib/dap-info'


export default function PhotoUpload() {
  return (
    <section id="bilder" aria-labelledby="bilder-tittel" className="scroll-mt-20">
      <div className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <div className="flex flex-col items-center gap-6 rounded-lg border border-border bg-card px-6 py-10 text-center sm:px-10 sm:py-12">
          <div className="flex size-14 items-center justify-center rounded-full bg-secondary text-accent">
            <Camera className="size-6" aria-hidden="true" />
          </div>

          <SectionHeading eyebrow="" id="bilder-tittel" title="Del bildene dine" />

          <p className="max-w-md leading-relaxed text-muted-foreground">
            Har du tatt noen fine bilder i dåpen? Vi vil gjerne se dem! Del bildene dine med oss i
            vårt felles fotoalbum.
          </p>

          <a
            href={ALBUM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Last opp bilder
            <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only">(åpnes i ny fane)</span>
          </a>

          <p className="text-sm text-muted-foreground">
            Alle kan bidra – du trenger ikke Apple-konto.
          </p>
        </div>
      </div>
    </section>
  )
}