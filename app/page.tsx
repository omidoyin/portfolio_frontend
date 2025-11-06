"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Sun,
  Moon,
} from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import TechStack from "@/components/TechStack";
import ProjectsPreview from "@/components/ProjectsPreview";
import ContactSection from "@/components/ContactSection";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark-300 transition-colors duration-200">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main>
        <Hero />
        <AboutPreview />
        <TechStack />
        <ProjectsPreview />
        <ContactSection />
      </main>

      <Chatbot />

      <footer className="bg-gray-100 dark:bg-dark-200 py-8">
        <div className="container-custom text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Ayodeji Omidoyin. Built with Next.js and TailwindCSS.
          </p>
        </div>
      </footer>
    </div>
  );
}




