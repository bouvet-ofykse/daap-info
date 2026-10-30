type SectionHeadingProps = {
  id: string
  eyebrow: string
  title: string
}

export function SectionHeading({ id, eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm tracking-[0.25em] text-accent uppercase">{eyebrow}</p>
      <h2 id={id} className="text-balance font-serif text-4xl text-foreground sm:text-5xl">
        {title}
      </h2>
    </div>
  )
}
