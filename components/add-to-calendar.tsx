'use client'
import { CalendarPlus } from 'lucide-react'
import { dapInfo } from '@/lib/dap-info'

const TIMER_I_MS = 60 * 60 * 1000

function formaterIcsDato(dato: Date) {
  return dato.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
}

function lagKalenderfil() {
  const start = new Date(dapInfo.dato)
  const slutt = new Date(start.getTime() + 6 * TIMER_I_MS)
  const kirke = dapInfo.steder[0]

  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//daap-info//NO',
    'BEGIN:VEVENT',
    `UID:dapp-${formaterIcsDato(start)}@daap-info`,
    `DTSTAMP:${formaterIcsDato(new Date())}`,
    `DTSTART:${formaterIcsDato(start)}`,
    `DTEND:${formaterIcsDato(slutt)}`,
    `SUMMARY:Dåp - ${dapInfo.barn.join(' og ')} 🩵🩵`,
    `LOCATION:${kirke.navn}, ${kirke.adresse}`,
    `DESCRIPTION: Gudstjeneste i ${dapInfo.steder[0].navn}, middag, kaffe og kaker etterpå i ${dapInfo.steder[1].navn}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')

  return new Blob([ics], { type: 'text/calendar;charset=utf-8' })
}

export function AddToCalendarButton() {
  function lastNed() {
    const url = URL.createObjectURL(lagKalenderfil())
    const lenke = document.createElement('a')
    lenke.href = url
    lenke.download = 'daap-aksel-henrik.ics'
    lenke.click()
    URL.revokeObjectURL(url)
  }

  return (
      <button
          type="button"
          onClick={lastNed}
          className="inline-flex items-center gap-3 rounded-lg bg-primary px-6 py-3 font-serif text-lg text-primary-foreground transition-opacity hover:opacity-90"
      >
        <CalendarPlus className="size-5 shrink-0" aria-hidden="true" />
        Legg til i kalender
      </button>
  )
}