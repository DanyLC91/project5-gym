import React from 'react'; // Importing the React library
import ReactDOM from 'react-dom/client'; // Importing ReactDOM for rendering
import App from './App'; // Importing the main App component
import reportWebVitals from './reportWebVitals'; // Importing a function for reporting web vitals

// Creating a root React element to render the application.
//It will serve as the entry point for rendering the application.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the main App component inside a StrictMode wrapper
root.render(
  <React.StrictMode>
    <App /> {/* Rendering the main App component */}
  </React.StrictMode>
);

// Reporting web vitals to monitor performance
reportWebVitals();
