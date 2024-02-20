# Fullstack Reactive CRUD with NX and Neox

This README provides instructions on how to set up and run the fullstack application using NestJS for the backend and Angular for the frontend, structured within the Neox project.

## Getting Started

Ensure you have Node.js (v16+), Docker, PostgreSQL, and the NX CLI installed on your machine.

## Configuration

### Environment Variables

Create a `.env` file in both the `neox-api` and `neox-fe` directories with the necessary environment variables. The content should be adjusted according to your local setup, especially for database credentials and port configurations.

```plaintext
# Example of .env content for neox-api and neox-fe
# database
DB_PORT=5432
DB_PORT_DOCKER=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=neox-db

# backend
BACKEND_PORT=3000
BACKEND_PORT_DOCKER=3000

# frontend
UI_PORT=4200
UI_PORT_DOCKER_EXPOSE=4200

```

## Step 1: Start the Database with Docker Compose

Before starting the backend and frontend services, ensure your database is running. Use the provided Docker Compose configuration to start the PostgreSQL database container.

1. **Navigate to the Directory Containing `docker-compose.yml`**:
   Ensure you're in the directory where your `docker-compose.yml` file is located.

2. **Start the Database**:
   Run the following command to start the PostgreSQL database using Docker Compose:

```bash
docker-compose up -d postgres_db
```

This command starts the PostgreSQL service defined in your `docker-compose.yml` file in detached mode. The database will be accessible on the port specified by the `DB_PORT_DOCKER` environment variable in your `.env` file.

Ensure you have Docker Compose installed and configured correctly on your machine to use this command.

### Step 2: Backend Setup (`neox-api`)

1. **Navigate to the Backend Directory**:
    ```bash
    cd neox-api
    ```
2. **Install Dependencies**:
    ```bash
    npm install
    ```
3. **Run the Backend**:
    ```bash
    nx serve neox-api
    ```

### Step 3: Frontend Setup (`neox-fe`)

1. **Navigate to the Frontend Directory** (from the root directory):
    ```bash
    cd neox-fe
    ```
2. **Install Dependencies**:
    ```bash
    npm install
    ```
3. **Run the Frontend**:
    ```bash
    nx serve
    ```

## Accessing the Application

- The frontend will be available at `http://localhost:4200`.
- The backend API will be accessible at `http://localhost:3000` (or the port you configured).
