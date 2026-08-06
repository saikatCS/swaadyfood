import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { Star, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Reveal, SectionHeading } from "@/components/Reveal";

type Review = {
  id: string;
  name: string;
  rating: number;
  message: string;
  created_at: string;
};

function Stars({ value, className = "" }: { value: number; className?: string }) {
  return (
    <span className={`flex items-center gap-0.5 ${className}`} aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className={`h-4 w-4 ${n <= value ? "fill-accent text-accent" : "text-border"}`}
          aria-hidden
        />
      ))}
    </span>
  );
}

export function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let active = true;
    supabase
      .from("reviews")
      .select("id,name,rating,message,created_at")
      .order("created_at", { ascending: false })
      .limit(30)
      .then(({ data, error }) => {
        if (!active) return;
        if (error) console.error(error);
        setReviews((data as Review[]) ?? []);
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const marquee = useMemo(() => (reviews.length ? [...reviews, ...reviews] : []), [reviews]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      toast.error("Please add your name and a short message.");
      return;
    }
    setSubmitting(true);
    const { data, error } = await supabase
      .from("reviews")
      .insert({ name: name.trim().slice(0, 60), rating, message: message.trim().slice(0, 600) })
      .select("id,name,rating,message,created_at")
      .single();
    setSubmitting(false);

    if (error || !data) {
      toast.error("Could not post your review. Please try again.");
      return;
    }
    setReviews((r) => [data as Review, ...r]);
    setName("");
    setMessage("");
    setRating(5);
    toast.success("Thanks for reviewing Swaady!");
  };

  return (
    <section id="reviews" className="scroll-mt-24 overflow-hidden bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Reviews"
          title={
            <>
              What Ambassa says about <span className="text-gradient-brand">Swaady.</span>
            </>
          }
          subtitle="Real words from people ordering in Dhalai District. Add yours — it appears instantly."
        />
      </div>

      <div className="relative mt-12 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        {loading ? (
          <p className="py-10 text-center text-sm text-muted-foreground">Loading reviews…</p>
        ) : (
          <div className="marquee-track-slow flex w-max gap-4 px-4">
            {marquee.map((r, i) => (
              <article
                key={`${r.id}-${i}`}
                className="glass-card w-[19rem] shrink-0 rounded-3xl p-6 sm:w-[22rem]"
              >
                <Stars value={r.rating} />
                <p className="mt-4 text-sm leading-relaxed text-foreground/85">“{r.message}”</p>
                <p className="mt-5 font-display text-sm font-bold text-primary">{r.name}</p>
              </article>
            ))}
          </div>
        )}
      </div>

      <div className="mx-auto mt-14 max-w-2xl px-5">
        <Reveal>
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9"
          >
            <h3 className="font-display text-xl font-bold">Leave a review</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Only your name, rating and message are shown.
            </p>

            <div className="mt-6 grid gap-5">
              <div>
                <label htmlFor="review-name" className="text-sm font-semibold">
                  Name
                </label>
                <input
                  id="review-name"
                  value={name}
                  maxLength={60}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-ring/40"
                />
              </div>

              <div>
                <span className="text-sm font-semibold">Rating</span>
                <div className="mt-2 flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <motion.button
                      key={n}
                      type="button"
                      whileTap={{ scale: 0.85 }}
                      onClick={() => setRating(n)}
                      aria-label={`Rate ${n} star${n > 1 ? "s" : ""}`}
                      aria-pressed={rating === n}
                      className="rounded-full p-1"
                    >
                      <Star
                        className={`h-7 w-7 transition-colors ${
                          n <= rating ? "fill-accent text-accent" : "text-border"
                        }`}
                      />
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="review-message" className="text-sm font-semibold">
                  Message
                </label>
                <textarea
                  id="review-message"
                  value={message}
                  maxLength={600}
                  rows={4}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How was your Swaady experience?"
                  className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-ring/40"
                />
              </div>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow disabled:opacity-70"
              >
                {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                Post review
              </motion.button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
