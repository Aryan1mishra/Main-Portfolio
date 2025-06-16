import React from 'react';
import { motion } from 'framer-motion';

function Project() {
  const projectVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const projects = [
    {
      title: 'Solar System Simulation',
      desc: 'OpenGL-based simulation project that visually represents the solar system and planetary motion.',
      code: 'https://github.com/your-username/solar-system-simulation',
      live: 'https://your-live-link.com/solar-system',
    },
    {
      title: 'Portfolio Website',
      desc: 'Personal portfolio built with React and Tailwind CSS showcasing my work and skills.',
      code: 'https://github.com/your-username/portfolio-website',
      live: 'https://your-live-link.com/portfolio',
    },
  ];

  return (
    <motion.section
      id="project"
      className="scroll-mt-20 p-6 sm:p-10 bg-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={projectVariants}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-slate-800 border-b-2 pb-4 border-sky-300">
        Projects
      </h2>
      <motion.div className="grid gap-6 sm:grid-cols-2" variants={projectVariants}>
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="relative bg-gray-50 p-4 rounded-lg shadow-sm border border-slate-200 overflow-hidden group"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-slate-700">{proj.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{proj.desc}</p>
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center space-x-4 transition-opacity duration-300">
              <a
                href={proj.code}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-sky-700 px-4 py-2 rounded-md font-medium shadow hover:bg-sky-100"
              >
                View Code
              </a>
              <a
                href={proj.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-700 px-4 py-2 rounded-md font-medium shadow hover:bg-green-100"
              >
                View Live
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Project;