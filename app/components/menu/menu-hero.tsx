
interface IntroSectionProps {
  badge: string
  title: string
  description: string
}

export default function Menuhero({
  badge,
  title,
  description,
}: IntroSectionProps) {
  return (
    <section className="bg-secondary/30 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          {/* Badge */}
          <span
            className="
              mb-3 inline-block text-xs
              font-medium uppercase
              tracking-[0.2em] text-amber-500
            "
          >
            {badge}
          </span>

          {/* Title */}
          <h1
            className="
              font-display text-4xl
              text-balance md:text-5xl
            "
          >
            {title}
          </h1>

          {/* Description */}
          <p
            className="
              mt-4 text-balance
              text-muted-foreground
            "
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}