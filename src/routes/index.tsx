import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FloatingActionBar } from "@/components/FloatingActionBar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Hero } from "@/components/sections/Hero";
import { ScrollStory } from "@/components/sections/ScrollStory";
import { AnnouncementBar } from "@/components/sections/AnnouncementBar";
import { WhySwaady } from "@/components/sections/WhySwaady";
import { About } from "@/components/sections/About";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { DownloadCTA } from "@/components/sections/DownloadCTA";
import { Reviews } from "@/components/sections/Reviews";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { BRAND, FAQS } from "@/lib/site";

const TITLE = "Swaady — Food Delivery App in Ambassa, Dhalai District, Tripura";
const DESCRIPTION =
  "Swaady is the food delivery app for Ambassa, Dhalai District, Tripura. Order hot, fresh meals from Joy Guru Hotel and Restaurant with live order tracking and secure payments.";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "food delivery in Ambassa, Tripura food delivery app, Dhalai District food delivery, online food order Ambassa, Swaady app",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Swaady Food Delivery",
          description: DESCRIPTION,
          telephone: BRAND.phoneIntl,
          email: BRAND.email,
          image: "/favicon.png",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Ambassa",
            addressRegion: "Tripura",
            addressCountry: "IN",
          },
          areaServed: {
            "@type": "AdministrativeArea",
            name: "Ambassa, Dhalai District, Tripura",
          },
          servesCuisine: "Indian",
          priceRange: "₹₹",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

function Home() {
  return (
    <>
      <SmoothScroll />
      <Nav />
      <main>
        <Hero />
        <AnnouncementBar />
        <ScrollStory />
        <WhySwaady />
        <About />
        <AppShowcase />
        <FeaturesGrid />
        <DownloadCTA />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActionBar />
    </>
  );
}
