// src/components/ContactSection.jsx

import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaUser, FaCommentDots, FaPaperPlane } from "react-icons/fa";
import TEAM from "../assets/TEAM.jpg";
import Footer from "../components/Footer"

const ContactSection = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_u08azc6",       // <- replace
      "template_kl9r0el",      // <- replace
      formRef.current,
      "2u0ugtC9c-x8KW3Ck"        // <- replace
    )
    .then(() => {
      alert("Message sent successfully! 🚀");
      formRef.current.reset();
    })
    .catch((err) => {
      alert("Failed to send message ❌");
      console.error(err);
    });
  };

  return (
    <div>
    <motion.section
      id="contact"
      className="max-w-7xl mb-10 mx-auto mt-32 px-6 pb-10 md:px-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 flex justify-center items-center gap-3">
          <FaEnvelope className="animate-bounce" />
          Work With Me
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Have a project in mind? Let’s build something amazing together.
          Fill out the form below and I’ll get back to you shortly.
        </p>
      </div>

      {/* 2 Column Layout */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Form */}
        <div className="bg-[#1f2937]/50 backdrop-blur-md rounded-2xl shadow-2xl shadow-primary/20 p-8 w-full lg:w-1/2 hover:shadow-primary/40">
        <h2 className="text-3xl font-extrabold mb-5 text-center text-primary">Reach Out !</h2>
          <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6">
            {/* Name */}
            <div className="relative">
              <FaUser className="absolute top-4 left-4 text-primary" />
              <input
                type="text"
                name="user_name"
                required
                placeholder="Your Name"
                className="w-full pl-12 py-3 bg-gray-900 text-white rounded-xl border border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute top-4 left-4 text-primary" />
              <input
                type="email"
                name="user_email"
                required
                placeholder="Your Email"
                className="w-full pl-12 py-3 bg-gray-900 text-white rounded-xl border border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <FaCommentDots className="absolute top-4 left-4 text-primary" />
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Your Message"
                className="w-full pl-12 py-3 bg-gray-900 text-white rounded-xl border border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="mt-2 bg-primary text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_#00bfffcc] transition-all"
            >
              <FaPaperPlane className="text-lg" />
              Send Message
            </motion.button>
          </form>
        </div>

        {/* Image / Info */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 text-white text-center"
        >
          <img
            src = {TEAM}
            alt="Work With Me"
            className="w-full max-w-md mx-auto mb-6 drop-shadow-lg rounded-2xl opacity-90"
          />
          <h4 className="text-2xl font-bold text-primary mb-2">Let’s Collaborate</h4>
          <p className="text-gray-300 leading-relaxed">
            Whether you're looking for a full-stack developer, frontend expert, or AI integration — I’ve got the skills to bring your idea to life.
          </p>
        </motion.div>
        
      </div>

    </motion.section>
     <Footer />
     </div>
  );
};

export default ContactSection;
