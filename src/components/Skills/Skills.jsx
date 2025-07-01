"use client";
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext.jsx";

const Skills = () => {
  const { theme } = useTheme();

  return (
    <section
      id="skills"
      className="clip-path-custom py-23 pb-23 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
      style={{ background: theme.colors.background }}
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2
          className="text-3xl sm:text-4xl font-bold"
          style={{ color: theme.colors.text }}
        >
          SKILLS
        </h2>
        <div
          className="w-24 h-1 mx-auto mt-2"
          style={{ backgroundColor: theme.colors.primary }}
        ></div>
        <p
          className="mt-4 text-lg font-semibold"
          style={{ color: theme.colors.textSecondary }}
        >
          A collection of my technical skills and expertise honed through
          various projects and experiences
        </p>
      </div>

      {/* Skill Categories */}
      <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
        {SkillsInfo.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border transition"
            style={{
              backgroundColor: theme.colors.surface,
              borderColor: theme.colors.border,
              boxShadow: `0 0 20px 1px ${theme.colors.primary}33`,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = `0 0 30px 2px ${theme.colors.primary}88`)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = `0 0 20px 1px ${theme.colors.primary}33`)
            }
          >
            <h3
              className="text-2xl sm:text-3xl font-semibold text-center mb-4"
              style={{ color: theme.colors.textSecondary }}
            >
              {category.title}
            </h3>

            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center space-x-2 rounded-3xl py-2 px-4 sm:py-2 sm:px-6 text-center transition-all duration-300 ease-in-out"
                    style={{
                      backgroundColor: theme.colors.background,
                      border: `1px solid ${theme.colors.border}`,
                      color: theme.colors.text,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.border = `1px solid ${theme.colors.primary}`;
                      e.currentTarget.style.boxShadow = `0 2px 10px ${theme.colors.primary}55`;
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.border = `1px solid ${theme.colors.border}`;
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                    <span
                      className="text-xs sm:text-sm"
                      style={{ color: theme.colors.textSecondary }}
                    >
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
