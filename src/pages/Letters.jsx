import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

// Mock components for demo
const ParticlesBackground = () => (
  <div className="fixed inset-0 -z-10 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
    <div className="absolute inset-0 bg-black/20"></div>
    {/* Floating orbs for ambient effect */}
    <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400/10 rounded-full blur-xl animate-pulse"></div>
    <div className="absolute bottom-32 right-16 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-pink-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
  </div>
);

const NextButton = ({ to }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.5, duration: 0.6, ease: "backOut" }}
    className="fixed bottom-8 left-1/2 transform -translate-x-1/2"
  >
    <Link
      to={to}
      className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
    >
      <span>Continue</span>
      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </Link>
  </motion.div>
);

export default function Letters() {
  const lines = [
    "Oye Rashi, kabhi kabhi din achhe nahi jaate, aur kisi cheez ki tension bahut ho jaati hai… par fikar mat kar, sab kuch normal hai.",
    "Motu, ek baat yaad rakhna… tu iss duniya ke liye, apne parents ke liye, aur mere liye bhi bahut important hai. Tere hone se sach mein bahut farq padta hai.",
    "Teri chhoti si hasi bhi kisi ka din banaa deti hogi 😊",
    "Tere andar himmat hai, Motu… tu sab kuch kar sakti hai. Bas thodi si chingari chahiye jo sab shuru kar de 🔥",
    "Tu bas khud pe bharosa rakh, skills aur exam sab acha hoga. Aur haan, comeback bhi karna hai — tune hi bola tha na 😎",
    "Haan, shayad main kabhi kabhi bahut zyada bolta hoon aur ho sakta hai ki ye sab jo upar likha hai thoda fake lage, lekin sach mein, mujhe tujhpe pura vishwas hai. I really, really believe in you ❤️",
    "Aur haan, hamesha tere saath rahunga… ye main hamesha bolta hoon, par ab tak kisi ke liye prove nahi kar paya. Lekin sach mein, I’ll do my best to never let you feel alone 😌"
  ];

  // detect reduced motion preference
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ref for last line so we can show Next only after it's in view
  const lastRef = useRef(null);
  const lastInView = useInView(lastRef, { amount: 0.7, once: true });
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    if (lastInView) setShowNext(true);
  }, [lastInView]);

  const lineVariants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 30, rotateX: -15 },
    visible: { opacity: 1, y: 0, rotateX: 0 }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="relative min-h-screen px-4 pb-28 flex flex-col items-center justify-center">
      <ParticlesBackground />

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-2xl"
      >
        {/* Header with elegant styling */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block"
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-3">
              A Letter for You
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto"></div>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-purple-200/80 text-sm mt-4 font-light"
          >
            Take your time with each word
          </motion.p>
        </div>

        {/* Letters with new card design */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {lines.map((text, i) => {
            const isLast = i === lines.length - 1;
            const Wrapper = ({ children }) =>
              isLast ? <div ref={lastRef}>{children}</div> : <>{children}</>;
            
            return (
              <Wrapper key={i}>
                <motion.div
                  variants={lineVariants}
                  whileInView="visible"
                  initial="hidden"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    duration: 0.7, 
                    ease: [0.25, 0.25, 0.25, 1],
                    delay: i * 0.1 
                  }}
                  className="group"
                >
                  <div className="relative">
                    {/* Glowing border effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Main card */}
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
                      {/* Accent line */}
                      <div className="absolute top-0 left-6 w-12 h-px bg-gradient-to-r from-purple-400 to-transparent"></div>
                      
                      <p className="text-white/90 text-lg md:text-xl leading-relaxed font-light tracking-wide">
                        {text}
                      </p>
                      
                      {/* Letter number indicator */}
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-medium shadow-lg">
                        {i + 1}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Wrapper>
            );
          })}
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex justify-center mt-12 space-x-2"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="w-2 h-2 bg-purple-400/60 rounded-full"
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced Next Button */}
      {showNext && <NextButton to="/fun" />}
    </div>
  );
}