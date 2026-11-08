import Image from 'next/image'
import { dapInfo } from '@/lib/dap-info'
import {AddToCalendarButton} from '@/components/add-to-calendar';

export function Hero() {
  const [forste, andre] = dapInfo.barn

  return (
    <section id="top" className="mx-auto grid max-w-5xl items-center gap-10 px-5 pt-12 pb-16 md:grid-cols-2 md:gap-14 md:pt-20 md:pb-24">
      <div className="flex flex-col gap-6 text-center md:text-left">
        <p className="text-sm tracking-[0.25em] text-accent uppercase">Velkommen til dåp</p>
        <h1 className="flex flex-col font-serif text-6xl leading-none text-foreground sm:text-7xl">
          <span>{forste}</span>
          <span className="py-1 text-4xl italic text-muted-foreground sm:text-5xl">{'&'}</span>
          <span>{andre}</span>
        </h1>
        <p className="mx-auto max-w-md text-pretty leading-relaxed text-muted-foreground md:mx-0">
          {dapInfo.intro}
        </p>
        <dl className="mx-auto flex flex-wrap justify-center gap-x-8 gap-y-3 border-t border-border pt-6 md:mx-0 md:justify-start">
          <div className="flex flex-col gap-1">
            <dt className="text-xs tracking-widest text-muted-foreground uppercase">Dato</dt>
            <dd className="font-serif text-2xl text-foreground">
              <time dateTime={dapInfo.dato}>{dapInfo.datoTekst}</time>
            </dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="text-xs tracking-widest text-muted-foreground uppercase">Tid</dt>
            <dd className="font-serif text-2xl text-foreground">{dapInfo.klokkeslett}</dd>
          </div>
        </dl>
      </div>

      <div className="relative mx-auto aspect-[1800/1300] w-full max-w-xl overflow-hidden rounded-lg shadow-xl shadow-foreground/10">
        <Image
          src="/images/Aksel_Henrik.jpeg"
          alt="Aksel og Henrik"
          fill
          priority
          className="scale-[1.15] object-cover"
        />
      </div>
      <AddToCalendarButton />
    </section>
  )
}
