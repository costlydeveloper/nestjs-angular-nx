#!/bin/sh

# Exit script on the first error
set -e

# As defined in the START_SCRIPT environment variable
command=$START_SCRIPT

echo "START_SCRIPT: $START_SCRIPT"

# If START_SCRIPT is set to "run-all", run the tests
if [ "$START_SCRIPT" = "run-all" ]; then
    echo "Running all tests..."
    # Run unit tests and store the exit code
    npm run test:unit
    unit_exit_code=$?

    # Run e2e tests and store the exit code
    npm run test:e2e
    e2e_exit_code=$?

    # Check the exit codes
    if [ $unit_exit_code -ne 0 ] || [ $e2e_exit_code -ne 0 ]; then
        echo "One or more tests failed. Unit tests exit code: $unit_exit_code, E2E tests exit code: $e2e_exit_code"
        exit 1
    fi
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
