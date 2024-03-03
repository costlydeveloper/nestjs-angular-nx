#!/bin/sh

# Read command from environment variable
command=$START_SCRIPT

# Check if command is empty
if [ -z "$command" ]; then
  echo "START_SCRIPT variable is not set."
else
  echo "Running command defined in START_SCRIPT: $command"
  eval $command
fi
