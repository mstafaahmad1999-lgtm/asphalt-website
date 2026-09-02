import json
import re

with open('src/dictionaries/en.json', 'r', encoding='utf-8') as f:
    en = json.load(f)
with open('src/dictionaries/ar.json', 'r', encoding='utf-8') as f:
    ar = json.load(f)

# Add missing strings
en['hero'].update({
    'blownAsphalt': 'BLOWN ASPHALT 60/70',
    'consistent': 'CONSISTENT',
    'quality': 'QUALITY',
    'relyOn': 'You Can Rely On',
    'tested': 'TESTED & CERTIFIED',
    'international': 'To International Standards',
    'builtFor': 'BUILT FOR',
    'sustainability': 'SUSTAINABILITY',
    'safer': 'Safer for the Future',
    'yearsExp': 'Years of<br/>Experience',
    'countriesServed': 'Countries<br/>Served',
    'qualityAssured': 'Quality<br/>Assured',
    'customerSupport': 'Customer<br/>Support'
})

ar['hero'].update({
    'blownAsphalt': 'الأسفلت المنفوخ 60/70',
    'consistent': 'جودة',
    'quality': 'ثابتة',
    'relyOn': 'يمكنك الاعتماد عليها',
    'tested': 'مُختبر ومعتمد',
    'international': 'وفقاً للمعايير الدولية',
    'builtFor': 'مصمم من أجل',
    'sustainability': 'الاستدامة',
    'safer': 'أكثر أماناً للمستقبل',
    'yearsExp': 'سنوات من<br/>الخبرة',
    'countriesServed': 'الدول<br/>المخدومة',
    'qualityAssured': 'جودة<br/>مضمونة',
    'customerSupport': 'دعم<br/>العملاء'
})

en['products'].update({
    'madeInIraq': 'Manufactured<br className="hidden md:block" />In Iraq',
    'madeInIraqDesc': 'Proudly made with advanced technology',
    'pricing': 'Competitive<br className="hidden md:block" />Pricing',
    'pricingDesc': 'Best value for long-term success',
    'supply': 'Flexible<br className="hidden md:block" />Supply',
    'supplyDesc': 'Bulk supply & reliable logistics',
    'delivery': 'Fast & Safe<br className="hidden md:block" />Delivery',
    'deliveryDesc': 'On time, every time, wherever you are',
    'thMethod': 'Method',
    'cat1': 'Physical & Safety',
    'cat2': 'Thermal & Rheological',
    'cat3': 'Purity & Composition',
    'app1': 'Waterproofing & Roofing',
    'app1Desc': 'Superior protection for industrial membranes.',
    'app2': 'Pipe-Wrap & Coatings',
    'app2Desc': 'Anti-corrosion barriers for pipelines.',
    'app3': 'Paving Grade Applications',
    'app3Desc': 'High-resistance asphalt for durable roads.'
})

ar['products'].update({
    'madeInIraq': 'صُنع<br className="hidden md:block" />في العراق',
    'madeInIraqDesc': 'صُنع بفخر بتقنية متقدمة',
    'pricing': 'أسعار<br className="hidden md:block" />تنافسية',
    'pricingDesc': 'أفضل قيمة للنجاح على المدى الطويل',
    'supply': 'توريد<br className="hidden md:block" />مرن',
    'supplyDesc': 'توريد بالجملة ولوجستيات موثوقة',
    'delivery': 'توصيل سريع<br className="hidden md:block" />وآمن',
    'deliveryDesc': 'في الوقت المحدد، في كل مرة، أينما كنت',
    'thMethod': 'الطريقة',
    'cat1': 'فيزيائية وسلامة',
    'cat2': 'حرارية وريولوجية',
    'cat3': 'نقاء وتركيب',
    'app1': 'العزل المائي والتسقيف',
    'app1Desc': 'حماية فائقة للأغشية الصناعية.',
    'app2': 'تغليف الأنابيب والطلاء',
    'app2Desc': 'حواجز مضادة للتآكل لخطوط الأنابيب.',
    'app3': 'تطبيقات الرصف',
    'app3Desc': 'أسفلت عالي المقاومة للطرق المعمرة.'
})

