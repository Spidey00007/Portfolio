import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import TOPOLOGY from "vanta/src/vanta.topology";

const Projects = () => {
  const [topology, setTopology] = useState(null);

  useEffect(() => {
    if (!topology) {
      setTopology(
        TOPOLOGY({
          el: "#projects",
          color: 0x1fd1a5,
          backgroundColor: 0xb3e0dc,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
        })
      );
    }

    return () => {
      if (topology) topology.destroy();
    };
  }, [topology]);

  const projectData = [
    {
      number: 1,
      skills: [
        "img/stack/HTML.png",
        "img/stack/CSS.png",
        "img/stack/Javascript.svg",
        "img/stack/React.png",
        "img/stack/NodeJs.svg",
        "img/stack/Express.png",
        "img/stack/MongoDB.svg",
        "img/stack/Tailwind.png",
        "img/stack/Vercel.svg",
      ],
      title: "MockInterview AI",
      description:
        "A SaaS app simulating interviews with Google Gemini API, and viewing feedback to enhance user preparedness.",
      githubLink: "https://github.com/Spidey00007/MockInterview-AI",
      liveLink: "https://mockinterview-ai-sigma.vercel.app/",
      backgroundImage: "img/projects/form.webp",
    },
    {
      number: 2,
      skills: [
        "img/stack/react.png",
        "img/stack/Tailwind.png",
        "img/stack/Redux.svg",
        "img/stack/HTML.png",
        "img/stack/CSS.png",
        "img/stack/Javascript.svg",
        "img/stack/Vercel.svg",
      ],
      title: "EasyForm AI",
      description:
        "A SaaS app for creating customizable forms with themes, backgrounds, and advanced features using Google Gemini API.",
      githubLink: "https://github.com/Spidey00007/Easy-Form",
      liveLink: "https://easy-form-wheat.vercel.app/",
      backgroundImage: "img/projects/interview.jpeg",
    },
  ];

  return (
    <div className="py-10 text-white relative" id="projects">
      <h2 className="text-center text-teal-600 text-4xl font-bold mb-8">
        Projects
      </h2>
      <div className="flex flex-wrap justify-around p-7 gap-5 items-center w-full">
        {projectData.map((project) => (
          <ProjectCard key={project.number} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
