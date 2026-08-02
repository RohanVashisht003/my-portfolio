import { Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaAward } from "react-icons/fa";

const Awards = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const awards = [
    {
      title: "Ace Performer Award",
      issuer: "Times Network",
      year: "December 2025",
      description: "Recognized for driving significant performance improvements and delivering exceptional results in high-traffic news portal development.",
      icon: <FaAward size={40} />
    }
  ];

  return (
    <Element
      name="awards"
      className="w-full min-h-screen radial-gradient(80% 50% at 50% -20%, #2563eb1f, #0000), radial-gradient(60% 40% at 80%, #7c3aed0f, #0000); py-32"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold inline  text-gradient">
            Awards & Recognition
          </h1>
          <p className="py-6">
            Recognition for excellence and outstanding contributions
          </p>
        </div>
        
        <div className="w-full grid sm:grid-cols-1 md:grid-cols-1 gap-8 mt-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 p-8 flex flex-col"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-easing="linear"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-[#7E57C2]">
                  {award.icon}
                </div>
                <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {award.year}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {award.title}
              </h3>
              
              <p className="text-[#ff9500] font-semibold mb-4">
                {award.issuer}
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Awards;
