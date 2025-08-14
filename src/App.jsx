import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Letters from './pages/Letters'
import Final from './pages/Final'
import FunCorner from './pages/Funcorner'
import Playlist from './pages/Playlist'

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/letters" element={<Letters />} />
      <Route path="/fun" element={<FunCorner />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/final" element={<Final />} />
    </Routes>
    </>
  )
}
