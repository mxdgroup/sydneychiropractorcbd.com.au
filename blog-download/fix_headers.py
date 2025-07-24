#!/usr/bin/env python3
"""
fix_headers.py – Utility script to clean up malformed markdown headings.

Problem we are solving
----------------------
Some imported blog posts have headings where two words have been concatenated
without a space or a line-break, e.g.::

    ## Benefits of Chiropractic Care During PregnancyChiropractic care offers numerous benefits for pregnant women:

The line should instead be split into a proper heading followed by regular
paragraph text::

    ## Benefits of Chiropractic Care During Pregnancy
    Chiropractic care offers numerous benefits for pregnant women:

This script scans markdown files and automatically performs that fix. It looks
for any markdown heading (lines starting with ``#``) that contains a *camel-case*
transition (a lowercase character followed immediately by an uppercase
character) **after** the first word boundary. When such a pattern is found the
line is split at the first transition – everything before the transition stays
in the heading, everything after becomes a new line directly underneath.

Usage
-----
    python fix_headers.py               # scans default blog folders
    python fix_headers.py path/to/blogs # scan a specific directory

The script acts **in-place** but keeps a backup ``<file>.bak`` so you can easily
roll back if something looks wrong.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

# ---- Configuration ---------------------------------------------------------
DEFAULT_BLOG_DIRS = [
    Path("../astro/src/content/blog"),  # Astro content directory
    Path("blogs"),                      # blog-download/blogs directory (relative to this file)
]

HEADER_REGEX = re.compile(r"^(#{1,6}\s*)(.+)")
CAMEL_CASE_BOUNDARY = re.compile(r"[a-z][A-Z]")

# ----------------------------------------------------------------------------

def fix_header_line(line: str) -> str | None:
    """Return a corrected version of *line* if it needs fixing, else None."""
    match = HEADER_REGEX.match(line)
    if not match:
        return None  # not a heading

    prefix, rest = match.groups()

    # Look for first lowercase→Uppercase transition that **is not** already
    # preceded by a space (so we ignore correct headings like "ABC Example").
    boundary_match = CAMEL_CASE_BOUNDARY.search(rest)
    if not boundary_match:
        return None  # no camel case issue

    boundary_index = boundary_match.start() + 1  # index of the Uppercase char

    # If there is already a space before the boundary, we do nothing –
    # the heading is presumably fine.
    if rest[boundary_index - 1] == " ":
        return None

    heading_part = rest[:boundary_index].rstrip()
    following_part = rest[boundary_index:].lstrip()

    # Build the corrected text: heading + newline + rest_of_line
    fixed = f"{prefix}{heading_part}\n{following_part}\n"
    return fixed


def process_file(path: Path) -> bool:
    """Return True if *path* was modified."""
    original_text = path.read_text(encoding="utf-8")
    lines = original_text.splitlines(keepends=True)
    modified = False

    for i, line in enumerate(lines):
        new_line = fix_header_line(line)
        if new_line is not None and new_line != line:
            lines[i] = new_line
            modified = True

    if modified:
        backup = path.with_suffix(path.suffix + ".bak")
        path.rename(backup)
        path.write_text("".join(lines), encoding="utf-8")
        print(f"[fixed] {path.relative_to(Path.cwd())} (backup → {backup.name})")
    return modified


def find_markdown_files(directory: Path):
    return [p for p in directory.rglob("*.md") if p.is_file()]


def main(argv: list[str]):
    if len(argv) > 1:
        dirs = [Path(arg) for arg in argv[1:]]
    else:
        # Use default directories relative to this script's location
        base = Path(__file__).parent
        dirs = [base / d for d in DEFAULT_BLOG_DIRS]

    files = []
    for d in dirs:
        if d.exists():
            files.extend(find_markdown_files(d))
        else:
            print(f"[warn] directory not found: {d}")

    if not files:
        print("No markdown files found to process.")
        return

    print(f"Scanning {len(files)} markdown files …")
    changed = sum(process_file(f) for f in files)
    print(f"Done. {changed} file(s) modified.")


if __name__ == "__main__":
    main(sys.argv) 