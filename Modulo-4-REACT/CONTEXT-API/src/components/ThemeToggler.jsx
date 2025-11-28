import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export default function ThemeToggler() {
  const { theme, global, setTheme } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setTheme(theme == "light" ? "dark" : "light")}
      className="btn btn-secondary"
    >
      Cambiar tema
    </button>
  );
}
