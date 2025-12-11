import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import { useContext, useEffect } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { GlobalContext } from "./contexts/GlobalContext";
import About from "./views/About";
import Detail from "./views/Detail";
import Profile from "./views/Profile";
import NotFound from "./views/NotFound";

function App() {
  const { theme } = useContext(GlobalContext);

  useEffect(()=>{
    document.body.className = theme == "light" ? "theme-light" : "theme-dark"
  })
  const { isAuthenticated } = useContext(AuthContext);


  return (
    <>
      <Routes>
        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/" />}
        />
        <Route path="/" element={isAuthenticated? <Navigate to={"/home"}/> : <Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </>
  );
}

export default App;
