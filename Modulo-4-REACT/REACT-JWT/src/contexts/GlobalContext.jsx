import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const global = "Estoy usando el contexto global";
  const [theme, setTheme] = useState("light");

  return (
    <GlobalContext.Provider value={{ global, theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
