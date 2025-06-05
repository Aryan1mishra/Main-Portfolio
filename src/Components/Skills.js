import React from 'react'
import { motion } from "framer-motion";
function Skills() {

  const skills = ["Tailwind css","Python","Kotlin","Oops","DBMS","Computer Network","React.js","Node.js","Express.js","MongoDB","JavaScript","HTML/CSS","Tailwind CSS","Git/GitHub"];
  return (
    <motion.section
      id="skills"
      className="scroll-mt-20 p-6 sm:p-10 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 border-b pb-2 text-slate-800">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map(skill => (
          <motion.span
            key={skill}
            className="bg-sky-100 text-sky-800 font-medium px-4 py-2 rounded-full text-center shadow-sm"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.section>
  )
}

export default Skills
