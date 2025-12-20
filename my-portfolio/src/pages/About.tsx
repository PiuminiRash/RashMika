import { assets } from "../assets/assets";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {HiOutlineChevronDoubleDown} from "react-icons/hi";

import {
  FaJava,
  FaPython,
  FaDocker,
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiTypescript,
  SiReact,
} from "react-icons/si";


export default function About() {
    const scrollToSkills = () => {
        const skillsSection = document.getElementById("skills");
        if (skillsSection) {
            skillsSection.scrollIntoView({behavior: "smooth"});
        }
    };

   const titles = [
        { top: "Creative", bottom: "Developer." },
        { top: "UI / UX", bottom: "Designer." },
        { top: "Quality", bottom: "Assurence." },
        { top: "Web", bottom: "Developer." },
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 3500);

        return () => clearInterval(interval);

    }, [titles.length]);

    const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React Native", icon: <SiReact /> },
  ];
    return (
    <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-12 text-white">
      <div className="relative max-w-7xl w-[80%] h-[70vh] rounded-3xl border border-white/20 shadow-2xl mt-32 items-center justify-center">

        <div className="grid md:grid-cols-2 h-full">
          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            {/* Background Image */}
            <img
              src={assets.profile} // 👉 replace with your image path
              alt="About"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60" />

          </motion.div>

          {/* Left Glass Panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative backdrop-blur-3xl bg-white/10 p-10 flex flex-col justify-center"
          >
            {/* ABOUT text */}
            <h1 className="mt-12 left-15 text-5xl md:text-5xl font-extrabold text-white/40 select-none">
              ABOUT ME
            </h1>

            <h1 className="text-5xl font-bold mt-8 leading-tight ">
            <AnimatePresence mode="wait">
                <motion.div
                key={titles[index].top}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-1"
                >
                <span className="block">{titles[index].top}</span>
                <span className="block">{titles[index].bottom}</span>
                </motion.div>
            </AnimatePresence>
            </h1>

            <p className="mt-8 text-s leading-relaxed ">
              I am a UI/UX-focused full-stack developer passionate about creating
              intuitive, visually appealing digital experiences. I enjoy blending
              thoughtful design with clean, scalable code to build products that
              are both user-centered and technically sound.
            </p>

            <button className="mt-8 w-fit px-6 py-2 text-sm border border-black/100 text-black font-bold rounded-full hover:bg-yellow-500 hover:border-yellow-500 hover:text-black transition">
              View Projects
            </button>
          </motion.div>
        </div>

        <motion.div
                className="flex justify-center mt-8 md:mt-4 cursor-pointer"
                animate={{y: [0, -10, 0]}}
                transition={{duration: 1, repeat: Infinity, ease: "easeInOut"}}
                onClick={scrollToSkills}
            >
            <HiOutlineChevronDoubleDown className="text-white text-3xl animate-bounce"/>
        </motion.div>

        <div id="skills" className="mt-32 text-white">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl md:text-4xl font-bold md:drop-shadow-lg">Understand, Build, and Optimize</h2>
                    <h2 className="text-2xl md:text-4xl font-bold md:drop-shadow-lg"> One Step at a Time</h2>
                </div>
                <br/>

          <div className="max-w-6xl py-20 text-white">
      
          <div className="grid md:grid-cols-3 gap-20">
            
            {/* EXPERIENCE */}
            <div>
              <h2 className="text-xl font-semibold mb-6 border-b border-white/20 pb-3">
                Experience
              </h2>

              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Sri Lanka IT Training Foundation</h3>
                    <p className="text-sm text-white/60">Quality Assurence Training</p>
                  </div>
                  <span className="text-xs text-white/50">2025 – Present</span>
                </div>
              </div>
            </div>

            {/* EDUCATION */}
            <div>
              <h2 className="text-xl font-semibold mb-6 border-b border-white/20 pb-3">
                Education
              </h2>

              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Institute of Software Engineering</h3>
                    <p className="text-sm text-white/60">
                      Higher National Diploma in SE
                    </p>
                  </div>
                  <span className="text-xs text-white/50">2023 – 2025</span>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Cambridge College of British English</h3>
                    <p className="text-sm text-white/60">
                      Professional English Program
                    </p>
                  </div>
                  <span className="text-xs text-white/50">2023</span>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Cinec Campus</h3>
                    <p className="text-sm text-white/60">
                      BSc (Hons) in Computer Science
                    </p>
                  </div>
                  <span className="text-xs text-white/50">2025 - Present</span>
                </div>
              </div>
            </div>

            {/* Cetification */}
            <div>
              <h2 className="text-xl font-semibold mb-6 border-b border-white/20 pb-3">
                Cetification
              </h2>

              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Quality Assurance Training</h3>
                    <p className="text-sm text-white/60">
                      Online Professional Training
                    </p>
                  </div>
                  <span className="text-xs text-white/50">2025 - Present</span>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">UI / UX Certification</h3>
                    <p className="text-sm text-white/60">
                      Online Professional Course
                    </p>
                  </div>
                  <span className="text-xs text-white/50">2023</span>
                </div>
              </div>
            </div>

          </div>
        </div>
        </div>

       <div className="max-w-7xl mx-auto px-6 py-20 text-white">
      
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold">Technical Skills</h2>
        <p className="text-sm text-white/60 mt-2">
          Technologies I use to design, develop, and deliver solutions
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="border border-white/15 rounded-2xl p-8 text-center backdrop-blur-sm"
          >
            {/* Icon */}
            <div className="text-4xl text-yellow-400 mb-4 flex justify-center">
              {skill.icon}
            </div>

            {/* Name */}
            <h3 className="font-medium text-sm tracking-wide">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
}
