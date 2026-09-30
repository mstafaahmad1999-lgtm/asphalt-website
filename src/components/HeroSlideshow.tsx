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

interface HeroSlideshowProps {
  variant?: "stacked" | "single";
}

export default function HeroSlideshow({ variant = "stacked" }: HeroSlideshowProps) {
  const [current, setCurrent] = useState(0);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, INTERVAL);
    return () => clearInterval(timer);
  }, [advance]);

  const getSlideIndex = (offset: number) =>
    (current + offset) % slides.length;

  // ─── SINGLE CARD (Mobile) ───
  if (variant === "single") {
    return (
      <div className="relative w-full h-full">
        <AnimatePresence mode="sync">
          <motion.img
            key={current}
            src={slides[current].src}
            alt={slides[current].alt}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.8, ease: premiumEase },
              scale: { duration: 5, ease: premiumEase },
            }}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
            loading="eager"
          />
        </AnimatePresence>
        {/* Gold top accent */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent z-10" />
        {/* Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`}>
              <div className={`rounded-full transition-all duration-400 ${
                i === current ? "w-2.5 h-2.5 bg-brand-gold shadow-lg shadow-brand-gold/40" : "w-1.5 h-1.5 bg-white/40"
              }`} />
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ─── STACKED CARDS (Desktop) ───
  const cards = [
    { offset: 2, rotate: 10, x: 60, y: -18, scale: 0.88, zIndex: 10, dim: 0.55 },
    { offset: 1, rotate: 5, x: 30, y: -8, scale: 0.94, zIndex: 20, dim: 0.3 },
    { offset: 0, rotate: 0, x: 0, y: 0, scale: 1, zIndex: 30, dim: 0 },
  ];

  return (
    <div className="relative w-full h-full">
      {cards.map((card) => {
        const idx = getSlideIndex(card.offset);

        return (
          <motion.div
            key={`stack-${current}-${card.offset}`}
            className="absolute inset-0 rounded-xl overflow-hidden"
            style={{
              zIndex: card.zIndex,
              boxShadow: card.offset === 0
                ? "0 25px 60px -15px rgba(0,0,0,0.7), 0 0 0 1px rgba(196,166,107,0.4)"
                : "0 15px 40px -10px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)",
            }}
            initial={{
              rotate: cards[Math.min(card.offset + 1, 2)]?.rotate ?? card.rotate,
              x: cards[Math.min(card.offset + 1, 2)]?.x ?? card.x,
              y: cards[Math.min(card.offset + 1, 2)]?.y ?? card.y,
              scale: cards[Math.min(card.offset + 1, 2)]?.scale ?? card.scale,
              opacity: card.offset === 0 ? 0.5 : 1,
            }}
            animate={{
              rotate: card.rotate,
              x: card.x,
              y: card.y,
              scale: card.scale,
              opacity: 1,
            }}
            transition={{
              duration: 0.9,
              ease: premiumEase,
            }}
          >
            <img
              src={slides[idx].src}
              alt={slides[idx].alt}
              className="w-full h-full object-cover"
              draggable={false}
              loading="eager"
            />
            {card.dim > 0 && (
              <div className="absolute inset-0" style={{ backgroundColor: `rgba(0,0,0,${card.dim})` }} />
            )}
            {card.offset === 0 && (
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
            )}
          </motion.div>
        );
      })}

      {/* Indicators */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`} className="group">
            <motion.div
              className="rounded-full"
              animate={{
                width: i === current ? 12 : 8,
                height: i === current ? 12 : 8,
                backgroundColor: i === current ? "rgb(196, 166, 107)" : "rgba(255,255,255,0.25)",
                boxShadow: i === current ? "0 0 12px rgba(196,166,107,0.5)" : "none",
              }}
              transition={{ duration: 0.3 }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
