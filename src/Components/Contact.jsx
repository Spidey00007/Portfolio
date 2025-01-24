import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ContactMe = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  return (
    <div
      id="contacts"
      style={{
        background:
          mode == "light"
            ? "linear-gradient(to right, #ffebcc , #ffefd5) "
            : "linear-gradient(to right, #2d3748, #000)",
      }}
      className={`scroll-mt-16 py-8 ${
        mode === "dark" ? " text-white" : "text-gray-800"
      }`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-2xl font-semibold mb-4">Contact Me</h1>
        <p className="text-sm mb-6"></p>

        <form
          action="https://formspree.io/f/myzkzelq"
          method="POST"
          target="_blank"
          className={`p-4 rounded-lg shadow-md max-w-md mx-auto ${
            mode === "dark"
              ? "bg-gradient-to-r from-gray-700 to-gray-900 text-white"
              : "bg-gradient-to-r from-white to-gray-100"
          }`}
        >
          <div className="mb-3">
            <label
              htmlFor="name"
              className={`block text-sm font-medium ${
                mode === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 w-full border border-gray-300 rounded-md p-1 focus:ring-2 focus:ring-blue-400 text-sm"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="email"
              className={`block text-sm font-medium ${
                mode === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 w-full border border-gray-300 rounded-md p-1 focus:ring-2 focus:ring-blue-400 text-sm"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="message"
              className={`block text-sm font-medium ${
                mode === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              className="mt-1 w-full border border-gray-300 rounded-md p-1 focus:ring-2 focus:ring-blue-400 text-sm"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-1 rounded-md hover:bg-blue-600 text-sm"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
