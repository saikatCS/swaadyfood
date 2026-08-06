CREATE TABLE public.reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 60),
  rating smallint NOT NULL CHECK (rating BETWEEN 1 AND 5),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 600),
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.reviews TO anon;
GRANT SELECT, INSERT ON public.reviews TO authenticated;
GRANT ALL ON public.reviews TO service_role;

ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read reviews" ON public.reviews FOR SELECT USING (true);
CREATE POLICY "Anyone can submit a review" ON public.reviews FOR INSERT WITH CHECK (true);

INSERT INTO public.reviews (name, rating, message) VALUES
('Ritesh D.', 5, 'Ordered dinner in Ambassa and it arrived hot in under 30 minutes. Live tracking is spot on.'),
('Priya S.', 5, 'Finally a proper food delivery app for Dhalai District. Clean, fast and simple to use.'),
('Anup M.', 4, 'Food quality from Joy Guru Hotel is consistently good and the rider updates are helpful.'),
('Sujata R.', 5, 'Love the tracking screen. I can see exactly when my order leaves the kitchen.'),
('Bikash C.', 5, 'Smooth ordering, secure payment and friendly delivery. Great for Ambassa.');