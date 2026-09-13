import re

file_path = 'src/app/[lang]/page.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update imports
content = content.replace(
    'import { FadeIn, SlideIn, StaggerContainer, StaggerItem, ScaleIn } from "@/components/MotionWrappers";',
    'import { FadeIn, SlideIn, StaggerContainer, StaggerItem, ScaleIn, InteractiveCard, InteractiveButton, ContinuousPulseBg } from "@/components/MotionWrappers";'
)

# 2. Hero Background Parallax/Pulse
hero_img_original = """<img 
            src="/hero-bg.jpg" 
            alt="Hero Background" 
            className="absolute inset-y-0 right-0 w-full lg:w-[70%] h-full object-cover object-right z-0"
          />"""
hero_img_new = """<ContinuousPulseBg className="absolute inset-y-0 right-0 w-full lg:w-[70%] h-full z-0">
            <img 
              src="/hero-bg.jpg" 
              alt="Hero Background" 
              className="w-full h-full object-cover object-right"
            />
          </ContinuousPulseBg>"""
content = content.replace(hero_img_original, hero_img_new)

# 3. Hero Buttons
hero_buttons_original = """            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <Link href="#products" className="bg-brand-gold hover:bg-brand-gold-dark text-white px-8 py-3.5 rounded text-sm font-bold transition-colors flex items-center gap-2 uppercase tracking-wide shadow-lg shadow-brand-gold/20">
                {dict.hero.exploreBtn}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
              <Link href="#contact" className="bg-white hover:bg-gray-100 text-brand-dark px-8 py-3.5 rounded text-sm font-bold transition-colors flex items-center gap-2 uppercase tracking-wide">
                {dict.hero.contactBtn}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>"""

hero_buttons_new = """            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <InteractiveButton>
                <Link href="#products" className="bg-brand-gold hover:bg-brand-gold-dark text-white px-8 py-3.5 rounded text-sm font-bold transition-colors flex items-center gap-2 uppercase tracking-wide shadow-lg shadow-brand-gold/20">
                  {dict.hero.exploreBtn}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Link>
              </InteractiveButton>
              <InteractiveButton>
                <Link href="#contact" className="bg-white hover:bg-gray-100 text-brand-dark px-8 py-3.5 rounded text-sm font-bold transition-colors flex items-center gap-2 uppercase tracking-wide">
                  {dict.hero.contactBtn}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Link>
              </InteractiveButton>
            </div>"""
content = content.replace(hero_buttons_original, hero_buttons_new)

# 4. Interactive Cards in Products (Applications section)
content = content.replace(
    '<div className="group relative flex-1 min-h-[140px] rounded-xl overflow-hidden shadow-lg cursor-pointer">',
    '<InteractiveCard className="group relative flex-1 min-h-[140px] rounded-xl overflow-hidden shadow-lg cursor-pointer flex flex-col">'
)
# There are 3 applications, so we must replace 3 closing tags.
content = content.replace(
    '{dict.products.app1Desc}</p>\n                   </div>\n                 </div>',
    '{dict.products.app1Desc}</p>\n                   </div>\n                 </InteractiveCard>'
)
content = content.replace(
    '{dict.products.app2Desc}</p>\n                   </div>\n                 </div>',
    '{dict.products.app2Desc}</p>\n                   </div>\n                 </InteractiveCard>'
)
content = content.replace(
    '{dict.products.app3Desc}</p>\n                   </div>\n                 </div>',
    '{dict.products.app3Desc}</p>\n                   </div>\n                 </InteractiveCard>'
)


# 5. Interactive Cards in Resources
resource_card_1 = '<StaggerItem className="bg-gray-50 rounded-xl p-8 md:p-10 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">'
resource_card_1_new = '<StaggerItem>\n              <InteractiveCard className="bg-gray-50 rounded-xl p-8 md:p-10 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">'
content = content.replace(resource_card_1, resource_card_1_new)

resource_card_2 = '<StaggerItem className="bg-brand-dark rounded-xl p-8 md:p-10 text-center shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden flex flex-col">'
resource_card_2_new = '<StaggerItem>\n              <InteractiveCard className="bg-brand-dark rounded-xl p-8 md:p-10 text-center shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden flex flex-col h-full">'
content = content.replace(resource_card_2, resource_card_2_new)

# Resources ends with:
content = content.replace(
    '</p>\n            </StaggerItem>\n\n            {/* Technical Documents */}',
    '</p>\n              </InteractiveCard>\n            </StaggerItem>\n\n            {/* Technical Documents */}'
)
content = content.replace(
    '</a>\n                </div>\n              </div>\n            </StaggerItem>\n\n            {/* Latest News */}',
    '</a>\n                </div>\n              </div>\n              </InteractiveCard>\n            </StaggerItem>\n\n            {/* Latest News */}'
)
content = content.replace(
    '{dict.quality.newsComing}\n              </div>\n            </StaggerItem>\n          </StaggerContainer>',
    '{dict.quality.newsComing}\n              </div>\n              </InteractiveCard>\n            </StaggerItem>\n          </StaggerContainer>'
)


with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated successfully")
