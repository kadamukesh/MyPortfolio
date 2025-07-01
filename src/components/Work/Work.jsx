"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VscGithubAlt } from "react-icons/vsc";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { projects } from "../../constants";
import { useTheme } from "../../contexts/ThemeContext.jsx";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { theme } = useTheme();

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
      style={{ background: theme.colors.background }}
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
          PROJECTS
        </h2>
        <div
          className="w-32 h-1 mx-auto mt-4"
          style={{ backgroundColor: theme.colors.primary }}
        ></div>
        <p
          className="mt-4 text-lg font-semibold"
          style={{ color: theme.colors.textSecondary }}
        >
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border backdrop-blur-md rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out"
            style={{
              backgroundColor: theme.colors.surface,
              borderColor: theme.colors.border,
              boxShadow: `0 0 20px 1px ${theme.colors.primary}33`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05) translateY(-8px)";
              e.currentTarget.style.boxShadow = `0 0 30px 2px ${theme.colors.primary}88`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1) translateY(0)";
              e.currentTarget.style.boxShadow = `0 0 20px 1px ${theme.colors.primary}33`;
            }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="p-3 overflow-hidden rounded-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3
                className="text-xl font-bold mb-1"
                style={{ color: theme.colors.text }}
              >
                {project.title}
              </h3>
              <p
                className="mb-3 text-sm line-clamp-3"
                style={{ color: theme.colors.textSecondary }}
              >
                {project.description}
              </p>
              <div className="mb-2">
                {project.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block text-xs font-semibold rounded-full px-2 py-1 mr-2 mb-1"
                    style={{
                      backgroundColor: theme.colors.background,
                      color: theme.colors.primary,
                      border: `1px solid ${theme.colors.primary}`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden relative"
              style={{ backgroundColor: theme.colors.surface }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={handleCloseModal}
                  className="text-3xl font-bold focus:outline-none"
                  style={{
                    color: theme.colors.text,
                    hover: theme.colors.hover,
                  }}
                  aria-label="Close modal"
                >
                  &times;
                </button>
              </div>

              <div className="flex flex-col">
                <div className="w-full flex justify-center px-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full max-h-[500px] object-contain rounded-xl shadow-2xl"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <h3
                    className="text-md lg:text-3xl font-bold mb-4"
                    style={{ color: theme.colors.text }}
                  >
                    {selectedProject.title}
                  </h3>
                  <p
                    className="mb-6 text-xs lg:text-base"
                    style={{ color: theme.colors.textSecondary }}
                  >
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs font-semibold rounded-full px-2 py-1"
                        style={{
                          backgroundColor: theme.colors.background,
                          color: theme.colors.primary,
                          border: `1px solid ${theme.colors.primary}`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-1/2 flex items-center justify-center gap-2 rounded-xl font-semibold transition"
                        style={{
                          backgroundColor: theme.colors.surface,
                          color: theme.colors.textSecondary,
                          border: `1px solid ${theme.colors.border}`,
                        }}
                      >
                        <VscGithubAlt className="text-lg" /> View Code
                      </a>
                    )}
                    {selectedProject.webapp && (
                      <a
                        href={selectedProject.webapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-1/2 flex items-center justify-center gap-2 rounded-xl font-semibold text-white transition"
                        style={{
                          backgroundColor: theme.colors.primary,
                          color: theme.colors.text,
                        }}
                      >
                        <BsBoxArrowUpRight className="text-lg" /> View Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
