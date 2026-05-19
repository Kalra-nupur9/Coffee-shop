import Link from "next/link"

import { Camera  } from "lucide-react"

import GalleryCard from "../ui/gallery-card"

import { galleryImages } from "@/app/data/gallery-images"

export default function InstagramSection() {
  return (
    <section className="bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          className="
            flex flex-wrap items-end
            justify-between gap-6
          "
        >
          <div>
            <span
              className="
                text-xs font-medium uppercase
                tracking-[0.2em] text-amber-500
              "
            >
              @brewhaven
            </span>

            <h2
              className="
                mt-2 font-display
                text-4xl md:text-5xl
              "
            >
              Follow our daily pours
            </h2>
          </div>

          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              text-sm font-medium
              transition hover:text-amber-500
            "
          >
            <Camera 
              className="h-4 w-4"
              aria-hidden="true"
            />

            Open Instagram
          </Link>
        </div>

        {/* Gallery Grid */}
        <div
          className="
            mt-12 grid grid-cols-2
            gap-3 md:grid-cols-4
          "
        >
          {galleryImages.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              priority={index < 2}
            />
          ))}
        </div>
      </div>
    </section>
  )
}