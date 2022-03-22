import { createContext, useContext, useState } from "react";

const deafaultThemeValue = {
  theme: "dark"
};

const ThemeContext = createContext({ deafaultThemeValue });

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  // const changeTheme = () => setTheme("dark")
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
