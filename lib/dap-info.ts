export type ProgramPunkt = {
  tid: string
  tittel: string
  beskrivelse: string
}

export type Sted = {
  rolle: string
  navn: string
  adresse: string
  tid: string
  kartUrl: string
  merknad?: string
}

export type PraktiskInfo = {
  tittel: string
  tekst: string
}

export type Fadder = {
  navn: string
  for: 'Aksel' | 'Henrik' | 'Begge'
}

export const dapInfo = {
  barn: ['Aksel', 'Henrik'] as const,
  etternavn: 'Nordmann',
  dato: '2027-05-23T11:00:00+02:00',
  datoTekst: 'Søndag 23. mai 2027',
  klokkeslett: 'kl. 11.00',
  intro:
    'Vi gleder oss til å feire dåpen til Aksel og Henrik sammen med dere. Her finner dere alt dere trenger å vite om dagen – fra gudstjenesten i kirken til middagen etterpå.',
  bibelvers: {
    tekst: 'La de små barna komme til meg, og hindre dem ikke.',
    kilde: 'Markus 10,14',
  },
  program: [
    {
      tid: '10.30',
      tittel: 'Oppmøte i kirken',
      beskrivelse: 'Kom gjerne litt tidlig, så finner vi plassene våre i ro og fred.',
    },
    {
      tid: '11.00',
      tittel: 'Gudstjeneste med dåp',
      beskrivelse: 'Aksel og Henrik døpes under høymessen. Gudstjenesten varer omtrent en time.',
    },
    {
      tid: '12.15',
      tittel: 'Bilder utenfor kirken',
      beskrivelse: 'Vi tar noen fellesbilder på kirketrappen før vi drar videre.',
    },
    {
      tid: '13.30',
      tittel: 'Dåpsmiddag',
      beskrivelse: 'Middag, kake og kaffe i selskapslokalet. Vi avslutter rundt kl. 17.',
    },
  ] satisfies ProgramPunkt[],
  steder: [
    {
      rolle: 'Dåp',
      navn: 'Eksempel kirke',
      adresse: 'Kirkeveien 1, 0000 Byen',
      tid: 'kl. 11.00',
      kartUrl: 'https://maps.google.com/?q=Kirkeveien+1',
      merknad: 'Parkering ved menighetshuset rett ved siden av kirken.',
    },
    {
      rolle: 'Dåpsmiddag',
      navn: 'Selskapslokalet',
      adresse: 'Festgata 12, 0000 Byen',
      tid: 'kl. 13.30',
      kartUrl: 'https://maps.google.com/?q=Festgata+12',
      merknad: 'Omtrent ti minutter med bil fra kirken.',
    },
  ] satisfies Sted[],
  praktisk: [
    {
      tittel: 'Antrekk',
      tekst: 'Pent antrekk. Tenk gjerne på at vi skal være litt ute for bilder.',
    },
    {
      tittel: 'Barn',
      tekst: 'Barn er hjertelig velkomne – både i kirken og på middagen. Det blir eget lekehjørne.',
    },
    {
      tittel: 'Gaver',
      tekst: 'Det viktigste er at dere kommer. Ønsker dere å gi noe, ta gjerne kontakt med oss.',
    },
    {
      tittel: 'Allergier',
      tekst: 'Gi beskjed om allergier eller andre hensyn når du svarer, så ordner vi det.',
    },
  ] satisfies PraktiskInfo[],
  faddere: [
    { navn: 'Fadder Én', for: 'Aksel' },
    { navn: 'Fadder To', for: 'Aksel' },
    { navn: 'Fadder Tre', for: 'Henrik' },
    { navn: 'Fadder Fire', for: 'Henrik' },
  ] satisfies Fadder[],
  svar: {
    frist: '1. mai 2027',
    kontakter: [
      { navn: 'Mamma', telefon: '+4700000000', visning: '000 00 000' },
      { navn: 'Pappa', telefon: '+4700000001', visning: '000 00 001' },
    ],
    epost: 'familien@eksempel.no',
  },
}
