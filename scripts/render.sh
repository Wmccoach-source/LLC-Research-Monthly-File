#!/usr/bin/env bash
# Renders the deck to images and renders matching reference pages for comparison.
# Needs LibreOffice and poppler (pdftoppm). On macOS, brew install --cask libreoffice and brew install poppler.
set -e
cd "$(dirname "$0")/.."
SOFFICE="${SOFFICE:-soffice}"
if ! command -v "$SOFFICE" >/dev/null 2>&1; then
  if [ -x "/Applications/LibreOffice.app/Contents/MacOS/soffice" ]; then SOFFICE="/Applications/LibreOffice.app/Contents/MacOS/soffice"; fi
fi
mkdir -p reviews/render
rm -f reviews/render/*.jpg reviews/render/*.pdf
"$SOFFICE" --headless --convert-to pdf --outdir reviews/render outputs/LLC_AI_Infrastructure_Case_Study.pptx
pdftoppm -jpeg -r 110 reviews/render/LLC_AI_Infrastructure_Case_Study.pdf reviews/render/slide
pdftoppm -jpeg -r 110 -f 6 -l 8 reference/LLC_March_2026_Research_Report.pdf reviews/render/ref_mar
pdftoppm -jpeg -r 110 -f 5 -l 8 reference/LLC_August_2026_Research_Report.pdf reviews/render/ref_aug
ls reviews/render
