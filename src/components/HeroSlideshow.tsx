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

// Card positions: front, behind-right, behind-far-right
const cardConfigs = [
  { rotate: 0, x: 0, y: 0, scale: 1, zIndex: 30, opacity: 1 },        // Front
  { rotate: 6, x: 40, y: -12, scale: 0.92, zIndex: 20, opacity: 0.7 },  // Behind right
  { rotate: 12, x: 80, y: -24, scale: 0.84, zIndex: 10, opacity: 0.4 }, // Far behind
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, INTERVAL);
    return () => clearInterval(timer);
  }, [advance]);

  // Get 3 visible slide indices
  const getSlideIndex = (offset: number) =>
    (current + offset) % slides.length;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Stacked cards — render back to front */}
      {[2, 1, 0].map((offset) => {
        const idx = getSlideIndex(offset);
        const config = cardConfigs[offset];

        return (
          <motion.div
            key={`${idx}-${current}-${offset}`}
            className="absolute rounded-2xl overflow-hidden shadow-2xl shadow-black/60"
            style={{
              width: "85%",
              maxWidth: "520px",
              aspectRatio: "16 / 10",
              zIndex: config.zIndex,
              border: offset === 0
                ? "2px solid rgba(196, 166, 107, 0.6)"
                : "1px solid rgba(255, 255, 255, 0.1)",
            }}
            initial={{
              rotate: cardConfigs[Math.min(offset + 1, 2)].rotate,
              x: cardConfigs[Math.min(offset + 1, 2)].x,
              y: cardConfigs[Math.min(offset + 1, 2)].y,
              scale: cardConfigs[Math.min(offset + 1, 2)].scale,
              opacity: offset === 0 ? 0 : cardConfigs[Math.min(offset + 1, 2)].opacity,
            }}
            animate={{
              rotate: config.rotate,
              x: config.x,
              y: config.y,
              scale: config.scale,
              opacity: config.opacity,
            }}
            transition={{
              duration: 0.8,
              ease: premiumEase,
            }}
          >
            {/* Image */}
            <img
              src={slides[idx].src}
              alt={slides[idx].alt}
              className="w-full h-full object-cover"
              draggable={false}
              loading="eager"
            />
            {/* Dark overlay on background cards */}
            {offset > 0 && (
              <div className="absolute inset-0 bg-black/30" />
            )}
            {/* Gold shine on front card top edge */}
            {offset === 0 && (
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent" />
            )}
          </motion.div>
        );
      })}

      {/* Slide indicators — below the cards */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group"
          >
            <div
              className={`rounded-full transition-all duration-500 ${
                i === current
                  ? "w-3 h-3 bg-brand-gold shadow-lg shadow-brand-gold/40"
                  : "w-2 h-2 bg-white/30 group-hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
