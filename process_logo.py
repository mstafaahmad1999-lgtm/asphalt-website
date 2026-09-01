from rembg import remove
from PIL import Image

input_path = 'public/logo.jpg'
output_path = 'public/logo.png'

print("Opening image...")
input_img = Image.open(input_path)

print("Removing background...")
output_img = remove(input_img)

print("Upscaling...")
new_size = (output_img.width * 2, output_img.height * 2)
upscaled = output_img.resize(new_size, Image.Resampling.LANCZOS)

upscaled.save(output_path)
print("Done!")
