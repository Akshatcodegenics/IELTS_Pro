import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Testimonials from './components/Testimonials.jsx'
import Footer from './components/Footer.jsx'

import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-indigo-50 wm-bg">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
