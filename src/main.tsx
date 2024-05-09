import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './routes/LoginPage.tsx';
import Dashboard from './routes/Dashboard.tsx';
import ProtectedRoute from './routes/ProtectedRoute.tsx';
import { AuthProvider } from './assets/AuthProvider.tsx';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import ProductsPage from './routes/ProductsPage.tsx';
import TopBuyersPage from './routes/TopBuyersPage.tsx';
import CartPage from './routes/CartPage.tsx';
import TopSellersPage from './routes/TopSellersPage.tsx';
import SignUpPage from './routes/SignUpPage.tsx';
import MainPage from './routes/MainPage.tsx';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </>,
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/products',
    element: <ProductsPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
  {
    path: '/topbuyers',
    element: <TopBuyersPage />,
  },
  {
    path: '/topsellers',
    element: <TopSellersPage />,
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
