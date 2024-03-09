#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# Navigacija do backend direktorija i izvođenje lintinga
cd backend && npm run lint
if [ $? -ne 0 ]; then
  echo "Backend linting failed"
  exit 1
fi
