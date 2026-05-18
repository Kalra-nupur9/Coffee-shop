"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

import { Coffee, Menu, Moon, Sun, X } from "lucide-react";

import { Button } from "@/app/components/ui/button";
import { cn } from "@/app/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reservation", label: "Reserve" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  /* ---------------- Scroll Effect ---------------- */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ---------------- Close Mobile Menu ---------------- */

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* ---------------- Theme Persistence ---------------- */

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div
        className={cn(
          "mx-auto px-4 transition-all duration-500 sm:px-6",
          scrolled ? "max-w-6xl" : "max-w-7xl",
        )}
      >
        <div
          className={cn(
            `
              flex h-14 items-center justify-between
              rounded-full px-4 sm:px-6
              transition-all duration-500
              backdrop-blur-xl
            `,
            `
              border border-white/10
              bg-background/70
              shadow-xl
            `,
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className="
              flex items-center gap-2
              font-display text-xl
              font-semibold tracking-tight
            "
          >
            <span
              className="
                flex h-9 w-9 items-center
                justify-center rounded-full
                bg-gradient-to-br
                from-amber-400 to-amber-600
                text-black
              "
            >
              <Coffee className="h-4 w-4" aria-hidden="true" />
            </span>
            Brew Haven
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="
              hidden items-center gap-1 lg:flex
            "
            aria-label="Main navigation"
          >
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    `
                      rounded-full px-3 py-2
                      text-sm transition-colors
                    `,
                    active
                      ? "bg-secondary text-foreground"
                      : `
                        text-foreground/70
                        hover:text-foreground
                      `,
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={() => setDark((prev) => !prev)}
              aria-label="Toggle theme"
              className="
                hidden h-9 w-9 items-center
                justify-center rounded-full
                transition-colors hover:bg-secondary
                sm:flex
              "
            >
              {dark ? (
                <Sun className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4" aria-hidden="true" />
              )}
            </button>

            {/* CTA */}
            <Link href="/order">
              <Button
                size="sm"
                className="
      hidden rounded-full
      border-0 bg-gradient-to-br
      from-amber-400 to-amber-600
      text-black hover:opacity-90
      sm:inline-flex
    "
              >
                Order Online
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="
                flex h-9 w-9 items-center
                justify-center rounded-full
                bg-secondary lg:hidden
              "
            >
              {open ? (
                <X className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Menu className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            className="
              mt-2 rounded-3xl border
              border-white/10 bg-background/90
              p-3 shadow-xl backdrop-blur-xl
              lg:hidden
            "
          >
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {links.map((link) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      `
                        rounded-2xl px-4 py-3
                        text-sm transition-colors
                      `,
                      active
                        ? `
                          bg-secondary
                          text-foreground
                        `
                        : "hover:bg-secondary",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <Link
                href="/order"
                className="
                  mt-2 rounded-2xl
                  bg-gradient-to-br
                  from-amber-400 to-amber-600
                  px-4 py-3 text-center
                  text-sm font-medium text-black
                "
              >
                Order Online
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
