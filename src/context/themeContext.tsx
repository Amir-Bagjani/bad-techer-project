import { createContext, ReactNode, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type UseThemeType = ReturnType<typeof useTheme>;

const useTheme = () => {
  const [isDark, setIsDark] = useLocalStorage("admin-theme", false);

  return {
    isDark,
    darkTheme() {
      setIsDark(true);
    },
    lightTheme() {
      setIsDark(false);
    },
    toggleTheme() {
      setIsDark((prev) => !prev);
    },
  };
};

export const ThemeContext = createContext({} as UseThemeType);

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => (
  <ThemeContext.Provider value={useTheme()}>{children}</ThemeContext.Provider>
);
