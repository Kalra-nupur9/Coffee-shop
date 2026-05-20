// app/components/sections/newsletter-section.tsx

import { Mail } from "lucide-react"

export default function NewsletterSection() {
  return (
    <section className="pb-24 md:pb-32">
      <div className="mx-auto max-w-4xl px-6">
        <div
          className="
            rounded-3xl border border-border
            bg-card p-10 text-center
            shadow-xl md:p-14
          "
        >
          {/* Header */}
          <div className="flex justify-center">
            <div
              className="
                flex h-14 w-14 items-center
                justify-center rounded-full
                bg-amber-100 dark:bg-amber-500/10
              "
            >
              <Mail
                className="
                  h-6 w-6 text-amber-600
                  dark:text-amber-400
                "
                aria-hidden="true"
              />
            </div>
          </div>

          <span
            className="
              mt-6 inline-block text-xs
              font-medium uppercase
              tracking-[0.2em] text-amber-500
            "
          >
            Newsletter
          </span>

          <h2
            className="
              mt-3 font-display text-3xl
              text-balance md:text-5xl
            "
          >
            Slow Sundays in your inbox
          </h2>

          <p
            className="
              mx-auto mt-3 max-w-lg
              text-muted-foreground
            "
          >
            Seasonal menus, brewing notes,
            and quiet stories from the lounge.
            No spam, just warmth.
          </p>

          {/* Form */}
          <form
            className="
              mx-auto mt-8 flex
              max-w-md flex-col gap-3
              sm:flex-row
            "
          >
            <label
              htmlFor="email"
              className="sr-only"
            >
              Email address
            </label>

            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              className="
                h-12 w-full rounded-full
                border border-input
                bg-background px-5 text-sm
                shadow-sm transition-colors
                placeholder:text-muted-foreground
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-amber-500
              "
            />

            <button
              type="submit"
              className="
                inline-flex h-12 items-center
                justify-center rounded-full
                bg-primary px-6 text-sm
                font-medium text-primary-foreground
                transition-opacity
                hover:opacity-90
              "
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}