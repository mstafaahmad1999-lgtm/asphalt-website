"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { src: "/slideshow-1.jpg", alt: "Bitumen barrels at industrial facility" },
  { src: "/slideshow-2.jpg", alt: "Bulk bags at refinery loading bay" },
  { src: "/slideshow-3.jpg", alt: "Premium bitumen drums at sunset" },
  { src: "/slideshow-4.jpg", alt: "Storage tanks and tanker trucks" },
  { src: "/slideshow-5.jpg", alt: "Bulk packaging ready for export" },
];

const INTERVAL = 5000;
const premiumEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, INTERVAL);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      {/* Slides */}
      <AnimatePresence mode="sync">
        <motion.img
          key={current}
          src={slides[current].src}
          alt={slides[current].alt}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1, ease: premiumEase },
            scale: { duration: 6, ease: premiumEase },
          }}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
          loading="eager"
        />
      </AnimatePresence>

      {/* Subtle bottom gradient for blending */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />

      {/* Gold accent line at top */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent z-10" />

      {/* Slide indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group relative"
          >
            <div
              className={`h-[2px] rounded-full transition-all duration-500 ${
                i === current
                  ? "w-8 bg-brand-gold"
                  : "w-4 bg-white/40 group-hover:bg-white/70"
              }`}
            />
            {i === current && (
              <motion.div
                className="absolute inset-0 h-[2px] rounded-full bg-white/30 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                key={`progress-${current}`}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
