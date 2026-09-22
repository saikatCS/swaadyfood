import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FloatingActionBar } from "@/components/FloatingActionBar";

const TITLE = "Delete Your Swaady Account";
const DESCRIPTION =
  "How to request deletion of your Swaady account and the personal data associated with it.";

export const Route = createFileRoute("/delete-account-policy")({
  component: DeleteAccountPolicy,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/delete-account-policy" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/delete-account-policy" }],
  }),
});

function DeleteAccountPolicy() {
  return (
    <>
      <Nav />
      <main className="px-5 pt-32 pb-20 sm:pt-40">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            Legal
          </span>
          <h1 className="mt-5 text-4xl leading-tight font-extrabold text-balance sm:text-5xl">
            Delete Your Swaady Account
          </h1>

          <div className="mt-12 space-y-8">
            <section className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                If you'd like to delete your Swaady account and the personal data associated with
                it, you can request this at any time.
              </p>
            </section>

            <section className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <h2 className="font-display text-xl font-bold">How to request deletion</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Send an email to swaady26.food@gmail.com with the subject line "Account Deletion
                Request", including:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <li>The email address or phone number you used to sign up for Swaady</li>
                <li>A confirmation that you want your account permanently deleted</li>
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                You can also call us at 9366134837 to make the same request.
              </p>
            </section>

            <section className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <h2 className="font-display text-xl font-bold">What gets deleted</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Once we verify your request, we will permanently delete:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <li>Your name, email address, and phone number</li>
                <li>Your saved delivery addresses</li>
                <li>Your account login credentials</li>
              </ul>
            </section>

            <section className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <h2 className="font-display text-xl font-bold">What we retain, and why</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                We retain a record of past order history and transaction details for a limited
                period after account deletion, where required for tax, accounting, and legal
                compliance purposes. This retained data is not linked to your active account and is
                not used for marketing or any other purpose.
              </p>
            </section>

            <section className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <h2 className="font-display text-xl font-bold">How long it takes</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                We process deletion requests within 7 business days of verifying your identity.
              </p>
            </section>

            <section className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Questions about this process? Contact us at swaady26.food@gmail.com.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingActionBar />
    </>
  );
}
