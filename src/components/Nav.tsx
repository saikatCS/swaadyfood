import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BRAND, LOGO_URL } from "@/lib/site";

const LINKS = [
  { label: "Why Swaady", href: "/#why" },
  { label: "About", href: "/#about" },
  { label: "App", href: "/#app" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
    >
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-5 ${
          scrolled ? "glass-card" : "border border-transparent"
        }`}
      >
        <Link to="/" className="flex items-center gap-2.5" aria-label="Swaady home">
          <img
            src={LOGO_URL}
            alt="Swaady food delivery logo"
            width={40}
            height={40}
            className="h-9 w-9 object-contain sm:h-10 sm:w-10"
          />
          <span className="font-display text-lg font-extrabold tracking-tight">{BRAND.name}</span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="/#download"
            className="hidden rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-shadow hover:shadow-glow sm:inline-flex"
          >
            Download App
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card mx-auto mt-2 max-w-6xl rounded-2xl p-4 lg:hidden"
        >
          <ul className="grid gap-1">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-secondary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/#download"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-xl bg-gradient-brand px-3 py-2.5 text-center text-sm font-semibold text-primary-foreground"
              >
                Download App
              </a>
            </li>
            <li className="pt-2 text-center">
              <span className="text-xs text-muted-foreground">
                Powered by{" "}
                <a
                  href="https://webinnovex360.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  WebInnovex 360
                </a>
              </span>
            </li>
          </ul>
        </motion.div>
      ) : null}
    </motion.header>
  );
}
