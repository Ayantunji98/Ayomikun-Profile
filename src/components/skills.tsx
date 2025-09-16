"use client"

import { useState, useEffect } from "react"

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  const skills = [
    { name: "HTML & CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 88 },
    { name: "TypeScript", level: 85 },
    { name: "Vue.js", level: 80 },
    { name: "Redux", level: 82 },
    { name: "UI/UX Implementation", level: 87 },
    { name: "Responsive Design", level: 92 },
    { name: "Git & GitHub", level: 85 },
    { name: "Performance Optimization", level: 80 },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const skillsSection = document.getElementById("skills")
    if (skillsSection) {
      observer.observe(skillsSection)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className="text-muted-foreground text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2.5">
                  <div
                    className="bg-accent h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 100}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold text-primary mb-6 text-center">Additional Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Problem Solving & Debugging",
                "Agile & Team Collaboration",
                "Performance Optimization",
                "Cross-browser Compatibility",
                "Mobile-first Development",
              ].map((expertise, index) => (
                <div key={index} className="bg-background p-4 rounded-lg border border-border shadow-sm">
                  <p className="text-foreground font-medium">{expertise}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}