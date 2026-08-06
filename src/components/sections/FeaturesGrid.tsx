import { motion } from "motion/react";
import {
  Navigation,
  ShieldCheck,
  Rocket,
  Salad,
  MousePointerClick,
  Smartphone,
  PackageCheck,
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";

const FEATURES = [
  { icon: Navigation, title: "Live Tracking", copy: "Follow your rider on the map from kitchen to doorstep." },
  { icon: ShieldCheck, title: "Secure Payments", copy: "Encrypted UPI, card and wallet payments, or cash on delivery." },
  { icon: Rocket, title: "Fast Delivery", copy: "Short local routes keep the average drop around 25 minutes." },
  { icon: Salad, title: "Fresh Food", copy: "Cooked to order in a single partner kitchen. Never reheated." },
  { icon: MousePointerClick, title: "Easy Ordering", copy: "OTP login, saved addresses and reorder in two taps." },
  { icon: Smartphone, title: "Modern UI", copy: "A calm, uncluttered Android interface that anyone can use." },
  { icon: PackageCheck, title: "Reliable Delivery", copy: "Sealed packaging and status updates at every single step." },
];

export function FeaturesGrid() {
  return (
    <section className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Features"
          title={
            <>
              Everything the app does, <span className="text-gradient-brand">at a glance.</span>
            </>
          }
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            const wide = i === 0 || i === 6;
            return (
              <Reveal key={f.title} delay={i * 0.05} className={wide ? "lg:col-span-2" : ""}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="flex h-full items-start gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-bold">{f.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.copy}</p>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
