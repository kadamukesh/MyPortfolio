"use client";
import React from "react";
import { motion } from "framer-motion";
import { education } from "../../constants";
import { useTheme } from "../../contexts/ThemeContext.jsx";

const Education = () => {
  const { theme } = useTheme();

  return (
    <section
      id="education"
      className="py-24 px-6 md:px-12 lg:px-32 font-sans clip-path-custom-3"
      style={{ backgroundColor: theme.colors.background }}
    >
      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold" style={{ color: theme.colors.text }}>
          EDUCATION
        </h2>
        <div
          className="w-24 h-1 mx-auto mt-3"
          style={{ backgroundColor: theme.colors.primary }}
        ></div>
        <p
          className="mt-4 text-base md:text-lg"
          style={{ color: theme.colors.textSecondary }}
        >
          My education has been a journey of learning and development. Here are
          the details of my academic background.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical timeline line */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full"
          style={{ backgroundColor: theme.colors.text }}
        ></div>

        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Timeline circle */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 border-4 w-12 h-12 rounded-full flex items-center justify-center z-10"
              style={{
                backgroundColor: theme.colors.text,
                borderColor: theme.colors.primary,
              }}
              whileHover={{
                scale: 1.2,
                borderColor: theme.colors.accent,
              }}
            >
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>

            {/* Card */}
            <motion.div
              className={`group w-full sm:max-w-lg p-6 rounded-2xl shadow-lg backdrop-blur-md ${
                index % 2 === 0 ? "sm:ml-16" : "sm:mr-16"
              } mt-16 sm:mt-0`}
              style={{
                backgroundColor: `${theme.colors.surface}99`,
                border: `1px solid ${theme.colors.border}`,
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: `0 0 30px ${theme.colors.primary}`,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-20 h-14 rounded overflow-hidden transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold group-hover:underline"
                    style={{ color: theme.colors.text }}
                  >
                    {edu.degree}
                  </h3>
                  <h4
                    className="text-sm"
                    style={{ color: theme.colors.textSecondary }}
                  >
                    {edu.school}
                  </h4>
                  <p
                    className="text-sm"
                    style={{ color: theme.colors.textSecondary }}
                  >
                    {edu.date}
                  </p>
                </div>
              </div>

              <p
                className="mt-3 font-semibold"
                style={{ color: theme.colors.primary }}
              >
                Grade: {edu.grade}
              </p>
              <p
                className="mt-2 text-sm"
                style={{ color: theme.colors.textSecondary }}
              >
                {edu.desc}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
