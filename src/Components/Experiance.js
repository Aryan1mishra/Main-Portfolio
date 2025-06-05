import React from 'react'
import { motion } from "framer-motion";
function Experiance() {
    return (
    <motion.section
      id="experience"
      className="scroll-mt-20 p-6 sm:p-10 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 border-b pb-2 text-slate-800">Experience</h2>
        <div className="space-y-6">
            <motion.div
            className="bg-white p-4 rounded-lg shadow-sm border border-slate-200"
            whileHover={{ scale: 1.02 }}
            >
            <h3 className="text-lg sm:text-xl font-bold text-slate-700">Frontend Developer - Thapar CMMS</h3>
            <p className="text-gray-600 text-sm sm:text-base">Collaborated on a campus management system with final-year students. Focused on frontend development using React and Tailwind.</p>
            </motion.div>
            <motion.div
            className="bg-white p-4 rounded-lg shadow-sm border border-slate-200"
            whileHover={{ scale: 1.02 }}
            >
            <h3 className="text-lg sm:text-xl font-bold text-slate-700">Web Developer -Suvidha Foundation </h3>
            <p className="text-gray-600 text-sm sm:text-base">Completed a 2-month internship as a Web Developer at Suvidha Foundation, where I contributed to enhancing their official website by developing responsive web pages and improving user experience.</p>
            </motion.div>
        </div>
    </motion.section>
  )
}

export default Experiance
