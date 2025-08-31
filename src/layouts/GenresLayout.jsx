import React from "react";
import Genres from "../components/Genres";
import Heading from "../components/Heading";
import { FaTags } from "react-icons/fa";

const GenresLayout = () => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
          <FaTags className="text-white text-lg" />
        </div>
        <div>
          <Heading className="text-xl font-bold text-white">Browse Genres</Heading>
          <p className="text-white/60 text-sm">Discover anime by category</p>
        </div>
      </div>
      <Genres />
    </div>
  );
};

export default GenresLayout;
