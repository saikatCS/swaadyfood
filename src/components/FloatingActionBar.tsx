import { motion } from "motion/react";
import { Phone, MessageCircle, Download } from "lucide-react";
import { TEL_URL, WHATSAPP_URL } from "@/components/sections/Contact";
import { PLAY_STORE_URL } from "@/components/sections/DownloadCTA";

export function FloatingActionBar() {
  return (
    <>
      {/* Mobile: fixed bottom bar with raised centre action */}
      <motion.nav
        aria-label="Quick actions"
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-3 bottom-3 z-50 md:hidden"
      >
        <div className="glass-dark relative flex items-end justify-between rounded-3xl px-6 py-3">
          <motion.a
            whileTap={{ scale: 0.9 }}
            href={TEL_URL}
            className="flex w-20 flex-col items-center gap-1 text-cream"
          >
            <Phone className="h-5 w-5" />
            <span className="text-[0.68rem] font-semibold">Call Us</span>
          </motion.a>

          <motion.a
            whileTap={{ scale: 0.92 }}
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download the Swaady app"
            className="pulse-glow absolute -top-7 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground ring-4 ring-background/20"
          >
            <Download className="h-6 w-6" />
          </motion.a>

          <span className="w-16" aria-hidden />

          <motion.a
            whileTap={{ scale: 0.9 }}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-20 flex-col items-center gap-1 text-cream"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-[0.68rem] font-semibold">WhatsApp</span>
          </motion.a>
        </div>
      </motion.nav>

      {/* Desktop: corner floating action buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="fixed right-6 bottom-6 z-50 hidden flex-col gap-3 md:flex"
      >
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          href={TEL_URL}
          aria-label="Call Swaady"
          className="glass-dark flex h-12 w-12 items-center justify-center rounded-full text-cream"
        >
          <Phone className="h-5 w-5" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message Swaady on WhatsApp"
          className="pulse-glow flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground"
        >
          <MessageCircle className="h-6 w-6" />
        </motion.a>
      </motion.div>
    </>
  );
}
