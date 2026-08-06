import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PhoneMockup } from "@/components/PhoneMockup";
import { SectionHeading, Reveal } from "@/components/Reveal";
import { SCREENS } from "@/lib/site";

export function AppShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % SCREENS.length), 3600);
    return () => clearInterval(id);
  }, [paused]);

  const go = (dir: number) => setIndex((i) => (i + dir + SCREENS.length) % SCREENS.length);

  return (
    <section id="app" className="relative scroll-mt-24 overflow-hidden bg-secondary/60 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="App showcase"
          title={
            <>
              Every screen, <span className="text-gradient-brand">crafted to be effortless.</span>
            </>
          }
          subtitle="Real screens from the Swaady Android app — login, favourites, orders, delivery time and live tracking."
        />

        <div
          className="mt-14 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative mx-auto w-full max-w-[290px]" style={{ perspective: 1300 }}>
            <div
              aria-hidden
              className="absolute inset-x-6 top-10 bottom-10 -z-10 rounded-[3rem] bg-gradient-warm opacity-40 blur-3xl"
            />
            <motion.div
              animate={{ rotateY: [-9, 9, -9] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <PhoneMockup screen={SCREENS[index]!} />
            </motion.div>

            <div className="mt-7 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous screen"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-secondary"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-1.5" role="tablist" aria-label="App screens">
                {SCREENS.map((s, i) => (
                  <button
                    key={s.label}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={s.label}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? "w-7 bg-gradient-brand" : "w-2 bg-border hover:bg-accent"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next screen"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-secondary"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <Reveal className="glass-card rounded-3xl p-8 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={SCREENS[index]!.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35 }}
              >
                <p className="font-display text-xs font-semibold tracking-[0.24em] text-primary uppercase">
                  Screen {index + 1} / {SCREENS.length}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                  {SCREENS[index]!.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {SCREENS[index]!.alt}.
                </p>
              </motion.div>
            </AnimatePresence>

            <ul className="mt-8 grid gap-2 sm:grid-cols-2">
              {SCREENS.map((s, i) => (
                <li key={s.label}>
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`w-full rounded-xl px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                      i === index
                        ? "bg-gradient-brand text-primary-foreground"
                        : "bg-card/70 text-muted-foreground hover:bg-card"
                    }`}
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
