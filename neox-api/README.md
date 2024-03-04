# Launching the Application and Environment with Docker

Our application is designed for use with Docker to ensure environmental consistency and smooth operation across different local development settings. Utilizing Docker allows us to accurately replicate three main environments - **Development**, **Test**, and **Production** - each with its own purpose and configuration. This ensures isolation and specificity of the environment for each phase of the development cycle.

## 🚀 Launching the Application and Environment

Before starting, make sure that Docker is installed on your system as a prerequisite for running the environments. There are three environments available: Test, Development, and Production.

---
### 1. Development Environment

1. **Setting Up and Launching the Development Environment**

   To simplify the process, launching the development environment involves a single command that initiates the development database and application within Docker containers. This enhancement streamlines the setup and ensures that the development environment is quickly and efficiently prepared for use. Execute the following command to start:

   ```bash
   npm run start:docker:dev:app
   ```

---
### 2. Test Environment

1. **Setting Up the Test Environment**

   Execute the following command to set the `.env.test` file as your current `.env` configuration and start the test database using `docker-compose.test.yml`:

   ```bash
   npm run start:test-db
   ```

2. **Running E2E Tests**

   After setting up the test environment, you can run E2E tests using:

   ```bash
   npm run test:e2e
   ```
3. **Running Integration Tests**

   To execute integration tests, use the following command:

   ```bash
    npm run test:integration
   ```

---

### 3. Production Environment

1. **Setting Up and Launching the Production Environment**

   The production environment setup has been streamlined to ensure a more efficient deployment process. Now, the application is built into a single file and both the application and database are launched in their respective Docker containers, leveraging the configurations specified in `.env.production`. This approach simplifies deployment while maintaining a high level of efficiency and isolation. To initiate the production environment, execute the following command:

   ```bash
   npm run start:docker:prod:app
   ```

This command builds the application and starts both the production database and the application each in their own Docker container. It automates the process of replacing the `.env.production` file with `.env`, building the application, and ensuring that all components are correctly orchestrated within Docker for a seamless production deployment.


---

## 🔍 Linting the Project

* **To lint the entire project,**
    ensuring code quality and consistency across all files, use the following command:

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

* **Access comprehensive API documentation** via Swagger at the following path:

   ```
   {{server-url}}/api
   ```

   This documentation provides detailed insights into the available endpoints, request parameters, and response formats, facilitating easier integration and testing.

---
