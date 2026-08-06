import { motion } from "motion/react";
import type { Screen } from "@/lib/site";

type PhoneMockupProps = {
  screen: Screen;
  className?: string;
  priority?: boolean;
};

/**
 * CSS 3D phone shell with a glass reflection sweep.
 * The parent supplies rotation via a `perspective` wrapper.
 */
export function PhoneMockup({ screen, className = "", priority = false }: PhoneMockupProps) {
  return (
    <div
      className={`relative aspect-[9/19] w-full rounded-[2.6rem] border border-border/70 bg-foreground p-[0.55rem] shadow-lift ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="absolute top-2.5 left-1/2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-foreground" />
      <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-card">
        <motion.img
          key={screen.url}
          src={screen.url}
          alt={screen.alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          className="h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, color-mix(in oklab, white 42%, transparent) 0%, transparent 32%, transparent 68%, color-mix(in oklab, white 18%, transparent) 100%)",
          }}
        />
      </div>
      <div className="pointer-events-none absolute -inset-px rounded-[2.6rem] ring-1 ring-white/15" />
    </div>
  );
}
