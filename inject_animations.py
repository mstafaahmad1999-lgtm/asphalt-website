import re

file_path = 'src/app/[lang]/page.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add imports
import_stmt = 'import { FadeIn, SlideIn, StaggerContainer, StaggerItem, ScaleIn } from "@/components/MotionWrappers";\n'
if 'MotionWrappers' not in content:
    content = content.replace('import Header from "@/components/Header";', f'import Header from "@/components/Header";\n{import_stmt}')

# 2. Hero Section Animations
# Wrap the main text block
content = content.replace(
    '<div className="max-w-3xl">',
    '<FadeIn className="max-w-3xl" delay={0.1}>'
)
content = content.replace(
    '</Link>\n            </div>\n\n            {/* Mobile & Tablet Stats Grid',
    '</Link>\n            </div>\n            </FadeIn>\n\n            {/* Mobile & Tablet Stats Grid'
)

# 3. Stats Mobile
content = content.replace(
    '<div className="mt-16 lg:hidden grid grid-cols-2 gap-4 w-full">',
    '<FadeIn delay={0.3}>\n            <div className="mt-16 lg:hidden grid grid-cols-2 gap-4 w-full">'
)
content = content.replace(
    '</div>\n\n          </div>\n        </div>\n\n        {/* Stats Card Overlapping (Desktop Only)',
    '</div>\n            </FadeIn>\n\n          </div>\n        </div>\n\n        {/* Stats Card Overlapping (Desktop Only)'
)

# 4. Stats Desktop
content = content.replace(
    '{/* Stats Card Overlapping (Desktop Only) */}\n        <div className="absolute',
    '{/* Stats Card Overlapping (Desktop Only) */}\n        <SlideIn direction="up" delay={0.5} className="absolute'
)
content = content.replace(
    '</div>\n        </section>',
    '</div>\n        </SlideIn>\n        </section>'
)

# 5. Features Section
content = content.replace(
    '<div className="container mx-auto px-6">\n          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">',
    '<div className="container mx-auto px-6">\n          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">'
)
content = content.replace(
    '</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>',
    '</p>\n              </div>\n            </StaggerItem>\n          </StaggerContainer>\n        </div>\n      </section>'
)
content = content.replace(
    '<div className="bg-brand-dark rounded-xl p-8',
    '<StaggerItem>\n              <div className="bg-brand-dark rounded-xl p-8'
)
# Close StaggerItems for the first two
content = content.replace(
    '</p>\n              </div>\n              <div className="bg-brand-dark rounded-xl p-8',
    '</p>\n              </div>\n              </StaggerItem>\n              <StaggerItem>\n              <div className="bg-brand-dark rounded-xl p-8'
)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Animations added!")
