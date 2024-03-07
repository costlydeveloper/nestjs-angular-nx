#!/bin/sh

# as defined in the START_SCRIPT environment variable
command=$START_SCRIPT

# If RUN_TESTS is set, run the tests
if [ "$START_SCRIPT" = "run-all" ]; then
    echo "Running tests..."
    npm run test:unit && npm run test:e2e && npm run test:integration
    exit_code=$?
    echo "Tests finished with exit code: $exit_code"
    exit $exit_code
else
    echo "Starting application with command: $command"
    eval $command
fi
