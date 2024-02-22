
## 🚀 Launching the Application and Environment

Before you begin, ensure that **Docker** is installed on your system as a prerequisite for running the environments.
There are three environments available: **Test**, **Development**, and **Production**.
---
### 1. Test Environment

1. **Setting Up the Test Environment**

   Execute the following command to set the `.env.test` file as your current `.env` configuration and start the test database using `docker-compose.test.yml`:

   ```bash
   npm run start:test-environment
   ```

2. **Running E2E Tests**

   After setting up the test environment, you can run E2E tests using:

   ```bash
   npm run start:test-e2e
   ```
---
### 2. Development Environment

1. **Setting Up the Development Environment**

   To start the development environment, replace the `.env.development` file with `.env` and start the development database using:

   ```bash
   npm run start:dev-environment
   ```

2. **Launching the Development Application**

   Now, you can start the API application for development using:

   ```bash
   npm run start:dev-app
   ```

---
### 3. Production Environment

1. **Setting Up the Production Environment**

   To set up the production environment, replace the `.env.production` file with `.env` and start the production database using:

   ```bash
   npm run start:prod-environment
   ```

2. **Launching the Application for Production**

   After setup, you can build and launch your application for production using:

   ```bash
   npm run start:prod
   ```
    Or just build the app using:

   ```bash
   npm run build:prod-app
   ```

---

## 🔍 Linting the Project

* **To lint the entire project,**
    ensuring code quality and consistency across all files, use the following command:

   ```bash
   npm run check:lint-all 
   ```
    This command will run the configured linter across the entire project, identifying and reporting any violations of the predefined coding standards.

---

## 📚 Swagger Documentation

* **Access comprehensive API documentation** via Swagger at the following path:

   ```
   {{server-url}}/api
   ```

   This documentation provides detailed insights into the available endpoints, request parameters, and response formats, facilitating easier integration and testing.

---
