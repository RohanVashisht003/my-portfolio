import { Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { 
  FaCode, 
  FaServer, 
  FaLaptopCode, 
  FaDatabase, 
  FaVial, 
  FaRocket 
} from "react-icons/fa";

const Skill = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaCode size={28} />,
      count: 10,
      skills: [
        "React.js", "Next.js", "React Native", "Angular", "Ionic",
        "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Redux"
      ]
    },
    {
      title: "Backend",
      icon: <FaServer size={28} />,
      count: 6,
      skills: [
        "Node.js", "Express.js", "Handlebars (SSR)", "REST APIs", "Microservices", "PHP"
      ]
    },
    {
      title: "Languages",
      icon: <FaLaptopCode size={28} />,
      count: 5,
      skills: [
        "JavaScript (ES6+)", "TypeScript", "Python", "C++", "C"
      ]
    },
    {
      title: "Databases",
      icon: <FaDatabase size={28} />,
      count: 3,
      skills: [
        "MongoDB", "MySQL", "Firebase"
      ]
    },
    {
      title: "Testing",
      icon: <FaVial size={28} />,
      count: 2,
      skills: [
        "Jest", "Unit Testing"
      ]
    },
    {
      title: "Performance & SEO",
      icon: <FaRocket size={28} />,
      count: 7,
      skills: [
        "Core Web Vitals", "SSR/SSG", "Lazy Loading", "Code Splitting",
        "Structured Data", "Sitemaps", "Canonical URLs"
      ]
    }
  ];

  return (
    <Element
      name="skill"
      className="w-full radial-gradient(80% 50% at 50% -20%, #2563eb1f, #0000), radial-gradient(60% 40% at 80%, #7c3aed0f, #0000); text-gray-300 py-32"
    >
      <div className="max-w-screen-xl mx-auto px-8 py-4 flex flex-col justify-center h-full text-black">
        <div className="text-center">
          <p className="text-4xl font-bold inline text-gradient">
            Professional Skillset
          </p>
          <p className="py-6 text-gray-600">
            I have used and worked with the following technologies in my projects.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-duration={600 + (index * 100)}
              data-aos-easing="linear"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-[#7E57C2]">
                  {category.icon}
                </div>
                <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {category.count} skills
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {category.title}
              </h3>

              <div className="w-full h-1 bg-gray-200 rounded-full mb-4">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  style={{ width: `${(category.count / 10) * 100}%` }}
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-3 py-1.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Skill;
