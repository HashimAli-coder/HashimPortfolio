import { motion } from "framer-motion";
import NUML from "../assets/nlogo.png";
import React from "../assets/react-removebg-preview.png"
import Node from "../assets/node-removebg-preview.png"
import Express from "../assets/express-removebg-preview.png"
import Figma from "../assets/figma-removebg-preview.png"
import Github from "../assets/github-removebg-preview.png"
import SQL from "../assets/sql-removebg-preview.png"
import Vercel from "../assets/vercel-removebg-preview.png"
import Mongo from "../assets/mongodb-removebg-preview.png"
import FEDERAL from "../assets/flogo-removebg-preview.png" 
import {
  FaUniversity,
  FaSchool,
  FaGraduationCap,
  FaNodeJs,
  FaTools,
  FaReact,
  FaDatabase,
  FaGitAlt,
  FaFigma,
  FaServer,
  FaProjectDiagram,
  FaPaperPlane,
  FaUserAlt,
FaCode,
FaPalette,
FaRobot,
FaBookOpen,
FaCogs,
FaLaptopCode,
FaPencilRuler,
} from "react-icons/fa";


  const skills = [
    { name: "React", img: React },
    { name: "Node.js", img: Node },
    { name: "Express", img: Express },
    { name: "MongoDB", img: Mongo },
    { name: "SQL", img: SQL },
    { name: "Git / GitHub", img: Github },
    { name: "Figma", img: Figma },
    { name: "Vercel", img: Vercel },
  ];


