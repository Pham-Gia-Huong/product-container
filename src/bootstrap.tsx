import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('container-app-root') as HTMLElement);

root.render(<App />);
