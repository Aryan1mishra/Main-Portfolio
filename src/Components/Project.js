import React from 'react'
import { motion } from "framer-motion";
function Project() {
  return (
    <motion.section
      id="project"
      className="scroll-mt-20 p-6 sm:p-10 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 border-b pb-2 text-slate-800">Projects</h2>
      <div className="space-y-6">
        <motion.div
          className="bg-gray-50 p-4 rounded-lg shadow-sm border border-slate-200"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-lg sm:text-xl font-bold text-slate-700">Solar System Simulation</h3>
          <p className="text-gray-600 text-sm sm:text-base">OpenGL-based simulation project that visually represents the solar system and planetary motion.</p>
        </motion.div>
        <motion.div
          className="bg-gray-50 p-4 rounded-lg shadow-sm border border-slate-200"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-lg sm:text-xl font-bold text-slate-700">Portfolio Website</h3>
          <p className="text-gray-600 text-sm sm:text-base">Personal portfolio built with React and Tailwind CSS showcasing my work and skills.</p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Project
