"use client";

import { useState } from "react";
import { useTheme } from "./contexts/ThemeContext.jsx";
import { motion } from "framer-motion";

const ThemeSelector = () => {
  const { currentTheme, cycleTheme, availableThemes } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleThemeChange = () => {
    if (isAnimating) return; // Prevent rapid clicking

    setIsAnimating(true);
    cycleTheme();

    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  const currentThemeData = availableThemes[currentTheme];

  return (
    <div className="relative z-50">
      <motion.button
        onClick={handleThemeChange}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] transition-all duration-200 shadow-md backdrop-blur-md group overflow-hidden relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={isAnimating ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
          color: isHovered ? "var(--color-text)" : "var(--color-textSecondary)",
        }}
      >
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.2 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Glow Effect on Hover */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            boxShadow: `0 0 20px color-mix(in srgb, var(--color-primary) 30%, transparent)`,
          }}
        />

        {/* Current Theme Icon */}
        <motion.div
          className="relative z-10 transition-all duration-300"
          animate={isAnimating ? { scale: [1, 0.8, 1] } : { scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          style={{
            color: isHovered
              ? "var(--color-primary)"
              : "var(--color-textSecondary)",
            filter: isHovered
              ? `drop-shadow(0 0 8px var(--color-primary))`
              : "none",
          }}
        >
          {currentThemeData.icon}
        </motion.div>

        {/* Theme Name */}
        <motion.span
          className="hidden sm:inline text-sm font-medium relative z-10 transition-all duration-300"
          animate={isAnimating ? { opacity: [1, 0.5, 1] } : { opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            color: isHovered
              ? "var(--color-text)"
              : "var(--color-textSecondary)",
            textShadow: isHovered
              ? `0 0 10px color-mix(in srgb, var(--color-primary) 50%, transparent)`
              : "none",
          }}
        >
          {currentThemeData.name}
        </motion.span>

        {/* Cycling Indicator */}
        <motion.div
          className="w-2 h-2 rounded-full relative z-10"
          style={{
            backgroundColor: isHovered
              ? "var(--color-accent)"
              : "var(--color-border)",
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Ripple Effect on Click */}
        {isAnimating && (
          <motion.div
            className="absolute inset-0 rounded-lg border-2"
            style={{ borderColor: "var(--color-primary)" }}
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.button>

      {/* Enhanced Theme Preview Tooltip */}
      <motion.div
        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg shadow-xl backdrop-blur-md pointer-events-none"
        initial={{ opacity: 0, y: -10, scale: 0.9 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : -10,
          scale: isHovered ? 1 : 0.9,
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center space-x-3">
          {/* Color Preview */}
          <div className="flex space-x-1">
            <div
              className="w-3 h-3 rounded-full border border-white/20"
              style={{ backgroundColor: currentThemeData.colors.primary }}
            />
            <div
              className="w-3 h-3 rounded-full border border-white/20"
              style={{ backgroundColor: currentThemeData.colors.accent }}
            />
            <div
              className="w-3 h-3 rounded-full border border-white/20"
              style={{ backgroundColor: currentThemeData.colors.secondary }}
            />
          </div>

          {/* Tooltip Text */}
          <span className="text-xs text-[var(--color-text)] whitespace-nowrap font-medium">
            Click to cycle themes
          </span>

          {/* Theme Icon */}
          <div
            className="text-sm"
            style={{ color: currentThemeData.colors.primary }}
          >
            {currentThemeData.icon}
          </div>
        </div>

        {/* Enhanced Arrow */}
        <div
          className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[var(--color-surface)] border-l border-t border-[var(--color-border)] rotate-45"
          style={{
            filter: `drop-shadow(0 0 4px color-mix(in srgb, var(--color-primary) 20%, transparent))`,
          }}
        />
      </motion.div>

      {/* Enhanced Theme Change Notification */}
      {isAnimating && (
        <motion.div
          className="absolute -top-16 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full shadow-xl border backdrop-blur-md"
          style={{
            background: `linear-gradient(135deg, var(--color-primary), var(--color-accent))`,
            borderColor: "var(--color-border)",
            color: "var(--color-text)",
          }}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center space-x-2">
            <div className="text-sm">{currentThemeData.icon}</div>
            <span className="text-xs font-medium">{currentThemeData.name}</span>
          </div>

          {/* Sparkle Effect */}
          <motion.div
            className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
            style={{ backgroundColor: "var(--color-accent)" }}
            animate={{
              scale: [0, 1.5, 0],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default ThemeSelector;
