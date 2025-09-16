import { Github, Linkedin, Mail, Phone, Twitter, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">AYOMIKUN AYANTUNJI</h3>
          <p className="text-primary-foreground/80 mb-6">
            Frontend Developer passionate about creating exceptional web experiences
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/Ayantunji98"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20"
            >
              <Github className="h-6 w-6" />
            </a>
             <a
              href="https://facebook.com/ayomikun.ayantunji/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com/jaykeyhzzz_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://x.com/jaykeyhzzz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/ayomikun-ayantunji"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:jamesayantunji98@gmail.com"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="tel:+2347041604696"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20"
            >
              <Phone className="h-6 w-6" />
            </a>
          </div>

          <div className="border-t border-primary-foreground/20 pt-6">
            <p className="text-primary-foreground/60 text-sm">© 2024 Ayomikun Ayantunji. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}