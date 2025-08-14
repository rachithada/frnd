import React, { useState, useEffect, useRef } from "react";

export default function Typewriter({ text, speed = 100, className = "" }) {
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0); // index ko persist karne ke liye

  useEffect(() => {
    setDisplayedText("");      // Reset text
    indexRef.current = -1;       // Reset index

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(indexRef.current));
      indexRef.current += 1;

      if (indexRef.current >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval); // cleanup
  }, [text, speed]);

  return <span className={className}>{displayedText}</span>;
}
