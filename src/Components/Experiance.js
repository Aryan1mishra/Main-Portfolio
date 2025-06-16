import React from 'react';
import { motion } from 'framer-motion';

function Experience() {
  return (
    <motion.section
      id="experience"
      className="scroll-mt-20 p-6 sm:p-10 bg-gray-50 min-h-screen"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-slate-800 border-b-2 pb-4 border-sky-300">
        Experience
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Thapar CMMS */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold text-sky-700 mb-2">
            Frontend Developer – Thapar CMMS
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Collaborated with final-year students on a campus management system. Developed user-friendly frontend features using <strong>React</strong> and <strong>Tailwind CSS</strong>.
          </p>
        </motion.div>

        {/* Suvidha Foundation */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold text-sky-700 mb-2">
            Web Developer – Suvidha Foundation
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Completed a 2-month internship improving the official website. Focused on creating <strong>responsive pages</strong> and enhancing <strong>user experience</strong> using modern web technologies.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Experience;
