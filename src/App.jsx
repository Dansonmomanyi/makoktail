import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { About, Error, HomeLayout, Landing, Newsletter, Cocktail } from './Pages';
import './index.css';
import { LoadingProvider } from './context/LoadingContext';

import { action as newsletterAction } from './Pages/Newsletter';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "cocktail/:id",
          element: <Cocktail />,
        },
        {
          path: "newsletter",
          element: <Newsletter />,
          action: newsletterAction,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingProvider>
        <RouterProvider router={router} />
        <ToastContainer position='top-center' autoClose={2000} />
      </LoadingProvider>
    </QueryClientProvider>
  );
};
export default App;
