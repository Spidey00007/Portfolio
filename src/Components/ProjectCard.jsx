import React, { useRef, useState, useEffect } from "react";

const ProjectCard = ({
  number,
  skills,
  title,
  description,
  githubLink,
  liveLink,
  backgroundImage,
}) => {
  const cardRef = useRef(null);
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

  const currentCard = cardRef.current;
  if (currentCard) observer.observe(currentCard);

  return () => {
    if (currentCard) observer.unobserve(currentCard);
  };
}, []);


  return (
    <div
      ref={cardRef}
      className={`w-2/5 min-w-72 relative group rounded-xl overflow-hidden bg-cover bg-center shadow-lg transition-transform transform hover:scale-105 duration-300 ${
        isVisible ? "animate-popIn" : "opacity-0"
      }`}
      style={{ backgroundImage: `url(${backgroundImage})`, height: "400px" }}
    >
      <div className="p-4 bg-gradient-to-t from-black via-black/70 to-transparent text-white flex flex-col justify-end h-full group-hover:shadow-xl transition-shadow duration-300">
        <div className="flex gap-2 mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          {skills.map((skill, index) => (
            <img
              key={index}
              src={skill}
              alt={`Skill ${index + 1}`}
              className="h-6 w-6 rounded-full border border-white transition-transform duration-300 group-hover:scale-110"
            />
          ))}
        </div>
        <div className="">
          <h2 className="text-sm font-bold group-hover:text-pink-500 transition-colors duration-300">
            {title}
          </h2>
          <p className="text-xs">{description}</p>
        </div>
        <div className="flex items-center my-2 gap-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-300 px-1 py-1 rounded hover:bg-purple-700 transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 px-1 py-1 rounded hover:bg-green-700 transition-colors duration-300"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
