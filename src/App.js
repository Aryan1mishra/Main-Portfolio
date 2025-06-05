import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Experiance from "./Components/Experiance";
import Achivement from "./Components/Achivement";
import { motion } from "framer-motion";


function App() {
   return (
    <>
    <Navbar/>
    <main className="">
        <Home />
        <Skills />
        <Experiance />
        <Project/>
        <Achivement />
        
      </main>
      
       <a
        href="https://wa.me/916283849945"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.img
          src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg"
          alt="WhatsApp"
          className="w-12 h-12 md:w-14 md:h-14 hover:scale-110 transition-transform bg-green-500 p-2 rounded-full shadow-lg"
          whileHover={{ scale: 1.2 }}
        />
      </a>
    
    </>
   
  );
}

export default App;
