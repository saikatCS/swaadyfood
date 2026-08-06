import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import {
  Bike,
  ChefHat,
  CheckCircle2,
  DoorOpen,
  Flame,
  HandPlatter,
  MapPin,
  Package,
} from "lucide-react";

const STAGES = [
  {
    icon: ChefHat,
    title: "The kitchen wakes up",
    copy: "Fresh vegetables, live fire and steam rising — every dish starts from scratch.",
  },
  {
    icon: Package,
    title: "Packed with care",
    copy: "Sealed hot, wrapped clean, labelled and ready in minutes.",
  },
  {
    icon: Bike,
    title: "Your rider arrives",
    copy: "A Swaady rider pulls up at the kitchen the moment your food is boxed.",
  },
  {
    icon: HandPlatter,
    title: "Handover",
    copy: "The chef hands the order across. One scan, and the clock starts.",
  },
  {
    icon: Flame,
    title: "Through the streets",
    copy: "Riding the roads of Ambassa, taking the fastest route to you.",
  },
  {
    icon: MapPin,
    title: "You follow every metre",
    copy: "Live tracking keeps the rider on your map the whole way home.",
  },
  {
    icon: DoorOpen,
    title: "At your door",
    copy: "The doorbell rings while the food is still steaming.",
  },
  {
    icon: CheckCircle2,
    title: "Delivered successfully",
    copy: "A smile, a hot meal, and a notification that says it all.",
  },
];

export function ScrollStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 });

  const cameraX = useTransform(progress, [0, 1], ["4%", "-76%"]);
  const cameraScale = useTransform(progress, [0, 0.5, 1], [1.12, 1, 1.1]);
  const skyShift = useTransform(progress, [0, 1], ["0%", "-30%"]);
  const barWidth = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative h-[560vh] bg-foreground" aria-label="How a Swaady order travels">
      <div className="sticky top-0 flex h-screen w-full flex-col overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute inset-0"
          style={{
            x: skyShift,
            backgroundImage:
              "radial-gradient(70% 60% at 20% 10%, color-mix(in oklab, var(--ember) 35%, transparent), transparent 65%), radial-gradient(60% 60% at 80% 0%, color-mix(in oklab, var(--gold) 25%, transparent), transparent 65%)",
          }}
        />

        <div className="relative z-10 px-5 pt-24 text-center sm:pt-28">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[0.68rem] font-semibold tracking-[0.2em] text-cream uppercase backdrop-blur">
            The Swaady journey
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl leading-tight font-bold text-cream text-balance sm:text-4xl md:text-5xl">
            From the flame in the kitchen to the smile at your door.
          </h2>
        </div>

        <div className="relative z-10 flex flex-1 items-center">
          <motion.div
            className="flex w-[820vw] items-center gap-[4vw] px-[8vw] sm:w-[720vw]"
            style={{ x: cameraX, scale: cameraScale }}
          >
            {STAGES.map((s, i) => {
              const Icon = s.icon;
              return (
                <StoryScene key={s.title} index={i} progress={progress}>
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-warm text-accent-foreground shadow-glow">
                    <Icon className="h-7 w-7" />
                  </span>
                  <p className="mt-6 font-display text-xs font-semibold tracking-[0.24em] text-gold uppercase">
                    Step {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-cream sm:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm text-cream/70 sm:text-base">{s.copy}</p>
                </StoryScene>
              );
            })}
          </motion.div>
        </div>

        <div className="relative z-10 px-6 pb-10 sm:px-10">
          <div className="mx-auto h-1.5 w-full max-w-3xl overflow-hidden rounded-full bg-white/15">
            <motion.div className="h-full rounded-full bg-gradient-warm" style={{ width: barWidth }} />
          </div>
          <p className="mt-3 text-center text-xs tracking-wide text-cream/60 uppercase">
            Scroll to follow your order
          </p>
        </div>
      </div>
    </section>
  );
}

function StoryScene({
  index,
  progress,
  children,
}: {
  index: number;
  progress: ReturnType<typeof useSpring>;
  children: React.ReactNode;
}) {
  const center = index / (STAGES.length - 1);
  const opacity = useTransform(
    progress,
    [center - 0.16, center - 0.05, center + 0.05, center + 0.16],
    [0.25, 1, 1, 0.25],
  );
  const y = useTransform(progress, [center - 0.16, center, center + 0.16], [50, 0, -50]);

  return (
    <motion.article
      style={{ opacity, y }}
      className="glass-dark w-[76vw] shrink-0 rounded-3xl p-8 sm:w-[46vw] sm:p-10 lg:w-[30vw]"
    >
      {children}
    </motion.article>
  );
}
