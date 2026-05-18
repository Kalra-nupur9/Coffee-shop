"use client";

import { ArrowRight } from "lucide-react";
import bgImage from "../assets/images/home/7.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage.src})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0  from-black via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center px-6 md:px-16 lg:px-24">
        <div className="max-w-3xl pt-24">
          {/* Top Label */}
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-16 bg-white/70" />

            <span className="text-[12px] uppercase tracking-[0.35em] text-white/80">
              EST. 2018 • BROOKLYN
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-[4rem] leading-[0.95] tracking-tight text-white md:text-[6rem] lg:text-[7rem]">
            Where every cup
            <br />
            feels like{" "}
            <span className="italic text-[#c67a36]">
              home.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
            Slow-roasted beans, hand-pulled shots, and a candlelit
            lounge made for lingering afternoons.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <button className="group flex items-center gap-3 rounded-full bg-[#d68a45] px-8 py-4 text-base font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-[#e79b55]">
              Reserve a table

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button className="rounded-full border border-white/30 bg-white/5 px-8 py-4 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black">
              Explore the menu
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2">
        <p className="text-xs uppercase tracking-[0.45em] text-white/70">
          SCROLL TO DISCOVER
        </p>
      </div>
    </section>
  );
}