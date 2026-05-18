import Link from "next/link"
import { ArrowRight } from "lucide-react"

import DrinkCard from "../ui/drink-card"
import { drinks } from "@/app/data/drinks"

export default function SignatureDrinks() {
  return (
    <section
      aria-labelledby="signature-drinks-heading"
      className="py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <header className="mx-auto max-w-2xl text-center">
          <span
            className="
              mb-3 inline-block text-xs font-medium uppercase
              tracking-[0.2em] text-amber-500
            "
          >
            Signature Drinks
          </span>

          <h2
            id="signature-drinks-heading"
            className="font-display text-4xl md:text-5xl text-balance"
          >
            Crafted with intention
          </h2>

          <p className="mt-4 text-balance text-muted-foreground">
            A short list of seasonal favorites — each one
            steeped in obsession over the smallest details.
          </p>
        </header>

        {/* Drinks Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {drinks.map((drink, index) => (
            <DrinkCard
              key={drink.id}
              drink={drink}
              priority={index === 0}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/menu"
            className="
              inline-flex h-11 items-center justify-center
              gap-2 rounded-full border px-6 text-sm
              font-medium transition-colors
              hover:bg-accent hover:text-accent-foreground
            "
          >
            View Full Menu

            <ArrowRight
              className="h-4 w-4"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}