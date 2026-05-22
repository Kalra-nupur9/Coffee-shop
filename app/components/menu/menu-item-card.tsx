import Image from "next/image"

import {
  Leaf,
  Plus,
  Star,
} from "lucide-react"

import { MenuItem } from "@/app/types"

interface MenuItemCardProps {
  item: MenuItem
}

export default function MenuItemCard({
  item,
}: MenuItemCardProps) {
  return (
    <article
      className="
        group flex h-full flex-col
        overflow-hidden rounded-3xl
        bg-card shadow-md
      "
    >
      {/* Image */}
      <div
        className="
          relative aspect-[5/4]
          overflow-hidden
        "
      >
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="
              object-cover transition-transform
              duration-700 group-hover:scale-105
            "
          />
        ) : (
          <div
            className="
              flex h-full items-center
              justify-center bg-secondary
            "
          >
            <span
              className="
                font-display text-5xl
                text-muted-foreground/40
              "
            >
              {item.title.charAt(0)}
            </span>
          </div>
        )}

        {/* Popular Badge */}
        {item.popular && (
          <span
            className="
              absolute left-3 top-3
              inline-flex items-center gap-1
              rounded-full bg-amber-400
              px-3 py-1 text-xs
              font-medium text-black
            "
          >
            <Star
              className="
                h-3 w-3 fill-current
              "
            />

            Popular
          </span>
        )}

        {/* Vegan Badge */}
        {item.vegan && (
          <span
            className="
              absolute right-3 top-3
              inline-flex items-center gap-1
              rounded-full bg-white/80
              px-3 py-1 text-xs
              font-medium backdrop-blur
            "
          >
            <Leaf className="h-3 w-3" />

            Vegan
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div
          className="
            flex items-start
            justify-between gap-3
          "
        >
          <h3
            className="
              font-display text-xl
            "
          >
            {item.title}
          </h3>

          <span
            className="
              shrink-0 font-display
              text-lg text-amber-500
            "
          >
            ${item.price.toFixed(2)}
          </span>
        </div>

        <p
          className="
            mt-2 flex-1 text-sm
            text-muted-foreground
          "
        >
          {item.description}
        </p>

        <button
          className="
            mt-5 inline-flex h-8
            self-start rounded-full
            bg-primary px-3 text-xs
            text-primary-foreground
          "
        >
          <Plus className="mr-1 h-4 w-4" />

          Add to cart
        </button>
      </div>
    </article>
  )
}