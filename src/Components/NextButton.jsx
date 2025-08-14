import { useNavigate } from "react-router-dom";
import React from 'react'

export default function NextButton({ to }) {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate(to)}
        className="group relative mt-6 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-purple-500/50 hover:shadow-3xl transform hover:scale-105 transition-all duration-300 ease-out active:scale-95 active:shadow-yellow-400/60 active:bg-gradient-to-r active:from-yellow-400 active:via-pink-400 active:to-purple-600 overflow-hidden animate-pulse"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-600 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 rounded-full"></div>
        <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
        <span className="relative z-10 flex items-center gap-2">
          Next
          <span className="group-hover:translate-x-1 group-active:translate-x-1 transition-transform duration-300">→</span>
        </span>
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-full blur opacity-30 group-hover:opacity-60 group-active:opacity-80 transition duration-300 animate-pulse"></div>
        
        {/* Mobile-friendly always-visible effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-bounce opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full"></div>
      </button>
    </div>
  )
}