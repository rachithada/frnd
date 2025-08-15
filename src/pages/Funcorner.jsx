import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Star, Gift, Zap, Brain } from "lucide-react";
import { Link } from "react-router-dom";

// Mock components for demo
const ParticlesBackground = () => (
  <div className="fixed inset-0 -z-10 bg-gradient-to-br from-pink-900 via-purple-900 to-blue-900">
    <div className="absolute inset-0 bg-black/20"></div>
    <div className="absolute top-20 left-10 w-32 h-32 bg-pink-400/10 rounded-full blur-xl animate-pulse"></div>
    <div className="absolute bottom-32 right-16 w-24 h-24 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
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

const compliments = [
  "Tu bhot sundar hai dil se bhi aur face se bhi",
  "Me tera dost hu isese acha gift teko bhagwan ne aur kya hi diya hoga",
  "Dimag ki bhot jyada kami hai aap ke andar ❤️",
  "College aya kr yrr tu boring nhi hai mere liye to 🌍",
  "Pagal hai tu lekin pyari bhi 🌸",
  "Teri aankhein aaye haye kbhi dekhne ka man nhi krta 😂",
  "Tu ek heera hai mere liye jisko me kbhi bhul nhi skta",
  "Teri hasi jo ki bhot kam dekhi hai mene lekin bhot achi lagti hai teri smile 🎵",
  "Me bs wait krta rehta hu tere msg ka lekin bhot kam ata hai tera msg to 😭",
  "Tere saath class me bethne ki vibe hi alg hai",
  "Tum ek living masterpiece ho 🎨",
  "Teri awaj sunke pura din acha ho jata hai",
];

const mindGameQuestions = [
  {
    question: "Agar tum koi superpower choose kar sakti ho, kya hogi?",
    options: ["Time travel", "Mind reading", "Invisibility", "Flying"],
    response: "Wow! That choice totally suits your personality! ✨"
  },
  {
    question: "Tumhara perfect weekend plan kya hai?",
    options: ["Netflix & chill", "Adventure trip", "Reading books", "Shopping spree"],
    response: "Yesss! That sounds absolutely perfect for you! 🌟"
  },
  {
    question: "Agar tum ek color ho sakti, kya hoti?",
    options: ["Sunset Orange", "Ocean Blue", "Forest Green", "Royal Purple"],
    response: "OMG that color represents you so well! 💫"
  },
  {
    question: "Tumhari dream job kya hai?",
    options: ["Artist", "Scientist", "Engineer", "Entrepreneur"],
    response: "You'd be absolutely amazing at that! 🚀"
  },
  {
    question: "Agar tum koi animal ho sakti, kya hoti?",
    options: ["Butterfly", "Eagle", "Dolphin", "Cat"],
    response: "Perfect choice! You have that same beautiful energy! 🦋"
  }
];

export default function FunCorner() {
  const [compliment, setCompliment] = useState("");
  const [emojiRain, setEmojiRain] = useState([]);
  const [currentGame, setCurrentGame] = useState(null);
  const [gameResponse, setGameResponse] = useState("");
  const [activeTab, setActiveTab] = useState("compliments");
  const [score, setScore] = useState(0);

  const triggerCompliment = () => {
    const random = compliments[Math.floor(Math.random() * compliments.length)];
    setCompliment(random);

    // Enhanced emoji rain
    const emojis = ["💖", "🌸", "✨", "💫", "🌟", "🌷", "💝", "🦋", "🌈", "💕", "⭐", "🎀"];
    const rain = Array.from({ length: 25 }, (_, i) => ({
      id: Math.random(),
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      left: Math.random() * 100,
      delay: i * 0.1,
      duration: 2 + Math.random() * 1
    }));
    setEmojiRain(rain);

    setTimeout(() => setEmojiRain([]), 3000);
    setScore(prev => prev + 1);
  };

  const startMindGame = () => {
    const randomGame = mindGameQuestions[Math.floor(Math.random() * mindGameQuestions.length)];
    setCurrentGame(randomGame);
    setGameResponse("");
  };

  const handleGameChoice = (choice, response) => {
    setGameResponse(response);
    setScore(prev => prev + 5);
    setTimeout(() => {
      setCurrentGame(null);
      setGameResponse("");
    }, 3000);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start pt-8 px-4 pb-28">
      <ParticlesBackground />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl font-bold text-white mb-2">Fun Corner</h2>
        <div className="flex justify-center items-center space-x-2">
          <Sparkles className="text-pink-400 w-5 h-5" />
          <span className="text-pink-200">Made specially for you</span>
          <Sparkles className="text-pink-400 w-5 h-5" />
        </div>
        
        {/* Score Display */}
        <motion.div
          animate={{ scale: score > 0 ? [1, 1.1, 1] : 1 }}
          className="mt-4 inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
        >
          <Star className="text-yellow-400 w-4 h-4" />
          <span className="text-white font-medium">Happy Points: {score}</span>
        </motion.div>
      </motion.div>

      {/* Tab Navigation */}
      <div className="w-full max-w-md mb-6">
        <div className="bg-white/10 backdrop-blur-sm p-1 rounded-full flex">
          <button
            onClick={() => setActiveTab("compliments")}
            className={`flex-1 py-2 px-4 rounded-full transition-all duration-300 flex items-center justify-center space-x-2 ${
              activeTab === "compliments" 
                ? "bg-pink-500 text-white shadow-lg" 
                : "text-pink-200 hover:text-white"
            }`}
          >
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium">Compliments</span>
          </button>
          <button
            onClick={() => setActiveTab("games")}
            className={`flex-1 py-2 px-4 rounded-full transition-all duration-300 flex items-center justify-center space-x-2 ${
              activeTab === "games" 
                ? "bg-purple-500 text-white shadow-lg" 
                : "text-purple-200 hover:text-white"
            }`}
          >
            <Brain className="w-4 h-4" />
            <span className="text-sm font-medium">Mind Games</span>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="w-full max-w-lg">
        <AnimatePresence mode="wait">
          {activeTab === "compliments" && (
            <motion.div
              key="compliments"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="text-center"
            >
              <motion.button
                onClick={triggerCompliment}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-8 py-4 rounded-full shadow-xl transition-all duration-500 flex items-center space-x-3 mx-auto"
              >
                <Gift className="w-5 h-5" />
                <span className="font-medium">Get Your Compliment</span>
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </motion.button>

              <AnimatePresence>
                {compliment && (
                  <motion.div
                    key={compliment}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                    className="mt-8"
                  >
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur-lg"></div>
                      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl">
                        <p className="text-white text-lg font-medium leading-relaxed">
                          {compliment}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {activeTab === "games" && (
            <motion.div
              key="games"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-center"
            >
              {!currentGame && !gameResponse && (
                <motion.button
                  onClick={startMindGame}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-8 py-4 rounded-full shadow-xl transition-all duration-500 flex items-center space-x-3 mx-auto"
                >
                  <Brain className="w-5 h-5" />
                  <span className="font-medium">Start Mind Game</span>
                  <Sparkles className="w-5 h-5" />
                </motion.button>
              )}

              <AnimatePresence>
                {currentGame && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="mt-6"
                  >
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl">
                      <h3 className="text-white text-lg font-medium mb-6">
                        {currentGame.question}
                      </h3>
                      <div className="grid grid-cols-1 gap-3">
                        {currentGame.options.map((option, index) => (
                          <motion.button
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => handleGameChoice(option, currentGame.response)}
                            className="bg-white/5 hover:bg-white/20 border border-white/10 hover:border-white/30 text-white py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105"
                          >
                            {option}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {gameResponse && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-6 bg-gradient-to-r from-green-400/20 to-blue-400/20 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl"
                  >
                    <p className="text-white text-lg font-medium">
                      {gameResponse}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Enhanced Emoji Rain */}
      {emojiRain.map((item) => (
        <motion.span
          key={item.id}
          initial={{ y: -50, opacity: 1, rotate: 0, scale: 0 }}
          animate={{ 
            y: "110vh", 
            opacity: [0, 1, 1, 0], 
            rotate: 360,
            scale: [0, 1, 1, 0]
          }}
          transition={{ 
            duration: item.duration, 
            ease: "easeIn", 
            delay: item.delay 
          }}
          className="absolute text-3xl select-none pointer-events-none z-10"
          style={{ left: `${item.left}%` }}
        >
          {item.emoji}
        </motion.span>
      ))}

      <h1 className="fixed bottom-20 w-full text-center px-4 text-lg sm:text-xl md:text-2xl text-pink-700 font-bold bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 rounded-xl shadow-lg py-3">
  Yeh wala page thoda acha nhi bna hai 😂 mtlb jo me banane ka soch rha tha wo nhi bna lekin 
  tu jitni bhi baar <span className="text-purple-700 underline">get you compliment</span> dabaygi 
  teko alg alg real compliment milenge 😁
</h1>

      <NextButton to="/final" />
    </div>
  );
}