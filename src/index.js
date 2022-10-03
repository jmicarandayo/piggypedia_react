import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { ProgramContextProvider } from './context/ProgramContext';

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <ProgramContextProvider>
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
    </ProgramContextProvider>
)