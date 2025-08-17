"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Download, ArrowRight } from "lucide-react";

export default function AboutPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-200">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
            >
              About Me
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              <p>
                I'm a passionate Full Stack Developer with over 5 years of
                experience building modern web applications. I love turning
                complex problems into simple, beautiful, and intuitive
                solutions.
              </p>

              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community. I believe in continuous learning and
                staying up-to-date with the latest industry trends.
              </p>

              <p>
                My approach combines technical expertise with creative
                problem-solving, ensuring that every project I work on delivers
                exceptional user experiences and robust functionality.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download Resume
              </motion.a>

              <motion.a
                href="#projects"
                className="btn-secondary flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <ArrowRight size={20} />
              </motion.a>
            </motion.div>
          </div>

          {/* Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Photo */}
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary-400 to-purple-600 p-1">
                <div className="w-full h-full bg-gray-200 dark:bg-dark-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-600 dark:text-gray-400">
                        YN
                      </span>
                    </div>
                    <p className="text-sm">Photo Placeholder</p>
                    <p className="text-xs">Replace with your photo</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-2xl">🚀</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-xl">💻</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

