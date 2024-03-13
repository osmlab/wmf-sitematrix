#!/usr/bin/env bash

python -m http.server \
    --bind "0.0.0.0" \
    --directory "$TOOL_DATA_DIR/public_html/data" \
    "$PORT"
