"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3.5 rounded-xl z-50 group transition-all duration-300"
          style={{
            background: "rgba(17,17,19,0.8)",
            border: "1px solid rgba(201,169,110,0.15)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
          }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.92 }}
          aria-label="Scroll to top"
        >
          <ArrowUp
            size={18}
            strokeWidth={1.5}
            style={{ color: "#c9a96e" }}
            className="group-hover:-translate-y-0.5 transition-transform duration-300"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
