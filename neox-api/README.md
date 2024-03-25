# Launching the Application and Environment with Docker

Our application leverages Docker for consistent environment replication across **Development**, **Test**, and **Production** phases. This approach ensures operational smoothness and environment specificity.

## Requirements

Ensure your system meets the following before setup:

- **Docker**: For environment isolation.
- **Node.js (v18+)**: Needed for application compatibility.
- **OS**: Designed for **Mac** and **Linux**.

  > **Note for Windows Users**: Windows handles environment variables differently, requiring adjustments for compatibility.

Install Docker and Node.js as specified, and verify OS compatibility for a streamlined experience.


## 🚀 Launching the Application and Environment

Before starting, make sure that Docker is installed on your system as a prerequisite for running the environments. There are three environments available: Test, Development, and Production.

---
### 1. Development Environment

**Setting Up and Launching the Development Environment**

   The development environment setup and launch process has been simplified to a single command, which initiates both the development database and application within Docker containers. Execute the following to start:

   ```bash
   npm run start:docker:dev:app
   ```
This command starts container with the development application and database, available at [http://localhost:3002/api/](http://localhost:3002/api/) unless otherwise configured in `.env.development`.

---
### 2. Test Environment

**Comprehensive Test Environment Setup and Execution**

The testing process has been significantly enhanced to allow for a more integrated and automated testing flow. A single command now initiates Docker containers with a test database and sequentially runs unit, E2E, and integration tests. If any test fails, the process exits with error code 1:

   ```bash
   npm run start:docker:test:run-all
   ```

Additionally, individual tests can be run separately:

- **Unit Tests**:
  ```bash
  npm run start:docker:test:unit
  ```
- **E2E Tests**:
  ```bash
  npm run start:docker:test:e2e
  ```
- **Integration Tests**:
  ```bash
  npm run start:docker:test:int
  ```

For E2E testing of the frontend application, the test environment can be launched with:

```bash
npm run start:docker:test:app
```

This command starts the same container with the test application and database, available at [http://localhost:3001/api/](http://localhost:3001/api/) unless otherwise configured in `.env.test`. This setup is specifically intended for **frontend** E2E tests.


---

Here's a more concise version of the Production Environment setup instructions:


### 3. Production Environment

**Quick Setup and Launch**

The production setup combines application building and Docker container launching into one streamlined command. This method builds the application into a single file and starts both the app and database in separate Docker containers, as defined in `.env.production`, ensuring an efficient and isolated deployment:

```bash
npm run start:docker:prod:app
```

This simplifies the deployment process, automatically handling `.env.production` adjustments and container orchestration.

Access the production application at [http://localhost:3000/api/](http://localhost:3000/api/) unless a different URL is set in `.env.production`.

---

## 🔍 Linting the Project

**To lint the entire project,** ensuring code quality and consistency across all files, use the following command:

   ```bash
   npm run check:lint-all 
   ```
This command will run the configured linter across the entire project, identifying and reporting any violations of the predefined coding standards.

---
## 📚 Configuration and Launching

Using Docker allows us the following:

- **Development Environment**: Launches the dev application and database in Docker, sharing a common volume that is the application folder. This enables development of the application while concurrently running it inside a Dockerized container.
- **Test Environment**: Provides the capability to launch the application and database in Docker with several options for running tests, offering an application instance dedicated to E2E frontend testing.
- **Production Environment**: Builds and launches the application and database in Docker for end-users, optimized for performance and security.

Configuration files `.env.development`, `.env.test`, `.env.production` are used. The system operates by copying the content of the respective `.env` file into `.env` upon launching a specific environment, then performing further steps. This approach is utilized due to Docker's requirement for a `.env` file with predefined variables.

Additionally, there are `docker-compose.development.yml`, `docker-compose.test.yml`, `docker-compose.production.yml` files for the configuration of each stage, and scripts such as `entrypoint` and `docker-start` used for Docker management.

To launch the application, exclusively use the scripts defined in `package.json` to ensure proper configuration and initiation of your application environments.

---

## 📚 Swagger Documentation

**Access comprehensive API documentation** via Swagger at the following path:

   ```
   {{server-url}}/api
   ```

This documentation provides detailed insights into the available endpoints, request parameters, and response formats, facilitating easier integration and testing.

---
