import { ChevronDown } from 'lucide-react'
import { dapInfo } from '@/lib/dap-info'
import { SectionHeading } from './section-heading'

export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-tittel" className="scroll-mt-20">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-16 md:grid-cols-[1fr_2fr] md:py-24">
        <div className="flex flex-col gap-6">
          <SectionHeading id="faq-tittel" eyebrow="Lurer du på noe?" title="Ofte stilte spørsmål" />
        </div>

        <div className="flex flex-col">
          {dapInfo.faq.map((punkt) => (
            <details
              key={punkt.spørsmål}
              className="group border-b border-border py-6 first:pt-0 last:border-b-0"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-foreground [&::-webkit-details-marker]:hidden">
                {punkt.spørsmål}
                <ChevronDown className="size-5 shrink-0 text-accent transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{punkt.svar}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}