"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext.jsx";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const { theme } = useTheme();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wl0p69m",
        "template_9aans4s",
        form.current,
        "MdZrJBTFkexx0O4PX"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-[10vw] flex flex-col items-center"
      style={{ backgroundColor: theme.colors.background }}
    >
      <ToastContainer />

      {/* Title */}
      <motion.h2
        className="text-4xl font-bold mb-4 text-center"
        style={{
          backgroundImage: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.accent})`,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="text-center text-lg mb-12 max-w-2xl"
        style={{ color: theme.colors.textSecondary }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Have questions about my work, ongoing projects, or future goals? Fill
        out the form below, and let’s connect!
      </motion.p>

      {/* Contact Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-5xl"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        viewport={{ once: true }}
      >
        {[
          {
            icon: <FiMapPin className="text-2xl" />,
            label: "Vijayawada",
            sublabel: "Andhra Pradesh, India",
          },
          {
            icon: <FiMail className="text-2xl" />,
            label: "Email",
            sublabel: "mukeshkada2@gmail.com",
          },
          {
            icon: <FiPhone className="text-2xl" />,
            label: "Phone",
            sublabel: "+91 8919017738",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="flex items-start gap-4 p-5 rounded-xl shadow-lg hover:scale-105 transition-transform"
            style={{
              backgroundColor: theme.colors.surface,
              color: theme.colors.text,
              border: `1px solid ${theme.colors.border}`,
            }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="p-2 rounded-md"
              style={{ backgroundColor: theme.colors.text }}
            >
              <div style={{ color: theme.colors.primary }}>{item.icon}</div>
            </div>
            <div>
              <p className="text-lg font-semibold">{item.label}</p>
              <p
                className="text-sm"
                style={{ color: theme.colors.textSecondary }}
              >
                {item.sublabel}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="w-full max-w-xl p-6 rounded-lg shadow-lg"
        style={{
          backgroundColor: theme.colors.surface,
          border: `1px solid ${theme.colors.border}`,
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3
          className="text-xl font-semibold text-center"
          style={{ color: theme.colors.text }}
        >
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-6 flex flex-col space-y-4"
        >
          {[
            { name: "user_email", type: "email", placeholder: "Your Email" },
            { name: "user_name", type: "text", placeholder: "Your Name" },
            { name: "subject", type: "text", placeholder: "Subject" },
          ].map((field, idx) => (
            <input
              key={idx}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              required
              className="w-full p-3 rounded-md focus:outline-none"
              style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.text,
                border: `1px solid ${theme.colors.border}`,
              }}
            />
          ))}

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md focus:outline-none"
            style={{
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              border: `1px solid ${theme.colors.border}`,
            }}
          />
          <motion.button
            type="submit"
            className="w-full py-3 text-white font-semibold rounded-md"
            style={{
              backgroundImage: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.accent})`,
            }}
            whileHover={{ scale: 1.05 }}
          >
            Send
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
