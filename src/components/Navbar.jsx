import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHome,
  FaUserAlt,
  FaProjectDiagram,
  FaCommentDots,
  FaPaperPlane,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const navItems = [
  { label: "Home", path: "/", icon: <FaHome /> },
  { label: "About", path: "/about", icon: <FaUserAlt /> },
  { label: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
  { label: "Feedback", path: "/feedback", icon: <FaCommentDots /> },
  { label: "Work With Me", path: "/work-with-me", icon: <FaPaperPlane /> },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-primary shadow-[0_4px_20px_#00bfff]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center relative">
        {/* Left: Brand */}
        <Link
          to="/"
          className="text-4xl md:text-4xl font-extrabold tracking-tight text-white font-orbitron drop-shadow-md"
        >
          HashCode
        </Link>

        {/* Mobile menu toggle */}
        <div className="md:hidden text-white text-2xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-white md:text-base font-bold">
          {navItems.map((item) => (
            <li key={item.path} className="group relative">
              {item.label === "About" && location.pathname === "/" ? (
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="flex text-lg items-center gap-2 cursor-pointer relative"
                >
                  <span>{item.icon}</span>
                  {item.label}
                  <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </ScrollLink>
              ) : (
                <Link
                  to={item.path}
                  className={`flex text-lg items-center gap-2 whitespace-nowrap transition-colors duration-300 relative ${
                    location.pathname === item.path ? "text-black font-extrabold" : ""
                  }`}
                >
                  <span>{item.icon}</span>
                  {item.label}
                  <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Nav */}
        {isOpen && (
          <ul className="absolute top-20 left-0 w-full bg-primary flex flex-col items-center space-y-4 py-6 text-white font-semibold md:hidden shadow-xl">
            {navItems.map((item) => (
              <li key={item.path} className="group relative">
                {item.label === "About" && location.pathname === "/" ? (
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={closeMenu}
                    className="flex text-lg items-center gap-2 cursor-pointer relative"
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </ScrollLink>
                ) : (
                  <Link
                    to={item.path}
                    onClick={closeMenu}
                    className={`flex text-lg items-center gap-2 transition-colors duration-300 relative ${
                      location.pathname === item.path ? "text-black font-extrabold" : ""
                    }`}
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
