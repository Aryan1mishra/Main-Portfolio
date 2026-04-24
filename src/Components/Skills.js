import React from 'react'
import { motion } from 'framer-motion';

// Variants
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
  const skills = {
    languages: ['Python', 'JavaScript', 'Java'],
    frontend: ['React.js', 'HTML', 'CSS', 'Tailwind CSS','Bootstrap'],
    backend: ['Node.js', 'Express.js', 'MongoDB', 'MySQL'],
    aiml: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'PyTorch'],
    dataVisualization: ['Matplotlib', 'Seaborn', 'Plotly', 'Power BI'],
  };

  return (
    <motion.section
      id="skills"
      className="scroll-mt-20 px-4 sm:px-6 md:px-10 py-10 bg-white min-h-screen"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center text-slate-800 border-b-2 pb-3 border-sky-300">
        Skills
      </h2>

      {/* Center container for better laptop view */}
      <div className="max-w-6xl mx-auto space-y-8">

        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            
            {/* Category Title */}
            <h3 className="text-lg sm:text-xl font-semibold text-slate-700 mb-4 capitalize">
              {category}
            </h3>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
              variants={containerVariants}
            >
              {items.map((skill) => (
                <motion.span
                  key={skill}
                  className="bg-sky-100 text-sky-800 font-medium px-3 py-2 sm:px-4 sm:py-2.5 rounded-full text-center text-sm sm:text-base shadow-sm hover:bg-sky-200 transition duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

          </div>
        ))}

      </div>
    </motion.section>
  );
}