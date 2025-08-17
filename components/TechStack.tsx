"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  Database,
  Globe,
  Settings,
  React,
  Node,
  Python,
  Git,
  Docker,
  Aws,
} from "lucide-react";

export default function TechStack() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      technologies: [
        { name: "React", icon: "⚛️", level: 90 },
        { name: "Next.js", icon: "⚡", level: 85 },
        { name: "TypeScript", icon: "🔷", level: 80 },
        { name: "TailwindCSS", icon: "🎨", level: 90 },
        { name: "JavaScript", icon: "🟨", level: 95 },
      ],
    },
    {
      title: "Backend",
      icon: <Database className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      technologies: [
        { name: "Node.js", icon: "🟢", level: 90 },
        { name: "Express.js", icon: "🚀", level: 85 },
        { name: "Python", icon: "🐍", level: 80 },
        { name: "MongoDB", icon: "🍃", level: 85 },
        { name: "PostgreSQL", icon: "🐘", level: 75 },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: <Settings className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      technologies: [
        { name: "Git", icon: "📝", level: 90 },
        { name: "Docker", icon: "🐳", level: 75 },
        { name: "AWS", icon: "☁️", level: 70 },
        { name: "Vercel", icon: "▲", level: 85 },
        { name: "Netlify", icon: "🚀", level: 80 },
      ],
    },
    {
      title: "Other Skills",
      icon: <Code2 className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      technologies: [
        { name: "REST APIs", icon: "🔌", level: 90 },
        { name: "GraphQL", icon: "🔮", level: 75 },
        { name: "Testing", icon: "🧪", level: 80 },
        { name: "CI/CD", icon: "🔄", level: 75 },
        { name: "Agile", icon: "📋", level: 85 },
      ],
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
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I work with a variety of technologies to create robust and scalable
            applications. Here's what I bring to the table:
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="card p-6 text-center group hover:scale-105 transition-transform duration-300"
            >
              {/* Category Icon */}
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} p-3 text-white group-hover:scale-110 transition-transform duration-300`}
              >
                {category.icon}
              </div>

              {/* Category Title */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>

              {/* Technologies */}
              <div className="space-y-3">
                {category.technologies.map((tech) => (
                  <div key={tech.name} className="text-left">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {tech.icon} {tech.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {tech.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${tech.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Always learning and exploring new technologies to stay current with
            industry trends.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>• Continuous Learning</span>
            <span>• Problem Solving</span>
            <span>• Team Collaboration</span>
            <span>• Code Quality</span>
            <span>• Performance Optimization</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

