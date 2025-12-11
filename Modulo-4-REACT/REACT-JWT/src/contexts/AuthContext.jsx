import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(false);
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      console.log("Respuesta del servidor:", data);
      if (data.error) {
        throw new Error(data.error);
      }
      if (data.token) {
        setIsAuthenticated(true);
        setUser(data.email);
        setToken(data.token);
        localStorage.setItem("token", data.token);

        return data;
      }
    } catch (error) {
      console.log("Error en el login:", error);
      throw error;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      setToken(token);
    } else {
      setIsAuthenticated(false);
      setToken(null);
    }
  }, []);

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setToken(null);
    localStorage.clear();
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, isAuthenticated, token, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
