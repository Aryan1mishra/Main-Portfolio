import React, { useState } from "react";
import { motion } from "framer-motion";
import main from "../Components/img/main.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaLaptopCode,
  FaFileAlt,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Home() {
  const [showLinks, setShowLinks] = useState(false);
  const [showText, setShowText] = useState(true);

  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/Aryan1mishra", angle: 0 },
    { icon: <FaLinkedin />, link: "https://linkedin.com/in/aryan-mishra-160867254/", angle: 72 },
    { icon: <FaWhatsapp />, link: "https://wa.me/916283849945", angle: 144 },
    { icon: <FaLaptopCode />, link: "https://leetcode.com/u/aryanmishra000/", angle: 216 },
    { icon: <FaFileAlt />, link: "https://drive.google.com/file/d/12X0PfKWf2JDxZwpGDBuT-U10nKJnkfGx/view?usp=drivesdk", angle: 288 },
  ];

  return (
    <motion.section
      id="home"
      className="scroll-mt-20 min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-white via-slate-100 to-slate-200 p-6 sm:p-10 pt-24"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div
        className="relative w-60 h-60 flex justify-center items-center mb-6 md:mb-0 group"
        onMouseEnter={() => setShowLinks(true)}
        onMouseLeave={() => setShowLinks(false)}
      >
        <motion.img
          src={main}
          alt="Profile"
          onClick={() => setShowText(false)}
          className="rounded-full shadow-xl w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 object-cover border-4 border-sky-200 z-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        {/* Orbiting Links */}
        {showLinks &&
          socialLinks.map(({ icon, link, angle }, index) => {
            const radius = 100;
            const rad = (angle * Math.PI) / 180;
            const x = radius * Math.cos(rad);
            const y = radius * Math.sin(rad);
            return (
              <motion.a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute text-sky-600 text-xl hover:text-sky-800 transition-all z-20"
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{ x, y, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {icon}
              </motion.a>
            );
          })}
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left md:pl-10">
        <TypeAnimation
          sequence={[
            "Hi, I'm Aryan Mishra",
            1000,
            "I'm a Web Developer",
            1000,
          ]}
          wrapper="h1"
          speed={50}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 mb-4"
          repeat={Infinity}
        />
        <p className="text-base sm:text-lg leading-relaxed text-slate-700">
          I'm a passionate full-stack developer with experience in building web
          applications using the MERN stack. I love crafting beautiful
          frontends and efficient backends.
          {showText && (<p className="text-base sm:text-lg leading-relaxed text-red-400 my-8">Click image for link</p>)}
        </p>
      </div>
    </motion.section>
  );
}

export default Home;
