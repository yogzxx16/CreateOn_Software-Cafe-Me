import zlib
import struct
import math

# We render at high resolution (888 x 240) which gives a crisp 3.7:1 illuminated sign
W = 888
H = 240

# RGBA buffer
buf = bytearray(W * H * 4)

def set_pixel(x, y, r, g, b, a=1.0):
    if 0 <= x < W and 0 <= y < H and a > 0:
        idx = (y * W + x) * 4
        if a >= 1.0:
            buf[idx] = min(255, max(0, int(r)))
            buf[idx+1] = min(255, max(0, int(g)))
            buf[idx+2] = min(255, max(0, int(b)))
            buf[idx+3] = 255
        else:
            sa = min(1.0, max(0.0, a))
            dr = buf[idx]
            dg = buf[idx+1]
            db = buf[idx+2]
            buf[idx] = min(255, max(0, int(r * sa + dr * (1.0 - sa))))
            buf[idx+1] = min(255, max(0, int(g * sa + dg * (1.0 - sa))))
            buf[idx+2] = min(255, max(0, int(b * sa + db * (1.0 - sa))))
            buf[idx+3] = 255

def blend_additive(x, y, r, g, b, a):
    if 0 <= x < W and 0 <= y < H and a > 0:
        idx = (y * W + x) * 4
        sa = min(1.0, max(0.0, a))
        buf[idx] = min(255, int(buf[idx] + r * sa))
        buf[idx+1] = min(255, int(buf[idx+1] + g * sa))
        buf[idx+2] = min(255, int(buf[idx+2] + b * sa))

# 1. Base illuminated acrylic background with warm interior glows
for y in range(H):
    for x in range(W):
        # Light sources inside lightbox:
        # Source 1: behind "cafe ME." around (210, 120)
        # Source 2: behind circular medallion around (690, 120)
        d1 = math.sqrt((x - 210)**2 + (y - 120)**2)
        d2 = math.sqrt((x - 690)**2 + (y - 120)**2)
        glow1 = math.exp(-(d1 / 190.0)**2)
        glow2 = math.exp(-(d2 / 160.0)**2)
        glow = max(glow1, glow2 * 0.95)

        # Deep warm maroon base
        r = 76 + glow * 55
        g = 10 + glow * 16
        b = 13 + glow * 14

        # Top and bottom lightbox metal frame & shadowing
        if y < 12:
            f = y / 12.0
            r = 22 + 20 * f
            g = 3 + 4 * f
            b = 4 + 4 * f
        elif y > 228:
            f = (240 - y) / 12.0
            r = 24 + 18 * f
            g = 3 + 4 * f
            b = 4 + 4 * f

        # Vignette at outer left and right edges
        edge = min(x, W - x) / 70.0
        if edge < 1.0:
            r *= (0.75 + 0.25 * edge)
            g *= (0.75 + 0.25 * edge)
            b *= (0.75 + 0.25 * edge)

        set_pixel(x, y, r, g, b, 1.0)

# Frame highlight lines (subtle reflection along frame seams)
for x in range(W):
    blend_additive(x, 12, 60, 20, 15, 0.4)
    blend_additive(x, 227, 70, 25, 18, 0.35)

# Helper: Distance to 2D line segment
def dist_to_segment(px, py, x1, y1, x2, y2):
    dx = x2 - x1
    dy = y2 - y1
    if dx == 0 and dy == 0:
        return math.hypot(px - x1, py - y1)
    t = ((px - x1) * dx + (py - y1) * dy) / (dx * dx + dy * dy)
    t = max(0.0, min(1.0, t))
    proj_x = x1 + t * dx
    proj_y = y1 + t * dy
    return math.hypot(px - proj_x, py - proj_y)

# Helper: Distance to circle arc
def dist_to_arc(px, py, cx, cy, radius, start_angle, end_angle):
    angle = math.atan2(py - cy, px - cx)
    # normalize angles to [0, 2pi]
    def norm(a):
        return a % (2 * math.pi)
    a = norm(angle)
    s = norm(start_angle)
    e = norm(end_angle)
    in_arc = False
    if s <= e:
        in_arc = (s <= a <= e)
    else:
        in_arc = (a >= s or a <= e)
    d_rad = abs(math.hypot(px - cx, py - cy) - radius)
    if in_arc:
        return d_rad
    # distance to endpoints
    p1x = cx + radius * math.cos(start_angle)
    p1y = cy + radius * math.sin(start_angle)
    p2x = cx + radius * math.cos(end_angle)
    p2y = cy + radius * math.sin(end_angle)
    return min(math.hypot(px - p1x, py - p1y), math.hypot(px - p2x, py - p2y))

# 2. Draw the illuminated Circular Emblem on the right (cx=690, cy=120)
ecx = 690
ecy = 120
r_outer = 78
r_inner = 70
r_disc = 64

