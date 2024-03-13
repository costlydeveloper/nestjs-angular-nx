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
      unitExitCode=$?

      if [ $unitExitCode -ne 0 ]; then
        echo "Unit tests failed with exit code: $unitExitCode"
        exit $unitExitCode
      fi

      npm run test:e2e
      e2eExitCode=$?

      if [ $e2eExitCode -ne 0 ]; then
        echo "E2E tests failed with exit code: $e2eExitCode"
        exit $e2eExitCode
      fi

else
    echo "Starting application with command: $command"
    # Execute the command, appending necessary Docker-specific arguments
    if [ -n "$command" ]; then
        $command --host 0.0.0.0 --disable-host-check
    else
        echo "No command specified, exiting..."
        exit 1
    fi
fi
