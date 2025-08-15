import React from "react";
import { motion } from "framer-motion";

export default function FinalPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 to-purple-200 px-6 text-center">
      
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl font-bold text-purple-700 mb-4"
      >
        And that’s where my little website to make you feel happy rests... 🌸
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg sm:text-xl text-gray-700 max-w-xl"
      >
        Some journeys don’t end, they just find a place in the heart  
        — and stay there, quietly, forever. 💖
        (No more breakdowns 😁)
      </motion.p>
    </div>
  );
}
