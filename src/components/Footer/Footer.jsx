"use client";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { useTheme } from "../../contexts/ThemeContext.jsx";

const Footer = () => {
  const { theme } = useTheme();

  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
      }}
    >
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2
          className="text-xl font-semibold"
          style={{ color: theme.colors.primary }}
        >
          Kada Mukesh
        </h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="text-sm sm:text-base my-1 transition-colors duration-200"
              style={{
                color: theme.colors.text,
              }}
              onMouseEnter={(e) =>
                (e.target.style.color = theme.colors.primary)
              }
              onMouseLeave={(e) => (e.target.style.color = theme.colors.text)}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            {
              icon: <FaFacebook />,
              link: "https://www.facebook.com/kada.mukesh/",
            },
            {
              icon: <FaTwitter />,
              link: "https://x.com/kadamukesh3",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/kada-mukesh-sai-durga-kumar-2a620b347/",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/muke__sai__00/",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl transition-transform transform hover:scale-110"
              style={{ color: theme.colors.text }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = theme.colors.primary)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = theme.colors.text)
              }
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          className="text-sm mt-6"
          style={{ color: theme.colors.textSecondary }}
        >
          © Made with ❤️ by Mr. Kada Mukesh using React JS!.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
