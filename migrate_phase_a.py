import re
import os

def replace_logical(content):
    # Mapping physical to logical
    mapping = {
        r'\bpl-': 'ps-',
        r'\bpr-': 'pe-',
        r'\bml-': 'ms-',
        r'\bmr-': 'me-',
        r'\bleft-': 'start-',
        r'\bright-': 'end-',
        r'\bborder-l-': 'border-s-',
        r'\bborder-r-': 'border-e-',
        r'\btext-left\b': 'text-start',
        r'\btext-right\b': 'text-end',
    }
    for k, v in mapping.items():
        content = re.sub(k, v, content)
    
    # next/image fixes
    # Replace img with Image in Header
    content = re.sub(r'<img\s+src="/logo\.png"\s+alt="([^"]+)"\s+className="([^"]+)"\s*/>',
                     r'<Image src="/logo.png" alt="\g<1>" width={48} height={48} className="\g<2>" />', content)

    # Replace img with Image in page.tsx (the hero background)
    content = re.sub(r'<img\s+src="/hero-bg\.jpg"\s+alt="([^"]+)"\s+className="([^"]+)"\s*/>',
                     r'<Image src="/hero-bg.jpg" alt="\g<1>" fill priority className="\g<2>" />', content)

    return content

files = ['src/app/[lang]/page.tsx', 'src/components/Header.tsx']
for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = replace_logical(content)
    if '<Image' in new_content and 'import Image' not in new_content:
        new_content = 'import Image from "next/image";\n' + new_content

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f'Processed {file_path}')
