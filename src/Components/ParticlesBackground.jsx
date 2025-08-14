import React from "react";

const PART_COUNT = 7; // keep small for mobile perf

export default function ParticlesBackground() {
  const parts = Array.from({ length: PART_COUNT });
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {parts.map((_, i) => {
        const left = 5 + i * (80 / PART_COUNT) + Math.random() * 6;
        const size = 40 + Math.round(Math.random() * 30);
        const dur = 8 + Math.round(Math.random() * 8);
        return (
          <div
            key={i}
            className="absolute rounded-full opacity-40 blur-sm"
            style={{
              left: `${left}%`,
              top: `${10 + Math.random() * 70}%`,
              width: `${size}px`,
              height: `${size}px`,
              background:
                "linear-gradient(135deg, rgba(255,220,230,0.45), rgba(255,240,230,0.25))",
              transform: "translateY(0)",
              animation: `floatY ${dur}s ease-in-out ${i % 2 ? "reverse" : "normal"} infinite`,
            }}
          />
        );
      })}
    </div>
  );
}
