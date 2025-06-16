import React from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Project', href: '#project' },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50 px-4 py-3 flex flex-wrap justify-center gap-2 border-b border-slate-200"
    >
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-sky-600 font-medium hover:underline px-3 py-2 text-sm sm:text-base"
        >
          {item.label}
        </a>
      ))}
    </motion.nav>
  );
}

export default Navbar;
