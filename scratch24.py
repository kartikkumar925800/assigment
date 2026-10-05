from PIL import Image
img = Image.open('public/assets/roadmap-mobile.png').convert('RGB')
w, h = img.size

# Look for the white text "+91"
text_rows = []
for y in range(h):
    white_pixels = 0
    for x in range(w):
        r, g, b = img.getpixel((x, y))
        if r > 240 and g > 240 and b > 240:
            white_pixels += 1
    if white_pixels > 20: # arbitrary threshold for text
        text_rows.append(y)

# Print gaps
if text_rows:
    print(f"White text rows: {text_rows}")
