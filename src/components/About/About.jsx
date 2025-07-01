"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import CVSection from "./CVSection";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.png";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext.jsx";

const About = () => {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <motion.div
          className="md:w-1/2 text-center md:text-left mt-8 md:mt-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight"
            style={{ color: theme.colors.text }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Hi, I am
          </motion.h1>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight"
            style={{ color: theme.colors.text }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Kada Mukesh
          </motion.h2>

          <motion.h3
            className="text0xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span style={{ color: theme.colors.text }}>I am a </span>
            <span style={{ color: theme.colors.primary }}>
              <Typewriter
                words={[
                  "Computer Science Student",
                  "Fullstack Developer",
                  "Fast Learner",
                  "Coder",
                  "Tech Enthusiast",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </motion.h3>

          <motion.p
            className="text-base sm:text-lg md:text-lg mb-10 mt-8 leading-relaxed"
            style={{ color: theme.colors.textSecondary }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            I am Kada Mukesh, a passionate Fullstack Developer skilled in
            building modern web applications. I love creating user-friendly
            interfaces and solving complex coding challenges. Always eager to
            learn, grow, and contribute to impactful projects.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-6 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1Ilcxyn7qTauLE6Rk76UFO6q6dVwBRHjK/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center py-2.5 px-7 rounded-lg text-base font-semibold transition duration-300 transform hover:scale-105"
              style={{
                color: theme.colors.text,
                background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                boxShadow: `0 0 6px ${theme.colors.primary}90, 0 0 20px ${theme.colors.secondary}90`,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 7h10M7 11h10M7 15h6M4 4h16v16H4V4z"
                />
              </svg>
              Resume
            </a>

            {/* Projects Button */}
            <a
              href="#work"
              className="inline-flex items-center py-2.5 px-7 rounded-lg text-base font-semibold transition duration-300 transform hover:scale-105"
              style={{
                color: theme.colors.text,
                background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                boxShadow: `0 0 6px ${theme.colors.accent}90, 0 0 20px ${theme.colors.secondary}90`,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
              Projects
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side - Tilt with Motion */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9, x: 60 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <Tilt
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-[24rem] md:h-[24rem] border-4 rounded-full ml-10"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            style={{
              borderColor: theme.colors.primary,
            }}
          >
            <img
              src={profileImage}
              alt="Kada Mukesh"
              className="w-full h-full rounded-full object-cover"
              style={{
                boxShadow: `0 10px 20px ${theme.colors.primary}88`,
              }}
            />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
