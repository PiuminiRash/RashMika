import { motion } from "framer-motion";
import { assets } from "../assets/assets";

export default function Projects() {
  const projects = [
    { image: assets.figma1 },
    { image: assets.figma2 },
    { image: assets.figma3 },
    { image: assets.figma4 },
    { image: assets.figma5 },
    { image: assets.figma6 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-36 text-white">

      {/* ===== Header ===== */}
      <div className="text-center mb-16">
        <p className="text-xs tracking-widest text-yellow-400 uppercase">
          Project
        </p>
        <h2 className="text-3xl font-bold mt-2">
          My Full-Stack Project Collection
        </h2>
        <p className="text-sm text-white/60 mt-4 max-w-xl mx-auto">
          These are some of the full-stack applications I’ve built recently, 
          covering both frontend and backend development. Have a look at them
          and let me know what you think.
        </p>

        <div className="w-20 h-[2px] bg-yellow-400 mx-auto mt-6" />
      </div>

      {/* ===== Projects Grid ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-20">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl overflow-hidden border border-white/10"
          >
            <img
              src={project.image}
              alt="Project"
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <div className="w-20 h-[2px] bg-yellow-400 mx-auto mb-16" />

      {/* ===== Header ===== */}
      <div className="text-center mb-16">
        <p className="text-xs tracking-widest text-yellow-400 uppercase">
          Portfolios
        </p>
        <h2 className="text-3xl font-bold mt-2">
          My Portfolio Collection
        </h2>
        <p className="text-sm text-white/60 mt-4 max-w-xl mx-auto">
          These are some of my own portfolios I made recently.
          Have a look at them and let me know if you like them.
        </p>

        <div className="w-20 h-[2px] bg-yellow-400 mx-auto mt-6" />
      </div>

      {/* ===== Projects Grid ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-20">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl overflow-hidden border border-white/10"
          >
            <img
              src={project.image}
              alt="Project"
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <div className="w-20 h-[2px] bg-yellow-400 mx-auto mb-16" />

      {/* ===== Freelance Section ===== */}
      <div className="text-center">
        <p className="text-xs tracking-widest text-yellow-400 uppercase">
          Freelance
        </p>
        <h2 className="text-3xl font-bold mt-6">
          Hire Me As A Freelancer
        </h2>
        <p className="text-sm text-white/60 mt-4 max-w-md mx-auto">
          I am available on different freelancing platforms.
          You can hire me on given platforms.
        </p>

        {/* Platforms */}
        <div className="flex flex-col sm:flex-row justify-center gap-12 mt-12">
          {["Fiverr", "Upwork", "Mail"].map((platform, index) => (
            <div key={index} className="text-center">
              <h3 className="font-bold text-lg tracking-wide">
                {platform}
              </h3>
              <button className="mt-3 px-6 py-2 text-xs border border-white/30 rounded-full hover:bg-yellow-400 hover:text-black transition">
                Hire Me
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
