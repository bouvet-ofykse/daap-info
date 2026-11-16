import { dapInfo } from '@/lib/dap-info'

export function SiteFooter() {
  const buildTime = process.env.NEXT_PUBLIC_BUILD_TIME

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-5 py-10 text-center">
        <p className="font-serif text-2xl text-foreground">{'Vi gleder oss til å se dere!'}</p>
        <p className="text-sm text-muted-foreground">
          {`Hilsen familien ${dapInfo.etternavn} · ${dapInfo.datoTekst}`}
        </p>
        {buildTime && (
          <p className="text-xs text-muted-foreground">
            Sist oppdatert:{' '}
            <time dateTime={buildTime}>
              {new Intl.DateTimeFormat('nb-NO', {
                dateStyle: 'long',
                timeStyle: 'short',
                timeZone: 'Europe/Oslo',
              }).format(new Date(buildTime))}
            </time>
          </p>
        )}
      </div>
    </footer>
  )
}
