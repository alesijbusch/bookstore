import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./ui";
import { RouterProvider } from "react-router";
import { router } from "./routes/router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>
);
