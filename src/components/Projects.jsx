import { motion } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'E-Commerce App',
    description:
      'A full-featured online store with product catalog, shopping cart, and payment integration. Built with React and modern UI practices.',
    techs: ['React', 'Tailwind CSS', 'Redux', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://example.com',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Task Manager',
    description:
      'A productivity app for managing daily tasks with drag-and-drop interface, categories, and progress tracking features.',
    techs: ['React', 'Firebase', 'Framer Motion', 'CSS'],
    github: 'https://github.com',
    demo: 'https://example.com',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Weather Dashboard',
    description:
      'Real-time weather application with location-based forecasts, interactive charts, and beautiful weather animations.',
    techs: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind'],
    github: 'https://github.com',
    demo: 'https://example.com',
    gradient: 'from-orange-500 to-red-500',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-12 md:py-5 bg-light-card dark:bg-dark-card/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-accent dark:text-accent-light text-sm font-semibold tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] text-light-text dark:text-dark-text mt-3">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-white dark:bg-dark-card rounded-2xl overflow-hidden border border-gray-light/50 dark:border-dark-card hover:border-accent/30 dark:hover:border-accent-light/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-1"
            >
              {/* Project Image Placeholder */}
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/80 text-5xl font-bold font-[family-name:var(--font-poppins)] group-hover:scale-110 transition-transform duration-500">
                    {project.title.charAt(0)}
                  </span>
                </div>
                {/* Hover overlay with links */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
                  >
                    <HiExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-2 font-[family-name:var(--font-poppins)]">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-medium leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 dark:bg-accent-light/10 text-accent dark:text-accent-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
