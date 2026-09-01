from PIL import Image
import math
from collections import deque

input_path = 'public/logo.jpg'
output_path = 'public/logo.png'

print("Opening image...")
img = Image.open(input_path).convert("RGBA")
pixels = img.load()

width, height = img.size
visited = [[False]*height for _ in range(width)]

# Flood fill starting from the top-left corner
queue = deque([(0, 0), (width-1, 0), (0, height-1), (width-1, height-1)])
for qx, qy in queue:
    visited[qx][qy] = True

threshold = 60 # RGB distance threshold

while queue:
    x, y = queue.popleft()
    r, g, b, a = pixels[x, y]
    
    # Calculate distance to black
    dist = math.sqrt(r*r + g*g + b*b)
    
    if dist < threshold:
        # Mark as transparent
        pixels[x, y] = (r, g, b, 0)
        
        # Add neighbors
        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nx, ny = x + dx, y + dy
            if 0 <= nx < width and 0 <= ny < height and not visited[nx][ny]:
                visited[nx][ny] = True
                queue.append((nx, ny))

print("Upscaling...")
new_size = (img.width * 2, img.height * 2)
upscaled = img.resize(new_size, Image.Resampling.LANCZOS)

upscaled.save(output_path)
print("Done!")
