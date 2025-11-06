"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Download, ArrowRight } from "lucide-react";

export default function AboutPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const showcaseItems = [
    { title: 'E-commerce Dashboard', tagline: 'Next.js + Tailwind', emoji: '🛒' },
    { title: 'Chat App', tagline: 'Socket.io + Node', emoji: '💬' },
    { title: 'Portfolio Site', tagline: 'React + SSR', emoji: '🎨' },
    { title: 'API Service', tagline: 'Express + MongoDB', emoji: '🛠️' },
    { title: 'Analytics UI', tagline: 'Charts + D3', emoji: '📊' },
    { title: 'Landing Pages', tagline: 'A/B tested', emoji: '🚀' },
  ];

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
              I’m a Fullstack Developer with over 3 years of experience, integrating AI and machine learning into web applications to create intelligent, data-driven solutions. I’m also a Data Science Enthusiast passionate about using data and automation to solve real-world problems.
              </p>

              <p>
               Over the years, I’ve worked on a wide range of projects — from small-scale applications to large, complex systems — covering everything from design and development to deployment and optimization.
              </p>

              <p>
               Skilled in Python, JavaScript, TypeScript, SQL, Node.js, Kotlin, and HTML5, I build scalable fullstack systems that combine automation, analytics, and intelligent functionality to enhance user experience and business efficiency.
              </p>
              <p>
               I’m constantly exploring new ways to merge AI and software engineering, creating solutions that are not just functional but also adaptive and insightful — empowering smarter, data-informed decisions.
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
                href="/Omidoyin_Ayodeji_resume_fullstack.pdf"
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
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    {/* Animated Work Showcase */}
                  
                    <img src="/mine.jpg" alt="" />
                    {/* <div className="w-full h-full bg-gray-200 dark:bg-dark-100 rounded-2xl">
                      <div className="relative w-full h-full p-4">
                        <motion.div
                          className="flex gap-4 absolute left-0 right-0 top-1/2 -translate-y-1/2 will-change-transform"
                          animate={{ x: ["0%", "-50%"] }}
                          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                        >
                          {[...showcaseItems, ...showcaseItems].map((item, idx) => (
                            <a
                              key={idx}
                              href="#projects"
                              className="min-w-[220px] max-w-[220px] bg-white/80 dark:bg-dark-100/80 backdrop-blur-sm border border-gray-200 dark:border-dark-300 rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
                            >
                              <div className="text-2xl mb-2">{item.emoji}</div>
                              <div className="font-semibold text-gray-900 dark:text-white">{item.title}</div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">{item.tagline}</div>
                            </a>
                          ))}
                        </motion.div>
                      </div>
                    </div> */}
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


