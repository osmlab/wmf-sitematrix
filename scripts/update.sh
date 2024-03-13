#!/bin/bash
DEST_DIR="$TOOL_DATA_DIR/public_html/data"

echo "Updating"

mkdir -p "$DEST_DIR"
wget -O "$DEST_DIR/all.json" 'https://meta.wikimedia.org/w/api.php?action=sitematrix&uselang=en&format=json'

# For the first run in case there's nothing there
cp --update data/*.json "$DEST_DIR/"
node scripts/build.js
echo "Update finished"
