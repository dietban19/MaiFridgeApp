import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/userContext";
import { RecipesProvider } from "./context/recipesContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <RecipesProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </RecipesProvider>
    </UserProvider>
  </BrowserRouter>
);