export default function AboutSection() {
  return (
    <section id="about" className="px-6 md:px-20 pt-10 mb-20 space-y-24 bg-gray-950">
      {/* 1. About */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="max-w-5xl mx-auto text-center px-4 md:px-8"
>
  <div className="flex justify-center items-center gap-3 mb-6">
    <span className="text-3xl text-primary animate-bounce">
      <FaUserAlt className="text-5xl text-primary animate-bounce" />
    </span>
    <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
      About Me
    </h2>
  </div>

  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
    I’m <span className="text-primary font-bold">Hashim Ali</span>, a passionate full-stack developer currently pursuing my 
    <span className="text-primary font-semibold"> BS in Information Technology</span> at NUML. With a strong grip on 
    <span className="text-primary font-semibold"> frontend</span>, 
    <span className="text-primary font-semibold"> backend</span>, 
    <span className="text-primary font-semibold"> database architecture</span>, and 
    <span className="text-primary font-semibold"> UI/UX design</span>, I specialize in building modern, performance-driven, and elegant web applications. 
    My toolbox includes <span className="text-primary font-semibold">React, Node.js, MongoDB, Express, Tailwind</span> and more — 
    all backed by a passion for smooth user experiences and cutting-edge 
    <span className="text-primary font-semibold"> AI integrations</span>. I aim to deliver solutions that not only function flawlessly 
    but also impress visually — that’s the Dream I code for.
  </p>
</motion.div>



{/* 2. Education Timeline */}
<section className="relative max-w-6xl mx-auto mt-24 px-4">
  {/* Section Heading */}
  <div className="flex justify-center items-center gap-3 mb-12">
    <FaBookOpen className="text-5xl text-primary animate-bounce" />
    <h2 className="text-5xl md:text-5xl font-extrabold text-primary tracking-tight text-center">
      My Education
    </h2>
  </div>

  {/* Center Vertical Line */}
  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary shadow-[0_0_15px_#00bfff] z-0" />

  {/* Education Timeline Items */}
  {[
    {
      align: "left",
      icon: <FaGraduationCap className="text-primary text-3xl mb-2" />,
      title: "Bachelor in Information Technology",
      details: [
        "National University of Modern Languages (NUML)",
        "8 Semester | CGPA: 3.9",
        "Duration: 2022 – 2026",
      ],
      img: NUML,
    },
    {
      align: "right",
      icon: <FaUniversity className="text-primary text-3xl mb-2" />,
      title: "Intermediate in Pre-Engineering",
      details: [
        "Islamabad Model Collge G-10/4",
        "FSc with Distinction",
        "Duration: 2019 – 2021",
      ],
      img: FEDERAL,
    },
    {
      align: "left",
      icon: <FaSchool className="text-primary text-3xl mb-2" />,
      title: "Matriculation (Science)",
      details: [
        "Islamabad Model Collge G-9/4",
        "Grade A+ | Strong STEM Foundation",
        "Duration: 2017 – 2019",
      ],
      img: FEDERAL,
    },
  ].map((item, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, x: item.align === "left" ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: idx * 0.2 }}
      className={`relative w-full flex flex-col md:flex-row items-center ${
        item.align === "left" ? "md:justify-start" : "md:justify-end"
      }`}
    >
      {/* Text Block */}
      <div
        className={`md:w-1/2 ${
          item.align === "left"
            ? "order-1 pr-6 md:pr-12 text-right"
            : "order-2 pl-6 md:pl-12 text-left"
        }`}
      >
        <div className="flex flex-col items-center md:items-start">
          {item.icon}
          <h4 className="text-white text-xl md:text-2xl font-bold mb-1">{item.title}</h4>
          {item.details.map((line, i) => (
            <p
              key={i}
              className="text-gray-300 text-sm md:text-base leading-relaxed"
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Image Block */}
      <div
        className={`md:w-1/2 ${
          item.align === "left" ? "order-2 pl-6 md:pl-12" : "order-1 pr-6 md:pr-12"
        }`}
      >
        <div className="w-full h-48 md:h-56 rounded-xl overflow-hidden flex items-center justify-center">
          <img
            src={item.img}
            alt={item.title}
            className="object-contain h-full w-auto opacity-90"
          />
        </div>
      </div>
    </motion.div>
  ))}
</section>

<motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto mt-32 px-4 py-4"
    >
      {/* Heading */}
      <div className=" pt-10 flex justify-center items-center gap-3 mb-20">
        <FaTools className="text-5xl text-primary animate-bounce" />
        <h3 className="text-5xl font-extrabold text-primary text-center">
          Skillset
        </h3>
      </div>

      {/* Skills in one horizontal line */}
      <div className="flex flex-wrap justify-center gap-x-14 gap-y-10 overflow-x-auto px-4">
        {skills.map(({ name, img }, i) => (
          <div key={i} className="flex flex-col items-center justify-between min-w-[100px]">
            {i % 2 === 0 ? (
              <>
                {/* Logo First */}
                <img
                  src={img}
                  alt={name}
                  className="h-24 w-24 object-contain mb-3 "
                />
                <div className="w-1 h-32 bg-primary rounded-full my-2"></div>
                <p className="text-white text-xl font-bold">{name}</p>
              </>
            ) : (
              <>
                {/* Name First */}
                <p className="text-white text-xl font-bold mb-2">{name}</p>
                <div className="w-1 h-32 bg-primary rounded-full my-2"></div>
                <img
                  src={img}
                  alt={name}
                  className="h-24 w-24 object-contain  mt-2"
                />
              </>
            )}
          </div>
        ))}
      </div>
    </motion.div>


{/* 4. Services */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="max-w-7xl mx-auto mt-28 px-4"
>
  {/* Section Heading */}
  <div className="flex justify-center items-center gap-3 mb-12">
    <FaCogs className="text-6xl text-primary animate-bounce" />
    <h3 className="text-5xl md:text-5xl font-extrabold text-primary text-center">
      What I Offer
    </h3>
  </div>

  {/* Service Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-10 justify-center">
    {[
      {
        icon: <FaLaptopCode />,
        title: "Frontend Development",
        desc: "Building high-performance, animated, and pixel-perfect user interfaces using React, TailwindCSS, and Framer Motion with seamless responsiveness and component-based design.",
      },
      {
        icon: <FaServer />,
        title: "Backend Engineering",
        desc: "Creating secure, scalable server-side architectures with Node.js & Express. Includes authentication, protected APIs, MVC structure, and seamless frontend-backend integration.",
      },
      {
        icon: <FaDatabase />,
        title: "Database Design",
        desc: "Designing optimized, structured databases using MongoDB and SQL. Ensuring relational integrity, scalability, indexing, and clean schema architecture for fast queries.",
      },
      {
        icon: <FaPencilRuler />,
        title: "UI/UX Design",
        desc: "Delivering modern, user-centric interfaces using Figma and design systems. From low-fidelity wireframes to polished screens that improve engagement and usability.",
      },
      {
        icon: <FaRobot />,
        title: "AI Integration",
        desc: "Empowering applications with intelligence via OpenAI, HuggingFace, or Mistral APIs. Automating tasks, generating content, and creating chatbots that feel real.",
      },
      {
        icon: <FaProjectDiagram />,
        title: "Project Management",
        desc: "Organizing entire web project lifecycles from ideation to launch using GitHub, Agile methods, documentation, and clear team collaboration practices.",
      },
    ].map(({ icon, title, desc }, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-primary text-white rounded-2xl shadow-[0_0_10px_#00bfff99] max-w-sm w-full px-6 py-8 text-center justify-center hover:shadow-[0_0_25px_#00bfffcc] transition duration-300"
      >
        <div className="text-5xl text-center mb-4 text-white drop-shadow-md">{icon}</div>
        <h4 className="text-2xl font-bold mb-4">{title}</h4>
        <p className="text-sm leading-relaxed">{desc}</p>
      </motion.div>
    ))}
  </div>
</motion.div>



    </section>
  );
}
