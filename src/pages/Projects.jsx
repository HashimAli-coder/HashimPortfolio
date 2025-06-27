import { motion } from "framer-motion";
import {
  FaStar,
  FaExternalLinkAlt,
  FaReact,
  FaNode,
  FaPython,
  FaDatabase,
  FaRocket,
} from "react-icons/fa";
import { SiMongodb, SiPhp, SiHtml5, SiCss3, SiNextdotjs, SiSupabase, SiMysql } from "react-icons/si";
import Dream from "../assets/Dream.png"
import Food from "../assets/Food.png"
import Recruit from "../assets/Recruit.png"
import Job from "../assets/Job.png"
import Footer from "../components/Footer"


const projects = [
  {
    name: "Dream Study",
    description: "A full-fledged AI-powered MERN + Flask platform helping Pakistani students explore study abroad opportunities with document generation, chatbots, scholarships, and guidance.",
  image: Dream,
    alt : "Project",
    tech: [<FaReact />, <FaNode />, <SiMongodb />, <FaPython />, <FaDatabase />],
    rating: 5,
    link: "https://dream-study.vercel.app",
    align: "left",
  },
  {
    name: "Recruit With AI",
    description: "Next-gen SaaS AI recruitment platform built with Supabase, React & Next.js. Streamlines hiring using AI to screen CVs, match jobs, and manage users/roles securely.Code = AZKY",
     image: Recruit,
    alt : "Project",
    tech: [<SiNextdotjs />, <FaReact />, <SiSupabase />, <FaDatabase />],
    rating: 5,
    link: "https://recruit-with-ai.vercel.app/",
    align: "right",
  },
  {
    name: "Job Portal",
    description: "A job posting and searching platform for students and recruiters. Focused on simplicity, filtering, and efficient connections using React.",
     image: Job,
    alt : "Project",
    tech: [<FaReact />],
    rating: 4,
    link: "https://hashim-task03.vercel.app/",
    align: "left",
  },
  {
    name: "Food Fever",
    description: "A classic restaurant ordering and management system using HTML, CSS, PHP, and MySQL — showing full stack web fundamentals.",
     image: Food,
    alt : "Project",
    tech: [<SiHtml5 />, <SiCss3 />, <SiPhp />, <SiMysql />],
    rating: 4,
    link: "https://hashimprojects.infy.uk/",
    align: "right",
  },
];

const Projects = () => {
  return (
    <div>
    <section className="min-h-screen bg-gray-950 text-white mt-10 py-24 px-20">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center text-primary mb-6 flex items-center justify-center gap-3"
      >
        <FaRocket className="animate-bounce text-3xl" />
        My Projects
      </motion.h2>

      <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
        These are some of my strongest works, combining frontend, backend, AI, and design thinking to create impactful experiences.
      </p>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: project.align === "left" ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col md:flex-row items-center ${
              project.align === "left" ? "" : "md:flex-row-reverse"
            } gap-12`}
          >
            {/* Text */}
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-3xl font-bold text-primary flex items-center gap-3">
                {project.name}
              </h3>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap items-center gap-4 text-xl text-primary">
                {project.tech.map((icon, i) => (
                  <span key={i} className="hover:scale-110 transition-all">{icon}</span>
                ))}
              </div>

              <div className="flex items-center gap-2 mt-2 text-yellow-400">
                {[...Array(project.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm text-white bg-primary px-5 py-2 rounded-full shadow-lg hover:scale-105 hover:shadow-[0_0_20px_#00bfff70] transition-all"
              >
                Visit Project <FaExternalLinkAlt />
              </a>
            </div>

            {/* Image */}
            <div className="md:w-1/2 relative group">
              <div className="overflow-hidden rounded-3xl shadow-xl shadow-primary/30 border border-primary/20">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    <Footer />
    </div>
  );
};

export default Projects;
