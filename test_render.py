import zlib
import struct
import math

W = 800
H = 220

# Create RGBA buffer
pixels = bytearray(W * H * 4)

def set_pixel(x, y, r, g, b, a=255):
    if 0 <= x < W and 0 <= y < H:
        idx = (y * W + x) * 4
        # Alpha blend
        if a == 255:
            pixels[idx] = int(r)
            pixels[idx+1] = int(g)
            pixels[idx+2] = int(b)
            pixels[idx+3] = 255
        elif a > 0:
            sa = a / 255.0
            da = pixels[idx+3] / 255.0
            out_a = sa + da * (1 - sa)
            if out_a > 0:
                pixels[idx] = int((r * sa + pixels[idx] * da * (1 - sa)) / out_a)
                pixels[idx+1] = int((g * sa + pixels[idx+1] * da * (1 - sa)) / out_a)
                pixels[idx+2] = int((b * sa + pixels[idx+2] * da * (1 - sa)) / out_a)
                pixels[idx+3] = int(out_a * 255)

print("Buffer initialized successfully")
