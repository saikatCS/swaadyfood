import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, Timer } from "lucide-react";
import { PhoneMockup } from "@/components/PhoneMockup";
import { BRAND, SCREENS } from "@/lib/site";

const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 37) % 96}%`,
  top: `${(i * 53) % 88}%`,
  size: 4 + ((i * 7) % 10),
  delay: (i % 7) * 0.7,
  duration: 9 + (i % 5) * 2.5,
}));

export function Hero() {
  const [index, setIndex] = useState(0);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [18, -18]), {
    stiffness: 60,
    damping: 18,
  });
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [-12, 12]), {
    stiffness: 60,
    damping: 18,
  });

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SCREENS.length), 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        pointerX.set((e.clientX - r.left) / r.width - 0.5);
        pointerY.set((e.clientY - r.top) / r.height - 0.5);
      }}
    >
      {/* ambient glow field */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 15% 12%, color-mix(in oklab, var(--gold) 40%, transparent), transparent 70%), radial-gradient(55% 50% at 88% 20%, color-mix(in oklab, var(--ember) 35%, transparent), transparent 70%), radial-gradient(70% 60% at 50% 110%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 70%)",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {PARTICLES.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-gradient-warm opacity-40"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
            animate={{ y: [0, -40, 0], opacity: [0.15, 0.5, 0.15] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Now live in Ambassa, Tripura
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-4xl leading-[1.05] font-extrabold text-balance sm:text-5xl md:text-6xl lg:text-[4.1rem]"
          >
            Deliciousness at your doorstep,{" "}
            <span className="text-gradient-brand">faster than ever.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 max-w-xl text-base text-pretty text-muted-foreground sm:text-lg"
          >
            Order hot, fresh meals from {BRAND.restaurant} and watch every step of your order in
            real time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#download"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 sm:text-base"
            >
              Download App
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#why"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary sm:text-base"
            >
              Know More
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 grid max-w-lg grid-cols-3 gap-4"
          >
            {[
              { k: "25 min", v: "Average delivery" },
              { k: "100%", v: "Freshly cooked" },
              { k: "Live", v: "Order tracking" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl border border-border bg-card/70 p-4 backdrop-blur">
                <dt className="font-display text-xl font-bold text-primary">{s.k}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px]"
          style={{ perspective: 1200 }}
        >
          <div
            aria-hidden
            className="float-slow absolute -top-6 -left-8 h-20 w-20 rounded-3xl bg-gradient-warm opacity-70 blur-[1px]"
          />
          <div
            aria-hidden
            className="float-slow absolute -right-6 bottom-16 h-14 w-14 rounded-full bg-primary/70"
            style={{ animationDelay: "1.4s" }}
          />
          <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <PhoneMockup screen={SCREENS[index]!} priority />
            </motion.div>
          </motion.div>
          <div className="glass-card mt-6 flex items-center gap-3 rounded-2xl px-4 py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground">
              <Timer className="h-4 w-4" />
            </span>
            <p className="text-sm font-medium">
              {SCREENS[index]!.label}
              <span className="block text-xs text-muted-foreground">Inside the Swaady app</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
