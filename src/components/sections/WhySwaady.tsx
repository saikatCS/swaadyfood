import { motion } from "motion/react";
import { Leaf, Zap, ShieldCheck, Navigation } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";

const CARDS = [
  {
    icon: Leaf,
    title: "Fresh Food",
    copy: "Every plate is cooked to order in a single trusted kitchen — never reheated, never pre-packed.",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Delivery",
    copy: "Short local routes across Ambassa mean most orders reach the door in around 25 minutes.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    copy: "UPI, cards, wallets or cash on delivery — every transaction is encrypted end to end.",
  },
  {
    icon: Navigation,
    title: "Live Order Tracking",
    copy: "Watch your order move from the kitchen to your street, minute by minute, on the map.",
  },
];

export function WhySwaady() {
  return (
    <section id="why" className="scroll-mt-24 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why Swaady"
          title={
            <>
              Built for Ambassa. <span className="text-gradient-brand">Obsessed with the details.</span>
            </>
          }
          subtitle="A food delivery app made for Dhalai District, where speed, freshness and trust matter more than a long list of restaurants."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={i * 0.08}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft"
                >
                  <div
                    aria-hidden
                    className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-warm opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                  />
                  <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="relative mt-6 text-lg font-bold">{c.title}</h3>
                  <p className="relative mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {c.copy}
                  </p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
