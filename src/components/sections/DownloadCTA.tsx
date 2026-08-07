import { motion } from "motion/react";
import { Reveal } from "@/components/Reveal";
import bannerImage from "@/assets/banner.png";

export const PLAY_STORE_URL =
  "https://play.google.com/store/search?q=Swaady%20food%20delivery&c=apps";

export const APP_STORE_URL = "https://apps.apple.com";

export function DownloadCTA() {
  return (
    <section className="relative overflow-hidden">
      <Reveal>
        <div className="relative mx-auto w-full overflow-hidden rounded-[2rem] shadow-lift">
          {/* Complete Swaady Download Banner */}
          <motion.img
            src={bannerImage}
            alt="Download Swaady Now — available on Google Play and App Store"
            className="block h-auto w-full select-none object-contain"
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            draggable={false}
          />

          {/* 
            Responsive clickable areas.
            These are transparent so the original banner design
            remains completely unchanged.
          */}

          {/* Google Play */}
          <motion.a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get Swaady on Google Play"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="absolute left-[4.2%] top-[62.5%] h-[11%] w-[18%] rounded-full"
          />

          {/* App Store */}
          <motion.a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Swaady on the App Store"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="absolute left-[23.2%] top-[62.5%] h-[11%] w-[19.5%] rounded-full"
          />

          {/* Talk to us / WhatsApp */}
          <motion.a
            href="https://wa.me/919366134837"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Talk to Swaady on WhatsApp"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="absolute left-[43.5%] top-[63%] h-[10%] w-[14%] rounded-full"
          />
        </div>
      </Reveal>
    </section>
  );
}