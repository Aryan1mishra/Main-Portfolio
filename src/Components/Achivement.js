import React from 'react'
import { motion } from "framer-motion";
function Achivement() {
    const handleclick1=()=>{
    window.open("https://drive.google.com/file/d/1QQ2m_7FklIF9BH5rSGiDieCqtLUyfJ4T/view?usp=drive_link","_blank")}
    const handleclick2 = ()=>{
        window.open("https://drive.google.com/file/d/1bbTeaLS0FUZowHtroov5puZ_x6Ox8jZS/view?usp=drive_link","_blank")
     }
   
  return (
    
            
     <motion.section
        id="achievements"
        className="scroll-mt-20 p-20 sm:p-10 bg-white"
        target="_blank"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 border-b pb-2 text-slate-800">Achievements</h2>
        <div className="space-y-6">
        
                <motion.div
                className="bg-white p-4 rounded-lg shadow-sm border border-slate-200"
                whileHover={{ scale: 1.02 }}
                onClick={handleclick1}
                >
                <button onClick={handleclick1} className="text-lg sm:text-xl font-bold text-slate-700">Moblie App Devlopement - Thapar ELC</button>
                <p className="text-gray-600 text-sm sm:text-base">Independently developed a mobile application as part of the ELC activity at my college, demonstrating end-to-end project execution skills. Successfully completed the task and earned a certificate of accomplishment.</p>
                </motion.div>
                <motion.div
                className="bg-white p-4 rounded-lg shadow-sm border border-slate-200"
                onClick={handleclick2}
                whileHover={{ scale: 1.02 }}
                >
                <button className="text-lg sm:text-xl font-bold text-slate-700">Web Developer -Suvidha Foundation </button>
                <p className="text-gray-600 text-sm sm:text-base">Completed a 2-month internship as a Web Developer at Suvidha Foundation, where I contributed to enhancing their official website by developing responsive web pages and improving user experience.</p>
                </motion.div>
            </div>
       
      </motion.section>
  )
}

export default Achivement
