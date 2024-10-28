import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import EstiloGlobal from './globalStyled';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EstiloGlobal />
    <App />
  </StrictMode>,
);
