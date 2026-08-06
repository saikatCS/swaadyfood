import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { BRAND } from "@/lib/site";

export const WHATSAPP_URL = `https://wa.me/${BRAND.phoneIntl.replace("+", "")}`;
export const TEL_URL = `tel:${BRAND.phoneIntl}`;
export const MAIL_URL = `mailto:${BRAND.email}`;

const CARDS = [
  { icon: Phone, label: "Phone", value: BRAND.phone, href: TEL_URL },
  { icon: MessageCircle, label: "WhatsApp", value: BRAND.phone, href: WHATSAPP_URL },
  { icon: Mail, label: "Email", value: BRAND.email, href: MAIL_URL },
  { icon: MapPin, label: "Location", value: BRAND.location },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-secondary/60 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              We are a call away in <span className="text-gradient-brand">Ambassa.</span>
            </>
          }
          subtitle="Questions about an order, delivery area or the app? Reach us any way you like."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {CARDS.map((c, i) => {
              const Icon = c.icon;
              const inner = (
                <>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                    {c.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold break-words">{c.value}</p>
                </>
              );
              return (
                <Reveal key={c.label} delay={i * 0.06}>
                  {c.href ? (
                    <motion.a
                      whileHover={{ y: -6 }}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="block h-full rounded-3xl border border-border bg-card p-6 shadow-soft"
                    >
                      {inner}
                    </motion.a>
                  ) : (
                    <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-soft">
                      {inner}
                    </div>
                  )}
                </Reveal>
              );
            })}

            <div className="flex flex-wrap gap-3 sm:col-span-2">
              <a
                href={TEL_URL}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={MAIL_URL}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </div>

          <Reveal className="overflow-hidden rounded-3xl border border-border shadow-soft">
            <iframe
              title="Swaady service area map — Ambassa, Dhalai District, Tripura"
              src="https://www.google.com/maps?q=Ambassa,%20Dhalai%20District,%20Tripura,%20India&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full border-0 sm:h-full sm:min-h-[420px]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
