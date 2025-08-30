import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import AZ from "../layouts/AZ";
import { FaGithub, FaTelegram } from "react-icons/fa6";
import { FaExternalLink } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t-2 border-gray-800 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <Logo />
            <p className="text-gray-400 text-sm mt-4 text-center md:text-left max-w-xs">
              Your ultimate destination for free anime streaming. Watch thousands of episodes in HD quality.
            </p>
          </div>

          {/* A-Z List Section */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-white font-bold text-lg mb-4">Browse Anime</h3>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-3">
                Search anime alphabetically A to Z
              </p>
              <AZ />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6">
          {/* Disclaimer */}
          <div className="text-center mb-6">
            <p className="text-gray-500 text-sm leading-relaxed">
              AniHub does not store any files on our server. <br />
              We only link to media hosted on 3rd party services.
            </p>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              © 2025 AniHub. All rights reserved.
            </div>

            {/* Developer Credit */}
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">Developed by</span>
              <a
                href="https://hironull.lol"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold hover:text-gray-300 transition-colors duration-300 flex items-center gap-1 group"
              >
                Hiro
                <FaExternalLink className="text-xs opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
    </footer>
  );
};

export default Footer;