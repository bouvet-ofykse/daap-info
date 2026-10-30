import { Hero } from '@/components/hero'
import { PlacesSection } from '@/components/places-section'
import { PracticalSection } from '@/components/practical-section'
import { ProgramSection } from '@/components/program-section'
import { RsvpSection } from '@/components/rsvp-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProgramSection />
        <PlacesSection />
        <PracticalSection />
        <RsvpSection />
      </main>
      <SiteFooter />
    </>
  )
}
