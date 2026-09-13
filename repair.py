import re

with open('src/components/MotionWrappers.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Strip everything after ContinuousPulseBg closing
idx = content.find('export function ContinuousPulseBg')
if idx != -1:
    idx2 = content.find('}\n', idx)
    if idx2 != -1:
        idx3 = content.find('}\n', idx2+2)
        if idx3 != -1:
            idx4 = content.find('}\n', idx3+2)
            if idx4 != -1:
                content = content[:idx4+2]

# Now rewrite the advanced components perfectly
content += '''
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
'''

with open('src/components/MotionWrappers.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
