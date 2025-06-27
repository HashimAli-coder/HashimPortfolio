import { motion } from "framer-motion";
import { FaCommentDots, FaStar, FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import Footer from '../components/Footer';

const testimonials = [
  {
    name: "Sarah Malik",
    feedback:
      "Hashim turned my blurry idea into a stunning website. Super impressed by his attention to detail and design aesthetic!",
    align: "left",
  },
  {
    name: "Tariq Khan",
    feedback:
      "His blend of frontend excellence and backend reliability makes him a complete package. Highly recommended!",
    align: "right",
  },
];

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div>
      <section
        id="feedback"
        className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black py-24 px-6 text-white relative overflow-hidden"
      >
        {/* Glow Circles */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary rounded-full blur-[120px] opacity-20 z-0" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-primary rounded-full blur-[120px] opacity-20 z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-4 flex justify-center items-center gap-3 text-primary"
          >
            <FaCommentDots className="text-3xl animate-bounce" />
            Your Feedback
          </motion.h2>

          <p className="text-gray-400 text-base mb-12 text-center">
            Share your thoughts about my work — your feedback fuels my creativity!
          </p>

          {/* Feedback + Form Layout */}
          <div className="grid md:grid-cols-5 gap-10 items-start">
            {/* Feedback Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="col-span-1 flex flex-col gap-8"
            >
              {testimonials
                .filter((f) => f.align === "left")
                .map((t, i) => (
                  <div
                    key={i}
                    className="relative bg-primary/10 border border-primary/30 text-sm text-gray-200 p-5 rounded-3xl shadow-lg max-w-xs ml-auto"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <FaUserCircle className="text-primary text-2xl" />
                      <span className="font-semibold text-white">{t.name}</span>
                    </div>
                    <p className="leading-relaxed italic">{t.feedback}</p>
                    <div className="absolute -bottom-3 right-6 w-5 h-5 bg-primary/10 border-b border-r border-primary/30 transform rotate-45 z-[-1]" />
                  </div>
                ))}
            </motion.div>

            {/* Form Center */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-3 bg-gray-900 p-10 rounded-2xl shadow-xl shadow-primary/30 border border-gray-800 space-y-6 w-full"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="bg-gray-800 px-4 py-3 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-800 px-4 py-3 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />

              {/* Rating */}
              <div className="flex flex-col items-center gap-2">
                <label className="text-gray-300 font-semibold text-sm">
                  Rate My Work:
                </label>
                <div className="flex gap-2 text-2xl justify-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`cursor-pointer transition-transform duration-200 ${
                        (hover || rating) > i
                          ? "text-yellow-400 scale-110"
                          : "text-gray-500"
                      }`}
                      onClick={() => setRating(i + 1)}
                      onMouseEnter={() => setHover(i + 1)}
                      onMouseLeave={() => setHover(0)}
                    />
                  ))}
                </div>
              </div>

              <textarea
                rows="5"
                placeholder="Write your feedback here..."
                className="bg-gray-800 px-4 py-3 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:scale-105 hover:shadow-[0_0_20px_#00bfff70] transition-all"
              >
                Submit Feedback
              </button>
            </motion.form>

            {/* Feedback Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="col-span-1 mt-44 flex flex-col gap-8"
            >
              {testimonials
                .filter((f) => f.align === "right")
                .map((t, i) => (
                  <div
                    key={i}
                    className="relative bg-primary/10 border border-primary/30 text-sm text-gray-200 p-5 rounded-3xl shadow-lg max-w-xs mr-auto"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <FaUserCircle className="text-primary text-2xl" />
                      <span className="font-semibold text-white">{t.name}</span>
                    </div>
                    <p className="leading-relaxed italic">{t.feedback}</p>
                    <div className="absolute -bottom-3 left-6 w-5 h-5 bg-primary/10 border-b border-l border-primary/30 transform rotate-45 z-[-1]" />
                  </div>
                ))}
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Feedback;
