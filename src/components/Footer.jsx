import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaCogs,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 shadow-[0_-2px_20px_#00bfff40] border-t-2 border-primary">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Column 1: About Me */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-4">HashCode</h3>
          <p className="text-gray-300 leading-relaxed text-sm">
            I'm Hashim Ali — a full stack developer and creative engineer who blends tech with art. From stunning UI/UX to solid backend APIs and AI integration, I help bring ambitious ideas to life using modern technologies.
          </p>
        </div>

        {/* Column 2: Services */}
        <div className="sm:ml-4 lg:ml-10">
          <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
            <FaCogs className="text-lg" /> Services I Offer
          </h3>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>• Frontend Development</li>
            <li>• Backend Engineering</li>
            <li>• Database Design</li>
            <li>• UI/UX Prototyping</li>
            <li>• AI Integration</li>
            <li>• Project Management</li>
          </ul>
        </div>

        {/* Column 3: Social + Contact */}
        <div className="flex flex-col gap-6">
          {/* Follow Me Section */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">Follow Me</h3>
            <div className="flex gap-4 text-xl text-gray-400">
              <a
                href="https://github.com/HashimAli-coder?tab=overview&from=2025-05-01&to=2025-05-27"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-transform hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/hashim-ali-635b932b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/hashim0112?igsh=ZjNmeDZrcWZ1NXlw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-transform hover:scale-110"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">Contact</h3>
            <div className="flex items-start gap-3 mb-3">
              <FaEnvelope className="text-primary mt-1" />
              <span className="text-sm text-gray-300 break-all">hashimalittt@gmail.com</span>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-primary mt-1" />
              <span className="text-sm text-gray-300">Islamabad, Pakistan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-500 text-xs mt-10 border-t border-gray-700 pt-6 px-4">
        © {new Date().getFullYear()} Hashim Ali — Crafted with code, powered by passion.
      </div>
    </footer>
  );
};

export default Footer;
