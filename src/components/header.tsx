"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Determine active section based on scroll position
      const sections = ["about", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
      setActiveSection(sectionId)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary">AYOMIKUN AYANTUNJI</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              onClick={() => scrollToSection("about")}
              className={`cursor-pointer ${activeSection === "about" ? "text-accent font-medium" : "text-foreground hover:text-accent"} transition-colors`}
            >
              About
            </a>
            <a
              onClick={() => scrollToSection("projects")}
              className={`cursor-pointer ${activeSection === "projects" ? "text-accent font-medium" : "text-foreground hover:text-accent"} transition-colors`}
            >
              Projects
            </a>
            <a
              onClick={() => scrollToSection("skills")}
              className={`cursor-pointer ${activeSection === "skills" ? "text-accent font-medium" : "text-foreground hover:text-accent"} transition-colors`}
            >
              Skills
            </a>
            <a
              onClick={() => scrollToSection("contact")}
              className={`cursor-pointer ${activeSection === "contact" ? "text-accent font-medium" : "text-foreground hover:text-accent"} transition-colors`}
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a
                onClick={() => scrollToSection("about")}
                className={`cursor-pointer text-left ${activeSection === "about" ? "text-accent font-medium" : "text-foreground hover:text-accent"} transition-colors`}
              >
                About
              </a>
              <a
                onClick={() => scrollToSection("projects")}
                className={`cursor-pointer text-left ${activeSection === "projects" ? "text-accent font-medium" : "text-foreground hover:text-accent"} transition-colors`}
              >
                Projects
              </a>
              <a
                onClick={() => scrollToSection("skills")}
                className={`cursor-pointer text-left ${activeSection === "skills" ? "text-accent font-medium" : "text-foreground hover:text-accent"} transition-colors`}
              >
                Skills
              </a>
              <a
                onClick={() => scrollToSection("contact")}
                className={`cursor-pointer text-left ${activeSection === "contact" ? "text-accent font-medium" : "text-foreground hover:text-accent"} transition-colors`}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}