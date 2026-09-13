"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// Premium Easing Curve
const premiumEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function FadeIn({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: premiumEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideIn({ children, direction = "left", delay = 0, className = "" }: { children: ReactNode, direction?: "left" | "right" | "up" | "down", delay?: number, className?: string }) {
  const directions = {
    left: { x: -80, y: 0 },
    right: { x: 80, y: 0 },
    up: { x: 0, y: 80 },
    down: { x: 0, y: -80 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, delay, ease: premiumEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: premiumEase } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: premiumEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function InteractiveCard({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function InteractiveButton({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function ContinuousPulseBg({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideUpMask({ children, className = "", delay = 0 }: { children: ReactNode, className?: string, delay?: number }) {
  return (
    <div className={`overflow-hidden py-2 ${className}`}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, delay, ease: premiumEase }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function InfiniteMarquee({ text, speed = 25, className = "", dir = "ltr" }: { text: string, speed?: number, className?: string, dir?: "ltr" | "rtl" }) {
  const toX = dir === "rtl" ? "50%" : "-50%";
  return (
    <div className={`w-full overflow-hidden whitespace-nowrap flex ${className}`} dir={dir}>
      <motion.div
        className="inline-block flex-shrink-0"
        animate={{ x: ["0%", toX] }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
      >
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
      </motion.div>
    </div>
  );
}

export function FloatingElement({ children, className = "", delay = 0 }: { children: ReactNode, className?: string, delay?: number }) {
  return (
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ScrollParallax({ children, className = "", offset = 50 }: { children: ReactNode, className?: string, offset?: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
