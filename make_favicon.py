import sys
from PIL import Image, ImageDraw

def remove_bg(input_path, output_path):
    # Open image and ensure RGBA
    img = Image.open(input_path).convert("RGBA")
    
    # Create a mask using flood fill from the top-left corner (0, 0)
    # The mask will be 1 where the background is, and 0 elsewhere
    # Pillow's ImageDraw.floodfill can fill with a specific color
    # Let's create a temporary image for flood filling
    mask = Image.new("L", img.size, 0)
    
    # We will do a manual flood fill or use a simple threshold because it's a solid background.
    # Wait, the inner drop is surrounded by gold/silver, so a flood fill from (0,0) won't reach the inside!
    # Let's write a simple BFS flood fill for the alpha channel.
    
    width, height = img.size
    pixels = img.load()
    
    # Tolerance for background color
    # Background in the provided image might have slight gradients, let's check top-left pixel
    bg_color = pixels[0, 0]
    
    def color_diff(c1, c2):
        return sum((a - b) ** 2 for a, b in zip(c1[:3], c2[:3])) ** 0.5

    tolerance = 25 # adjust as needed

    # BFS flood fill
    visited = set()
    queue = [(0, 0), (width-1, 0), (0, height-1), (width-1, height-1)]
    
    for start_node in queue:
        if start_node not in visited:
            q = [start_node]
            visited.add(start_node)
            
            while q:
                x, y = q.pop(0)
                
                # Make transparent
                r, g, b, a = pixels[x, y]
                pixels[x, y] = (r, g, b, 0)
                
                # Check neighbors
                for dx, dy in [(0, 1), (1, 0), (0, -1), (-1, 0)]:
                    nx, ny = x + dx, y + dy
                    if 0 <= nx < width and 0 <= ny < height:
                        if (nx, ny) not in visited:
                            if color_diff(pixels[nx, ny], bg_color) < tolerance:
                                visited.add((nx, ny))
                                q.append((nx, ny))

    # Resize to a standard favicon size to smooth it out (e.g., 256x256 or 512x512)
    # The current image is large. Favicons are usually smaller. Let's make it 512x512 max
    img.thumbnail((512, 512), Image.Resampling.LANCZOS)
    
    img.save(output_path, "PNG")
    print(f"Saved {output_path}")

remove_bg("public/new_logo_raw.jpg", "src/app/icon.png")
