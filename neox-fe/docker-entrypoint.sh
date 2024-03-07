#!/bin/sh
#exec $START_SCRIPT

#!/bin/sh
# Provjerava postojanje node_modules i reinstalira ako je potrebno
if [ ! -d "node_modules" ]; then
  echo "node_modules not found, running npm install..."
  npm install
fi

# Pokreće Nx serve
#exec npx nx serve

tail -f /dev/null
