import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import heroImage from "../assets/hashim-port-removebg-preview.png";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col-reverse md:flex-row justify-center items-center gap-10 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto py-10"
    >
      {/* Fixed Vertical Social Icons (hide on mobile) */}
      <div className="hidden md:flex flex-col items-center gap-4 fixed right-0 bottom-45 z-50 text-white">
        <p className="rotate-90 text-2xl text-gray-300 drop-shadow-[0_0_10px_#00bfff] mb-16 whitespace-nowrap">
          Follow me on
        </p>
        <a
          href="https://www.instagram.com/hashim0112?igsh=ZjNmeDZrcWZ1NXlw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-2xl hover:text-pink-500 transition-colors" />
        </a>
        <a
          href="https://www.linkedin.com/in/hashim-ali-635b932b2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl hover:text-blue-400 transition-colors" />
        </a>
        <a
          href="https://github.com/HashimAli-coder?tab=overview&from=2025-05-01&to=2025-05-27"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl hover:text-purple-600 transition-colors" />
        </a>
      </div>

      {/* Left Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-left flex-1 w-full"
      >
        <p className="text-primary text-lg sm:text-xl mb-2">Welcome To My Portfolio</p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
          Hey,<br />My name is{" "}
          <span className="text-primary drop-shadow-[0_0_10px_#00bfff]">Hashim Ali</span>
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6">
          I'm a{" "}
          <span className="text-primary font-bold">
            <Typewriter
              words={[
                "Frontend Developer",
                "Backend Engineer",
                "Database Designer",
                "UI/UX Designer",
                "AI Integration Specialist",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>

        <div className="flex flex-wrap gap-4 sm:gap-6">
          <motion.a
            href="/projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="px-6 py-3 text-sm sm:text-base text-white bg-primary rounded-full shadow-highlight hover:scale-105 transition-transform"
          >
            See My Work &rarr;
          </motion.a>

          <motion.a
            href="/work-with-me"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="px-6 py-3 text-sm sm:text-base text-white bg-gray-700 rounded-full hover:bg-gray-600 transition-colors shadow-md hover:scale-105"
          >
            Contact Me &rarr;
          </motion.a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center w-full"
      >
        <img
          src={heroImage}
          alt="Hashim Ali"
          className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] opacity-90 grayscale contrast-125 drop-shadow-[0_0_10px_#00bfff] object-contain"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