en['about'].update({
    'aboutTitle': 'About {dict.footer.logoTitle} Co.',
    'experience': 'EXPERIENCE. QUALITY. TRUST.',
    'stateOfArt': 'State of the Art<br/>Production',
    'stateOfArtDesc': 'Advanced facilities and<br/>modern technology',
    'strictQc': 'Strict Quality<br/>Control',
    'strictQcDesc': 'Rigorous testing at every<br/>stage of production',
    'globalStd': 'Global<br/>Standards',
    'globalStdDesc': 'Compliance with international<br/>quality standards',
    'sustainable': 'Sustainable<br/>Practices',
    'sustainableDesc': 'Committed to safety<br/>and responsibility',
    'madeIn': 'Made In',
    'iraqBig': 'IRAQ'
})

ar['about'].update({
    'aboutTitle': 'نبذة عن شركة جلوبال أجرو',
    'experience': 'خبرة. جودة. ثقة.',
    'stateOfArt': 'إنتاج<br/>حديث',
    'stateOfArtDesc': 'مرافق متقدمة<br/>وتكنولوجيا حديثة',
    'strictQc': 'رقابة صارمة<br/>على الجودة',
    'strictQcDesc': 'اختبار صارم في كل<br/>مرحلة من مراحل الإنتاج',
    'globalStd': 'معايير<br/>عالمية',
    'globalStdDesc': 'الامتثال لمعايير<br/>الجودة الدولية',
    'sustainable': 'ممارسات<br/>مستدامة',
    'sustainableDesc': 'ملتزمون بالسلامة<br/>والمسؤولية',
    'madeIn': 'صُنع في',
    'iraqBig': 'العراق'
})

en['quality'].update({
    'insights': 'Insights & Resources',
    'everything': 'EVERYTHING YOU NEED',
    'getInTouch': 'Get in Touch',
    'contactUs': 'CONTACT US'
})

ar['quality'].update({
    'insights': 'رؤى وموارد',
    'everything': 'كل ما تحتاجه',
    'getInTouch': 'تواصل معنا',
    'contactUs': 'اتصل بنا'
})

# Save dictionaries
with open('src/dictionaries/en.json', 'w', encoding='utf-8') as f:
    json.dump(en, f, indent=2, ensure_ascii=False)
with open('src/dictionaries/ar.json', 'w', encoding='utf-8') as f:
    json.dump(ar, f, indent=2, ensure_ascii=False)

