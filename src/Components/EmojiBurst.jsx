import React from "react";
import { motion } from "framer-motion";

export default function EmojiBurst({ trigger }) {
  const [bursts, setBursts] = React.useState([]);

  React.useEffect(() => {
    if (!trigger) return;
    const emojis = ["💛", "✨", "🌸", "😊", "🌟", "💖", "💕", "MOTU"];
    const newBurst = Array.from({ length: 8 }).map(() => ({
      id: Math.random().toString(36).slice(2),
      left: Math.random() * 80 + 10, // random horizontal start
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      sway: Math.random() * 60 - 30, // random side sway
      speed: 5 + Math.random() * 1, // random falling speed
    }));
    setBursts(newBurst);

    const t = setTimeout(() => setBursts([]), 2000);
    return () => clearTimeout(t);
  }, [trigger]);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {bursts.map((b) => (
        <motion.span
          key={b.id}
          initial={{ opacity: 1, y: -40, scale: 1 }}
          animate={{
            opacity: 0,
            y: window.innerHeight, // full height fall
            x: b.sway, // side sway
            scale: 1.2
          }}
          transition={{ duration: b.speed, ease: "easeOut" }}
          style={{ left: `${b.left}%` }}
          className="absolute text-2xl"
        >
          {b.emoji}
        </motion.span>
      ))}
    </div>
  );
}
