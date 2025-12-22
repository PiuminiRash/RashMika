import { assets } from "../assets/assets.ts";
import { motion } from "framer-motion";

function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-white text-center px-6 md:px-50 lg:px-50 py-50 ">

            {/* Name Section */}
            <div className="space-y-2">
                <motion.h2
                    className="text-3xl md:text-7xl font-bold drop-shadow-lg"
                    initial={{ opacity: 0, y: -80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                >
                    HELLO !
                </motion.h2>
                <br/>
                <motion.h2
                    className="text-4xl md:text-7xl font-bold drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                >
                    I'M <span className="text-yellow-500">PIUMINI RASHMIKA</span>
                </motion.h2>
            </div>

            {/* Intro Section */}
            <div className="mt-12 space-y-2 mx-20">
              <p className="text-xl md:text-xl drop-shadow-lg">
                Driven by a strong passion for UI/UX design and full-stack development,I focus on creating intuitive, visually<br/> 
                appealing interfaces backed by robust, scalable systems. I enjoy transforming complex ideas into seamless digital <br/>
                experiences by combining thoughtful design principles with clean, efficient code. From user research and wireframing to <br/>
                frontend interactions and backend logic, I strive to build products that are both user-centered and technically sound.<br/>
              </p>
              <br/>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-8">
                <a href="https://github.com/PiuminiRash" target="_blank" rel="noopener noreferrer">
                    <img src={assets.github} alt="GitHub" className="w-8 hover:scale-110 transition" />
                </a>
                <a href="https://www.linkedin.com/in/piumini-rashmika-020b872aa/" target="_blank" rel="noopener noreferrer">
                    <img src={assets.linkedin} alt="LinkedIn" className="w-8 hover:scale-110 transition" />
                </a>
                <a href="https://www.instagram.com/piumini_rashmika/" target="_blank" rel="noopener noreferrer">
                    <img src={assets.instagram} alt="Instagram" className="w-8 hover:scale-110 transition" />
                </a>
            </div>

            {/* My Story */}
            <h3 className="text-lg font-medium flex items-center gap-3 mt-10 group">
                <a href="/about" className="group-hover:translate-x-2 transition-transform">
                    <img src={assets.arrow} alt="Arrow" className="w-10 h-10" />
                </a>
            </h3>

        </div>
    );
}

export default Home;