# Now replace in page.tsx
with open('src/app/[lang]/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    '>BLOWN ASPHALT 60/70<': '>{dict.hero.blownAsphalt}<',
    '>CONSISTENT<': '>{dict.hero.consistent}<',
    '>QUALITY<': '>{dict.hero.quality}<',
    '>You Can Rely On<': '>{dict.hero.relyOn}<',
    '>TESTED & CERTIFIED<': '>{dict.hero.tested}<',
    '>To International<': '>{dict.hero.international}<',
    '>Standards<': '>{dict.hero.international}<', # Wait, need careful replace
    '>BUILT FOR<': '>{dict.hero.builtFor}<',
    '>SUSTAINABILITY<': '>{dict.hero.sustainability}<',
    '>Safer for the Future<': '>{dict.hero.safer}<',
    '>Years of<br/>Experience<': ' dangerouslySetInnerHTML={{ __html: dict.hero.yearsExp }}><',
    '>Countries<br/>Served<': ' dangerouslySetInnerHTML={{ __html: dict.hero.countriesServed }}><',
    '>Quality<br/>Assured<': ' dangerouslySetInnerHTML={{ __html: dict.hero.qualityAssured }}><',
    '>Customer<br/>Support<': ' dangerouslySetInnerHTML={{ __html: dict.hero.customerSupport }}><',
    
    '>Manufactured<br className="hidden md:block" />In Iraq<': ' dangerouslySetInnerHTML={{ __html: dict.products.madeInIraq }}><',
    '>Proudly made with advanced technology<': '>{dict.products.madeInIraqDesc}<',
    '>Competitive<br className="hidden md:block" />Pricing<': ' dangerouslySetInnerHTML={{ __html: dict.products.pricing }}><',
    '>Best value for long-term success<': '>{dict.products.pricingDesc}<',
    '>Flexible<br className="hidden md:block" />Supply<': ' dangerouslySetInnerHTML={{ __html: dict.products.supply }}><',
    '>Bulk supply & reliable logistics<': '>{dict.products.supplyDesc}<',
    '>Fast & Safe<br className="hidden md:block" />Delivery<': ' dangerouslySetInnerHTML={{ __html: dict.products.delivery }}><',
    '>On time, every time, wherever you are<': '>{dict.products.deliveryDesc}<',
    
    '>Method<': '>{dict.products.thMethod}<',
    '>Physical & Safety<': '>{dict.products.cat1}<',
    '>Thermal & Rheological<': '>{dict.products.cat2}<',
    '>Purity & Composition<': '>{dict.products.cat3}<',
    
    '>Waterproofing & Roofing<': '>{dict.products.app1}<',
    '>Superior protection for industrial membranes.<': '>{dict.products.app1Desc}<',
    '>Pipe-Wrap & Coatings<': '>{dict.products.app2}<',
    '>Anti-corrosion barriers for pipelines.<': '>{dict.products.app2Desc}<',
    '>Paving Grade Applications<': '>{dict.products.app3}<',
    '>High-resistance asphalt for durable roads.<': '>{dict.products.app3Desc}<',
    
    'About {dict.footer.logoTitle} Co.': '{dict.about.aboutTitle}',
    '>EXPERIENCE. QUALITY. TRUST.<': '>{dict.about.experience}<',
    '>State of the Art<br/>Production<': ' dangerouslySetInnerHTML={{ __html: dict.about.stateOfArt }}><',
    '>Advanced facilities and<br/>modern technology<': ' dangerouslySetInnerHTML={{ __html: dict.about.stateOfArtDesc }}><',
    '>Strict Quality<br/>Control<': ' dangerouslySetInnerHTML={{ __html: dict.about.strictQc }}><',
    '>Rigorous testing at every<br/>stage of production<': ' dangerouslySetInnerHTML={{ __html: dict.about.strictQcDesc }}><',
    '>Global<br/>Standards<': ' dangerouslySetInnerHTML={{ __html: dict.about.globalStd }}><',
    '>Compliance with international<br/>quality standards<': ' dangerouslySetInnerHTML={{ __html: dict.about.globalStdDesc }}><',
    '>Sustainable<br/>Practices<': ' dangerouslySetInnerHTML={{ __html: dict.about.sustainable }}><',
    '>Committed to safety<br/>and responsibility<': ' dangerouslySetInnerHTML={{ __html: dict.about.sustainableDesc }}><',
    
    '>Made In<': '>{dict.about.madeIn}<',
    '>IRAQ<': '>{dict.about.iraqBig}<',
    
    '>Insights & Resources<': '>{dict.quality.insights}<',
    '>EVERYTHING YOU NEED<': '>{dict.quality.everything}<',
    '>Get in Touch<': '>{dict.quality.getInTouch}<',
    '>CONTACT US<': '>{dict.quality.contactUs}<'
}

for old, new in replacements.items():
    content = content.replace(old, new)
    
# Remove duplicate 'To International Standards'
content = content.replace('<div className="text-gray-400 text-xs mt-0.5">{dict.hero.international}</div>\n                  <div className="text-gray-400 text-xs">Standards</div>', '<div className="text-gray-400 text-xs mt-0.5">{dict.hero.international}</div>')

with open('src/app/[lang]/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")
