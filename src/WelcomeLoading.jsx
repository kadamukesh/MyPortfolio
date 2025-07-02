"use client";

import { useState, useEffect } from "react";

export default function LoadingPage() {
  const [typedText, setTypedText] = useState("");
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const messages = ["Initializing ...", "Welcome to My Space"];

  // Navigate to about section after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      <a href="#about"></a>;
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // Typing effect
  useEffect(() => {
    if (currentMessageIndex < messages.length) {
      const currentMessage = messages[currentMessageIndex];
      let charIndex = 0;
      setTypedText("");

      const typingInterval = setInterval(() => {
        if (charIndex < currentMessage.length) {
          setTypedText(currentMessage.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typingInterval);

          setTimeout(() => {
            if (currentMessageIndex < messages.length - 1) {
              setCurrentMessageIndex((prev) => prev + 1);
            }
          }, 2000);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }
  }, [currentMessageIndex]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center overflow-hidden">
      {/* Matrix rain effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={`matrix-${i}`}
            className="absolute text-green-400 font-mono text-sm opacity-30"
            style={{
              left: `${i * 5}%`,
              animation: `matrix-rain ${
                3 + Math.random() * 4
              }s linear infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            {Array.from({ length: 20 }, () =>
              Math.random() > 0.5 ? "1" : "0"
            ).join("")}
          </div>
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute bg-purple-400 rounded-full opacity-40"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-particle ${
                5 + Math.random() * 10
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={`shape-${i}`}
            className="absolute border border-purple-500/20"
            style={{
              width: `${50 + Math.random() * 100}px`,
              height: `${50 + Math.random() * 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `rotate-shape ${
                10 + Math.random() * 20
              }s linear infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl animate-pulse-glow-delayed"></div>
        <div className="absolute top-3/4 left-3/4 w-24 h-24 bg-pink-600/20 rounded-full blur-3xl animate-pulse-glow-slow"></div>
      </div>

      {/* Scanning lines */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-scan-horizontal"></div>
        <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-scan-vertical"></div>
      </div>

      {/* Main content - Smaller text that matches background */}
      <div className="text-center z-10 relative">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl md:text-4xl font-bold font-mono relative">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 animate-gradient-text">
              {typedText}
            </span>
            <span className="absolute inset-0 text-gray-500 blur-sm opacity-30 animate-glow-pulse">
              {typedText}
            </span>
            <span
              className={`text-gray-400 ${
                showCursor ? "opacity-100" : "opacity-0"
              } transition-opacity animate-pulse ml-1`}
            >
              |
            </span>
          </h1>
        </div>
      </div>

      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-purple-500/50 animate-bracket-glow"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-purple-500/50 animate-bracket-glow"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-purple-500/50 animate-bracket-glow"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-purple-500/50 animate-bracket-glow"></div>

      {/* Overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-purple-900/10 pointer-events-none animate-wave"></div>
    </div>
  );
}
