import re

with open('src/app/[lang]/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('+90 532 744 85 87', '<span dir="ltr">+90 532 744 85 87</span>')
content = content.replace('+964 772 989 9799', '<span dir="ltr">+964 772 989 9799</span>')

with open('src/app/[lang]/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Phone numbers fixed!")
