import re

def logicalize_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Safely replace only specific tailwind classes using regex
    # Match boundaries to avoid replacing parts of other words
    replacements = [
        (r'\bml-', 'ms-'),
        (r'\bmr-', 'me-'),
        (r'\bpl-', 'ps-'),
        (r'\bpr-', 'pe-'),
        (r'\btext-left\b', 'text-start'),
        (r'\btext-right\b', 'text-end'),
        (r'\bborder-l\b', 'border-s'),
        (r'\bborder-r\b', 'border-e'),
        (r'\bborder-l-', 'border-s-'),
        (r'\bborder-r-', 'border-e-'),
    ]

    for pattern, repl in replacements:
        content = re.sub(pattern, repl, content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

logicalize_file('src/app/[lang]/page.tsx')
logicalize_file('src/components/Header.tsx')
print("Done")
