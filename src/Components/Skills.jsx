import React, { useRef, useEffect, useState } from "react";
import '../App.css'
const Skills = () => {
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      if (skillsRef.current) observer.disconnect();
    };
  }, []);

  return (
    <div
      id="skills"
      ref={skillsRef}
      className={`relative flex flex-col items-center py-16 bg-gradient-to-r from-green-300 to-purple-400 scroll-mt-8 ${
        isVisible ? "animate-popIn" : "opacity-0"
      }`}
    >
      <div className="absolute opacity-40 text-[15rem] text-gray-300 font-bold bottom-10 right-10 select-none z-0">
        Skills
      </div>

      <div className="relative select-none flex flex-col md:flex-row items-center justify-between gap-16 w-full max-w-6xl relative z-10 px-6">
        <div className="top-3 md:w-1/3 space-y-6">
          <h2 className="text-3xl font-bold text-orange-600 leading-tight">
            <span className="text-4xl">M</span>y Tech stack
          </h2>

          <div className="text-sm leading-[1.3] text-justify text-gray-900 select-none">
            <p className="text-sm">
              My academic background and practical experience have provided me
              with a strong foundation in problem-solving and web development,
              utilizing technologies such as React.js, Express.js, Node.js, MySQL,
              MongoDB, and JavaScript. These tools have empowered me to build
              dynamic and efficient applications, and I am committed to
              continuously advancing my skills in this rapidly evolving field.
            </p>
          </div>
        </div>

        <div className="md:w-2/3 flex flex-wrap justify-center gap-10 relative cursor-pointer select-none">
          {[
            "HTML.png",
            "c++.svg",
            "c.svg",
            "CSS.png",
            "Javascript.svg",
            "React.svg",
            "NodeJs.svg",
            "Next.svg",
            "Redux.svg",
            "Linux.png",
            "Tailwind.png",
            "Express.png",
            "Git.svg",
            "Github.svg",
            "MongoDB.svg",
            "Vercel.svg",
          ].map((icon, index) => (
            <img
              key={index}
              src={`img/stack/${icon}`}
              alt={`${icon.split(".")[0]} logo`}
              className="w-20 h-20 object-contain transform transition-transform hover:scale-110"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
