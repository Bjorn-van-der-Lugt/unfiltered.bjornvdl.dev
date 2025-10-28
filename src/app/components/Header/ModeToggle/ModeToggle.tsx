"use client";

import { useState, useEffect } from "react";
import styles from "./ModeToggle.module.scss";

export default function ModeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    const isLight = document.documentElement.classList.contains("light");

    if (isDark) setTheme("dark");
    else if (isLight) setTheme("light");
    else setTheme("light"); 
  }, []);

  const toggleTheme = () => {
    if (!theme) return;
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000; samesite=lax`;
  };

  if (theme === null) return null;

  return (
    <button
      onClick={toggleTheme}
      className={styles.modeToggle}
      aria-label="Switch between dark and light mode"
      >Theme <i className={`${styles.icon} fa-sharp-duotone fa-circle-half-stroke`}aria-hidden="true"></i>
    </button>
  );
}