#!/bin/sh

# Exit script on the first error
set -e

# As defined in the START_SCRIPT environment variable
command=$START_SCRIPT

echo "START_SCRIPT: $START_SCRIPT"

# If START_SCRIPT is set to "run-all", run the tests
if [ "$START_SCRIPT" = "run-all" ]; then
    echo "Running all tests..."
    npm run test:unit
    npm run test:e2e
else
    echo "Starting application with command: $command"
    # Execute the command, appending necessary Docker-specific arguments
    if [ -n "$command" ]; then
        exec sh -c "$command --host 0.0.0.0 --disable-host-check"
    else
        echo "No command specified, exiting..."
        exit 1
    fi
fi
