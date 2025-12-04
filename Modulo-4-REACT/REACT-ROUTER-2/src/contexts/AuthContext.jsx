import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const user = { username: "admin", password: "admin123" };
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username, pass) => {
    if (username === user.username && pass === user.password) {
      setIsAuthenticated(true);
      return true;
    } else {
      throw new Error("Credenciales incorrectas");
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
