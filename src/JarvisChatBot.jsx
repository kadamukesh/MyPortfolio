"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Bot,
  User,
  GraduationCap,
  Briefcase,
  Trophy,
  Heart,
  Mail,
} from "lucide-react";
import { useTheme } from "./contexts/ThemeContext.jsx";

const JarvisChatbot = ({ userName = "Kada Mukesh" }) => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content: `Hey there! 👋\n\nI'm ${userName}'s AI assistant JARVIS, ready to help you learn more about him! Feel free to ask me anything about:`,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollbar, setShowScrollbar] = useState(false);
  const messagesEndRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  // Default quick questions
  const quickTopics = [
    {
      icon: User,
      label: "His skills & expertise",
      question: "Tell me about Kada Mukesh's technical skills and expertise",
    },
    {
      icon: GraduationCap,
      label: "Education background",
      question: "What is Kada Mukesh's educational background?",
    },
    {
      icon: Briefcase,
      label: "Work experience",
      question: "Tell me about Kada Mukesh's work experience and internships",
    },
    {
      icon: Trophy,
      label: "Projects & achievements",
      question:
        "What are some of Kada Mukesh's notable projects and certifications?",
    },
    {
      icon: Heart,
      label: "Career objective",
      question: "What is Kada Mukesh's career objective and goals?",
    },
    {
      icon: Mail,
      label: "Contact information",
      question: "How can I get in touch with Kada Mukesh?",
    },
  ];

  // Your actual resume data
  const resumeData = {
    personalInfo: {
      fullName: "Kada Mukesh Sai Durga Kumar",
      shortName: "Kada Mukesh",
      phone: "+91-8919017738",
      email: "#2200030384cseh@gmail.com",
      linkedin: "kadamukesh",
      github: "kadamukesh",
      degree: "B.TECH(CSE)",
      university: "KL University",
    },
    careerObjective:
      "Seeking a challenging role in a dynamic organization to apply my technical and collaborative skills in building impactful software solutions and contributing to the company's success.",
    education: {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      duration: "July 2022 - May 2026",
      university: "Koneru Lakshmaiah University, Vijayawada",
      cgpa: "9.6 (Current)",
    },
    technicalSkills: {
      programmingLanguages: ["Java", "Python", "JavaScript", "C"],
      webTechnologies: [
        "HTML",
        "CSS",
        "React.js",
        "JSP",
        "JSF",
        "Django",
        "Spring",
        "Spring Boot",
      ],
      cloudDevOps: ["AWS (EC2, Lambda, RDS, S3, IAM)", "Docker"],
      developmentTools: ["Git", "GitHub", "Maven", "VS Code"],
      databases: ["MySQL", "PostgreSQL", "MongoDB"],
      businessIntelligence: ["Power BI", "Tableau"],
    },
    projects: [
      {
        name: "ERP System for Educational Institutions",
        description:
          "Designed a comprehensive full-stack ERP system enhancing academic management through seamless automation, role-based access.",
        technologies: "React, Spring Boot, MySQL, Razorpay",
        details: [
          "Integrated React, Spring Boot, and MySQL for seamless course registration, faculty mapping and Razorpay payments",
          "Developed as a team of three during a college hackathon",
          "Deployed backend on Railway.app and frontend on Vercel, ensuring efficiency and scalability",
        ],
      },
      {
        name: "University Event Management System",
        description:
          "Developed an enterprise-level event management application with role-based access using JSP, JSF, and Servlets.",
        technologies: "JSP, JSF, Servlets, Razorpay",
        details: [
          "Engineered modular architecture with three distinct modules (Admin, Faculty, Student), increasing efficiency by 40%",
          "Integrated Razorpay for seamless student registration, with Faculty issuing certificates and Students downloading them",
        ],
      },
      {
        name: "Astrology Prediction System",
        description:
          "Engineered a Django-based web platform that delivers personalized horoscope services and real-time zodiac analysis.",
        technologies: "Django, HTML, CSS, PostgreSQL",
        details: [
          "Designed an Astrology Prediction System enabling users to determine their zodiac sign based on DOB",
          "View daily and weekly horoscopes with PostgreSQL database integration",
        ],
      },
    ],
    experience: [
      {
        role: "AWS Cloud Virtual Internship",
        company: "AICTE-Eduskills (Remote)",
        duration: "Jan 2024 - Mar 2024",
        description:
          "Learned and explored AWS services, including EC2, S3, Lambda, RDS, and DynamoDB, with hands-on practical implementation.",
      },
    ],
    certifications: [
      "AWS Certified Cloud Practitioner",
      "Oracle Certified Professional: Java SE 11 Developer",
      "Red Hat Certified Enterprise Application Developer",
      "NPTEL Certification in C Programming",
    ],
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle scrollbar auto-hide after 30 seconds
  const handleScroll = () => {
    setShowScrollbar(true);
    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    // Set new timeout to hide scrollbar after 30 seconds
    scrollTimeoutRef.current = setTimeout(() => {
      setShowScrollbar(false);
    }, 3000);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const getSpecificResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    // Education specific queries
    if (
      lowerMessage.includes("education") ||
      lowerMessage.includes("study") ||
      lowerMessage.includes("university") ||
      lowerMessage.includes("college") ||
      lowerMessage.includes("clg")
    ) {
      return `**Educational Background:**
• ${resumeData.education.degree}
• ${resumeData.education.university}
• Duration: ${resumeData.education.duration}
• CGPA: ${resumeData.education.cgpa}

Kada is currently in his final year at KLU, Vijayawada, maintaining an outstanding CGPA of 9.6/10.`;
    }

    // CGPA specific
    if (
      lowerMessage.includes("cgpa") ||
      lowerMessage.includes("gpa") ||
      lowerMessage.includes("grade")
    ) {
      return `**Academic Performance:**

Kada Mukesh maintains an excellent CGPA of **9.6/10** at Koneru Lakshmaiah University. This outstanding academic performance reflects his dedication and strong understanding of computer science concepts.`;
    }

    // Skills specific queries
    if (
      lowerMessage.includes("skill") ||
      lowerMessage.includes("technical") ||
      lowerMessage.includes("programming")
    ) {
      return `**Technical Skills:**

**Programming Languages:** ${resumeData.technicalSkills.programmingLanguages.join(
        ", "
      )}

**Web Technologies:** ${resumeData.technicalSkills.webTechnologies.join(", ")}

**Cloud & DevOps:** ${resumeData.technicalSkills.cloudDevOps.join(", ")}

**Databases:** ${resumeData.technicalSkills.databases.join(", ")}

**Tools:** ${resumeData.technicalSkills.developmentTools.join(", ")}

**Business Intelligence:** ${resumeData.technicalSkills.businessIntelligence.join(
        ", "
      )}`;
    }

    // Projects specific
    if (lowerMessage.includes("project")) {
      return `**Major Projects:**

**1. ${resumeData.projects[0].name}**
${resumeData.projects[0].description}
Technologies: ${resumeData.projects[0].technologies}

**2. ${resumeData.projects[1].name}**
${resumeData.projects[1].description}
Technologies: ${resumeData.projects[1].technologies}

**3. ${resumeData.projects[2].name}**
${resumeData.projects[2].description}
Technologies: ${resumeData.projects[2].technologies}`;
    }

    // Experience/Internship specific
    if (
      lowerMessage.includes("experience") ||
      lowerMessage.includes("internship") ||
      lowerMessage.includes("aws")
    ) {
      return `**Work Experience:**

**${resumeData.experience[0].role}**
• Company: ${resumeData.experience[0].company}
• Duration: ${resumeData.experience[0].duration}
• ${resumeData.experience[0].description}

This internship provided hands-on experience with AWS cloud services including EC2, S3, Lambda, RDS, and DynamoDB.`;
    }

    // Certifications specific
    if (
      lowerMessage.includes("certification") ||
      lowerMessage.includes("certificate")
    ) {
      return `**Professional Certifications:**

${resumeData.certifications.map((cert) => `• ${cert}`).join("\n")}

These certifications demonstrate Kada's commitment to professional development and expertise in cloud computing, Java development, and programming fundamentals.`;
    }

    // Career objective specific
    if (
      lowerMessage.includes("objective") ||
      lowerMessage.includes("goal") ||
      lowerMessage.includes("career")
    ) {
      return `**Career Objective:**

${resumeData.careerObjective}

Kada is looking for opportunities to apply his strong technical foundation and collaborative skills in real-world software development projects.`;
    }

    // Contact specific
    if (
      lowerMessage.includes("contact") ||
      lowerMessage.includes("reach") ||
      lowerMessage.includes("email") ||
      lowerMessage.includes("phone")
    ) {
      return `**Contact Information:**

• **Phone:** ${resumeData.personalInfo.phone}
• **Email:** ${resumeData.personalInfo.email}
• **LinkedIn:** ${resumeData.personalInfo.linkedin}
• **GitHub:** ${resumeData.personalInfo.github}

Feel free to reach out through any of these channels for opportunities or collaborations!`;
    }

    // Name/About specific
    if (
      lowerMessage.includes("name") ||
      lowerMessage.includes("who") ||
      lowerMessage.includes("about")
    ) {
      return `**About ${resumeData.personalInfo.fullName}:**

Kada is a final year B.Tech CSE student at KLU, Vijayawada with an outstanding CGPA of 9.6. He's passionate about full-stack development and has hands-on experience with modern web technologies and cloud computing.

**Quick Facts:**
• Final Year B.Tech CSE Student
• CGPA: 9.6/10
• AWS Certified Cloud Practitioner
• Full-stack Developer`;
    }

    // University specific
    if (
      lowerMessage.includes("klu") ||
      lowerMessage.includes("koneru") ||
      lowerMessage.includes("lakshmaiah")
    ) {
      return `**About KLU:**

Kada attends Koneru Lakshmaiah University, Vijayawada for his B.Tech in Computer Science & Engineering (2022-2026). He's currently maintaining an excellent CGPA of 9.6/10 and is in his final year.

KLU is known for its quality technical education and strong industry connections.`;
    }

    // Default response
    return `I can help you learn about Kada Mukesh! Ask me about:

• His education and CGPA at KLU
• Contact information: Mobile No:8919017738 Email:mukeshkada2@gmail.com

What would you like to know specifically? 😊`;
  };

  const handleSendMessage = async (message = inputValue) => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: message,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = getSpecificResponse(message);
      const botMessage = {
        id: Date.now() + 1,
        type: "bot",
        content: response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1200);
  };

  const handleTopicClick = (question) => {
    handleSendMessage(question);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center space-x-2 group overflow-hidden border"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: `linear-gradient(135deg, ${theme.colors.surface} 0%, ${theme.colors.primary} 50%, ${theme.colors.accent} 100%)`,
          boxShadow: `0 0 20px color-mix(in srgb, ${theme.colors.primary} 40%, transparent), 0 0 40px color-mix(in srgb, ${theme.colors.primary} 20%, transparent)`,
          borderColor: `color-mix(in srgb, ${theme.colors.primary} 30%, transparent)`,
          color: theme.colors.text,
        }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(to right, color-mix(in srgb, ${theme.colors.primary} 20%, transparent), color-mix(in srgb, ${theme.colors.accent} 20%, transparent))`,
          }}
        />
        <Bot
          size={20}
          className="transition-colors duration-300 relative z-10"
          style={{ color: theme.colors.textSecondary }}
        />
        <span className="text-sm font-medium transition-colors duration-300 relative z-10">
          Chat with AI
        </span>
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
          style={{ backgroundColor: theme.colors.accent }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
      </motion.button>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed inset-4 z-50 rounded-lg shadow-2xl border overflow-hidden flex flex-col"
            style={{
              maxWidth: "800px",
              maxHeight: "600px",
              margin: "auto",
              background: `linear-gradient(135deg, ${theme.colors.background} 0%, ${theme.colors.surface} 50%, color-mix(in srgb, ${theme.colors.surface} 80%, ${theme.colors.primary} 20%) 100%)`,
              boxShadow: `0 0 50px color-mix(in srgb, ${theme.colors.primary} 30%, transparent), 0 0 100px color-mix(in srgb, ${theme.colors.primary} 10%, transparent)`,
              borderColor: `color-mix(in srgb, ${theme.colors.primary} 30%, transparent)`,
            }}
          >
            {/* Header */}
            <div
              className="border-b p-4 flex items-center justify-between"
              style={{
                background: `linear-gradient(135deg, ${theme.colors.surface} 0%, color-mix(in srgb, ${theme.colors.surface} 80%, ${theme.colors.primary} 20%) 50%, color-mix(in srgb, ${theme.colors.surface} 60%, ${theme.colors.primary} 40%) 100%)`,
                borderBottomColor: `color-mix(in srgb, ${theme.colors.primary} 30%, transparent)`,
              }}
            >
              <div className="flex items-center space-x-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.accent} 50%, ${theme.colors.secondary} 100%)`,
                  }}
                >
                  <Bot size={18} style={{ color: theme.colors.text }} />
                </div>
                <div>
                  <h3
                    className="font-semibold text-lg"
                    style={{ color: theme.colors.text }}
                  >
                    Chat with{" "}
                    <span style={{ color: theme.colors.primary }}>JARVIS</span>{" "}
                    My Personal AI Assistance
                  </h3>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="transition-colors duration-300 p-1 rounded-full"
                style={{
                  color: theme.colors.text,
                  ":hover": {
                    color: theme.colors.primary,
                    backgroundColor: `color-mix(in srgb, ${theme.colors.primary} 20%, transparent)`,
                  },
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = theme.colors.primary;
                  e.target.style.backgroundColor = `color-mix(in srgb, ${theme.colors.primary} 20%, transparent)`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = theme.colors.text;
                  e.target.style.backgroundColor = "transparent";
                }}
              >
                <X size={24} />
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto p-4 space-y-4"
              style={{
                background: `linear-gradient(135deg, ${theme.colors.background} 0%, ${theme.colors.surface} 50%, color-mix(in srgb, ${theme.colors.surface} 80%, ${theme.colors.primary} 20%) 100%)`,
                scrollbarWidth: showScrollbar ? "thin" : "none",
                scrollbarColor: showScrollbar
                  ? `color-mix(in srgb, ${theme.colors.primary} 50%, transparent) transparent`
                  : "transparent",
              }}
              onScroll={handleScroll}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  width: ${showScrollbar ? "6px" : "0px"};
                  transition: width 0.3s ease;
                }
                div::-webkit-scrollbar-track {
                  background: transparent;
                }
                div::-webkit-scrollbar-thumb {
                  background: ${showScrollbar
                    ? `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.accent})`
                    : "transparent"};
                  border-radius: 3px;
                  transition: background 0.3s ease;
                }
                div::-webkit-scrollbar-thumb:hover {
                  background: ${showScrollbar
                    ? `linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.secondary})`
                    : "transparent"};
                }
              `}</style>

              {messages.map((message) => (
                <div key={message.id} className="space-y-2">
                  <div
                    className={`flex ${
                      message.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[70%] p-4 rounded-lg border transition-all duration-300 hover:shadow-lg`}
                      style={{
                        background:
                          message.type === "user"
                            ? `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.accent} 50%, ${theme.colors.secondary} 100%)`
                            : `linear-gradient(135deg, ${theme.colors.surface} 0%, color-mix(in srgb, ${theme.colors.surface} 80%, ${theme.colors.primary} 20%) 50%, color-mix(in srgb, ${theme.colors.surface} 60%, ${theme.colors.primary} 40%) 100%)`,
                        boxShadow:
                          message.type === "user"
                            ? `0 4px 15px color-mix(in srgb, ${theme.colors.primary} 30%, transparent)`
                            : `0 4px 15px color-mix(in srgb, ${theme.colors.primary} 10%, transparent)`,
                        borderColor:
                          message.type === "user"
                            ? `color-mix(in srgb, ${theme.colors.primary} 50%, transparent)`
                            : `color-mix(in srgb, ${theme.colors.primary} 30%, transparent)`,
                        color: theme.colors.text,
                      }}
                    >
                      <p className="text-sm whitespace-pre-wrap leading-relaxed">
                        {message.content}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`flex ${
                      message.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <span
                      className="text-xs px-2"
                      style={{ color: theme.colors.textSecondary }}
                    >
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                </div>
              ))}

              {/* Quick Topic Buttons - Show only after initial message */}
              {messages.length === 1 && (
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {quickTopics.map((topic, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleTopicClick(topic.question)}
                      className="p-3 rounded-xl transition-all duration-300 text-left group border hover:shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        background: `linear-gradient(135deg, ${theme.colors.surface} 0%, color-mix(in srgb, ${theme.colors.surface} 80%, ${theme.colors.primary} 20%) 50%, color-mix(in srgb, ${theme.colors.surface} 60%, ${theme.colors.primary} 40%) 100%)`,
                        borderColor: `color-mix(in srgb, ${theme.colors.primary} 30%, transparent)`,
                        boxShadow: `0 2px 10px color-mix(in srgb, ${theme.colors.primary} 10%, transparent)`,
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = `linear-gradient(135deg, color-mix(in srgb, ${theme.colors.surface} 60%, ${theme.colors.primary} 40%) 0%, ${theme.colors.primary} 50%, ${theme.colors.accent} 100%)`;
                        e.target.style.borderColor = `color-mix(in srgb, ${theme.colors.primary} 60%, transparent)`;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = `linear-gradient(135deg, ${theme.colors.surface} 0%, color-mix(in srgb, ${theme.colors.surface} 80%, ${theme.colors.primary} 20%) 50%, color-mix(in srgb, ${theme.colors.surface} 60%, ${theme.colors.primary} 40%) 100%)`;
                        e.target.style.borderColor = `color-mix(in srgb, ${theme.colors.primary} 30%, transparent)`;
                      }}
                    >
                      <div className="flex items-center space-x-2">
                        <topic.icon
                          size={16}
                          className="transition-colors"
                          style={{ color: theme.colors.primary }}
                        />
                        <span
                          className="text-xs transition-colors"
                          style={{ color: theme.colors.textSecondary }}
                        >
                          {topic.label}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}

              {isLoading && (
                <div className="flex justify-start">
                  <div
                    className="border p-4 rounded-lg"
                    style={{
                      background: `linear-gradient(135deg, ${theme.colors.surface} 0%, color-mix(in srgb, ${theme.colors.surface} 80%, ${theme.colors.primary} 20%) 50%, color-mix(in srgb, ${theme.colors.surface} 60%, ${theme.colors.primary} 40%) 100%)`,
                      borderColor: `color-mix(in srgb, ${theme.colors.primary} 30%, transparent)`,
                    }}
                  >
                    <div className="flex space-x-1">
                      <motion.div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: theme.colors.primary }}
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: 0,
                        }}
                      />
                      <motion.div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: theme.colors.primary }}
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: 0.2,
                        }}
                      />
                      <motion.div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: theme.colors.primary }}
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: 0.4,
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div
              className="p-4 border-t"
              style={{
                background: `linear-gradient(135deg, ${theme.colors.surface} 0%, color-mix(in srgb, ${theme.colors.surface} 80%, ${theme.colors.primary} 20%) 50%, color-mix(in srgb, ${theme.colors.surface} 60%, ${theme.colors.primary} 40%) 100%)`,
                borderTopColor: `color-mix(in srgb, ${theme.colors.primary} 30%, transparent)`,
              }}
            >
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 border rounded-lg px-4 py-3 text-sm transition-all duration-300 focus:outline-none"
                  style={{
                    background: `linear-gradient(135deg, ${theme.colors.background} 0%, ${theme.colors.surface} 50%, color-mix(in srgb, ${theme.colors.surface} 80%, ${theme.colors.primary} 20%) 100%)`,
                    borderColor: `color-mix(in srgb, ${theme.colors.primary} 30%, transparent)`,
                    color: theme.colors.text,
                    "::placeholder": {
                      color: theme.colors.textSecondary,
                    },
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = theme.colors.primary;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = `color-mix(in srgb, ${theme.colors.primary} 30%, transparent)`;
                  }}
                  disabled={isLoading}
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isLoading}
                  className="p-3 rounded-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: !inputValue.trim()
                      ? `linear-gradient(135deg, ${theme.colors.border} 0%, color-mix(in srgb, ${theme.colors.border} 80%, ${theme.colors.surface} 20%) 100%)`
                      : `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.accent} 50%, ${theme.colors.secondary} 100%)`,
                    boxShadow: !inputValue.trim()
                      ? "none"
                      : `0 4px 15px color-mix(in srgb, ${theme.colors.primary} 30%, transparent)`,
                    color: theme.colors.text,
                  }}
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default JarvisChatbot;
