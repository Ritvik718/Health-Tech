import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col lg:flex-row">
          <ul className="flex flex-wrap justify-center lg:justify-start">
            <li className="mr-6 mb-2 lg:mb-0">
              <a href="/get-started" className="hover:text-gray-400">
                Get Started
              </a>
            </li>
            <li className="mr-6 mb-2 lg:mb-0">
              <a href="/recommended-articles" className="hover:text-gray-400">
                Recommended Articles
              </a>
            </li>
            <li className="mr-6 mb-2 lg:mb-0">
              <a href="/terms" className="hover:text-gray-400">
                Terms
              </a>
            </li>
            <li className="mb-2 lg:mb-0">
              <a href="/privacy-policy" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="flex mt-4 lg:mt-0">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