# Disc fill with warm glowing gradient
for y in range(ecy - 85, ecy + 86):
    for x in range(ecx - 85, ecx + 86):
        d = math.hypot(x - ecx, y - ecy)
        if d <= r_disc + 1:
            # Interior disc fill: bright illuminated golden amber
            aa = 1.0 if d <= r_disc - 0.5 else max(0.0, r_disc + 0.5 - d)
            # Radial bright center
            norm_d = d / r_disc
            lum = 1.0 - 0.25 * norm_d
            gold_r = int(min(255, 255 * lum))
            gold_g = int(min(255, 218 * lum))
            gold_b = int(min(255, 48 * lum))
            set_pixel(x, y, gold_r, gold_g, gold_b, aa)
        elif d <= r_outer + 4:
            # Rings & bloom
            # Outer ring at r=78, thickness 3.5
            d_out = abs(d - r_outer)
            # Inner ring at r=70, thickness 2.5
            d_in = abs(d - r_inner)
            
            gold_a = 0.0
            if d_out < 2.5:
                gold_a = max(gold_a, 1.0 - d_out / 2.5)
            if d_in < 2.0:
                gold_a = max(gold_a, 1.0 - d_in / 2.0)
                
            if gold_a > 0:
                set_pixel(x, y, 255, 225, 55, gold_a)

# Cursive "m" inside the disc
# Smooth cubic bezier sampling for the signature cursive m
m_points = []
def sample_bezier(p0, p1, p2, p3, steps=30):
    res = []
    for i in range(steps + 1):
        t = i / float(steps)
        u = 1 - t
        tt = t * t
        uu = u * u
        x = uu * u * p0[0] + 3 * uu * t * p1[0] + 3 * u * tt * p2[0] + tt * t * p3[0]
        y = uu * u * p0[1] + 3 * uu * t * p1[1] + 3 * u * tt * p2[1] + tt * t * p3[1]
        res.append((x, y))
    return res

# Cursive stroke curves
# Sweep entry from left
c1 = sample_bezier((ecx - 46, ecy + 4), (ecx - 30, ecy + 7), (ecx - 22, ecy - 16), (ecx - 12, ecy - 15))
# First arch down to base
c2 = sample_bezier((ecx - 12, ecy - 15), (ecx - 4, ecy - 14), (ecx - 1, ecy + 7), (ecx + 4, ecy + 7))
# Second arch up and over
c3 = sample_bezier((ecx + 4, ecy + 7), (ecx + 8, ecy - 15), (ecx + 18, ecy - 15), (ecx + 23, ecy - 12))
# Down to base and exit flourish
c4 = sample_bezier((ecx + 23, ecy - 12), (ecx + 27, ecy + 8), (ecx + 36, ecy + 5), (ecx + 48, ecy - 5))

all_m_points = c1 + c2[1:] + c3[1:] + c4[1:]

# Render cursive m onto disc with dark maroon ink (#3B0609)
m_width = 4.2
for y in range(ecy - 45, ecy + 45):
    for x in range(ecx - 60, ecx + 60):
        # find min distance to m path
        min_d = 999.0
        for i in range(len(all_m_points) - 1):
            pA = all_m_points[i]
            pB = all_m_points[i+1]
            d = dist_to_segment(x, y, pA[0], pA[1], pB[0], pB[1])
            if d < min_d:
                min_d = d
        if min_d <= m_width + 1.2:
            aa = 1.0 if min_d <= m_width - 0.6 else max(0.0, (m_width + 1.2 - min_d) / 1.8)
            set_pixel(x, y, 62, 10, 13, aa)

# 3. Draw "cafe" (lowercase heavy rounded sans) and "ME." (bold block caps)
# Coordinates for "cafe" on top line (y center around 75)
# 'c' (x around 75..125, y around 46..104)
# 'a' (x around 130..182, y around 58..104)
# 'f' (x around 188..234, y around 44..104)
# 'e' (x around 240..292, y around 58..104)

text_mask = bytearray(W * H)

def stamp_circle(cx, cy, r):
    x0 = max(0, int(cx - r - 2))
    x1 = min(W, int(cx + r + 3))
    y0 = max(0, int(cy - r - 2))
    y1 = min(H, int(cy + r + 3))
    for py in range(y0, y1):
        for px in range(x0, x1):
            d = math.hypot(px - cx, py - cy)
            if d <= r:
                text_mask[py * W + px] = 255
            elif d <= r + 1.0:
                val = int(255 * (r + 1.0 - d))
                if val > text_mask[py * W + px]:
                    text_mask[py * W + px] = val

