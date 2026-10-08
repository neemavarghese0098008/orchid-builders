import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { UIProvider } from './context/UIContext';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <UIProvider>
        <AppRoutes />
      </UIProvider>
    </BrowserRouter>
  );
};

export default App;
