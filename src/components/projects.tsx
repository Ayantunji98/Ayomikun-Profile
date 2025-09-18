import { Card, CardContent, CardDescription, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Lynue",
      description:
        "A modern web application showcasing advanced frontend development skills with responsive design and interactive user interfaces.",
      link: "https://Lynue.com",
      github: "#",
      technologies: [ "TypeScript", "CSS", "Axios", "Redux"],
      image: "/images/lynue.png"
    },
    {
      title: "Creaturhub",
      description:
        "Brand website featuring creative design elements and smooth user experience with optimized performance.",
      link: "https://creaturhub.eu",
      github: "#",
      technologies: ["TypeScript", "CSS", "Axios", "Redux"],
      image: "/images/creaturhub.png"
    },
    {
      title: "Portfolio Projects",
      description:
        "Collection of various frontend projects demonstrating different technologies and design approaches.",
      link: "#",
      github: "https://github.com/Ayantunji98",
      technologies: ["HTML5", "CSS3", "JavaScript", "React.js"],
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">My Projects</h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={index} className="border-border overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Project Image */}
                  <div className="p-6 flex items-center justify-center">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-contain rounded-lg"
                      />
                    ) : (
                      <div className="w-full h-64 bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white text-2xl font-bold rounded-lg">
                        {project.title.substring(0, 2).toUpperCase()}
                      </div>
                    )}
                  </div>
                  
                  {/* Project Content */}
                  <CardContent className="p-6 flex flex-col justify-center">
                    <CardTitle className="text-2xl font-semibold text-primary mb-4">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground mb-6 text-pretty">
                      {project.description}
                    </CardDescription>
                    
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-primary mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Live
                        </a>
                      </Button>
                      {project.title === "Portfolio Projects" && (
                        <Button variant="outline">
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <Github className="h-4 w-4 mr-2" />
                            GitHub
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}