import { useState, useEffect } from "react";

import {
  XMarkIcon,
  SunIcon,
  MoonIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";

// style
import styles from "./style.module.css";

// custom hook
import useLocalStorage from "../../hooks/useLocalStorage";

const ThemeSwitcher = () => {
  const [isColorPicking, setIsColorPicking] = useState(false);
  const defaultDark = matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "react-todo.theme",
    defaultDark ? "dark" : "light"
  );
  const [hue, setHue] = useLocalStorage("react-todo.color", "240");

  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", theme);
  }, [theme]);
  useEffect(() => {
    document.documentElement.style.setProperty("--_hue", hue);
  }, [hue]);

  return (
    <aside
      className={styles.wrapper}
      style={{
        backgroundColor: isColorPicking
          ? "hsl(var(--muted)/.6)"
          : "transparent",
      }}
    >
      {isColorPicking ? (
        <>
          <button
            aria-label="Close color picking mode"
            className={`btn ${styles.close}`}
            onClick={() => setIsColorPicking(false)}
          >
            <XMarkIcon />
          </button>
          <input
            className={styles.picker}
            type="range"
            min="0"
            max="360"
            aria-label="Change color theme slider"
            value={hue}
            onChange={(e) => setHue(e.target.value)}
          />
        </>
      ) : (
        <>
          <div className={styles.btns}>
            <button
              className="btn"
              aria-label={`Change theme to ${
                theme === "light" ? "dark" : "light"
              }`}
              role="switch"
              onClick={() =>
                setTheme((prevState) =>
                  prevState === "light" ? "dark" : "light"
                )
              }
            >
              {theme === "light" ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              className="btn"
              aria-label="Enable color picking mode"
              onClick={() => setIsColorPicking(true)}
            >
              <SwatchIcon />
            </button>
          </div>
        </>
      )}
    </aside>
  );
};

export default ThemeSwitcher;
