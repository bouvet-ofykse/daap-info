
export const ALBUM_URL = 'https://photos.icloud.com/shared/album/024E4jAfPXsMK6q51f8k2RNrA';

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

export type FaqPunkt = {
  spørsmål: string
  svar: string
}

export const dapInfo = {
  barn: ['Aksel', 'Henrik'] as const,
  etternavn: 'Haugberg Fykse',
  dato: '2027-01-09T15:00:00+01:00',
  datoTekst: 'Lørdag 9. januar 2027',
  klokkeslett: 'kl. 15.00',
  intro:
    'Vi gleder oss til å feire dåpen til Aksel og Henrik sammen med dere. Her finner dere alt dere trenger å vite om dagen – fra dåpsgudstjenesten i kirken til middagen etterpå.',
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
      beskrivelse: 'Gudstjenesten varer omtrent en time.',
    },
    {
      tid: '16.15',
      tittel: 'Fotografering i kirken',
      beskrivelse: 'Vi tar noen fellesbilder i kirken før vi drar videre.',
    },
    {
      tid: '17.00',
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
      tid: 'kl. 17.00',
      kartUrl: 'https://maps.google.com/?q=Trondheim+frikirke',
      merknad: 'Omtrent 15 minutter med bil fra kirken. Gratis parkering utenfor lokalet, følg skilting',
    },
  ] satisfies Sted[],
  praktisk: [
    {
      tittel: 'Antrekk',
      tekst: 'Pent antrekk. Nidarosdomen kan være litt kald i januar og vi anbefaler derfor å ta med litt ekstra tøy til dem som lett fryser.',
    },
    {
      tittel: 'Barn',
      tekst: 'Barn er hjertelig velkomne – både i kirken og på middagen. Vi lager en ordning der barna kan leke i selskapslokalet.',
    },
    {
      tittel: 'Gaver',
      tekst: 'Det viktigste er at dere kommer. Ønsker dere å gi pengegaver, ta gjerne kontakt med oss.',
    },
    {
      tittel: 'Allergier',
      tekst: 'Gi beskjed om eventuelle allergier eller andre hensyn når du svarer, så ordner vi det.',
    },
  ] satisfies PraktiskInfo[],
  faddere: [
    { navn: 'Anna Katarina Kvandal', for: 'Aksel' },
    { navn: 'Frida Skauvik Aune', for: 'Henrik' },
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
  faq: [
    {
      spørsmål: 'Er det lov å ta bilder under dåpen?',
      svar: 'Kirken ønsker at det ikke fotograferes under selve dåpshandlingen. Vi organiserer en egen fotograf for dette. Etter prosesjonen samles vi midt i kirken, og det er mulig å ta bilder sammen med familie. ',
    },
    {
      spørsmål: 'Er det satt opp transport mellom kirken og middagen?',
      svar: 'Vi satser på å organisere samkjøring. Hvis du ikke har egen bil eller skyss, ta kontakt med oss så finner vi en løsning.',
    },
    {
      spørsmål: 'Hvor kan jeg parkere?',
      svar: 'Det er betalt parkering i Munkegata i retning torvet. Utenfor Frikirken er det gratis parkering, følg skilting.',
    },
    {
      spørsmål: 'Jeg er tilreisende, hvor kan jeg bo?',
      svar: 'Vi har begrenset antall overnattingsplasser hos oss, så vi anbefaler hotell på Tiller, Lerkdendal eller i midtbyen.',
    },
  ] satisfies FaqPunkt[],
}
