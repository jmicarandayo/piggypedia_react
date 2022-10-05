import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { ProgramContextProvider } from './context/ProgramContext';

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <AuthContextProvider>
        <ProgramContextProvider>
            <React.StrictMode>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </React.StrictMode>
        </ProgramContextProvider>
    </AuthContextProvider>
)