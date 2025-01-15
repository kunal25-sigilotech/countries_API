import { createContext, useContext, useState, useEffect } from "react";

const ColorModeContext = createContext();

export default function ColorModeProvider({ children }) {
  const [mode, setMode] = useState(
    () => localStorage.getItem("colorMode") || "light",
  );

  useEffect(() => {
    localStorage.setItem("colorMode", mode);
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  return (
    <ColorModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}

export function useColorMode() {
  const context = useContext(ColorModeContext);
  if (!context)
    throw new Error(
      "useColorMode should not be used outside ColorModeProvider",
    );

  return context;
}
