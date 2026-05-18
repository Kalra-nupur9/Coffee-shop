"use client";

import Link from "next/link";

import {
  Coffee,
  Square,
  Globe,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export function Footer() {
  return (
    <footer
      className="bg-espresso text-cream mt-24"
      style={{
        background: "var(--espresso)",
        color: "var(--cream)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-2xl font-semibold"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-accent-foreground">
              <Coffee className="h-5 w-5" />
            </span>

            Brew Haven
          </Link>

          <p className="mt-4 text-sm opacity-70 leading-relaxed">
            Crafting moments worth savoring — one cup at a time.
          </p>

          <div className="flex gap-3 mt-5">
            {[Square, MessageCircle, Globe].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Visit */}
        <div>
          <h4 className="font-display text-lg mb-4">Visit</h4>

          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              128 Aroma Street, Brooklyn, NY 11201
            </li>

            <li className="flex gap-2">
              <Phone className="h-4 w-4 mt-0.5 shrink-0" />
              (212) 555-0142
            </li>

            <li className="flex gap-2">
              <Mail className="h-4 w-4 mt-0.5 shrink-0" />
              hello@brewhaven.cafe
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-display text-lg mb-4">Hours</h4>

          <ul className="space-y-2 text-sm opacity-80">
            <li className="flex justify-between">
              <span>Mon — Fri</span>
              <span>7am — 9pm</span>
            </li>

            <li className="flex justify-between">
              <span>Saturday</span>
              <span>8am — 10pm</span>
            </li>

            <li className="flex justify-between">
              <span>Sunday</span>
              <span>8am — 8pm</span>
            </li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-display text-lg mb-4">Explore</h4>

          <ul className="space-y-2 text-sm opacity-80">
            <li>
              <Link href="/menu" className="hover:opacity-100">
                Menu
              </Link>
            </li>

            <li>
              <Link href="/reservation" className="hover:opacity-100">
                Reservations
              </Link>
            </li>

            <li>
              <Link href="/events" className="hover:opacity-100">
                Events
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:opacity-100">
                Our Story
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:opacity-100">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row justify-between text-xs opacity-60">
          <span>
            © {new Date().getFullYear()} Brew Haven. All rights reserved.
          </span>

          <span>Crafted with warmth in Brooklyn.</span>
        </div>
      </div>
    </footer>
  );
}