import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import { useContext, useEffect } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { GlobalContext } from "./contexts/GlobalContext";

function App() {
  const { theme } = useContext(GlobalContext);

  useEffect(()=>{
    document.body.className = theme == "light" ? "theme-light" : "theme-dark"
  })

  const { isAuthenticated } = useContext(AuthContext);
  console.log("Estado de autenticación en App.jsx:", isAuthenticated);
  return (
    <>
      <Routes>
        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/" />}
        />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
