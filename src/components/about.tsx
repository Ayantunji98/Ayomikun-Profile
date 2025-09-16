export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Frontend Developer</h3>
              <p className="text-foreground mb-6 text-pretty leading-relaxed">
                I'm a passionate frontend developer with expertise in modern web technologies. I love creating intuitive
                user interfaces and bringing designs to life with clean, efficient code.
              </p>
              <p className="text-foreground mb-8 text-pretty leading-relaxed">
                My journey in web development has equipped me with strong problem-solving skills and the ability to work
                collaboratively in agile environments. I'm always eager to learn new technologies and stay updated with
                the latest industry trends.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">Problem Solver</span>
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">Team Player</span>
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">Continuous Learner</span>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Experience</h4>
                <p className="text-muted-foreground">
                  Building responsive web applications with focus on performance and user experience
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Approach</h4>
                <p className="text-muted-foreground">
                  Mobile-first design, clean code architecture, and agile development methodologies
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Goal</h4>
                <p className="text-muted-foreground">
                  Creating digital experiences that are both beautiful and functional
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}