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
      title: 'Gesture Based Math Solver',
      desc: 'Developed a real-time hand gesture-based calculator leveraging computer vision techniques with OpenCV and MediaPipe, enabling users to perform arithmetic operations without a physical keyboard. Implemented accurate gesture recognition for digit and operator input, along with a live expression evaluation system that provides seamless, real-time interaction and display.',
      code: 'https://github.com/Aryan1mishra/Gesture-Based-Math-Solver',
    },
    {
      title: 'Video Connect',
      desc: 'Developed a real-time video conferencing web application using the MERN stack, integrating WebRTC for peer-to-peer audio and video streaming. Implemented efficient signaling with Socket.IO to enable instant room creation and low-latency communication between users. Designed a responsive and user-friendly interface to ensure smooth interaction and seamless real-time connectivity across devices.',
      code: 'https://github.com/Aryan1mishra/VideoConnect',
    },
    {
      title: 'Virat score analysis',
      desc: 'Built an interactive Power BI dashboard analyzing Virat Kohli’s ODI and T20 performance (2008–2022) using a Kaggle dataset, incorporating KPI cards, top ground insights, and dynamic year-wise slicers. Generated key insights such as 23,709 total runs and an average of ~45.95, enabling intuitive performance analysis through effective data visualization and storytelling.',
      code: 'https://github.com/Aryan1mishra/virat-score-analysis',
    },
    {
      title: 'Engine Predictive Maintenance',
      desc: 'Developed an ML-based Engine Predictive Maintenance system to predict potential failures using sensor data. Built end-to-end pipelines including data preprocessing, feature engineering, and model training using Python and Scikit-learn. Implemented real-time inference for early fault detection, enabling proactive maintenance and reduced downtime.',
      code: 'https://github.com/Aryan1mishra/Engine-Predictive-Maintenance',
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
            </div>
          </motion.div>
        ))}
      </motion.div>

     
      <div className="flex justify-center mt-10">
        <a
          href="https://github.com/Aryan1mishra?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sky-600 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-md font-medium shadow hover:bg-sky-700 transition duration-300 text-sm sm:text-base"
        >
          View All Projects
        </a>
      </div>

    </motion.section>
  );
}

export default Project;