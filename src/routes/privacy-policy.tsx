// cspell:words Swaady Ambassa Dhalai anonymised
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FloatingActionBar } from "@/components/FloatingActionBar";
import { BRAND } from "@/lib/site";

const TITLE = "Privacy Policy — Swaady Food Delivery, Ambassa, Tripura";
const DESCRIPTION =
  "How Swaady collects, uses and protects the personal information of customers using our food delivery app in Ambassa, Dhalai District, Tripura.";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/privacy-policy" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
});

const SECTIONS: { heading: string; body: string[] }[] = [
  {
    heading: "1. Information we collect",
    body: [
      "When you use the Swaady app we collect the details needed to prepare and deliver your order: your name, mobile number, email address, date of birth, delivery addresses and order history.",
      "With your permission, the app also uses your device location to detect and fill in your delivery address automatically. You can deny this and enter your address manually instead.",
    ],
  },
  {
    heading: "2. How we use your information",
    body: [
      "Your information is used to process orders, arrange delivery, share order status updates, and respond to support requests.",
      "We may use anonymised, aggregated information to understand demand patterns and improve delivery times in Ambassa and the wider Dhalai District.",
    ],
  },
  {
    heading: "3. Payments",
    body: [
      "Orders are currently paid for via Cash on Delivery — please have the order amount ready for your delivery partner. We do not collect or store any card, UPI, or banking details through the app at this time.",
      "We plan to introduce additional online payment methods in the future through trusted third-party payment processors. If we do, this policy will be updated beforehand to reflect exactly what payment data is collected and how it's handled, and we will never store your full card details, UPI credentials, or banking passwords on our own systems.",
    ],
  },
  {
    heading: "4. Sharing your information",
    body: [
      "Order details — your name, phone number, and delivery address — are shared with the partner kitchen preparing your food and with the delivery rider assigned to your order, limited to what is required to complete the delivery.",
      "We do not sell your personal information. Information is disclosed to authorities only where required by applicable law.",
    ],
  },
  {
    heading: "5. Reviews and public content",
    body: [
      "If you submit a review on this website, the name, rating and message you provide become publicly visible. Please do not include personal details you would prefer to keep private. No customer photographs are collected or displayed.",
    ],
  },
  {
    heading: "6. Data security",
    body: [
      "Information is transmitted over encrypted connections and stored on secured infrastructure with restricted access. While no system can be guaranteed completely secure, we review our safeguards regularly.",
    ],
  },
  {
    heading: "7. Data retention",
    body: [
      "Account and order information is retained for as long as your account remains active, and afterwards only as long as needed for legal, accounting or dispute-resolution purposes.",
    ],
  },
  {
    heading: "8. Your rights",
    body: [
      "You may request access to, correction of, or deletion of your personal information at any time. You can also withdraw location permission from your device settings — you'll just need to enter your delivery address manually instead.",
    ],
  },
  {
    heading: "9. Children",
    body: [
      "The Swaady app is intended for use by adults aged 18 and over. We do not knowingly collect personal information from anyone under 18, and the service should not be used by minors without the involvement of a parent or guardian who takes responsibility for the order, payment, and delivery.",
    ],
  },
  {
    heading: "10. Changes to this policy",
    body: [
      "This policy may be updated as the service evolves — for example, when we add online payments or real-time delivery tracking. Material changes will be announced within the app and on this page.",
    ],
  },
  {
    heading: "11. Contact us",
    body: [
      `For any privacy question or request, contact us at ${BRAND.email} or call ${BRAND.phone}. Our service area is ${BRAND.location}.`,
    ],
  },
];

function PrivacyPolicy() {
  return (
    <>
      <Nav />
      <main className="px-5 pt-32 pb-20 sm:pt-40">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            Legal
          </span>
          <h1 className="mt-5 text-4xl leading-tight font-extrabold text-balance sm:text-5xl">
            Privacy <span className="text-gradient-brand">Policy</span>
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: September 2026 · Applies to the Swaady app and this website.
          </p>

          <div className="mt-12 space-y-8">
            {SECTIONS.map((s) => (
              <section key={s.heading} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
                <h2 className="font-display text-xl font-bold">{s.heading}</h2>
                {s.body.map((p) => (
                  <p key={p} className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingActionBar />
    </>
  );
}
