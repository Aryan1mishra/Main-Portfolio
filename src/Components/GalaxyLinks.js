import React, { useState } from "react";
import main from "../Components/img/main.jpg";
import { FaGithub, FaLinkedin, FaWhatsapp, FaLaptopCode } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, link: "https://github.com/Aryan1mishra" },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/aryan-mishra-160867254/" },
  { icon: <FaWhatsapp />, link: "https://wa.me/916283849945" },
  { icon: <FaLaptopCode />, link: "https://leetcode.com/u/aryanmishra000/" },
  
];

const GalaxyLinks = () => {
  const [showOrbit, setShowOrbit] = useState(false);

  return (
    <div
      className="relative w-48 h-48 mx-auto mt-16"
      onMouseEnter={() => setShowOrbit(true)}
      onMouseLeave={() => setShowOrbit(false)}
      onClick={() => setShowOrbit(!showOrbit)}
    >
      {/* Sun (center image) */}
      <img
        src={main} // replace with your image URL
        alt="My Profile"
        className="w-48 h-48 rounded-full border-4 border-sky-500 shadow-xl z-10 relative"
      />

      {/* Orbits */}
      {socialLinks.map((item, index) => {
        const angle = (360 / socialLinks.length) * index;
        const radius = 90;

        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className={`absolute transition-all duration-500 ease-in-out text-white bg-sky-500 rounded-full p-2 hover:bg-sky-700`}
            style={{
              transform: showOrbit
                ? `translate(${x}px, ${y}px)`
                : "translate(0px, 0px)",
              left: "50%",
              top: "50%",
              marginLeft: "-1rem",
              marginTop: "-1rem",
              zIndex: 5,
            }}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default GalaxyLinks;
