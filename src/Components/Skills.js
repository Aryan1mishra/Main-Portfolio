import React from 'react'
import { motion } from 'framer-motion';

// Variants for container and items
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  const skills = [
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'HTML/CSS',
    'Tailwind CSS',
    'Git/GitHub',
    'Python',
    'Kotlin',
    'OOPs',
    'DBMS',
    'Computer Networks',
  ];

  return (
    <motion.section
      id="skills"
      className="scroll-mt-20 px-6 py-8 sm:px-10 bg-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-slate-800 border-b-2 pb-4 border-sky-300">
        Skills
      </h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        variants={containerVariants}
      >
        {skills.map((skill) => (
          <motion.span
            key={skill}
            className="bg-sky-100 text-sky-800 font-medium px-4 py-2 rounded-full text-center shadow-sm"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.section>
  );
}
