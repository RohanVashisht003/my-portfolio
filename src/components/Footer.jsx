import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-8">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <p className="text-gray-800 font-semibold">
            Designed and Developed by Rohan Sharma
          </p>
          <p className="text-gray-600 text-sm mt-1">
            Copyright © 2026
          </p>
        </div>

        {/* Middle Section - Icon Buttons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/RohanVashisht003"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white border border-gray-300 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300 text-gray-700 hover:text-[#7E57C2]"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/rohan-sharma-937283167/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white border border-gray-300 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300 text-gray-700 hover:text-[#7E57C2]"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:sharmarohan544@gmail.com"
            className="w-12 h-12 bg-white border border-gray-300 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300 text-gray-700 hover:text-[#7E57C2]"
          >
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Right Section - Text Links */}
        <div className="flex gap-6 text-center md:text-right">
          <a
            href="https://github.com/RohanVashisht003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-[#7E57C2] transition-colors duration-300"
          >
            Github
          </a>
          <a
            href="https://linkedin.com/in/rohan-sharma-937283167/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-[#7E57C2] transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sharmarohan544@gmail.com"
            className="text-gray-700 hover:text-[#7E57C2] transition-colors duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
