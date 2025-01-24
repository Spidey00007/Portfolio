import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaFileAlt } from "react-icons/fa";
import "../App.css";
import DOTS from "vanta/src/vanta.dots";
import TRUNK from "vanta/src/vanta.trunk";

const Home = () => {
  const [dots, setDots] = useState(null);
  const [trunk, setTrunk] = useState(null);

  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);
  const profileWrapperRef = useRef(null); // Ref for the wrapper element
  const mode = useSelector((state) => state.theme.mode);

  const textColor = mode === "light" ? "text-gray-900" : "text-white";

  useEffect(() => {
    if (!dots) {
      setDots(
        DOTS({
          el: "#Home",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xe33077,
          backgroundColor: 0xa3f7f7,
          size: 3.5,
          spacing: 20,
          showLines: false,
        })
      );
    }

    if (!trunk && profileWrapperRef.current) {
      setTrunk(
        TRUNK({
          el: "#profile", // Apply effect to the wrapper
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x4dcf45,
          backgroundColor: 0xa3f7f7,
          chaos: 1.5,
        })
      );
    }

    return () => {
      if (dots) dots.destroy();
      if (trunk) trunk.destroy();
    };
  }, [dots, trunk]);

  return (
    <div
      id="Home"
      className={`h-screen flex justify-between items-center px-6 md:px-7 py-5 overflow-hidden relative`}
    >
      <div
        ref={leftSideRef}
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
            href="https://drive.google.com/file/d/1Mkfm62MBfoQsgpwn0GFRMMdqFMS6oL53/view"
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

      {/* Profile wrapper with Vanta effect */}
      <div
        id="profile"
        ref={profileWrapperRef} // Ref for profile wrapper
        className="overflow-hidden flex justify-center items-center relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-transparent" // Ensure it's circular with transparent border
      >
        <img
          className="w-full h-full rounded-full object-cover shadow-lg transition-transform duration-300 hover:scale-105"
          src="img/profile.jpg"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Home;
