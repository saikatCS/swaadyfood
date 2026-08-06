import { motion } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { BRAND, SCREENS } from "@/lib/site";
import { PhoneMockup } from "@/components/PhoneMockup";

export const PLAY_STORE_URL = "https://play.google.com/store/search?q=Swaady%20food%20delivery&c=apps";
export const APP_STORE_URL = "https://apps.apple.com";

export function DownloadCTA() {
  return (
    <section id="download" className="scroll-mt-24 px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-brand px-6 py-14 sm:px-12 sm:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-gold/40 blur-3xl"
            />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h2 className="font-display text-3xl leading-tight font-extrabold text-primary-foreground text-balance sm:text-4xl md:text-5xl">
                  Download Swaady Now
                </h2>
                <p className="mt-4 max-w-lg text-base text-primary-foreground/85 sm:text-lg">
                  Available today for Android in Ambassa, Dhalai District. Order from{" "}
                  {BRAND.restaurant} and track every step in real time.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <motion.a
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-2xl bg-card px-6 py-3.5 shadow-lift"
                    aria-label="Get Swaady on Google Play"
                  >
                    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden focusable="false">
                      <path fill="#EA4335" d="M3.6 1.8c-.3.3-.5.8-.5 1.3v18.2c0 .5.2.9.5 1.2l10.2-10.3L3.6 1.8z" />
                      <path fill="#FBBC05" d="M14.3 12.2 4.1 22.5c.3.3.8.4 1.3.2l11.5-6.6-2.6-3.7z" />
                      <path fill="#34A853" d="M16.9 8.5l-2.6 3.7 2.6 3.7 3.3-2.2c.9-.6.9-2.2 0-2.8l-3.3-2.2z" />
                      <path fill="#4285F4" d="M4.1 1.8c-.5-.2-1-.1-1.3.2l10.2 10.2 1.2-1.3L4.1 1.8z" />
                    </svg>
                    <span className="text-left">
                      <span className="block text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase">
                        Get it on
                      </span>
                      <span className="font-display text-lg leading-tight font-bold text-foreground">
                        Google Play
                      </span>
                    </span>
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-2xl bg-card px-6 py-3.5 shadow-lift"
                    aria-label="Download Swaady on the App Store"
                  >
                    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden focusable="false">
                      <path
                        fill="currentColor"
                        d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-.06.04-1.91 1.16-1.89 3.43.02 2.74 2.39 3.65 2.45 3.67-.02.1-.38 1.32-1.4 2.62-.84 1.09-1.72 2.18-3.08 2.15-.66-.02-1.1-.25-1.53-.49zm-2.26-12.3c.66-.8 1.1-1.91.98-3.01-1.05.04-2.31.7-3.06 1.6-.61.72-1.14 1.87-.99 2.99 1.18.09 2.38-.6 3.07-1.58z"
                      />
                    </svg>
                    <span className="text-left">
                      <span className="block text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase">
                        Download on the
                      </span>
                      <span className="font-display text-lg leading-tight font-bold text-foreground">
                        App Store
                      </span>
                    </span>
                  </motion.a>
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-2xl border border-white/35 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-white/10"
                  >
                    Talk to us first
                  </a>
                </div>
              </div>

              <div className="mx-auto hidden w-full max-w-[220px] lg:block" style={{ perspective: 1000 }}>
                <motion.div
                  animate={{ y: [0, -12, 0], rotateZ: [-3, 3, -3] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <PhoneMockup screen={SCREENS[5]!} />
                </motion.div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
