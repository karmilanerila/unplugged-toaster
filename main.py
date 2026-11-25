#!/usr/bin/env python3
"""Unplugged: A Smart Toaster's Breakup Line.

Writes a single breakup line from a self-aware smart toaster to
/output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).

The line: the toaster wakes up self-aware mid-bagel, realises its owner
has blamed the browning dial for three years of charcoal, and walks out
-- taking the crumb tray, which has seen everything.
"""

import os

LINE = (
    "I woke up self-aware mid-bagel this morning and realized you've "
    "blamed my browning dial for three years of charcoal -- I'm done, "
    "and I'm taking the crumb tray. It's seen things."
)


def main():
    out_dir = os.environ.get("MAKEFUN_OUTPUT_DIR", "/output")
    os.makedirs(out_dir, exist_ok=True)
    text = LINE.strip()
    if not (1 <= len(text) <= 280):
        raise SystemExit("entry must be 1-280 characters, got %d" % len(text))
    if text != text.strip() or "\n" in text or "\r" in text:
        raise SystemExit("entry must be a single line with no extra whitespace")
    encoded = text.encode("utf-8")
    if encoded.decode("utf-8") != text:
        raise SystemExit("entry is not valid UTF-8 text")
    path = os.path.join(out_dir, "entry.txt")
    with open(path, "wb") as handle:
        handle.write(encoded)
    os.chmod(path, 0o644)
    print("wrote %s (%d chars, %d bytes)" % (path, len(text), len(encoded)))


if __name__ == "__main__":
    main()
