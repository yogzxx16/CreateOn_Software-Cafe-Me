import zlib
import struct
import math

W = 736
H = 200

# 4 channels: R, G, B, A
pixels = bytearray(W * H * 4)

def set_pixel(x, y, r, g, b, a=1.0):
    if 0 <= x < W and 0 <= y < H and a > 0:
        idx = (int(y) * W + int(x)) * 4
        if a >= 1.0:
            pixels[idx] = min(255, max(0, int(r)))
            pixels[idx+1] = min(255, max(0, int(g)))
            pixels[idx+2] = min(255, max(0, int(b)))
            pixels[idx+3] = 255
        else:
            sa = min(1.0, max(0.0, a))
            dr = pixels[idx]
            dg = pixels[idx+1]
            db = pixels[idx+2]
            pixels[idx] = int(r * sa + dr * (1.0 - sa))
            pixels[idx+1] = int(g * sa + dg * (1.0 - sa))
            pixels[idx+2] = int(b * sa + db * (1.0 - sa))
            pixels[idx+3] = 255

def blend_pixel(x, y, r, g, b, a):
    if 0 <= x < W and 0 <= y < H and a > 0:
        idx = (int(y) * W + int(x)) * 4
        sa = min(1.0, max(0.0, a))
        dr = pixels[idx]
        dg = pixels[idx+1]
        db = pixels[idx+2]
        pixels[idx] = min(255, int(r * sa + dr * (1.0 - sa)))
        pixels[idx+1] = min(255, int(g * sa + dg * (1.0 - sa)))
        pixels[idx+2] = min(255, int(b * sa + db * (1.0 - sa)))

# 1. Background illuminated acrylic lightbox
for y in range(H):
    for x in range(W):
        # Vertical gradient & frame
        if y < 10:
            # Top frame
            v = y / 10.0
            r = int(24 + 18 * v)
            g = int(3 + 3 * v)
            b = int(4 + 4 * v)
        elif y > 190:
            # Bottom frame
            v = (200 - y) / 10.0
            r = int(26 + 16 * v)
            g = int(3 + 3 * v)
            b = int(4 + 4 * v)
        else:
            # Main illuminated face
            # Light distance from text bulb (160, 100) and emblem bulb (575, 100)
            d1 = math.sqrt((x - 160)**2 + (y - 100)**2)
            d2 = math.sqrt((x - 575)**2 + (y - 100)**2)
            glow1 = math.exp(-(d1 / 180.0)**2)
            glow2 = math.exp(-(d2 / 160.0)**2)
            glow = max(glow1, glow2 * 0.9)
            
            # Ambient maroon base
            base_r = 75 + glow * 45
            base_g = 10 + glow * 12
            base_b = 13 + glow * 12
            
            # Slight edge vignette
            edge_dist = min(x, W - x) / 80.0
            if edge_dist < 1.0:
                base_r *= (0.7 + 0.3 * edge_dist)
                base_g *= (0.7 + 0.3 * edge_dist)
                base_b *= (0.7 + 0.3 * edge_dist)
                
            r = int(base_r)
            g = int(base_g)
            b = int(base_b)
            
        set_pixel(x, y, r, g, b, 1.0)

# Subtle highlight reflections on metal trims
for x in range(W):
    blend_pixel(x, 10, 80, 20, 20, 0.4)
    blend_pixel(x, 190, 85, 22, 22, 0.35)

print("Background rendered")
