"use client";

import { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Certfication from "./components/Certifications/Certfication.jsx";
import Work from "./components/Work/Work.jsx";
import Education from "./components/Education/Education.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import BlurBlob from "./BlurBlob.jsx";
import JarvisChatbot from "./JarvisChatBot.jsx";
import WelcomeLoading from "./WelcomeLoading.jsx";

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const cursorRef = useRef(null);
  const trailRef = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const cursor = document.createElement("div");
    cursor.id = "purple-cursor";
    cursor.innerHTML = `
      <div class="cursor-outer-ring"></div>
      <div class="cursor-inner-ring"></div>
      <div class="cursor-core"></div>
      <div class="cursor-particles">
        <span class="particle p1"></span>
        <span class="particle p2"></span>
        <span class="particle p3"></span>
        <span class="particle p4"></span>
      </div>
      <div class="cursor-ripple"></div>
    `;

    cursor.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      pointer-events: none;
      z-index: 9999;
      width: 50px;
      height: 50px;
    `;

    document.body.appendChild(cursor);
    cursorRef.current = cursor;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (Math.random() > 0.7) createTrailParticle(e.clientX, e.clientY);
    };

    const animateCursor = () => {
      const dx = mousePos.current.x - cursorPos.current.x;
      const dy = mousePos.current.y - cursorPos.current.y;

      cursorPos.current.x += dx * 0.15;
      cursorPos.current.y += dy * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${
          cursorPos.current.x - 25
        }px, ${cursorPos.current.y - 25}px)`;
      }

      requestAnimationFrame(animateCursor);
    };

    const createTrailParticle = (x, y) => {
      const trail = document.createElement("div");
      trail.className = "cursor-trail-particle";
      trail.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: ${Math.random() * 6 + 2}px;
        height: ${Math.random() * 6 + 2}px;
        background: linear-gradient(45deg, var(--color-primary), var(--color-accent), var(--color-secondary));
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        animation: trailParticleFade ${
          Math.random() * 1 + 0.5
        }s ease-out forwards;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 10px var(--color-primary);
      `;

      document.body.appendChild(trail);
      setTimeout(() => trail.remove(), 1500);
    };

    const handleClick = (e) => createClickRipple(e.clientX, e.clientY);

    const createClickRipple = (x, y) => {
      const ripple = document.createElement("div");
      ripple.className = "click-ripple";
      ripple.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 0;
        height: 0;
        border: 2px solid var(--color-primary);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9997;
        animation: clickRippleExpand 0.6s ease-out forwards;
        transform: translate(-50%, -50%);
      `;

      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    animateCursor();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      if (cursorRef.current) cursorRef.current.remove();
      document
        .querySelectorAll(".cursor-trail-particle, .click-ripple")
        .forEach((el) => el.remove());
    };
  }, [isLoading]);

  if (isLoading) {
    return <WelcomeLoading />;
  }

  return (
    <div className="bg-[var(--color-background)] cursor-none overflow-x-hidden transition-colors duration-300">
      {/* Purple Animated Cursor Styles */}
      <style>{`
        #purple-cursor {
          transform-origin: center;
        }
        
        .cursor-outer-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40px;
          height: 40px;
          border: 2px solid color-mix(in srgb, var(--color-primary) 30%, transparent);
          border-radius: 50%;
          animation: outerRingRotate 4s linear infinite, outerRingPulse 2s ease-in-out infinite;
        }
        
        .cursor-inner-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 25px;
          height: 25px;
          border: 2px solid color-mix(in srgb, var(--color-accent) 60%, transparent);
          border-radius: 50%;
          animation: innerRingRotate 3s linear infinite reverse, innerRingPulse 1.5s ease-in-out infinite;
        }
        
        .cursor-core {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 12px;
          height: 12px;
          background: linear-gradient(45deg, var(--color-primary), var(--color-accent), var(--color-secondary));
          background-size: 300% 300%;
          border-radius: 50%;
          animation: coreGradientShift 3s ease-in-out infinite, corePulse 2s ease-in-out infinite;
          box-shadow: 
            0 0 15px color-mix(in srgb, var(--color-primary) 80%, transparent),
            0 0 30px color-mix(in srgb, var(--color-primary) 40%, transparent),
            inset 0 0 8px color-mix(in srgb, var(--color-accent) 60%, transparent);
        }
        
        .cursor-particles {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 50px;
          height: 50px;
        }
        
        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: linear-gradient(45deg, var(--color-primary), var(--color-secondary));
          border-radius: 50%;
          box-shadow: 0 0 8px color-mix(in srgb, var(--color-primary) 80%, transparent);
        }
        
        .p1 {
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          animation: orbit1 5s linear infinite;
        }
        
        .p2 {
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          animation: orbit2 5s linear infinite 1.25s;
        }
        
        .p3 {
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          animation: orbit3 5s linear infinite 2.5s;
        }
        
        .p4 {
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          animation: orbit4 5s linear infinite 3.75s;
        }
        
        .cursor-ripple {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          border: 1px solid color-mix(in srgb, var(--color-primary) 20%, transparent);
          border-radius: 50%;
          animation: rippleExpand 3s ease-out infinite;
        }
        
        /* Animations */
        @keyframes outerRingRotate {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes innerRingRotate {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        
        @keyframes outerRingPulse {
          0%, 100% { 
            border-color: color-mix(in srgb, var(--color-primary) 30%, transparent);
            transform: translate(-50%, -50%) scale(1);
          }
          50% { 
            border-color: color-mix(in srgb, var(--color-primary) 70%, transparent);
            transform: translate(-50%, -50%) scale(1.1);
          }
        }
        
        @keyframes innerRingPulse {
          0%, 100% { 
            border-color: color-mix(in srgb, var(--color-accent) 60%, transparent);
            transform: translate(-50%, -50%) scale(1);
          }
          50% { 
            border-color: var(--color-accent);
            transform: translate(-50%, -50%) scale(1.2);
          }
        }
        
        @keyframes coreGradientShift {
          0%, 100% { 
            background-position: 0% 50%;
          }
          50% { 
            background-position: 100% 50%;
          }
        }
        
        @keyframes corePulse {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1);
            box-shadow: 
              0 0 15px color-mix(in srgb, var(--color-primary) 80%, transparent),
              0 0 30px color-mix(in srgb, var(--color-primary) 40%, transparent),
              inset 0 0 8px color-mix(in srgb, var(--color-accent) 60%, transparent);
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.3);
            box-shadow: 
              0 0 25px var(--color-primary),
              0 0 50px color-mix(in srgb, var(--color-primary) 60%, transparent),
              0 0 75px color-mix(in srgb, var(--color-primary) 30%, transparent),
              inset 0 0 12px color-mix(in srgb, var(--color-accent) 80%, transparent);
          }
        }
        
        @keyframes orbit1 {
          0% { transform: translateX(-50%) rotate(0deg) translateX(20px) rotate(0deg); }
          100% { transform: translateX(-50%) rotate(360deg) translateX(20px) rotate(-360deg); }
        }
        
        @keyframes orbit2 {
          0% { transform: translateY(-50%) rotate(0deg) translateY(20px) rotate(0deg); }
          100% { transform: translateY(-50%) rotate(360deg) translateY(20px) rotate(-360deg); }
        }
        
        @keyframes orbit3 {
          0% { transform: translateX(-50%) rotate(0deg) translateX(20px) rotate(0deg); }
          100% { transform: translateX(-50%) rotate(360deg) translateX(20px) rotate(-360deg); }
        }
        
        @keyframes orbit4 {
          0% { transform: translateY(-50%) rotate(0deg) translateY(20px) rotate(0deg); }
          100% { transform: translateY(-50%) rotate(360deg) translateY(20px) rotate(-360deg); }
        }
        
        @keyframes rippleExpand {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }
        
        @keyframes trailParticleFade {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0) translateY(-20px);
          }
        }
        
        @keyframes clickRippleExpand {
          0% {
            width: 0;
            height: 0;
            opacity: 1;
          }
          100% {
            width: 100px;
            height: 100px;
            opacity: 0;
          }
        }
        
        /* Hover effects for interactive elements */
        button:hover ~ #purple-cursor,
        a:hover ~ #purple-cursor,
        [role="button"]:hover ~ #purple-cursor {
          animation: hoverEffect 0.3s ease-out forwards;
        }
        
        button:hover ~ #purple-cursor .cursor-core,
        a:hover ~ #purple-cursor .cursor-core,
        [role="button"]:hover ~ #purple-cursor .cursor-core {
          transform: translate(-50%, -50%) scale(1.5) !important;
          background: linear-gradient(45deg, var(--color-secondary), var(--color-accent), var(--color-primary));
        }
        
        /* Section-specific cursor variations */
        .about-section:hover ~ #purple-cursor .cursor-core {
          background: linear-gradient(45deg, var(--color-primary), #06b6d4, #10b981);
        }
        
        .skills-section:hover ~ #purple-cursor .cursor-core {
          background: linear-gradient(45deg, var(--color-primary), #f59e0b, #ef4444);
        }
        
        .projects-section:hover ~ #purple-cursor .cursor-core {
          background: linear-gradient(45deg, var(--color-primary), #ec4899, #f97316);
        }
        
        .contact-section:hover ~ #purple-cursor .cursor-core {
          background: linear-gradient(45deg, var(--color-primary), #3b82f6, #06b6d4);
        }
        
        /* Mobile responsiveness */
        @media (max-width: 768px) {
          #purple-cursor,
          .cursor-trail-particle,
          .click-ripple {
            display: none !important;
          }
        }
        
        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          #purple-cursor *,
          .cursor-trail-particle,
          .click-ripple {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Optional Blur Animation */}
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />

      {/* Grid lines background */}
      <div
        className="absolute inset-0 bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        style={{
          backgroundImage: `linear-gradient(to right, color-mix(in srgb, var(--color-border) 50%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--color-border) 50%, transparent) 1px, transparent 1px)`,
        }}
      ></div>

      <div className="relative pt-1">
        <Navbar />
        <div className="about-section">
          <About />
        </div>
        <div className="skills-section">
          <Skills />
        </div>
        <Certfication />
        <div className="projects-section">
          <Work />
        </div>
        <Education />
        <div className="contact-section">
          <Contact />
        </div>
        <Footer />
      </div>

      {/* JARVIS Chatbot */}
      <JarvisChatbot userName="Kada Mukesh" />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
