"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useAudioStore } from "@/stores/audio-store";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const currentTrack = useAudioStore((s) => s.currentTrack);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.25 }}
          aria-label="Scroll to top"
          className={`fixed right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-kenya-red to-purple-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:scale-110 transition-all ${
            currentTrack ? "bottom-24" : "bottom-6"
          }`}
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
