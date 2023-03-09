import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import { ExamsContextProvider } from './context/ExamsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ExamsContextProvider>
        <App />
    </ExamsContextProvider>
);
