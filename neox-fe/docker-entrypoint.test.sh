#!/bin/sh

# as defined in the START_SCRIPT environment variable
command=$START_SCRIPT

echo $START_SCRIPT
# If RUN_TESTS is set, run the tests
if [ "$START_SCRIPT" = "run-all" ]; then
    echo "Running all tests..."
    npm run test:unit && npm run test:e2e
    exit_code=$?
    echo "Tests finished with exit code: $exit_code"
    exit $exit_code
else
    echo "Starting application with command: $command"
    exec sh -c "$command --host 0.0.0.0 --disable-host-check"
fi
