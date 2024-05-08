import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './routes/login.tsx'
import Signup from './routes/signup.tsx'
import Dashboard from './routes/Dashboard.tsx'
import ProtectedRoute from './routes/ProtectedRoute.tsx'
import { AuthProvider } from './assets/AuthProvider.tsx'

const router = createBrowserRouter([
  {
  path: "/",
  element: <Login />, 
  },
  {
    path: "/signup",
    element: <Signup />, 
 },
 {
  path: "/dashboard",
  element: <Dashboard />, 
},
{
  path: "/",
  element: <ProtectedRoute />,
  children: [
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ],
}
  ]
,
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
