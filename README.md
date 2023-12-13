React + TypeScript + Vite
 
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
 
## **Overview**
 
This is a movie website built using **React, Vite, Redux Toolkit, Redux Saga,**. The project aims to provide a user-friendly interface for users to explore and discover information about movies.
 
This is a React application built with Vite and TypeScript, aiming to provide a platform for movie enthusiasts to explore and discover their favorite shows. The project leverages **Redux** for state management, **Redux-Saga** for handling asynchronous actions, **SCSS** for styling, **Jest** for testing library for a sleek and responsive design.
 
Styling is achieved using **SCSS** to enhance maintainability and provide a more structured approach to CSS. The styles are modularized and organized in the respective component folders.
 
The application uses **Redux** for state management. The state logic is divided into actions, reducers, and sagas to handle asynchronous operations. The Redux store is configured in **`redux/store.ts`**.
 
## **Installation**
 
Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.
 
```bash
# Clone the repository
git clone https://github.com/your-username/movie-website.git
 
# Change directory to the project folder
cd <project folder name>
 
# Install dependencies
npm install

## **Usage**
```bash
# Start json-server
npx json-server --watch db.json

```bash
# Start the development server
npm run dev
```

## **Testing**
Unit tests are written using Jest. You can run the tests with the following command:
```bash
npm run test
```