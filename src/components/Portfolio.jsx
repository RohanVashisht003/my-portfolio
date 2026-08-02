import { Element } from "react-scroll";
import { portfolio } from "../assets/StaticData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = portfolio.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  return (
    <Element
      name="portfolio"
      className="w-full radial-gradient(80% 50% at 50% -20%, #2563eb1f, #0000), radial-gradient(60% 40% at 80%, #7c3aed0f, #0000); py-32"
    >
      <div className="max-w-screen-xl mx-auto px-8 py-4 flex flex-col justify-center h-full text-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold inline text-gradient">
            Projects
          </h1>
          <p className="py-6 text-gray-600">
            High-traffic news portals and full-stack applications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              filter === "all"
                ? "bg-[#7E57C2] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter("professional")}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              filter === "professional"
                ? "bg-[#7E57C2] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Professional
          </button>
          <button
            onClick={() => setFilter("personal")}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              filter === "personal"
                ? "bg-[#7E57C2] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Personal
          </button>
        </div>

        {/* Professional Projects Subsection */}
        {(filter === "all" || filter === "professional") && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Professional Projects
            </h2>
            <p className="text-gray-600 mb-6">
              Enterprise-level applications built at Times Network
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects
                .filter((p) => p.category === "professional")
                .map((work, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    data-aos="fade-up"
                    data-aos-duration={600 + (index * 100)}
                    data-aos-easing="linear"
                  >
                    <div className="relative">
                      <img
                        src={work.imgUrl}
                        alt={work.title}
                        className="w-full h-40 object-cover"
                      />
                      <a
                        href={work.workUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-300"
                      >
                        <FaExternalLinkAlt size={16} className="text-[#7E57C2]" />
                      </a>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {work.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-4">
                        {work.description || "A full-stack application built with modern technologies."}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {work.tech.slice(0, 3).map((item) => (
                          <span
                            key={item}
                            className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-2 py-1"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Personal Projects Subsection */}
        {(filter === "all" || filter === "personal") && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Personal Projects
            </h2>
            <p className="text-gray-600 mb-6">
              Side projects and experimental work
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects
                .filter((p) => p.category === "personal")
                .map((work, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    data-aos="fade-up"
                    data-aos-duration={600 + (index * 100)}
                    data-aos-easing="linear"
                  >
                    <div className="relative">
                      <img
                        src={work.imgUrl}
                        alt={work.title}
                        className="w-full h-48 object-cover"
                      />
                      <a
                        href={work.workUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-300"
                      >
                        <FaExternalLinkAlt size={16} className="text-[#7E57C2]" />
                      </a>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {work.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {work.description || "A full-stack application built with modern technologies."}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {work.tech.slice(0, 3).map((item) => (
                          <span
                            key={item}
                            className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-2 py-1"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* View More Button */}
        <div className="flex justify-center mt-10">
          <a
            className="bg-[#7E57C2] text-white px-6 py-3 rounded-full font-semibold flex items-center hover:bg-[#6D46B0] transition-all duration-300"
            href="https://github.com/RohanVashisht003?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            View More on GitHub
            <FaGithub className="ml-2" />
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Portfolio;
