import React from 'react'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { About } from './components/about'
import { Projects } from './components/projects'
import { Skills } from './components/skills'
import { Contact } from './components/contact'
import { Footer } from './components/footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App