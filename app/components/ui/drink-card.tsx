import Image from "next/image"
import { StaticImageData } from "next/image"
import { Drink } from "@/app/types"

interface DrinkCardProps {
  drink: Drink
  priority?: boolean
}

export default function DrinkCard({
  drink,
  priority = false,
}: DrinkCardProps) {
  return (
    <article
      className="
        group relative overflow-hidden rounded-3xl
        bg-card shadow-md transition-transform duration-300
        hover:-translate-y-1
      "
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={drink.image}
          alt={drink.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="
            object-cover transition-transform duration-700
            group-hover:scale-105
          "
        />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl">
            {drink.title}
          </h3>

          <span className="font-display text-xl text-amber-500">
            ${drink.price.toFixed(2)}
          </span>
        </div>

        <p className="mt-2 text-sm text-muted-foreground">
          {drink.description}
        </p>
      </div>
    </article>
  )
}