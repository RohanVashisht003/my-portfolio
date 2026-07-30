import { Element } from "react-scroll";
import { experience } from "../assets/StaticData";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Element
      name="experience"
      className="min-h-screen radial-gradient(80% 50% at 50% -20%, #2563eb1f, #0000), radial-gradient(60% 40% at 80%, #7c3aed0f, #0000); text-gray-300 py-32"
    >
      <div className="max-w-screen-lg mx-auto px-8 py-4 flex flex-col justify-center  h-full text-black">
        <h1 className="text-4xl font-bold inline border-b-4 border-[#00FFCA]">
          Experience
        </h1>
        <p className="text-xl py-6">
          Experienced professional with a proven track record of success
        </p>

        <div className="w-full sm:w-full md:w-12/12 mt-5">
          {experience
            .slice()
            .reverse()
            .map((data, index) => (
              <div
                key={index}
                className={`relative flex flex-col p-3.5 border-white md:border-b-4 ${
                  index % 2 === 0
                    ? "border-l-4 md:items.start"
                    : "md:items-end md:border-r-4 md:text-right"
                }`}
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <h1
                  className={`absolute top-0 bg-white w-max p-2.5 text-[#3A1078] dark:text-[#21073C] shadow-2xl text-2xl ${
                    index % 2 === 0 ? "left-0" : "md:right-0"
                  }`}
                >
                  {data.date}
                </h1>
                <h1 className="pt-14 font-bold text-3xl">{data.company}</h1>
                <h2 className="text-xl font-bold text-[#00FFCA] py-1">
                  {data.position}
                </h2>
                <p className="text-lg mt-1 leading-8">{data.description}</p>
              </div>
            ))}
        </div>
      </div>
    </Element>
  );
};

export default Experience;
