import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./css/_base.css";
import LoadingPage from "./components/LoadingPage";

const App = lazy(() => import("./App/App" /* webpackChunkName: "app" */));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingPage />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
