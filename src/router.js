import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './screens/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

export default router;
