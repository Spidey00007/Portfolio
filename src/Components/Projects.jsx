// import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
// import TOPOLOGY from "vanta/src/vanta.topology";

const Projects = () => {
  //   const [topology, setTopology] = useState(null);

  //   useEffect(() => {
  //     if (!topology) {
  //       setTopology(
  //         TOPOLOGY({
  //           el: "#projects",
  //           color: 0x1fd1a5,
  //           backgroundColor: 0xb3e0dc,
  //           mouseControls: true,
  //           touchControls: true,
  //           gyroControls: false,
  //           minHeight: 200.0,
  //           minWidth: 200.0,
  //           scale: 1.0,
  //           scaleMobile: 1.0,
  //         })
  //       );
  //     }

  //     return () => {
  //       if (topology) topology.destroy();
  //     };
  //   }, [topology]);

  const projectData = [
    {
      number: 1,
      skills: [
        "img/stack/react.png",
        "img/stack/Next.svg",
        "img/stack/Tailwind.png",
        "img/stack/Vercel.svg",
        "img/stack/HTML.png",
        "img/stack/CSS.png",
        "img/stack/Javascript.svg",
        "img/stack/NodeJs.svg",
        "img/stack/Saas.svg",
      ],
      title: "SnapForm",
      description: "Creating customizable forms with themes and backgrounds",
      githubLink: "https://github.com/Spidey00007/SnapForm-AI",
      liveLink: "https://snapform-ai.vercel.app/",
      backgroundImage: "img/projects/form.webp",
    },
    {
      number: 2,
      skills: [
        "img/stack/Typescript.svg",
        "img/stack/HTML.png",
        "img/stack/CSS.png",
        "img/stack/Vercel.svg",
        "img/stack/React.png",
        "img/stack/Next.svg",
        "img/stack/NodeJs.svg",
        "img/stack/Tailwind.png",
        "img/stack/Saas.svg",
      ],
      title: "MeetCode",
      description:
        "Video conferencing meets real-time coding for interviews & DSA",
      githubLink: "https://github.com/Spidey00007/MeetCode",
      liveLink: "https://meetcode-pro.vercel.app/",
      backgroundImage: "img/projects/meetcode.avif",
    },
    {
      number: 3,
      skills: [
        "img/stack/HTML.png",
        "img/stack/CSS.png",
        "img/stack/Javascript.svg",
        "img/stack/Next.svg",
        "img/stack/React.png",
        "img/stack/NodeJs.svg",
        "img/stack/Tailwind.png",
        "img/stack/Vercel.svg",
        "img/stack/Saas.svg",
      ],
      title: "PrepBot",
      description: "Personalised interview prep with AI",
      githubLink: "https://github.com/Spidey00007/PrepBot",
      liveLink: "https://prepbot-pro.vercel.app/",
      backgroundImage: "img/projects/prepbot.png",
    },
    {
      number: 4,
      skills: [
        "img/stack/HTML.png",
        "img/stack/CSS.png",
        "img/stack/Next.svg",
        "img/stack/Javascript.svg",
        "img/stack/React.png",
        "img/stack/NodeJs.svg",
        "img/stack/Tailwind.png",
        "img/stack/Vercel.svg",
      ],
      title: "Portfolio",
      description:
        "Showcasing my skills and projects all in one place",
      githubLink: "https://github.com/Spidey00007/Portfolio",
      liveLink: "https://asamitportfolio.vercel.app/",
      backgroundImage: "img/projects/portfolio.jpg",
    },
  ];

  return (
    <div
      className="py-10 text-white relative"
      style={{
        backgroundImage: "url('/bg1.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
