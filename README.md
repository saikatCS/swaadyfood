# Swaady Showcase

# SWAADY — Premium Food Delivery App Showcase Website

## Project Overview

Build a premium, animated, 3D-forward landing website for the **Swaady** mobile app.

**This is an app showcase site — not an ordering platform.** Its sole purpose is to introduce the brand, explain features, build trust, and drive app downloads. No cart, checkout, login, restaurant dashboard, or admin panel.

The site should feel like Apple, Stripe, Linear, Framer, Uber Eats, and Swiggy had a designer collaborate together — premium, interactive, smooth, and memorable. The design must be **completely original** — do not copy any existing site. `justswish.in` may be referenced only for section flow / app-showcase structure, never for visual design.

---

## Brand

| | |
|---|---|
| **Name** | SWAADY |
| **Tagline** | Deliciousness at your doorstep, faster than ever. |
| **Personality** | Modern, friendly, premium, fast, trustworthy, minimal, fresh, clean, professional |

### Color Palette
Derived exclusively from the Swaady logo:
- Deep Red, Dark Maroon
- Orange, Golden Orange, Warm Yellow
- Soft White, Light Cream, very light grey backgrounds
- **Never use blue as a primary color**
- Buttons: orange/red gradients with soft glow on hover

### Typography
- Poppins, Manrope, or Outfit
- Large, bold headings; rounded buttons; generous white space

---

## Tech Stack

React · Vite · Tailwind CSS · Framer Motion · GSAP (ScrollTrigger) · Lenis (smooth scroll) · Three.js / React Three Fiber · Supabase · Lucide React icons

Requirements: fully responsive, SEO-optimized, fast-loading, no TanStack, no unnecessary libraries, no placeholder code — **production-ready only**.

---

## Sections

### 1. Hero
- Headline: *"Deliciousness at your doorstep, faster than ever."*
- Subtitle: *"Order hot, fresh meals from Joy Guru Hotel and Restaurant and watch every step of your order in real time."*
- CTAs: **Download App**, **Know More**
- Slowly rotating 3D phone mockup cycling through provided app screenshots
- Floating food illustrations, soft glow effects, ambient moving particles

### 2. Signature 3D Scroll Story (GSAP ScrollTrigger)
A cinematic, scroll-driven sequence with smooth camera movement:
1. Chef cooking — steam, fire animation, fresh vegetables
2. Food packed beautifully
3. Swaady rider arrives
4. Chef hands off the order
5. Rider rides through the city
6. Camera follows the rider
7. Camera arrives at a home
8. Door opens, food delivered, customer smiles, phone displays "Delivered Successfully"

### 3. Announcement Bar
Infinite marquee: *"SWAADY IS NOW LIVE IN AMBASSA, DHALAI DISTRICT — SERVICE AVAILABLE ONLY IN THIS AREA"*

### 4. Why Swaady
Feature cards with hover animations: Fresh Food · Lightning-Fast Delivery · Secure Payments · Live Order Tracking

### 5. About Swaady
Covers what Swaady is, its location, and its journey — described professionally, with **no owner, developer, or company names**.

### 6. App Showcase
Interactive 3D phone displaying real app screenshots — slow rotation, Previous/Next controls, auto-slide, glass/reflection effect.

### 7. Features Grid
Live Tracking · Secure Payments · Fast Delivery · Fresh Food · Easy Ordering · Modern UI · Reliable Delivery

### 8. Download CTA
*"Download Swaady Now — Available today for Android in Ambassa, Dhalai District."* + Google Play button

### 9. Reviews (Supabase-backed)
- Form fields: Name, Rating (1–5 stars), Message
- On submit: store in Supabase, display immediately
- Reviews scroll in an infinite left→right marquee, glass cards
- Show only rating, name, message — **no customer photos**

### 10. FAQ (accordion)
- Which areas does Swaady currently deliver to?
- Which restaurant can I order from?
- How do I track my order?
- What payment methods are accepted?
- Is there a minimum order?
- Can I cancel an order?
- Is Swaady available on iPhone?
- How can I contact support?

### 11. Contact
- Phone / WhatsApp: 9366134837
- Email: swaady26.food@gmail.com
- Location: Ambassa, Tripura, India
- Call, WhatsApp, and Email buttons + responsive embedded Google Map

### 12. Floating Action Bar (Mobile)
A fixed bottom bar, dark glassmorphic background, with three elements:
- **Center:** a large, raised circular button (purple/brand gradient, soft glow, sits above the bar line) — main action / chat / quick contact
- **Left:** Call Us — phone icon + label
- **Right:** WhatsApp — icon + label
- Smooth entrance animation, subtle glow/pulse on the center button, icons animate on tap
- On desktop, these can appear as standard floating action buttons (bottom corners)

### 13. Privacy Policy Page
Modern, well-formatted, responsive, professional layout for provided policy content.

### 14. Footer
Minimal — Contact, FAQ, Privacy Policy, phone, email, location, © 2026 SWAADY.

---

## Motion & Interaction
Fade, slide, scale, rotate, parallax, floating elements, blur reveal, mouse-tracking effects, hover interactions, text/image reveal on scroll, button ripple, 3D transforms, smooth page transitions.

## Responsiveness
Pixel-perfect across desktop, laptop, tablet, and mobile.

## Performance
Lazy loading, code splitting, image optimization, SEO, accessibility — target Lighthouse score 95+.

## SEO Requirements (Tripura-focused)
The website must be built to rank well for local search in Tripura:
- Proper meta titles, meta descriptions, and Open Graph tags on every page, referencing Ambassa, Dhalai District, and Tripura
- Semantic HTML structure (proper heading hierarchy, alt tags on all images)
- Local business / LocalBusiness schema markup (JSON-LD) with location, phone, and service area
- Fast Core Web Vitals (LCP, CLS, INP) to support ranking
- Sitemap.xml and robots.txt
- Location-relevant keywords naturally included in copy (e.g. "food delivery in Ambassa," "Tripura food delivery app")
- Mobile-first indexing readiness

---

## Hard Constraints
- ❌ No ordering functionality, cart, or checkout
- ❌ No customer login or restaurant/admin dashboard
- ✅ Showcase only: brand, features, and app download

## Assets Provided
Official Swaady logo, official app screenshots, brand assets — use only these; no substitutes or placeholders.

**Goal:** a premium startup website that competes visually and experientially with Apple, Uber Eats, Zomato, and Swiggy.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://swaady.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e1a9c4db-ddc1-4c34-a8c7-241359a48dbe).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
