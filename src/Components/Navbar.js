import React from 'react'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50 p-4 flex justify-center space-x-2 border-b border-slate-200">
      <a href="#home" className="text-sky-600 font-medium hover:underline">Home</a>
      <a href="#skills" className="text-sky-600 font-medium hover:underline">Skills</a>
      <a href="#experience" className="text-sky-600 font-medium hover:underline">Experience</a>
      <a href="#project" className="text-sky-600 font-medium hover:underline">Project</a>
      <a href="#achievements" className="text-sky-600 font-medium hover:underline">Achievements</a>
      
    </nav>
  )
}

export default Navbar
