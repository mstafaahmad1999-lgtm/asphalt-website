import re

file_path = 'src/app/[lang]/page.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update imports
content = content.replace(
    'import { FadeIn, SlideIn, StaggerContainer, StaggerItem, ScaleIn, InteractiveCard, InteractiveButton, ContinuousPulseBg } from "@/components/MotionWrappers";',
    'import { FadeIn, SlideIn, StaggerContainer, StaggerItem, ScaleIn, InteractiveCard, InteractiveButton, ContinuousPulseBg, InfiniteMarquee, SlideUpMask, FloatingElement } from "@/components/MotionWrappers";'
)

# 2. Main Title & Subtitle SlideUpMask
title_original = '<h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white font-bold leading-tight mb-6" dangerouslySetInnerHTML={{ __html: dict.hero.title }}></h1>'
title_new = '<SlideUpMask delay={0.2}><h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white font-bold leading-tight mb-6" dangerouslySetInnerHTML={{ __html: dict.hero.title }}></h1></SlideUpMask>'
content = content.replace(title_original, title_new)

desc_original = '<p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed" dangerouslySetInnerHTML={{ __html: dict.hero.desc }}></p>'
desc_new = '<SlideUpMask delay={0.4}><p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed" dangerouslySetInnerHTML={{ __html: dict.hero.desc }}></p></SlideUpMask>'
content = content.replace(desc_original, desc_new)


# 3. Add Marquee between Hero and Products
hero_end = '        {/* Stats Card Overlapping (Desktop Only) */}'
marquee_code = """        {/* Marquee Banner */}
        <div className="bg-brand-gold text-brand-dark py-4 flex overflow-hidden relative z-40 border-y border-brand-gold-dark/20 shadow-lg">
          <InfiniteMarquee 
            text={lang === 'ar' ? "جودة استثنائية • انتشار عالمي • تميز تقني • تصدير لكافة أنحاء العالم • " : "PREMIUM QUALITY • GLOBAL REACH • TECHNICAL EXCELLENCE • EXPORTING WORLDWIDE • "} 
            speed={25} 
            dir={dir}
            className="text-sm md:text-base font-bold tracking-widest uppercase"
          />
        </div>

        {/* Stats Card Overlapping (Desktop Only) */}"""
content = content.replace(hero_end, marquee_code)

# 4. Floating Shapes in About Section
about_badge_original = '<div className="absolute top-10 right-10 bg-white p-4 rounded-xl shadow-2xl flex items-center gap-4 hidden md:flex">'
about_badge_new = '<FloatingElement className="absolute top-10 right-10 bg-white p-4 rounded-xl shadow-2xl flex items-center gap-4 hidden md:flex" delay={0}>'
content = content.replace(about_badge_original, about_badge_new)

content = content.replace(
    '</div>\n\n            <div className="absolute -bottom-10 -left-10 bg-brand-gold text-white p-6 rounded-xl shadow-2xl hidden md:block">',
    '</FloatingElement>\n\n            <FloatingElement delay={1.5} className="absolute -bottom-10 -left-10 bg-brand-gold text-white p-6 rounded-xl shadow-2xl hidden md:block">'
)
content = content.replace(
    '</div>\n          </FadeIn>\n\n          {/* Right Column: Text Content */}',
    '</FloatingElement>\n          </FadeIn>\n\n          {/* Right Column: Text Content */}'
)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated successfully")
