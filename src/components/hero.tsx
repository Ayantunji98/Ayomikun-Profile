"use client"

import { Button } from "./ui/button"
import { Github, Linkedin, Mail, Phone, Twitter, Facebook, Instagram, } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            {/* Profile Picture */}
            <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-accent shadow-lg">
              <img 
                src="/images/profile.png"  // Update this path to match your actual image
                alt="Ayomikun Ayantunji - Frontend Developer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.parentElement;
                  if (fallback) {
                    fallback.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white text-4xl font-bold">
                        AA
                      </div>
                    `;
                  }
                }}
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 text-balance">AYOMIKUN AYANTUNJI</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">Frontend Developer & UI/UX Enthusiast</p>
            <p className="text-lg text-foreground max-w-2xl mx-auto mb-8 text-pretty">
              Passionate about creating beautiful, responsive web applications with modern technologies. I specialize in
              React.js, TypeScript, and delivering exceptional user experiences.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 text-lg"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 text-lg border-accent text-accent hover:bg-accent/10"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Ayantunji98"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors p-2 rounded-full bg-muted hover:bg-accent/10"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://facebook.com/ayomikun.ayantunji/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors p-2 rounded-full bg-muted hover:bg-accent/10"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com/jaykeyhzzz_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors p-2 rounded-full bg-muted hover:bg-accent/10"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://x.com/jaykeyhzzz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors p-2 rounded-full bg-muted hover:bg-accent/10"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/ayomikun-ayantunji"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors p-2 rounded-full bg-muted hover:bg-accent/10"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:jamesayantunji98@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors p-2 rounded-full bg-muted hover:bg-accent/10"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="tel:+2347041604696" 
              className="text-muted-foreground hover:text-accent transition-colors p-2 rounded-full bg-muted hover:bg-accent/10"
            >
              <Phone className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}