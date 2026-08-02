import { Element } from "react-scroll";
import { IoSendSharp } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await emailjs
      .sendForm(
        "service_ffmarx4",
        "template_u4vejtf",
        form.current,
        "3oGx0XASB4DnmB9al"
      )
      .then(() => {
        e.target.reset();
        toast.success("Email Sent Successfully!");
      })
      .catch(() => {
        toast.error("Error occured");
      });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Element
      name="contact"
      className="w-full py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"
    >
      <div className="flex flex-col justify-center items-center w-full px-8">
        <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-8">
          {/* Left Card - Let's Connect */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col ">
           
            <h2 className="text-3xl font-bold text-gradient mb-4 text-center">Let's Connect</h2>
            <p className="text-gray-600 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the channels below.
            </p>
             <div className="flex items-center  text-green-600 text-sm font-semibold pt-9">
              <span className="h-2 w-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Available for opportunities
            </div>
          </div>

          {/* Right Card - Contact Details */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gradient mb-6 text-center">Contact Information</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-600">
                <FaEnvelope className="mr-3 text-[#ff9500]" />
                <span>sharmarohan544@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaPhone className="mr-3 text-[#ff9500]" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="mr-3 text-[#ff9500]" />
                <span>India</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/RohanVashisht003"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#ff9500] hover:text-white transition-all duration-300 text-gray-700"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#ff9500] hover:text-white transition-all duration-300 text-gray-700"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:sharmarohan544@gmail.com"
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#ff9500] hover:text-white transition-all duration-300 text-gray-700"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Element>
  );
};

export default Contact;
