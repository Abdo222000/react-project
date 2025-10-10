# NEWHOME E-Commerce Platform

## Project Overview

This is a modern, single-page E-commerce application built using **React** with **Vite** and a robust state management solution using **Redux Toolkit**. The application features a clean interface powered by **Bootstrap** and includes form handling and validation with **React Hook Form**.

The primary goal of this project was to build a fully functional, performance-optimized front-end structure that demonstrates competency in modern React development, state management, and custom deployment strategies (GitHub Pages).

## Technologies Used

| Category             | Technology                         | Purpose                                                               |
| :------------------- | :--------------------------------- | :-------------------------------------------------------------------- |
| **Framework**        | **React 19** (with React Compiler) | Core UI Library, leveraging the latest features.                      |
| **Bundler**          | **Vite**                           | Fast development server and optimized production builds.              |
| **State Management** | **Redux Toolkit (RTK)**            | Global, predictable state management for cart and user data.          |
| **Routing**          | **React Router DOM (v6)**          | Client-side routing for seamless page navigation.                     |
| **Styling**          | **Bootstrap 5**                    | Responsive layout and pre-built components (using `react-bootstrap`). |
| **Forms**            | **React Hook Form**                | Efficient form state management and complex validation.               |
| **Deployment**       | **GitHub Pages**                   | Static hosting with custom configurations for subpath routing.        |

## Key Features & Functionality

- **Responsive Navigation & Layout:** Fully responsive design using Bootstrap's grid system and utilities.
- **Centralized State:** Uses Redux Toolkit to manage the **shopping cart** (quantity updates, totals) and **user authentication** state (login/logout, user details).
- **Form Validation:** Implements strict client-side validation using **React Hook Form** for the login/registration page, including password confirmation and email pattern matching.
- **Dynamic Data Fetching:** Utilizes `fetch` to retrieve product data from a third-party API (FakeStoreAPI) for dynamic content rendering.
- **Seamless Routing:** Uses `NavLink` for active link styling and implements a custom **ScrollToTop** solution to ensure a smooth user experience upon navigation.
- **Deployment Ready:** Configured with specific **Vite `base` path** and deployment scripts (`gh-pages`) for hassle-free hosting on GitHub Pages.

## Installation and Setup

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/Abdo222000/react-project.git](https://github.com/Abdo222000/react-project.git)
    cd react-project
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  **View the application:**
    Open your browser to the address provided by Vite (e.g., `http://localhost:5173/`).

## 🌐 Live Demo

You can view a live deployment of this project on GitHub Pages here:
**[https://abdo222000.github.io/react-project/](https://abdo222000.github.io/react-project/)**

---
