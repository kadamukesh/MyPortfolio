"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import { useTheme } from "../../contexts/ThemeContext.jsx";
import ThemeSelector from "./../../ThemeSelector.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  // Scroll BG change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active Section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) =>
        document.getElementById(item.id)
      );
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        if (
          section?.offsetTop <= scrollPosition &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(menuItems[index].id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "certification", label: "Certifications" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-[8vw] md:px-[8vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[var(--color-background)] bg-opacity-80 backdrop-blur-md shadow-lg border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="text-[var(--color-text)] py-5 flex justify-between items-center space-x-7">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer 	">
          <a href="#">
            <span style={{ color: theme.colors.primary }}>&lt;</span>
            <span className="text-[var(--color-text)]">Kada</span>
            <span style={{ color: theme.colors.primary }}>/</span>
            <span className="text-[var(--color-text)]">Mukesh</span>
            <span style={{ color: theme.colors.primary }}>&gt;</span>
          </a>
        </div>

        {/* Desktop Menu + Theme + Social */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Navigation */}
          <ul className="flex space-x-8 text-[var(--color-textSecondary)]">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                  activeSection === item.id
                    ? "text-[var(--color-primary)] font-medium"
                    : "hover:text-[var(--color-primary)]"
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Theme Selector */}
          <div className="ml-6">
            <ThemeSelector />
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 ml-4">
            <a
              href="https://github.com/kadamukesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-textSecondary)] hover:text-[var(--color-primary)] transition-all duration-300 hover:scale-110"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/kada-mukesh-sai-durga-kumar-2a620b347/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-textSecondary)] hover:text-[var(--color-primary)] transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-3">
          <ThemeSelector />
          {isOpen ? (
            <FiX
              className="text-3xl cursor-pointer transition-all duration-300 hover:scale-110"
              style={{ color: theme.colors.primary }}
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl cursor-pointer transition-all duration-300 hover:scale-110"
              style={{ color: theme.colors.primary }}
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 w-[90%] bg-[var(--color-surface)] bg-opacity-95 backdrop-filter backdrop-blur-lg z-50 rounded-xl shadow-2xl border border-[var(--color-border)] md:hidden"
          >
            <ul className="flex flex-col items-center space-y-4 py-6 text-[var(--color-textSecondary)]">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                    activeSection === item.id
                      ? "text-[var(--color-primary)] font-medium"
                      : "hover:text-[var(--color-primary)]"
                  }`}
                >
                  <button onClick={() => handleMenuItemClick(item.id)}>
                    {item.label}
                  </button>
                </motion.li>
              ))}
              <motion.div
                className="flex space-x-6 pt-4 border-t border-[var(--color-border)] mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <a
                  href="https://github.com/kadamukesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-textSecondary)] hover:text-[var(--color-primary)] transition-all duration-300 hover:scale-110"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/kada-mukesh-sai-durga-kumar-2a620b347/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-textSecondary)] hover:text-[var(--color-primary)] transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin size={24} />
                </a>
              </motion.div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
