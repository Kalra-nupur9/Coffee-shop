import Image from "next/image"

import { Camera  } from "lucide-react"

import { GalleryImage } from "@/app/types"

interface GalleryCardProps {
  item: GalleryImage
  priority?: boolean
}

export default function GalleryCard({
  item,
  priority = false,
}: GalleryCardProps) {
  return (
    <article
      className="
        group relative aspect-square
        overflow-hidden rounded-2xl
      "
    >
      <Image
        src={item.image}
        alt={item.alt}
        fill
        priority={priority}
        sizes="
          (max-width: 768px) 50vw,
          25vw
        "
        className="
          object-cover transition-transform
          duration-700 group-hover:scale-110
        "
      />

      {/* Overlay */}
      <div
        className="
          absolute inset-0 flex
          items-center justify-center
          bg-black/0 transition-all duration-300
          group-hover:bg-black/40
        "
      >
        <Camera 
          className="
            h-6 w-6 text-white
            opacity-0 transition-opacity
            duration-300 group-hover:opacity-100
          "
          aria-hidden="true"
        />
      </div>
    </article>
  )
}