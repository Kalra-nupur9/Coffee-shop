import { BadgeItem } from "./badge-item"
import { coffeeFeatures } from "@/app/data/coffee-features"

export default function Marquee() {
  return (
    <section
      aria-label="Coffee shop highlights"
      className="overflow-hidden border-y border-zinc-200 bg-zinc-100/40 py-6 dark:border-zinc-800 dark:bg-zinc-900/40"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className="flex shrink-0 gap-12 px-6 text-2xl font-semibold text-zinc-700 dark:text-zinc-300 md:text-3xl"
          >
            {coffeeFeatures.map((item) => (
              <BadgeItem
                key={item.id}
                label={item.label}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}