import { createContext, ReactNode, useContext, useState } from "react";

type UseThemeType = ReturnType<typeof useTheme>;

const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

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
