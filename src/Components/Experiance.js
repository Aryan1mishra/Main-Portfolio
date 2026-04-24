import React from 'react';
import { motion } from 'framer-motion';

function Experience() {
  return (
    <motion.section
      id="experience"
      className="scroll-mt-20 px-4 sm:px-6 md:px-10 py-10 bg-gray-50 min-h-screen"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center text-slate-800 border-b-2 pb-3 md:pb-4 border-sky-300">
        Experience
      </h2>

      <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-2">
        <motion.div
          className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-lg sm:text-xl font-semibold text-sky-700 mb-2">
            Data Scientist at Apricus intech
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Completed a summer internship as a Data Science Intern, where I performed data preprocessing and cleaning to
            prepare datasets for analysis. Contributed to extracting meaningful insights to support data-driven decisions.
          </p>
        </motion.div>


        {/* Enactus */}
        <motion.div
          className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-lg sm:text-xl font-semibold text-sky-700 mb-2">
            Tech Head – Enactus
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            As Tech Lead of an Enactus college chapter, I leveraged technology to drive social impact by building scalable
            solutions for community projects and bridging the gap between innovation and real-world problem-solving.

          </p>
        </motion.div>


        {/* suvidha foundation */}
        <motion.div
          className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-lg sm:text-xl font-semibold text-sky-700 mb-2">
            Internship – Suvidha Foundation NGO
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Worked as a Web Developer <strong>Intern at Suvidha Foundation</strong>, designing and improving user friendly web pages to support the organization’s social initiatives.
          </p>
        </motion.div>
        <motion.div
          className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold text-sky-700 mb-2">
            Tech head at Urja
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Managed the Sports & Cultural Events Calendar for Urja , ensuring smooth scheduling and coordination across
            multiple events. Maintained accurate records of participants and streamlined event planning processes.
          </p>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default Experience;