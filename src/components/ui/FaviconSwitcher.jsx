"use client";

import { useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export default function FaviconSwitcher() {
  const { theme } = useTheme();

  useEffect(() => {
    const actualTheme =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme;

    // 🔁 remove old icons
    const idsToRemove = ["favicon", "theme-color", "apple-icon"];
    idsToRemove.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.remove();
    });

    // 🌙 dynamic favicon
    const favicon = document.createElement("link");
    favicon.id = "favicon";
    favicon.rel = "icon";
    favicon.href =
      actualTheme === "dark" ? "/favicon-dark.png" : "/favicon-light.png";
    document.head.appendChild(favicon);

    // 🍎 apple touch icon
    const apple = document.createElement("link");
    apple.id = "apple-icon";
    apple.rel = "apple-touch-icon";
    apple.href = "/apple-touch-icon.png";
    document.head.appendChild(apple);

    // 🎨 theme color
    const metaThemeColor = document.createElement("meta");
    metaThemeColor.id = "theme-color";
    metaThemeColor.name = "theme-color";
    metaThemeColor.content = actualTheme === "dark" ? "#000000" : "#ffffff"; // غير حسب التصميم
    document.head.appendChild(metaThemeColor);
  }, [theme]);

  return null;
}
