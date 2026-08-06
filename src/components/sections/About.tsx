import { Reveal } from "@/components/Reveal";
import { BRAND, LOGO_URL } from "@/lib/site";

const TIMELINE = [
  {
    year: "The idea",
    copy: "Ambassa had great food but no reliable way to get it home. Swaady began as a simple answer to that gap.",
  },
  {
    year: "The kitchen",
    copy: `A single partner kitchen — ${BRAND.restaurant} — so every order can be held to one standard of hygiene and taste.`,
  },
  {
    year: "The app",
    copy: "A clean Android app with OTP login, favourites, saved addresses, secure payments and true live tracking.",
  },
  {
    year: "Today",
    copy: "Swaady serves Ambassa in Dhalai District, Tripura, and grows one neighbourhood at a time — never faster than quality allows.",
  },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden px-5 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(50% 60% at 90% 20%, color-mix(in oklab, var(--gold) 22%, transparent), transparent 70%)",
        }}
      />
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            About Swaady
          </span>
          <h2 className="mt-5 text-3xl leading-[1.1] font-bold text-balance sm:text-4xl md:text-5xl">
            A local food delivery app with a{" "}
            <span className="text-gradient-brand">very local promise.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Swaady is a food delivery service built for Ambassa, in the Dhalai District of Tripura.
            Instead of spreading thin across dozens of kitchens, Swaady focuses on one partner
            restaurant and one service area, so every order can be cooked fresh, packed properly and
            delivered while it is still hot.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            The app was designed around three ideas that matter in a small town: know exactly when
            your food is coming, pay the way you prefer, and get help from a real person when you
            need it. That is the whole promise — nothing more complicated than that.
          </p>
          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
            <img
              src={LOGO_URL}
              alt="Swaady logo mark"
              width={56}
              height={56}
              loading="lazy"
              className="h-14 w-14 object-contain"
            />
            <p className="text-sm text-muted-foreground">
              Serving <strong className="text-foreground">{BRAND.location}</strong>
            </p>
          </div>
        </Reveal>

        <ol className="relative space-y-4 border-l border-border pl-6">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.08}>
              <li className="relative rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span
                  aria-hidden
                  className="absolute top-8 -left-[1.92rem] h-3 w-3 rounded-full bg-gradient-brand ring-4 ring-background"
                />
                <h3 className="font-display text-lg font-bold text-primary">{t.year}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.copy}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
