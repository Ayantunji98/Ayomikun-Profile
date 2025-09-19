import { Header } from '../src/components/header'
import { Hero } from '../src/components/hero'
import { About } from '../src/components/about'
import { Projects } from '../src/components/projects'
import { Skills } from '../src/components/skills'
import { Contact } from '../src/components/contact'
import { Footer } from '../src/components/footer'
import '../src/index.css'

export default function Home() {
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