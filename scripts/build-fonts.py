"""Regenerate assets/fonts/Montserrat*.woff2 from the handoff TTFs.

The handoff ships Montserrat as two variable TTFs (1357KB together), which is
more than the rest of the page weighs. This converts them to woff2 and subsets
them to the scripts an Italian/English site needs, dropping Cyrillic, Vietnamese
and IPA: 1357KB -> 247KB, with the wght 100-900 axis intact.

    pip install fonttools brotli
    python scripts/build-fonts.py

The ranges are deliberately whole blocks rather than only the glyphs used today,
so the client can edit the copy without losing characters. If you narrow them,
re-run the coverage check: every character the built pages paint must survive.
Seatren already ships as woff2 and is copied through untouched.
"""

import os
import subprocess
import sys

SOURCES = (
    "design/assets/Montserrat.ttf",
    "design/assets/Montserrat-Italic.ttf",
)

RANGES = ",".join(
    (
        "U+0000-024F",  # basic latin, latin-1, extended-A, extended-B
        "U+0300-036F",  # combining diacritics
        "U+2000-206F",  # general punctuation: em/en dash, curly quotes, ellipsis
        "U+20A0-20BF",  # currency symbols
        "U+2100-2138",  # letterlike symbols
        "U+2190-21FF",  # arrows, for the "Iscriviti ->" links
        "U+2200-22FF",  # mathematical operators
        "U+25A0-25FF",  # geometric shapes
        "U+FB00-FB4F",  # fi / fl ligatures
    )
)

OUT_DIR = "assets/fonts"


def main() -> int:
    os.makedirs(OUT_DIR, exist_ok=True)
    for src in SOURCES:
        if not os.path.exists(src):
            print(f"missing source: {src}", file=sys.stderr)
            return 1
        out = os.path.join(
            OUT_DIR, os.path.basename(src).replace(".ttf", ".woff2")
        )
        subprocess.run(
            [
                sys.executable,
                "-m",
                "fontTools.subset",
                src,
                f"--unicodes={RANGES}",
                "--layout-features=*",
                "--flavor=woff2",
                f"--output-file={out}",
            ],
            check=True,
        )
        before = os.path.getsize(src) / 1024
        after = os.path.getsize(out) / 1024
        print(f"{src} -> {out}  {before:.0f}KB -> {after:.0f}KB")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
