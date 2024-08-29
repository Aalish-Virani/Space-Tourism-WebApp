import React, { useEffect} from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import Home from "./Pages/Home/Home.jsx";
import Crew from "./Pages/Crew/Crew.jsx";
import Destination from "./Pages/Destination/Destination.jsx";
import Technology from "./Pages/Technology/Technology.jsx";

import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import data from "./data.json"

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route
        path="destination"
        element={<Destination data={data.destinations} />}
      />
      <Route
        path="destination/:id"
        element={<Destination data={data.destinations} />}
      />
      <Route path="crew" element={<Crew data={data.crew} />} />
      <Route path="crew/:id" element={<Crew data={data.crew} />} />
      <Route
        path="technology"
        element={<Technology data={data.technology} />}
      />
      <Route
        path="technology/:id"
        element={<Technology data={data.technology} />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
