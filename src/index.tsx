import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


import { ConvexProvider, ConvexReactClient } from "convex/react";
import { RouterProvider } from "react-router-dom";
import { routes } from "../Router/router";

const convex = new ConvexReactClient("https://cautious-ox-174.convex.cloud");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConvexProvider client={convex}>
      <App />
    </ConvexProvider>
  </React.StrictMode>
);
