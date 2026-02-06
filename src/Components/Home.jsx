import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaFileAlt } from "react-icons/fa";
import "../App.css";
// import DOTS from "vanta/src/vanta.dots";
import WAVES from "vanta/src/vanta.waves";

const Home = () => {
  // const [dots, setDots] = useState(null);
  const [waves, setWaves] = useState(null);
  const profileWrapperRef = useRef(null);
  const mode = useSelector((state) => state.theme.mode);

  const textColor = mode === "light" ? "text-gray-900" : "text-white";

  useEffect(() => {
    if (!waves) {
      setWaves(
        WAVES({
          el: "#Home",
          color: 0x148e86,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          shininess: 15.0,
          waveHeight: 20,
          waveSpeed: 0.9,
          zoom: 0.6,
        })
      );
    }

    return () => {
      if (waves) waves.destroy();
    };
  }, [waves]);

  // useEffect(() => {
  //   if (!dots) {
  //     setDots(
  //       DOTS({
  //         el: "#Home",
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: false,
  //         minHeight: 200.0,
  //         minWidth: 200.0,
  //         scale: 1.0,
  //         scaleMobile: 1.0,
  //         color: 0x9933ff,
  //         backgroundColor: 0x66ffff,
  //         size: 3.0,
  //         spacing: 20,
  //         showLines: false,
  //         points: 10,
  //       })
  //     );
  //   }

  //   return () => {
  //     if (dots) dots.destroy();
  //   };
  // }, [dots]);

  return (
    <div
      id="Home"
      className="h-screen flex justify-between items-center px-6 md:px-7 py-5 overflow-hidden relative"
    >
      <div
        className={`w-full md:w-3/5 max-w-lg px-6 md:px-12 text-center md:text-left relative z-10`}
      >
        <h1
          className={`text-2xl md:text-2xl font-extrabold leading-tight mb-4 ${textColor}`}
        >
          Hi, I'm <span className="text-gray-500 text-4xl">Asamit</span> <br />
          <ReactTyped
            strings={[
              "Software Engineer",
              "Full Stack Developer",
              "Competitive Programmer",
            ]}
            typeSpeed={40}
            backSpeed={30}
            backDelay={1300}
            startDelay={400}
            loop
            showCursor
            className="text-indigo-500"
            style={{ fontSize: "1.8rem" }}
          />
        </h1>
        <p className={`text-base md:text-xs mb-4 ${textColor}`}>
          I'm a beginner software engineer eager to learn and apply my skills to
          develop efficient and scalable solutions. I’m excited to collaborate
          on projects that push my skills forward and help me become a better
          developer over time!
        </p>
        <div className="mt-6 flex gap-6 flex-wrap justify-center md:justify-start">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1pFVlPKtYd6gycYm8ZNgA6j5GUd1Fof61/view?usp=drive_link"
            className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-indigo-500 hover:shadow-xl hover:rotate-1 flex items-center gap-2"
          >
            Resume
            <FaFileAlt className="text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/asamit-kumar-b34bbb256"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-pink-500 hover:shadow-xl hover:rotate-1 flex items-center gap-2"
          >
            LinkedIn
            <FaLinkedin className="text-white" />
          </a>
        </div>
      </div>

      <div
        ref={profileWrapperRef}
        className="hidden md:flex relative justify-center items-center w-[280px] h-[280px] rounded-full overflow-hidden animate-neon-border"
      >
        <div
          className="absolute w-[280px] h-[280px] rounded-full -z-10 left-0 top-0"
          id="profile-outline"
        ></div>
        <img
          className="w-[280px] h-[280px] rounded-full object-cover shadow-lg transition-transform duration-300 hover:scale-105"
          src="img/profile.jpg"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Home;
