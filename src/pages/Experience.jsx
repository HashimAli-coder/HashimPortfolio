import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import Bytewise from "../assets/bytewise.jpg"
import TechBite from "../assets/tbs.jpg"
import JoyAviation from "../assets/jas.png"
import RocketDevs from "../assets/RD.png"

const experiences = [
    {
  role: "Associate Full Stack Developer",
  company: "RocketDevs",
  duration: "Jan 2026 – Present",
  points: [
    "Worked on full stack development tasks involving frontend interfaces and backend integrations.",
    "Collaborated with cross-functional teams to build scalable features and improve application performance."
  ],
  link: "https://rocketdevs.com/",
  logo: RocketDevs,
},

  {
    role: "Frontend Engineer",
    company: "Joy Aviation Supply",
    duration: "Oct 2025 – Dec 2025",
    points: [
      "Translated design concepts into responsive and interactive user interfaces.",
      "Integrated frontend components with backend systems and assisted in UI/database planning."
    ],
    link: "https://ja-supply.com/",
    logo: JoyAviation,
  },
  {
    role: "Junior Web Developer",
    company: "Tech Bite Solution",
    duration: "Jul 2025 – Oct 2025",
    points: [
      "Gained hands-on frontend experience through task-based learning using modern web technologies.",
      "Collaborated with team members on real-world UI/UX tasks to improve development practices."
    ],
    link: "https://www.techbitesolution.com/",
    logo: TechBite,
  },
  {
    role: "MERN Fellow",
    company: "Bytewise Limited",
    duration: "Jun 2024 – Sep 2024",
    points: [
      "Built full-stack MERN projects under the guidance of industry professionals.",
      "Worked in a collaborative environment, learning through iterations, challenges, and feedback."
    ],
    link: "https://www.bytewiseltd.com/",
    logo: Bytewise,
  },
];

const Experience = () => {
  return (
    <section className="min-h-screen bg-gray-950 text-white py-24 px-20">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center text-primary mb-6 flex items-center justify-center gap-3"
      >
        <FaBriefcase className="text-3xl" />
        Professional Experience
      </motion.h2>

      <p className="text-center text-gray-400 max-w-3xl mx-auto mb-20">
        Hands-on industry experience gained through professional roles, fellowships,
        and collaborative development environments.
      </p>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-gray-900/60 border border-primary/20 rounded-3xl p-8 shadow-lg shadow-primary/10"
          >
            {/* Header */}
           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
  <div className="flex items-center gap-4">
    {/* Logo */}
    {exp.logo && (
      <div className="w-24 h-24 rounded-xl bg-gray-800 flex items-center justify-center overflow-hidden">
        <img
          src={exp.logo}
          alt={exp.company}
          className="w-full h-full object-contain p-2"
        />
      </div>
    )}

    {/* Text */}
    <div>
      <h3 className="text-2xl font-bold text-primary">
        {exp.role}
      </h3>
      <p className="text-gray-300 text-lg">
        {exp.company}
      </p>
    </div>
  </div>

  <span className="text-sm text-gray-400">
    {exp.duration}
  </span>
</div>


            {/* Points */}
            <ul className="space-y-3 text-gray-300 list-disc list-inside">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
