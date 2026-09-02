import re

with open('src/app/[lang]/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(r'>\s*Technical Specifications\s*</h3>', '>{dict.products.techSpecsTitle}</h3>', content)
content = re.sub(r'>\s*Primary Applications\s*</h3>', '>{dict.products.primaryAppsTitle}</h3>', content)

with open('src/app/[lang]/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")
