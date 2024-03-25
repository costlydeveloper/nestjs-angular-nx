# Frontend Angular SOLID App

## 📘 Introduction

This project is an Angular 17+ web application, structured within an NX monorepo and utilizing Docker for consistent environment management across Development, Testing, and Production phases. It incorporates table and form generators for efficient UI development, emphasizing modular and reusable code to enhance scalability and expedite the development cycle. The approach is geared towards ensuring a smooth setup and deployment process, highlighting efficiency and system robustness.

## 📋 Requirements

Before initiating the setup, confirm your system meets the following prerequisites:

- 🐳 Docker
- 🟢 Node.js (version 18 or higher)

## 🚀 Installation

Clone the project repository and navigate to the `neox-fe` folder. Ensure Docker and Node.js are installed on your system according to the requirements mentioned above.

Execute the following command:

```bash
npm install
```

## 🔧 Usage

### 🐳 DOCKER - Development Environment

To launch the development environment in Docker:

```bash
npm run start:docker:dev:app
```

This command initializes the development application within Docker containers, leveraging volumes to ensure that the application operates smoothly in Docker. Accessible at `http://localhost:4200`, it supports real-time code changes without the need to rebuild the container.

### 🌐 LOCAL - Development Environment

To start the development environment locally:

```bash
npm run start:dev:app
```

This sets up the development application locally, accessible at `http://localhost:4200`.

### 🐳 DOCKER - Test Environment

To execute comprehensive testing, including unit, E2E:

```bash
npm run start:docker:test:run-all
```

### 🐳 DOCKER - Production Environment

For deploying the application in a production environment:

```bash
npm run start:docker:prod
```

This compiles the application for production and launches it on port 80, with configurations detailed in `nginx.default.conf`.
