import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import ErorPage from "./pages/ErorPage";
import Talks from "./pages/Talks";
import Speaker from "./pages/Speakers";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { DataProvider } from "./Context/DataContext";
import Event from "./pages/Event";
import PrivateRoute from "./components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/talks",
        element: (
          <PrivateRoute>
            <Talks />
          </PrivateRoute>
        ),
      },
      {
        path: "/speakers",
        element: (
          <PrivateRoute>
            <Speaker />
          </PrivateRoute>
        ),
      },
      {
        path: "/join",
        element: <Join />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/:id",
        element: (
          <PrivateRoute>
            <Event />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>
);
