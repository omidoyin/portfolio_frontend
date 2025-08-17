"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Play } from "lucide-react";

export default function ProjectsPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sampleProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application with user authentication, product management, and payment integration.",
      shortDescription: "Full-stack e-commerce platform with modern UI/UX",
      imageUrl:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveDemoUrl: "https://ecommerce-demo.vercel.app",
      category: "fullstack",
      featured: true,
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description:
        "Real-time social media analytics dashboard with data visualization and reporting features.",
      shortDescription: "Analytics dashboard with real-time data visualization",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      techStack: ["Next.js", "TypeScript", "Chart.js", "Socket.io"],
      githubUrl: "https://github.com/yourusername/dashboard",
      liveDemoUrl: "https://dashboard-demo.vercel.app",
      category: "frontend",
      featured: true,
    },
    {
      id: 3,
      title: "AI Chat Application",
      description:
        "Intelligent chatbot application powered by OpenAI API with natural language processing capabilities.",
      shortDescription: "AI-powered chatbot with OpenAI integration",
      imageUrl:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      techStack: ["React", "Python", "OpenAI API", "FastAPI"],
      githubUrl: "https://github.com/yourusername/ai-chat",
      liveDemoUrl: "https://ai-chat-demo.vercel.app",
      category: "fullstack",
      featured: true,
    },
    {
      id: 4,
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates and team collaboration features.",
      shortDescription: "Team collaboration and task management platform",
      imageUrl:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      techStack: ["Vue.js", "Node.js", "PostgreSQL", "Redis"],
      githubUrl: "https://github.com/yourusername/task-manager",
      liveDemoUrl: "https://task-manager-demo.vercel.app",
      category: "fullstack",
      featured: false,
    },
    {
      id: 5,
      title: "Weather Forecast App",
      description:
        "Beautiful weather application with location-based forecasts and interactive weather maps.",
      shortDescription: "Location-based weather forecasting app",
      imageUrl:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      techStack: ["React Native", "Expo", "Weather API", "Maps"],
      githubUrl: "https://github.com/yourusername/weather-app",
      liveDemoUrl: "https://weather-app-demo.vercel.app",
      category: "mobile",
      featured: false,
    },
    {
      id: 6,
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website built with Next.js and TailwindCSS.",
      shortDescription: "Modern portfolio website with smooth animations",
      imageUrl:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      techStack: ["Next.js", "React", "TailwindCSS", "Framer Motion"],
      githubUrl: "https://github.com/yourusername/portfolio",
      liveDemoUrl: "https://portfolio-demo.vercel.app",
      category: "frontend",
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="projects"
      className="section-padding bg-gray-50 dark:bg-dark-200"
    >
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for creating innovative solutions. Each project represents a
            unique challenge and learning experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sampleProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="card overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Video Preview Overlay */}
                {project.videoUrl && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white rounded-full p-3 hover:bg-gray-100 transition-colors duration-200">
                      <Play size={24} className="text-gray-800" />
                    </button>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full capitalize">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Github size={16} />
                    Code
                  </a>

                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            View All Projects
            <ExternalLink size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}


