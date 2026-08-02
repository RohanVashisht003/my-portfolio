import Logo from "../assets/R.png";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  // State variables
  const [showShadowNav, setShowShadowNav] = useState(false); // Controls the visibility of the shadow on the navbar

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowShadowNav(true);
      } else {
        setShowShadowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={
        !showShadowNav
          ? "fixed w-full h-[80px] flex justify-between items-center px-4"
          : "fixed w-full h-[80px] flex justify-between items-center px-4 bg-white/80 backdrop-blur-sm text-gray-800 z-20 shadow-2xl border-b border-white/20"
      }
    >
      <div>
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "5rem", marginLeft: "1rem", marginRight: "1rem" }}
          />
        </Link>
      </div>
      {/* menu */}
      <ul className="hidden md:flex">
        <li className="hover:text-[#ff9500] hover:translate-y-1 hover:duration-200 active:text-[#ff9500]">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-[#ff9500] hover:translate-y-1 hover:duration-200 active:text-[#ff9500]">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-[#ff9500] hover:translate-y-1 hover:duration-200 active:text-[#ff9500]">
          <Link to="awards" smooth={true} duration={500}>
            Awards
          </Link>
        </li>
        <li className="hover:text-[#ff9500] hover:translate-y-1 hover:duration-200 active:text-[#ff9500]">
          <Link to="skill" smooth={true} duration={500}>
            Skill
          </Link>
        </li>
        <li className="hover:text-[#ff9500] hover:translate-y-1 hover:duration-200 active:text-[#ff9500]">
          <Link to="experience" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li className="hover:text-[#ff9500] hover:translate-y-1 hover:duration-200 active:text-[#ff9500]">
          <Link to="portfolio" smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li className="hover:text-[#ff9500] hover:translate-y-1 hover:duration-200 active:text-[#ff9500]">
          <Link to="contact" smooth={true} duration={500}>
            Get In Touch
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col left-0 top-[100%]">
        <ul className="flex flex-col gap-6">
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-200 rounded-e-2xl font-semibold">
            <a
              href="https://www.linkedin.com/in/rohan-sharma-937283167/"
              className="flex justify-between items-center w-full text-[#3A1078]"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-200 rounded-e-2xl font-semibold">
            <a
              href="https://github.com/RohanVashisht003"
              className="flex justify-between items-center w-full text-[#3A1078]"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
