from PIL import Image
img = Image.open('public/assets/roadmap-mobile.png').convert('RGB')
w, h = img.size

orange_rows = []
for y in range(h):
    orange_pixels = 0
    for x in range(w):
        r, g, b = img.getpixel((x, y))
        if r > 200 and g > 100 and b < 50:
            orange_pixels += 1
    # Only count rows where orange spans a large width (button width is ~300px)
    if orange_pixels > 100:
        orange_rows.append(y)

if orange_rows:
    print(f"Orange button Y range: {orange_rows[0]} to {orange_rows[-1]}")
    
