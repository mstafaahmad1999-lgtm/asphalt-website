with open('src/components/MotionWrappers.tsx', 'a', encoding='utf-8') as f:
    f.write('''

export function SlideUpMask({ children, className = "", delay = 0 }: { children: ReactNode, className?: string, delay?: number }) {
  return (
    <div className={`overflow-hidden ${className}`}>
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
''')
