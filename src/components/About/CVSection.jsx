import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CVSection = () => {
  const [showCV, setShowCV] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowCV(!showCV)}
        className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105"
        style={{
          background: "linear-gradient(90deg, #8245ec, #a855f7)",
          boxShadow: "0 0 4px #a855f7, 0 0 10px #8245ec, 0 0 20px #8245ec",
        }}
      >
        {showCV ? "HIDE CV" : "VIEW CV"}
      </button>

      <AnimatePresence>
        {showCV && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="mt-6 border-2 border-[#8245ec] rounded-lg overflow-auto shadow-lg"
            style={{ height: "500px" }}
          >
            <iframe
              src="https://drive.google.com/file/d/1Ilcxyn7qTauLE6Rk76UFO6q6dVwBRHjK/preview"
              title="CV Preview"
              className="w-full h-full"
            ></iframe>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CVSection;
