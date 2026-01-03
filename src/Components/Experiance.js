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
            Tech Head – Enactus
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Serving as Teach Head at Enactus, leading workshops and <strong>mentoring students</strong> to develop impactful, socially driven technical and entrepreneurial projects.
          </p>
        </motion.div>


        {/* dog society */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold text-sky-700 mb-2">
            FullStack Website – Animal Welfare Society
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
           Designed and developed a responsive website for a newly launched <strong>dog welfare society</strong>, helping showcase adoption campaigns, share resources, and engage the local community online.
          </p>
        </motion.div>

        {/* suvidha foundation */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold text-sky-700 mb-2">
            Internship – Suvidha Foundation NGO
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
           Worked as a Web Developer <strong>Intern at Suvidha Foundation</strong>, designing and improving user friendly web pages to support the organization’s social initiatives.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Experience;
