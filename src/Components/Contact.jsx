import React from "react";

const ContactMe = () => {
  return (
    <div
      id="contacts"
      style={{
        backgroundImage: "url('/bg2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="scroll-mt-16 py-8 px-4 text-gray-800"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-2xl text-white font-semibold mb-4">Contact Me</h1>
        <p className="text-sm mb-6"></p>

        <form
          action="https://formspree.io/f/myzkzelq"
          method="POST"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 rounded-xl shadow-2xl w-full max-w-md mx-auto bg-gradient-to-r from-teal-100 to-green-100 border border-teal-400"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-teal-800"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 w-full border border-teal-500 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 text-sm bg-white shadow-sm"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-teal-800"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 w-full border border-teal-500 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 text-sm bg-white shadow-sm"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-teal-800"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 w-full border border-teal-500 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 text-sm bg-white shadow-sm"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white font-medium py-3 rounded-lg hover:bg-teal-600 text-sm shadow-lg"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
