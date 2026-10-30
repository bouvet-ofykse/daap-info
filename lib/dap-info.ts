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
  etternavn: 'Haugberg Fykse',
  dato: '2027-01-09T15:00:00+01:00',
  datoTekst: 'Lørdag 9. januar 2027',
  klokkeslett: 'kl. 15.00',
  intro:
    'Vi gleder oss til å feire dåpen til Aksel og Henrik sammen med dere. Her finner dere alt dere trenger å vite om dagen – fra gudstjenesten i kirken til middagen etterpå.',
  bibelvers: {
    tekst: 'La de små barna komme til meg, og hindre dem ikke.',
    kilde: 'Markus 10,14',
  },
  program: [
    {
      tid: '14.45',
      tittel: 'Oppmøte i kirken',
      beskrivelse: 'Kom gjerne litt tidlig, så finner vi plassene våre i ro og fred. Bruk inngangen fra Munkegata.',
    },
    {
      tid: '15.00',
      tittel: 'Gudstjeneste med dåp',
      beskrivelse: 'Aksel og Henrik døpes under høymessen. Gudstjenesten varer omtrent en time.',
    },
    {
      tid: '16.15',
      tittel: 'Fotografering i kirken',
      beskrivelse: 'Vi tar noen fellesbilder i kirken før vi drar videre.',
    },
    {
      tid: '17.30',
      tittel: 'Dåpsmiddag',
      beskrivelse: 'Middag, kake og kaffe i selskapslokalet.',
    },
  ] satisfies ProgramPunkt[],
  steder: [
    {
      rolle: 'Dåp',
      navn: 'Nidarosdomen',
      adresse: 'Kongsgårdsgata 2, 7013 Trondheim',
      tid: 'kl. 15.00',
      kartUrl: 'https://maps.google.com/?q=Nidarosdomen',
      merknad: 'Parkering tilgjengelig i Munkegata retning torvet',
    },
    {
      rolle: 'Dåpsmiddag',
      navn: 'Trondheim frikirke',
      adresse: 'Brøsetvegen 145A, 7048 Trondheim',
      tid: 'kl. 17.30',
      kartUrl: 'https://maps.google.com/?q=Trondheim+frikirke',
      merknad: 'Omtrent 15 minutter med bil fra kirken.',
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
    { navn: 'Anna Kvandal', for: 'Aksel' },
    { navn: 'Frida Aune', for: 'Henrik' },
    { navn: 'Odin Kvalvåg Dahlen', for: 'Begge' },
    { navn: 'Anne Veie Plauborg', for: 'Begge' },
  ] satisfies Fadder[],
  svar: {
    frist: '15. desember 2026',
    kontakter: [
      { navn: 'Pappa', telefon: '+4745260118', visning: '45260118' },
      { navn: 'Mamma', telefon: '+4748142518', visning: '48142518' },
    ],
    epost: 'olav.fykse@gmail.no',
  },
}
