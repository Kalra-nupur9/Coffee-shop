import Link from "next/link";

import { Clock3, MapPin } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="py-24 md:py-32">
      <div
        className="
          mx-auto grid max-w-7xl
          gap-10 px-6 lg:grid-cols-2
        "
      >
        {/* Map */}
        <div>
          <div
            className="
              min-h-[360px] overflow-hidden
              rounded-3xl shadow-xl
            "
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71747.45919614375!2d-0.261688402734375!3d51.61203230000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761944feea7cc9%3A0x12562f1dcda2e31e!2sGrand%20Cafe%20UK!5e1!3m2!1sen!2sin!4v1779100009935!5m2!1sen!2sin"
              width="600"
              height="450"
              loading="lazy"
             
            ></iframe>
          </div>
        </div>

        {/* Content */}
        <div>
          <div
            className="
              h-full rounded-3xl
              bg-gradient-to-br
              from-[#2b1d16]
              to-[#4b3427]
              p-8 text-[#f5e6d3]
              shadow-xl
              md:p-12
            "
          >
            {/* Heading */}
            <span
              className="
                text-xs uppercase
                tracking-[0.2em]
                opacity-70
              "
            >
              Visit Us
            </span>

            <h2
              className="
                mt-3 font-display
                text-4xl md:text-5xl
              "
            >
              128 Aroma Street
            </h2>

            <p className="mt-2 opacity-80">Brooklyn, NY 11201</p>

            {/* Info */}
            <div className="mt-10 grid gap-6">
              {/* Hours */}
              <div className="flex items-start gap-4">
                <Clock3
                  className="
                    mt-0.5 h-5 w-5
                    text-amber-400
                  "
                  aria-hidden="true"
                />

                <div className="flex-1">
                  <h3 className="font-medium">Opening Hours</h3>

                  <div
                    className="
                      mt-2 grid gap-1
                      text-sm opacity-80
                    "
                  >
                    <div className="flex justify-between">
                      <span>Monday – Friday</span>
                      <span>7:00 — 21:00</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>8:00 — 22:00</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>8:00 — 20:00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div
                className="
                  flex items-start gap-4
                  border-t border-white/15
                  pt-4
                "
              >
                <MapPin
                  className="
                    mt-0.5 h-5 w-5
                    text-amber-400
                  "
                  aria-hidden="true"
                />

                <div>
                  <h3 className="font-medium">Easy to Find</h3>

                  <p
                    className="
                      mt-1 text-sm opacity-80
                    "
                  >
                    Two blocks from Borough Hall station, on the corner of Aroma
                    & Pine.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="
                mt-10 inline-flex h-11
                items-center justify-center
                rounded-full bg-[#f5e6d3]
                px-6 text-sm font-medium
                text-[#2b1d16]
                transition-opacity
                hover:opacity-90
              "
            >
              Get Directions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
