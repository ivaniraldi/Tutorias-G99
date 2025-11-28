import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalProvider from "./contexts/GlobalContext.jsx";
import ProductsProvider from "./contexts/ProductsContext.jsx";
import AuthProvider from "./contexts/AuthContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductsProvider>
      <GlobalProvider>
        <AuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthProvider>
      </GlobalProvider>
    </ProductsProvider>
  </StrictMode>
);
