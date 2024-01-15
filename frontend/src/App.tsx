import React from 'react';
import './style.css';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import HomeLayout from './layouts/HomeLayout';
import AuthLayout from './layouts/AuthLayout';

const NewPatient = React.lazy(() => import("./views/patients/NewPatient"));
const DetailsPatient = React.lazy(() => import("./views/patients/DetailsPatient"));
const ListPatients = React.lazy(() => import("./views/patients/ListPatients"));

const SignIn = React.lazy(() => import("./views/auth/SignIn"));
const NotFound = React.lazy(() => import("./views/NotFound"));


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/list-patients" />,
      },
      {
        path: "/list-patients",
        element: <ListPatients />,
      },
      {
        path: "/patient/:id",
        element: <DetailsPatient />,
      },
      {
        path: "/new-patient",
        element: <NewPatient />,
      },
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/auth/sign-in" />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

function App() {
  return (
        <div className="h-screen w-screen text-neutral font-roboto">
          <RouterProvider router={router} />
        </div>
  );
}

export default App;
