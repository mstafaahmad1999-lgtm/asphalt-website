from PIL import Image
import sys

img = Image.open('public/logo.png')
pixels = img.load()
w, h = img.size

# Find all opaque pixels
opaque = set()
for y in range(h):
    for x in range(w):
        if pixels[x,y][3] > 10:  # somewhat opaque
            opaque.add((x,y))

# Find connected components
components = []
visited = set()

for px in opaque:
    if px not in visited:
        # BFS to find component
        comp = []
        q = [px]
        visited.add(px)
        head = 0
        while head < len(q):
            cx, cy = q[head]
            head += 1
            comp.append((cx, cy))
            for dx, dy in [(-1,0), (1,0), (0,-1), (0,1), (-1,-1), (-1,1), (1,-1), (1,1)]:
                nx, ny = cx+dx, cy+dy
                if (nx, ny) in opaque and (nx, ny) not in visited:
                    visited.add((nx, ny))
                    q.append((nx, ny))
        components.append(comp)

print(f"Found {len(components)} components.")
components.sort(key=len, reverse=True)

# The first component is the main logo.
# Wait, the logo might be multiple components if there are disconnected highlights?
# Let's keep the largest component, and anything that is physically close to it or below y=300?
# Actually, the garbage is clearly at the top. Let's just find the bounding box of the largest component!

main_comp = components[0]
min_y = min(y for x,y in main_comp)
print(f"Main component starts at y={min_y}")

# Erase everything above min_y
for y in range(min_y):
    for x in range(w):
        pixels[x,y] = (0,0,0,0)

img.save('public/logo.png')
print("Cleaned!")
