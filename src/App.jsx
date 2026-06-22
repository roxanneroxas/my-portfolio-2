import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ContactPage from './components/ContactPage/ContactPage'

function Aurora() {
  return (
    <div className="aurora-wrap">
      <div className="aurora-blob" />
      <div className="aurora-blob" />
      <div className="aurora-blob" />
    </div>
  )
}

export default function App() {
  return (
    <>
      <Aurora />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}