"""Regenerates assets/footer_bar.png (the maroon gradient footer bar).
Extract the cover photo from a report PDF with:
  pdfimages -f 6 -l 6 -j reference/LLC_March_2026_Research_Report.pdf assets/cover
"""
import numpy as np
from PIL import Image

W, H = 2250, 130
L = np.array([63, 23, 23]); M = np.array([137, 49, 47]); R = np.array([75, 27, 26])
arr = np.zeros((H, W, 3), dtype=np.uint8)
for x in range(W):
    t = x / (W - 1)
    c = L + (M - L) * (t / 0.5) if t < 0.5 else M + (R - M) * ((t - 0.5) / 0.5)
    arr[:, x, :] = c.astype(np.uint8)
Image.fromarray(arr).save("assets/footer_bar.png")
print("wrote assets/footer_bar.png")
