#!/usr/bin/env sh
set -eu
OLD="https://accesspath-guide.pages.dev"
NEW="${1:-}"
if [ -z "$NEW" ]; then echo "Usage: ./set-domain.sh https://example.com"; exit 1; fi
find . -type f \( -name '*.html' -o -name '*.xml' -o -name '*.txt' -o -name '*.json' -o -name '*.js' -o -name '*.md' -o -name '*.csv' \) -exec sed -i "s|$OLD|$NEW|g" {} +
echo "Domain replaced with $NEW. Re-run QA before deployment."
