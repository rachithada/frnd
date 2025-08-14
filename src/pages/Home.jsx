import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Typewriter from '../Components/Typewriter'
import NextButton from "../Components/NextButton";
import EmojiBurst from "../Components/EmojiBurst";
import ParticlesBackground from "../Components/ParticlesBackground";
import rashiPic from "../assets/rashi.png";

export default function Home() {
  const [muted, setMuted] = useState(true);
  const audioRef = useRef(null);
  const [burstKey, setBurstKey] = useState(0);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;
    if (muted) audioRef.current.pause();
    else audioRef.current.play().catch(() => {});
  }, [muted]);

  const handleImageClick = () => {
    setBurstKey(prev => prev + 1);
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
  };

  // respects prefers-reduced-motion
  const reduceMotion = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 pb-24 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-blue-900/20">
      <ParticlesBackground />

      {/* Main content container with glass effect */}
      <motion.div 
        className="relative z-10 backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center max-w-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Typewriter
                text="Hey Rashi 💛"
                speed={90}
                className="text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg"
            />


          </motion.div>
          
          <motion.p 
            className="mt-4 text-base opacity-90 text-pink-500 font-medium tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Made just for you — tap the photo for a little surprise ✨
          </motion.p>
        </div>

        <motion.div
          className="mt-10 flex justify-center relative"
          whileTap={!reduceMotion ? { scale: 0.95 } : {}}
          whileHover={!reduceMotion ? { scale: 1.05 } : {}}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          {/* Floating hearts around image - positioned outside the container */}
          <div className="absolute -top-8 -right-8 text-pink-400 text-2xl animate-bounce delay-300 z-20">💖</div>
          <div className="absolute -bottom-8 -left-8 text-yellow-400 text-xl animate-pulse delay-700 z-20">✨</div>
          <div className="absolute top-1/2 -left-12 text-purple-400 text-lg animate-bounce delay-1000 z-20">💜</div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 text-pink-300 text-sm animate-pulse delay-500 z-20">🌟</div>

          <div
            onClick={handleImageClick}
            className={`relative w-64 h-64 rounded-full overflow-hidden cursor-pointer shadow-2xl transition-all duration-300 ${
              clicked ? 'shadow-pink-500/50 shadow-3xl' : 'shadow-purple-500/30'
            }`}
            role="button"
            aria-label="Tap for surprise"
          >
            {/* Animated border rings */}
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 rounded-full animate-spin-slow opacity-60 blur-sm"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 rounded-full animate-pulse"></div>
            
            {/* Image container */}
            <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100">
              <img 
                src={rashiPic} 
                alt="Rashi" 
                className="w-full h-full object-cover transition-all duration-300 hover:scale-110" 
              />
              
              {/* Magical overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/20 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 via-transparent to-purple-400/20 pointer-events-none animate-pulse"></div>
              
              {/* Border sparkle effect on click - only around the edge */}
              {clicked && (
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-yellow-300 via-pink-300 to-purple-300"
                  style={{
                    background: `linear-gradient(45deg, 
                      rgba(252, 211, 77, 0.8) 0%, 
                      rgba(251, 113, 133, 0.8) 50%, 
                      rgba(196, 181, 253, 0.8) 100%
                    )`,
                    WebkitMask: 'radial-gradient(circle, transparent 120px, black 122px, black 130px, transparent 132px)',
                    mask: 'radial-gradient(circle, transparent 120px, black 122px, black 130px, transparent 132px)'
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: [0, 1, 0], 
                    scale: [0.9, 1.1, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 0.8 }}
                />
              )}
            </div>
          </div>


        </motion.div>

        <EmojiBurst trigger={burstKey} />

        {/* Enhanced next button container */}
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <NextButton to="/letters" />
        </motion.div>
      </motion.div>

      {/* Custom CSS for slow spin animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}