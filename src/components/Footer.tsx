import { Link } from "@tanstack/react-router";
import { BRAND, LOGO_URL } from "@/lib/site";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <img
              src={LOGO_URL}
              alt={BRAND.name}
              className="h-12 w-auto object-contain"
            />

            <p className="mt-3 text-sm text-muted-foreground">
              {BRAND.tagline}
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer" className="grid gap-3 text-sm">
            <a
              href="/#contact"
              className="text-muted-foreground hover:text-primary"
            >
              Contact
            </a>

            <a
              href="/#faq"
              className="text-muted-foreground hover:text-primary"
            >
              FAQ
            </a>

            <Link
              to="/privacy-policy"
              className="text-muted-foreground hover:text-primary"
            >
              Privacy Policy
            </Link>
          </nav>

          {/* Contact */}
          <address className="grid gap-3 text-sm not-italic">
            <a
              href={`tel:${BRAND.phoneIntl}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary"
            >
              <Phone className="h-4 w-4 shrink-0" />
              <span>{BRAND.phone}</span>
            </a>

            <a
              href={`mailto:${BRAND.email}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary"
            >
              <Mail className="h-4 w-4 shrink-0" />
              <span>{BRAND.email}</span>
            </a>

            <a
              href="https://wa.me/919366134837"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary"
            >
              <FaWhatsapp className="h-4 w-4 shrink-0" />
              <span>{BRAND.phone}</span>
            </a>

            <span className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0" />
              <span>{BRAND.location}</span>
            </span>
          </address>
        </div>

        <p className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © 2026 {BRAND.name}. Food delivery in Ambassa, Dhalai District,
          Tripura.
        </p>

        {/* Powered by WebInnovex 360 */}
        <div className="flex justify-center">
          <p className="mt-3 text-center text-xs text-muted-foreground">
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
      </div>
    </footer>
  );
}