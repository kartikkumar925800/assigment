from PIL import Image
img = Image.open('public/assets/roadmap-mobile.png').convert('RGB')
w, h = img.size

orange_rows = []
for y in range(h):
    is_orange = False
    for x in range(w):
        r, g, b = img.getpixel((x, y))
        if r > 200 and g > 100 and b < 50:  # rough orange check
            is_orange = True
            break
    if is_orange:
        orange_rows.append(y)

if orange_rows:
    print(f"Orange button Y range: {orange_rows[0]} to {orange_rows[-1]}")
    
grey_rows = []
for y in range(h):
    is_grey = False
    for x in range(w):
        r, g, b = img.getpixel((x, y))
        # Look for the input field background (roughly grey)
        # It's a dark banner, so look for a specific lighter grey line or shape
        if abs(r-g) < 10 and abs(g-b) < 10 and r > 60 and r < 100:
            is_grey = True
            break
    if is_grey:
        grey_rows.append(y)
if grey_rows:
    print(f"Grey input Y range: {grey_rows[0]} to {grey_rows[-1]}")
