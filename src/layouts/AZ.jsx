import React from "react";
import { Link } from "react-router-dom";

const AZ = ({ selected }) => {
  selected = selected === null ? "All" : selected;
  const azList = [
    { title: "ALL", link: "/animes/az-list" },
    { title: "#", link: "/animes/az-list/other" },
    { title: "0-9", link: "/animes/az-list/0-9" },
    { title: "A", link: "/animes/az-list/A" },
    { title: "B", link: "/animes/az-list/B" },
    { title: "C", link: "/animes/az-list/C" },
    { title: "D", link: "/animes/az-list/D" },
    { title: "E", link: "/animes/az-list/E" },
    { title: "F", link: "/animes/az-list/F" },
    { title: "G", link: "/animes/az-list/G" },
    { title: "H", link: "/animes/az-list/H" },
    { title: "I", link: "/animes/az-list/I" },
    { title: "J", link: "/animes/az-list/J" },
    { title: "K", link: "/animes/az-list/K" },
    { title: "L", link: "/animes/az-list/L" },
    { title: "M", link: "/animes/az-list/M" },
    { title: "N", link: "/animes/az-list/N" },
    { title: "O", link: "/animes/az-list/O" },
    { title: "P", link: "/animes/az-list/P" },
    { title: "Q", link: "/animes/az-list/Q" },
    { title: "R", link: "/animes/az-list/R" },
    { title: "S", link: "/animes/az-list/S" },
    { title: "T", link: "/animes/az-list/T" },
    { title: "U", link: "/animes/az-list/U" },
    { title: "V", link: "/animes/az-list/V" },
    { title: "W", link: "/animes/az-list/W" },
    { title: "X", link: "/animes/az-list/X" },
    { title: "Y", link: "/animes/az-list/Y" },
    { title: "Z", link: "/animes/az-list/Z" },
  ];
  
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
      <h3 className="text-white font-semibold text-lg mb-4 text-center">Browse Alphabetically</h3>
      <div className="flex gap-2 flex-wrap justify-center items-center">
        {azList.map((item) => (
          <Link to={item.link} key={item.title}>
            <button
              className={`min-w-[40px] h-10 text-sm font-bold rounded-lg transition-all duration-300 transform hover:scale-105 ${
                selected && selected.toUpperCase() === item.title
                  ? "bg-white text-black shadow-lg"
                  : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white border border-white/20 hover:border-white/40"
              }`}
            >
              {item.title}
            </button>
          </Link>
        ))}
      </div>
      <p className="text-white/60 text-sm text-center mt-4">
        Find anime by their first letter or browse all titles
      </p>
    </div>
  );
};

export default AZ;
