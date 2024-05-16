import  { useState, useEffect, useCallback } from "react";

export const themeType = {
  LIGHT: "light",
  DARK: "dark",
};

function useTheme() {
  const previous_theme = localStorage.getItem("theme");
  const system_theme = window.matchMedia("(prefers-color-scheme:dark)").matches;
  const [theme, setTheme] = useState(() => {
    if (previous_theme) {
      return previous_theme;
    }

    return system_theme ? themeType.DARK : themeType.LIGHT;
  });

  const changeTheme = useCallback(() => {
    setTheme((prev) =>
      prev === themeType.LIGHT ? themeType.DARK : themeType.LIGHT
    );
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === themeType.DARK) {
      root.classList.remove(themeType.LIGHT);
      root.classList.add(themeType.DARK);
    } else {
      root.classList.remove(themeType.DARK);
      root.classList.add(themeType.LIGHT);
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, changeTheme };
}

export default useTheme;
