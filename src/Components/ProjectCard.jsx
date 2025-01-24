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

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`w-2/5 min-w-72 relative group rounded-xl overflow-hidden bg-cover bg-center shadow-lg transition-transform transform hover:scale-105 duration-300 ${
        isVisible ? "animate-popIn" : "opacity-0"
      }`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="p-4 bg-gradient-to-t from-black via-black/70 to-transparent text-white flex flex-col justify-end h-full group-hover:shadow-xl transition-shadow duration-300">
        <div className="flex gap-2 mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          {skills.map((skill, index) => (
            <img
              key={index}
              src={skill}
              alt={`Skill ${index + 1}`}
              className="h-8 w-8 rounded-full border border-white transition-transform duration-300 group-hover:scale-110"
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-2 group-hover:text-pink-500 transition-colors duration-300">
          {title}
        </h2>
        <p className="mb-4">{description}</p>
        <div className="flex items-center gap-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 px-4 py-2 rounded hover:bg-pink-500 transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition-colors duration-300"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
