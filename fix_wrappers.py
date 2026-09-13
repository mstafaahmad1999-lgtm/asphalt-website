import re

with open('src/components/MotionWrappers.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

fixed = content.replace(
'''      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className={className}

export function SlideUpMask''',
'''      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideUpMask'''
)

with open('src/components/MotionWrappers.tsx', 'w', encoding='utf-8') as f:
    f.write(fixed)
print("Fixed wrappers!")
