"""
Compress automotive page PNG photos to JPG (q82) + WebP (q80).
OG stays PNG (social cards prefer PNG).
Hero stays large (above-the-fold LCP); others get downscaled long-edge.
"""

from PIL import Image
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "assets" / "images" / "automotive"
SRC_FRAMES = SRC / "automotive_frames_named"

# slot config: (filename_stem, source_dir, max_long_edge_px, also_webp, out_dir)
SLOTS = [
    ("automotive-hero-poster",   SRC,         2400, True, SRC),
    ("hero-image",               SRC,         2400, True, SRC),
    ("automotive-pain-fi-desk",  SRC,         1600, True, SRC),
    ("automotive-movement-bg",   SRC,         2400, True, SRC),
    ("automotive-process-flow",  SRC,         1920, True, SRC),
    ("automotive-quote-portrait",SRC,         1200, True, SRC),
    ("automotive-proof-team",    SRC,         1920, True, SRC),
    # Trilha B cover scrub frames — 16:9 native, full-bleed hero
    ("frame-1-pain",             SRC_FRAMES,  2400, True, SRC),
    ("frame-2-movement",         SRC_FRAMES,  2400, True, SRC),
    ("frame-3-outcome",          SRC_FRAMES,  2400, True, SRC),
    ("frame-4-ask",              SRC_FRAMES,  2400, True, SRC),
]

def fit(im, max_edge):
    w, h = im.size
    if max(w, h) <= max_edge:
        return im
    if w >= h:
        new_w = max_edge
        new_h = round(h * (max_edge / w))
    else:
        new_h = max_edge
        new_w = round(w * (max_edge / h))
    return im.resize((new_w, new_h), Image.LANCZOS)

def report(path):
    return f"{path.name}: {path.stat().st_size / 1024:.0f} KB"

for stem, src_dir, edge, do_webp, out_dir in SLOTS:
    src = src_dir / f"{stem}.png"
    if not src.exists():
        print(f"SKIP {stem}.png — not found")
        continue
    im = Image.open(src).convert("RGB")
    im = fit(im, edge)
    jpg = out_dir / f"{stem}.jpg"
    im.save(jpg, "JPEG", quality=82, optimize=True, progressive=True)
    print(f"OK {report(src)} -> {report(jpg)}")
    if do_webp:
        webp = out_dir / f"{stem}.webp"
        im.save(webp, "WEBP", quality=80, method=6)
        print(f"   + {report(webp)}")
