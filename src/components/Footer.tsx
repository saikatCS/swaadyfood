import { Link } from "@tanstack/react-router";
import { BRAND, LOGO_URL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-5 pt-14 pb-28 md:pb-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <img
                src={LOGO_URL}
                alt="Swaady food delivery logo"
                width={40}
                height={40}
                loading="lazy"
                className="h-10 w-10 object-contain"
              />
              <span className="font-display text-lg font-extrabold">{BRAND.name}</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{BRAND.tagline}</p>
          </div>

          <nav aria-label="Footer" className="grid gap-3 text-sm">
            <a href="/#contact" className="text-muted-foreground hover:text-primary">
              Contact
            </a>
            <a href="/#faq" className="text-muted-foreground hover:text-primary">
              FAQ
            </a>
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
          </nav>

          <address className="grid gap-3 text-sm not-italic">
            <a href={`tel:${BRAND.phoneIntl}`} className="text-muted-foreground hover:text-primary">
              {BRAND.phone}
            </a>
            <a href={`mailto:${BRAND.email}`} className="text-muted-foreground hover:text-primary">
              {BRAND.email}
            </a>
            <span className="text-muted-foreground">{BRAND.location}</span>
          </address>
        </div>

        <p className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          © 2026 {BRAND.name}. Food delivery in Ambassa, Dhalai District, Tripura.
        </p>
        <p className="mt-3 text-xs text-muted-foreground">
          Powered by{" "}
          <a
            href="https://webinnovex360.online"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            WebInnovex 360
          </a>
        </p>
      </div>
    </footer>
  );
}
