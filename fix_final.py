import os

with open('src/app/[lang]/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    'Download our product data sheets, safety data sheets, and certification documents.': '{dict.quality.docsDesc}',
    'DOWNLOAD TECHNICAL SPECIFICATIONS': '{dict.quality.downloadBtn}',
    'Stay up to date with the latest announcements, industry insights, and production updates from the GLOBAL AGRO Co. team.': '{dict.quality.newsDesc}',
    'No recent news articles yet. Check back soon!': '{dict.quality.newsComing}',
    'Reach out to our team today for quotes, inquiries, and logistics support. We are ready to assist you 24/7.': '{dict.quality.contactDesc}',
    'REQUEST A QUOTE': '{dict.quality.requestQuote}'
}

for old, new in replacements.items():
    content = content.replace(old, new)

with open('src/app/[lang]/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Replaced!")
