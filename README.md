# Vite TS Starter Kit

This is a fully configured starter kit for building modern web applications with the following technologies:

- **Vite** for fast build and development setup
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **Shadcn** for UI components
- **Axios** for API calls with `useApi` hooks and dynamic error handling
- **React Router Dom** for navigation and routing
- **React Query** for server state management and API fetching
- **Tan Stack** for centralized state management with hooks
- **Docker** for containerized development and production deployment

## Features

- Fully integrated build and development setup using Vite with TypeScript
- Pre-configured Tailwind CSS for responsive, mobile-first design
- Shadcn UI components for building beautiful interfaces
- Axios with a custom `useApi` hook for seamless API calls
- Dynamic error handling with `handleError` function
- React Router for client-side routing and navigation
- React Query for efficient server state management and optimized API fetching
- Tan Stack store for global state management with hooks
- Docker support for building and running the app in a containerized environment

## New Architecture

The project has been refactored to follow a more modular architecture for better maintainability and scalability:

- **/components**: Contains all UI components, with a focus on reusable and feature-based structures.
- **/services**: Contains API calls and hooks.
- **/store**: Global state management with Tan Stack Query.
- **/assets**: Static files and assets used in the app.
- **/pages**: Each page of the application, following a clear separation of concerns.
- **/types**: Centralized types and interfaces for TypeScript type safety.

## Getting Started

1. Clone the repository

   ```bash
   git clone https://github.com/Jszigeti/vite-ts-starter-kit.git
   cd starter-kit
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Run the development server

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Docker Setup

1. Build the Docker image

   To build the Docker image, you need to pass the `BACK_URL` argument for the backend API URL. You can replace `http://localhost:3000` with your actual backend URL if needed.

   ```bash
   docker build --build-arg BACK_URL=http://your-backend-url -t vite-ts-starter-kit .
   ```

2. Run the Docker container

   After building the image, you can run it in a container:

   ```bash
   docker run -p 80:80 vite-ts-starter-kit
   ```

3. Open http://localhost in your browser to see the app running inside the container.

## Features to Come

- **Docker Compose**: A configuration file for managing multi-container Docker applications to simplify deployment.
- **CI/CD Pipeline**: Setup for Continuous Integration and Continuous Deployment to automate testing, building, and deployment processes.
- **Jest Testing**: Unit and integration tests using Jest to ensure application reliability and functionality.

## Documentation of Libraries Used

Here are links to the documentation for the main libraries used in this project:

- **[Vite](https://vite.dev/)**: A fast build tool for modern web applications.
- **[TypeScript](https://www.typescriptlang.org/)**: A programming language that adds static typing to JavaScript.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid, responsive design.
- **[Shadcn](https://ui.shadcn.com/)**: A UI component library for React.
- **[Axios](https://axios-http.com/)**: A library for making HTTP requests from the browser or Node.js.
- **[Axios Error Handler](https://www.npmjs.com/package/axios-error-handler-ts)**: A package for custom dynamic error handling in Axios.
- **[React Router](https://reactrouter.com/)**: A library for managing navigation in a React application.
- **[React Query](https://tanstack.com/query/latest)**: A tool for server-state management and data fetching.
- **[TanStack (Store)](https://tanstack.com/store/latest)**: Tools for global state management using hooks.
- **[Docker](https://www.docker.com/)**: A platform for building, deploying, and running applications in containers.

## Contributing

Feel free to open an issue or submit a pull request to contribute improvements or features.

## License

This project is licensed under the MIT License
