import { useState } from "react";
import { Element } from "react-scroll";
import { ChevronDown, ChevronUp } from "lucide-react";
import { experience } from "../assets/StaticData";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const items = experience.slice().reverse();

  // First item (most recent) starts collapsed, the rest start expanded —
  // matches the reference design. Toggle any item by clicking it.
  const [openIndex, setOpenIndex] = useState(
    items.reduce((acc, _, i) => {
      acc[i] = i !== 0;
      return acc;
    }, {})
  );

  const toggle = (i) => {
    setOpenIndex((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <Element
      name="experience"
      className="min-h-screen text-gray-800 py-32"
      style={{
        background:
          "radial-gradient(80% 50% at 50% -20%, #2563eb1f, #0000), radial-gradient(60% 40% at 80%, #7c3aed0f, #0000)",
      }}
    >
      <div className="max-w-screen-lg mx-auto px-8 py-4 flex flex-col justify-center h-full">
        <h1 className="text-4xl font-bold inline  text-gradient text-center">
          Experience
        </h1>
        <p className="text-xl py-6 text-gray-600 text-center">
          Experienced professional with a proven track record of success
        </p>

        <div className="relative mt-6">
          {/* vertical timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-blue-100" />

          <div className="flex flex-col gap-8">
            {items.map((data, index) => {
              const isOpen = !!openIndex[index];

              return (
                <div key={index} className="relative pl-14">
                  {/* timeline dot */}
                  <span className="absolute left-0 top-8 w-4 h-4 rounded-full border-2 border-blue-500 bg-white" />

                  <div
                    className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >
                    {/* header */}
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      className="w-full flex items-start justify-between gap-4 p-6 text-left"
                    >
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {data.company}
                        </h3>
                        <p className="text-sm mt-1 text-gray-500">
                          <span className="text-blue-600 font-medium">
                            {data.position}
                          </span>
                          {data.location && <> · {data.location}</>}
                          {data.date && <> · {data.date}</>}
                        </p>
                      </div>
                      <span className="text-gray-400 mt-1 shrink-0">
                        {isOpen ? (
                          <ChevronUp size={18} />
                        ) : (
                          <ChevronDown size={18} />
                        )}
                      </span>
                    </button>

                    {/* expandable body */}
                    {isOpen && (
                      <div className="px-6 pb-6 border-t border-gray-100 pt-5">
                        {data.image && (
                          <img
                            src={data.image}
                            alt={`${data.company} preview`}
                            className="w-28 h-16 object-cover rounded-lg border border-gray-200 mb-4"
                          />
                        )}

                        {Array.isArray(data.description) ? (
                          <ul className="space-y-2">
                            {data.description.map((line, i) => (
                              <li
                                key={i}
                                className="flex gap-2 text-[15px] leading-relaxed text-gray-600"
                              >
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          data.description && (
                            <p className="text-[15px] leading-relaxed text-gray-600">
                              {data.description}
                            </p>
                          )
                        )}

                        {Array.isArray(data.skills) && data.skills.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {data.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-3 py-1"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Experience;
