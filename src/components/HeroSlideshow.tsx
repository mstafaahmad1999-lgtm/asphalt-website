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

const INTERVAL = 6000; // 6 seconds per slide

const premiumEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(advance, INTERVAL);
    return () => clearInterval(timer);
  }, [advance, isPaused]);

  return (
    <div
      className="absolute inset-0 overflow-hidden bg-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated slides */}
      <AnimatePresence mode="sync">
        <motion.img
          key={current}
          src={slides[current].src}
          alt={slides[current].alt}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{
            opacity: { duration: 1.2, ease: premiumEase },
            scale: { duration: 8, ease: premiumEase },
          }}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
          loading="eager"
        />
      </AnimatePresence>

      {/* Cinematic overlays */}
      {/* Top vignette */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent z-10 pointer-events-none" />
      {/* Bottom vignette */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />
      {/* Left-side text-safe gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10 pointer-events-none" />

      {/* Subtle film grain overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group relative flex items-center justify-center"
          >
            {/* Background pill */}
            <div
              className={`h-[3px] rounded-full transition-all duration-500 ${
                i === current
                  ? "w-10 bg-brand-gold"
                  : "w-5 bg-white/30 group-hover:bg-white/60"
              }`}
            />
            {/* Active progress animation */}
            {i === current && !isPaused && (
              <motion.div
                className="absolute inset-0 h-[3px] rounded-full bg-white/40 origin-left"
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
