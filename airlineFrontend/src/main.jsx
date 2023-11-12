import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './common/Navbar/Navbar.jsx';
import Home from './Webpage/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    children: [
      {
        path:"/",
        element: <Home/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);