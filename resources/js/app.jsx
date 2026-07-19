import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { AuthProvider } from './context/AuthContext';
    
const App = () => {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
};

const rootElement = document.getElementById('app');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
}
