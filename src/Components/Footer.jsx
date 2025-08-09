import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-white py-6"
      style={{
        backgroundImage: "url('/footerBg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto py-3 px-6 flex flex-col md:flex-row md:justify-between items-center space-y-6 md:space-y-0">
        {/* Heading */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-wide">
            Stay Connected 🚀
          </h2>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 flex-wrap justify-center">
          <a
            href="https://github.com/Spidey00007"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <img
              src="img/userAsset/github.svg"
              alt="GitHub"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/asamit-kumar-b34bbb256"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <img
              src="img/userAsset/linkedin.svg"
              alt="LinkedIn"
              className="w-8 h-8"
            />
          </a>
          <a
            href="mailto: asamit1547@gmail.com"
            className="transition-transform transform hover:scale-110"
          >
            <img
              src="img/userAsset/gmail.svg"
              alt="Email"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://leetcode.com/u/Spidey7/"
            className="transition-transform transform hover:scale-110"
          >
            <img
              src="img/userAsset/leetcode.png"
              alt="Leetcode"
              className="w-8 h-8"
            />
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-center md:text-right">
          <p className="text-sm text-gray-400">
            <a
              href="#Home"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline"
            >
              Asamit
            </a>
          </p>
          <p className="text-sm mt-2">
            © {new Date().getFullYear()} | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
