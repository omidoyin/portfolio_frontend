"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-dark-300 dark:to-dark-200 opacity-50" />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-primary-600 dark:text-primary-400 mb-4"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            <span className="text-gradient">Your Name</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 mb-8"
          >
            Full Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I build modern, scalable web applications with cutting-edge
            technologies. Passionate about creating exceptional user experiences
            and solving complex problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              href="#projects"
              className="btn-primary flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowRight size={20} />
            </motion.a>

            <motion.a
              href="#contact"
              className="btn-secondary flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center space-x-6 mb-8"
          >
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-dark-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={24} />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-dark-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={24} />
            </motion.a>

            <motion.a
              href="mailto:your.email@example.com"
              className="p-3 rounded-full bg-gray-100 dark:bg-dark-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a
          href="#about"
          className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
        >
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
}

