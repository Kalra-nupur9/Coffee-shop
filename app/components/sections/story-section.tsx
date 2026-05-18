import Image from "next/image"
import Link from "next/link"

import CafeInterior from "@/app/assets/images/home/1.jpg"

import RatingStars from "../ui/rating-stars"
import StatCard from "../ui/stat-card"

import { storyStats } from "@/app/data/story-stats"

export default function StorySection() {
  return (
    <section className="bg-secondary/40 py-24 md:py-32">
      <div
        className="
          mx-auto grid max-w-7xl items-center
          gap-14 px-6 lg:grid-cols-2
        "
      >
        {/* Image */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src={CafeInterior}
              alt="Brew Haven cafe interior"
              priority
              className="
                aspect-[4/5] w-full object-cover
              "
            />
          </div>

          {/* Review Card */}
          <aside
            className="
              absolute -bottom-8 -right-4
              max-w-[220px] rounded-2xl
              bg-background/80 p-5 shadow-xl
              backdrop-blur md:-right-8
            "
          >
            <RatingStars />

            <p className="mt-2 text-sm font-medium">
              4.9 / 5 · 2,400+ reviews
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              Brooklyn&apos;s most loved café
            </p>
          </aside>
        </div>

        {/* Content */}
        <div>
          <span
            className="
              text-xs font-medium uppercase
              tracking-[0.2em] text-amber-500
            "
          >
            Our Story
          </span>

          <h2
            className="
              mt-3 font-display text-4xl
              text-balance md:text-5xl
            "
          >
            A quiet corner of Brooklyn,
            devoted to the ritual of coffee.
          </h2>

          <p
            className="
              mt-5 leading-relaxed
              text-muted-foreground
            "
          >
            Brew Haven began in 2018 as a tiny
            espresso bar with three stools and a
            borrowed grinder. Today, we&apos;re a
            full-service lounge — but our obsession
            remains the same: the perfect cup,
            served slowly, with care.
          </p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {storyStats.map((stat) => (
              <StatCard
                key={stat.id}
                stat={stat}
              />
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/about"
            className="
              mt-8 inline-flex h-11 items-center
              justify-center rounded-full
              bg-primary px-6 text-sm font-medium
              text-primary-foreground transition-opacity
              hover:opacity-90
            "
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}