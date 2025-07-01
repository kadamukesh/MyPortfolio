"use client";
import { useState } from "react";
import { PiCertificate } from "react-icons/pi";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext.jsx";

import ac from "../../assets/c_logo/ac.png";
import lc from "../../assets/c_logo/lc.png";
import oc from "../../assets/c_logo/oc.jpg";
import rc from "../../assets/c_logo/rc.png";
import sc from "../../assets/c_logo/sc.png";
import vc from "../../assets/c_logo/vc.jpg";

const Certification = () => {
  const { theme } = useTheme();
  const [hoveredCard, setHoveredCard] = useState(null);

  const certifications = [
    {
      id: 1,
      name: "AWS Certified Cloud Practitioner",
      logo: ac,
      bgColor: "from-gray-700 to-black",
      redirectUrl:
        "https://www.credly.com/badges/bbf24232-1fb8-477c-9fe5-b78a58bf2d8a/public_url",
    },
    {
      id: 2,
      name: "REDHAT EX183 Certified",
      logo: rc,
      bgColor: "from-red-900 to-black",
      redirectUrl:
        "https://www.credly.com/badges/906199f0-5cea-42b2-997a-69942ed4ad73/public_url",
    },
    {
      id: 3,
      name: "Oracle Certified Professional",
      logo: oc,
      bgColor: "from-red-700 to-black",
      redirectUrl:
        "https://drive.google.com/file/d/1IfFfaUISHto7runzzqMZRLPeBnQaQx4V/view?usp=sharing",
    },
    {
      id: 4,
      name: "Linguaskill",
      logo: lc,
      bgColor: "from-yellow-400 to-black",
      redirectUrl:
        "https://drive.google.com/file/d/1Kw0mmWo61sStjRZrzVbiZVPd3lCYcswU/view?usp=sharing",
    },
    {
      id: 5,
      name: "Cloud Virtual Internship",
      logo: vc,
      bgColor: "from-indigo-600 to-black",
      redirectUrl:
        "https://drive.google.com/file/d/18z_fTp9iNLp5Za8b5DnMtDAc2dZjdI3z/view?usp=sharing",
    },
    {
      id: 6,
      name: "Sales Force",
      logo: sc,
      bgColor: "from-sky-500 to-black",
      redirectUrl:
        "https://drive.google.com/file/d/1OJxNWQS3ELPU1qTl-mPRKw9OwWxRR_U1/view?usp=sharing",
    },
  ];

  return (
    <section
      id="certification"
      className="py-4 px-4 min-h-screen"
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: theme.colors.text }}
          >
            Certifications
          </h2>
          <p className="text-lg" style={{ color: theme.colors.textSecondary }}>
            Professional certifications and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.redirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredCard(cert.id)}
              onMouseLeave={() => setHoveredCard(null)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={`relative overflow-hidden rounded-xl p-6 h-72
                  bg-gradient-to-br ${cert.bgColor}
                  border transform transition-all duration-300 ease-in-out
                  hover:scale-105 shadow-xl`}
                style={{
                  borderColor:
                    hoveredCard === cert.id
                      ? theme.colors.hover
                      : theme.colors.border,
                  boxShadow:
                    hoveredCard === cert.id
                      ? `0 0 15px ${theme.colors.primary}88`
                      : "none",
                }}
              >
                {/* Certificate Logo */}
                <div className="flex items-center justify-center h-40 mb-4">
                  <img
                    src={cert.logo || "/placeholder.svg"}
                    alt={`${cert.name} logo`}
                    className="w-32 h-32 object-contain filter brightness-110"
                  />
                </div>

                {/* Certificate Name */}
                <div className="text-center">
                  <h3
                    className="font-semibold text-sm leading-tight"
                    style={{ color: theme.colors.text }}
                  >
                    {cert.name}
                  </h3>
                </div>

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 
                  bg-gradient-to-br from-black/30 to-black/50 
                  flex items-center justify-center
                  transition-opacity duration-300 ease-in-out
                  ${hoveredCard === cert.id ? "opacity-100" : "opacity-0"}`}
                >
                  <div className="text-center">
                    <PiCertificate
                      className="w-8 h-8 mx-auto mb-2"
                      style={{ color: theme.colors.text }}
                    />
                    <span
                      className="font-bold text-lg tracking-wider"
                      style={{ color: theme.colors.text }}
                    >
                      VIEW
                    </span>
                  </div>
                </div>

                {/* Decorative dots */}
                <div className="absolute top-4 right-4 opacity-20">
                  <div className="grid grid-cols-3 gap-1">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: theme.colors.text }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
