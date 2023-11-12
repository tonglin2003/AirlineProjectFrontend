import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './common/Navbar/Navbar.jsx';
import Home from './Webpage/Home/Home.jsx';

import FlightSearch from './common/FlightSearch/FlightSearch.jsx';

import DsiplayTicket from './Webpage/DisplayTicket/DisplayTicket.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    children: [
      {
        path:"/",
        element: <Home/>,
        children: [
          {
            path:"/",
            element: <FlightSearch/>,
          }
        ]
      },
      {
        path:"/ticket",
        element: <DsiplayTicket/>
        
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);