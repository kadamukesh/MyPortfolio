"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { FiMoon } from "react-icons/fi";
import {
  FaWater,
  FaHeart,
  FaBolt,
  FaCrown,
  FaLeaf,
  FaSnowflake,
  FaFire,
} from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

export const themes = {
  dark: {
    name: "Dark Purple",
    icon: <FiMoon />,
    colors: {
      primary: "#8245ec",
      secondary: "#6366f1",
      accent: "#a855f7",
      background: "#050414",
      surface: "#1a1625",
      text: "#ffffff",
      textSecondary: "#d1d5db",
      border: "#374151",
      hover: "#9333ea",
    },
  },
  cyber: {
    name: "Cyber Neon",
    icon: <FaBolt />,
    colors: {
      primary: "#00ffea",
      secondary: "#00bcd4",
      accent: "#39ff14",
      background: "#0f0f0f",
      surface: "#1c1c1c",
      text: "#e0ffef",
      textSecondary: "#a3f7bf",
      border: "#333333",
      hover: "#0fffc0",
    },
  },
  ocean: {
    name: "Ocean Blue",
    icon: <FaWater />,
    colors: {
      primary: "#0ea5e9",
      secondary: "#06b6d4",
      accent: "#3b82f6",
      background: "#0c1222",
      surface: "#1e293b",
      text: "#f1f5f9",
      textSecondary: "#cbd5e1",
      border: "#334155",
      hover: "#0284c7",
    },
  },
  sunset: {
    name: "Sunset Orange",
    icon: <MdOutlineWbSunny />,
    colors: {
      primary: "#f97316",
      secondary: "#ea580c",
      accent: "#fb923c",
      background: "#1c1917",
      surface: "#292524",
      text: "#fef7ed",
      textSecondary: "#fed7aa",
      border: "#44403c",
      hover: "#ea580c",
    },
  },
  rose: {
    name: "Rose Pink",
    icon: <FaHeart />,
    colors: {
      primary: "#ec4899",
      secondary: "#f472b6",
      accent: "#f9a8d4",
      background: "#1e1b1f",
      surface: "#2a1f2d",
      text: "#ffe4f1",
      textSecondary: "#fbcfe8",
      border: "#4b3b4f",
      hover: "#db2777",
    },
  },
  royal: {
    name: "Royal Gold",
    icon: <FaCrown />,
    colors: {
      primary: "#ffd700",
      secondary: "#daa520",
      accent: "#ffed4e",
      background: "#1a1625",
      surface: "#2d1b69",
      text: "#f8f9fa",
      textSecondary: "#e9ecef",
      border: "#4c3d9e",
      hover: "#ffb347",
    },
  },
  forest: {
    name: "Forest Green",
    icon: <FaLeaf />,
    colors: {
      primary: "#10b981",
      secondary: "#059669",
      accent: "#34d399",
      background: "#0f1419",
      surface: "#1f2937",
      text: "#ecfdf5",
      textSecondary: "#d1fae5",
      border: "#374151",
      hover: "#047857",
    },
  },
  arctic: {
    name: "Arctic Ice",
    icon: <FaSnowflake />,
    colors: {
      primary: "#67e8f9",
      secondary: "#22d3ee",
      accent: "#a7f3d0",
      background: "#0f172a",
      surface: "#1e293b",
      text: "#f0f9ff",
      textSecondary: "#bae6fd",
      border: "#334155",
      hover: "#0891b2",
    },
  },
  volcano: {
    name: "Volcano Red",
    icon: <FaFire />,
    colors: {
      primary: "#ef4444",
      secondary: "#dc2626",
      accent: "#f87171",
      background: "#1c1917",
      surface: "#292524",
      text: "#fef2f2",
      textSecondary: "#fecaca",
      border: "#44403c",
      hover: "#b91c1c",
    },
  },
};

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const theme = themes[currentTheme];
    const root = document.documentElement;

    // Apply CSS custom properties
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  const setTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  // Cycle to next theme function
  const cycleTheme = () => {
    const themeKeys = Object.keys(themes);
    const currentIndex = themeKeys.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    const nextTheme = themeKeys[nextIndex];
    setCurrentTheme(nextTheme);
  };

  const value = {
    currentTheme,
    theme: themes[currentTheme],
    setTheme,
    cycleTheme,
    availableThemes: themes,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
