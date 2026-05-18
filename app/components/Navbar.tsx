"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Coffee, Moon, Sun } from "lucide-react";

import { Button } from "@/app/components/ui/button";
import { cn } from "@/app/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reservation", label: "Reserve" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-500",
          scrolled ? "max-w-6xl" : "max-w-7xl",
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-4 sm:px-6 h-14 transition-all duration-500 ",
            scrolled ? "glass shadow-soft" : " glass shadow-soft",
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-gold text-accent-foreground">
              <Coffee className="h-4 w-4" />
            </span>
            Brew Haven
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.to;

              return (
                <Link
                  key={l.to}
                  href={l.to}
                  className={cn(
                    "px-3 py-2 text-sm rounded-full transition-colors",
                    active
                      ? "bg-secondary text-foreground"
                      : "text-foreground/70 hover:text-foreground",
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            {/* Dark Mode */}
            <button
              onClick={() => setDark((v) => !v)}
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full hover:bg-secondary transition-colors"
              aria-label="Toggle dark mode"
            >
              {dark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            {/* Order Button */}
            <Button
              size="sm"
              className="hidden sm:inline-flex rounded-full bg-gradient-gold text-accent-foreground hover:opacity-90 border-0"
            >
              <Link href="/order">Order Online</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden h-9 w-9 flex items-center justify-center rounded-full bg-secondary"
              aria-label="Menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden mt-2 glass rounded-3xl p-3 shadow-soft animate-fade-up">
            <div className="grid">
              {links.map((l) => {
                const active = pathname === l.to;

                return (
                  <Link
                    key={l.to}
                    href={l.to}
                    className={cn(
                      "px-4 py-3 rounded-2xl text-sm transition-colors",
                      active
                        ? "bg-secondary text-foreground"
                        : "hover:bg-secondary",
                    )}
                  >
                    {l.label}
                  </Link>
                );
              })}

              <Link
                href="/order"
                className="mt-2 px-4 py-3 rounded-2xl text-sm bg-gradient-gold text-accent-foreground text-center font-medium"
              >
                Order Online
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
