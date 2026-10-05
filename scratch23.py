from PIL import Image
img = Image.open('public/assets/roadmap-mobile.png').convert('RGB')
w, h = img.size

grey_rows = []
for y in range(h):
    grey_pixels = 0
    for x in range(w):
        r, g, b = img.getpixel((x, y))
        # Look for the input field background border or fill (it has a white border with low opacity, and background with low opacity)
        if abs(r-g) < 10 and abs(g-b) < 10 and r > 70 and r < 120:
            grey_pixels += 1
    if grey_pixels > 200:
        grey_rows.append(y)

if grey_rows:
    print(f"Grey input Y range: {grey_rows[0]} to {grey_rows[-1]}")
