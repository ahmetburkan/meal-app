import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/App.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextProvider from './context/ThemeContextProvider';
import AuthContextProvider from "./context/AuthContextProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ThemeContextProvider>
            <AuthContextProvider>
            <App />
            </AuthContextProvider>
        </ThemeContextProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