def stamp_line(x1, y1, x2, y2, thickness):
    r = thickness / 2.0
    x0 = max(0, int(min(x1, x2) - r - 2))
    x1_box = min(W, int(max(x1, x2) + r + 3))
    y0 = max(0, int(min(y1, y2) - r - 2))
    y1_box = min(H, int(max(y1, y2) + r + 3))
    for py in range(y0, y1_box):
        for px in range(x0, x1_box):
            d = dist_to_segment(px, py, x1, y1, x2, y2)
            if d <= r:
                text_mask[py * W + px] = 255
            elif d <= r + 1.0:
                val = int(255 * (r + 1.0 - d))
                if val > text_mask[py * W + px]:
                    text_mask[py * W + px] = val

# Draw 'c':
for ang_deg in range(45, 315):
    rad = math.radians(ang_deg)
    stamp_circle(98 + 19 * math.cos(rad), 75 + 20 * math.sin(rad), 8.5)

# Draw 'a':
# bowl
for ang_deg in range(0, 360, 2):
    rad = math.radians(ang_deg)
    stamp_circle(150 + 15 * math.cos(rad), 82 + 15 * math.sin(rad), 8.0)
# stem
stamp_line(166, 68, 166, 98, 16.5)

# Draw 'f':
# vertical
stamp_line(205, 58, 205, 98, 16.5)
# hook
for ang_deg in range(90, 200, 2):
    rad = math.radians(ang_deg)
    stamp_circle(219 + 14 * math.cos(rad), 58 - 14 * math.sin(rad), 8.0)
# crossbar
stamp_line(192, 70, 222, 70, 15.0)

# Draw 'e':
for ang_deg in range(35, 325):
    rad = math.radians(ang_deg)
    stamp_circle(266 + 18 * math.cos(rad), 81 + 18 * math.sin(rad), 8.2)
# crossbar
stamp_line(248, 81, 284, 81, 15.0)

# Draw "ME." on second line:
# 'M' (x around 72..168, y around 114..182)
stamp_line(83, 114, 83, 182, 22.0)
stamp_line(83, 114, 120, 180, 20.0)
stamp_line(120, 180, 157, 114, 20.0)
stamp_line(157, 114, 157, 182, 22.0)

# 'E' (x around 178..244, y around 114..182)
stamp_line(189, 114, 189, 182, 22.0)
stamp_line(189, 114, 240, 114, 20.0)
stamp_line(189, 148, 232, 148, 18.0)
stamp_line(189, 182, 240, 182, 20.0)

# '.' Period dot:
stamp_circle(258, 175, 9.0)

# Tiny TM / circle R mark next to period
stamp_circle(274, 175, 4.0)

# 4. Render illuminated text with warm glowing bloom
# Bloom pass: calculate distance transform or blur of text_mask for warm amber neon glow
for y in range(H):
    for x in range(W):
        val = text_mask[y * W + x]
        if val > 0:
            # Bright yellow text core
            alpha = val / 255.0
            # Center of stroke is nearly white-yellow (#FFFDE0), edge is golden (#FFD820)
            core_r = 255
            core_g = 242
            core_b = 60
            set_pixel(x, y, core_r, core_g, core_b, alpha)

# Diffuse outer glow for letters (ambient light bounce on dark acrylic)
glow_buf = bytearray(W * H)
for y in range(25, 200, 2):
    for x in range(40, 310, 2):
        if text_mask[y * W + x] > 180:
            # scatter light
            for dy in range(-8, 9, 2):
                for dx in range(-8, 9, 2):
                    nx = x + dx
                    ny = y + dy
                    if 0 <= nx < W and 0 <= ny < H:
                        d = math.hypot(dx, dy)
                        if d > 0 and text_mask[ny * W + nx] < 100:
                            strength = math.exp(-(d / 4.0)**2) * 0.35
                            blend_additive(nx, ny, int(255 * strength), int(150 * strength), int(10 * strength), 0.7)

# Compress to PNG
raw_data = bytearray()
for y in range(H):
    raw_data.append(0)  # filter type 0 (None)
    start = y * W * 4
    raw_data.extend(buf[start:start + W * 4])

compressed = zlib.compress(bytes(raw_data), level=9)

def make_chunk(chunk_type, data):
    crc = zlib.crc32(chunk_type + data) & 0xffffffff
    return struct.pack('>I', len(data)) + chunk_type + data + struct.pack('>I', crc)

png_bytes = b'\x89PNG\r\n\x1a\n'
png_bytes += make_chunk(b'IHDR', struct.pack('>IIBBBBB', W, H, 8, 6, 0, 0, 0))
png_bytes += make_chunk(b'IDAT', compressed)
png_bytes += make_chunk(b'IEND', b'')

# Save as authentic logo asset across all required locations
paths = [
    'public/image.png',
    'public/images/cafe-me-logo.png',
    'public/images/cafe-me-logo.jpg',
    'public/4812c7d9-1b0a-4bd7-98a7-c0c1491649f2(1).png'
]

for p in paths:
    with open(p, 'wb') as f:
        f.write(png_bytes)
    print(f"Written: {p} ({len(png_bytes)} bytes)")

