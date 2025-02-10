import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../Store/themeSlice";
import { FaLaptopCode } from "react-icons/fa";
import { Sun, Moon } from "react-bootstrap-icons";
import { FaPhone } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  const handleMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-4 py-2 shadow-md"
        style={{
          background: "#cafdfe",
          color: mode === "light" ? "#000" : "#fff",
          transition: "all 0.3s ease",
        }}
      >
        <div
          className="text-3xl font-black flex items-center gap-1 cursor-pointer group relative"
          style={{
            background:
              mode === "light"
                ? "linear-gradient(to right, #66ffff, #f9fbe7)"
                : "linear-gradient(to right, #2c3e50, #4ca1af)",
            padding: "0.05rem",
            borderRadius: "10px",
          }}
        >
          <a href="#Home" className="flex gap-3">
            <span
              className="text-xl tracking-wide"
              style={{ color: mode === "light" ? "#000" : "#fff" }}
            >
              Asamit
            </span>
            <FaLaptopCode
              className="text-3xl"
              style={{ color: mode === "light" ? "#1e90ff" : "#ff6347" }}
            />
          </a>
        </div>

        <ul className="hidden md:flex space-x-6 text-sm">
          {[
            { id: "Home", label: "Home" },
            { id: "skills", label: "Skills" },
            { id: "projects", label: "Projects" },
          ].map((item) => (
            <li
              key={item.id}
              className={`relative group cursor-pointer transition-all duration-300 ${
                mode === "light" ? "text-black" : "text-white"
              }`}
              onClick={handleMenuClick}
            >
              <a href={`#${item.id}`} className="relative z-10">
                {item.label}
              </a>

              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r ${
                  mode === "light"
                    ? "from-blue-500 to-green-500"
                    : "from-pink-500 to-red-500"
                } group-hover:w-full w-0 transition-all duration-300`}
                style={{ transformOrigin: "center" }}
              ></span>
            </li>
          ))}
        </ul>

        <button
          className="hover:bg-opacity-80 text-xs text-white font-light bg-zinc-600 py-1 px-3 rounded-lg transition-all duration-200 ease-in-out whitespace-nowrap flex items-center gap-2"
          style={{
            marginRight: "7px",
            background: mode === "light" ? "red" : "red",
            color: mode === "light" ? "#fff" : "#fff",
          }}
        >
          <a href="#contacts" className="text-white flex items-center gap-2">
            <FaPhone className="text-white" />
            Contact
          </a>
        </button>

        <div className="md:hidden">
          <button
            className="text-xl focus:outline-none hover:text-gray-500 transition-all duration-200 ease-in-out"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 w-full h-full  ${
          mode === "light" ? "bg-slate-100" : "bg-black"
        } bg-opacity-90 transition-all duration-500 ease-in-out transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } z-40 md:hidden`}
      >
        <ul
          className="flex flex-col items-center justify-center text-xl space-y-6"
          style={{
            height: "100vh",
            padding: "20px",
            background: mode === "light" ? "#f9f9f9" : "#333",
            transition: "background-color 0.3s ease",
          }}
        >
          <li
            className={`cursor-pointer hover:text-red-500 ${
              mode === "light" ? "text-black" : "text-white"
            } 
          transform transition-all duration-300 ease-in-out 
          hover:scale-105 hover:bg-gray-200 p-2 rounded-lg`}
            onClick={handleMenuClick}
          >
            <a href="#Home">Home</a>
          </li>
          <li
            className={`cursor-pointer hover:text-red-500 ${
              mode === "light" ? "text-black" : "text-white"
            } 
          transform transition-all duration-300 ease-in-out 
          hover:scale-105 hover:bg-gray-200 p-2 rounded-lg`}
            onClick={handleMenuClick}
          >
            <a href="#skills">Skills</a>
          </li>
          <li
            className={`cursor-pointer hover:text-red-500 ${
              mode === "light" ? "text-black" : "text-white"
            } 
          transform transition-all duration-300 ease-in-out 
          hover:scale-105 hover:bg-gray-200 p-2 rounded-lg`}
            onClick={handleMenuClick}
          >
            <a href="#projects">Projects</a>
          </li>
          <li
            className={`cursor-pointer hover:text-red-500 ${
              mode === "light" ? "text-black" : "text-white"
            } 
          transform transition-all duration-300 ease-in-out 
          hover:scale-105 hover:bg-gray-200 p-2 rounded-lg`}
            onClick={handleMenuClick}
          >
            <a href="#contacts">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
