import useSidebarStore from "../store/sidebarStore";
import { Link, useLocation } from "react-router-dom";
import Genres from "./Genres";

import { useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useClickSound } from "../utils/clickSound";

const Sidebar = () => {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen);
  const sidebarHandler = useSidebarStore((state) => state.toggleSidebar);
  const { play: playClickSound } = useClickSound();

  const location = useLocation();
  const key = location.key;

  useEffect(() => {
    isSidebarOpen ? sidebarHandler() : null;
  }, [key]);

  const list = [
    { name: "Home", link: "/home" },
    { name: "Subbed Anime", link: "/animes/subbed-anime" },
    { name: "Dubbed Anime", link: "/animes/dubbed-anime" },
    { name: "Most Popular", link: "/animes/most-popular" },
    { name: "Top Airing", link: "/animes/top-airing" },
    { name: "most favorite", link: "/animes/most-favorite" },
    { name: "latest completed", link: "/animes/completed" },
    { name: "recently added", link: "/animes/recently-added" },
    { name: "recently updated", link: "/animes/recently-updated" },
    { name: "top upcoming", link: "/animes/top-upcoming" },
    { name: "A-Z List", link: "/animes/az-list/a" },
    { name: "Movies", link: "/animes/movie" },
    { name: "OVAs", link: "/animes/ova" },
    { name: "ONAs", link: "/animes/ona" },
    { name: "Specials", link: "/animes/special" },
  ];

  return (
    <div
      className={`sidebar transition-all duration-500 fixed overflow-y-auto h-full z-[100] inset-0 w-72 md:w-80 glass-dark border-r border-white/20 ${
        isSidebarOpen ? "translate-x-0" : "translate-x-[-100%]"
      }`}
    >
      <div className="p-6 border-b border-white/10">
        <button
          className="sleek-btn w-full flex items-center justify-center gap-3 px-4 py-3 text-sm font-medium"
          onClick={() => {
            playClickSound();
            sidebarHandler();
          }}
        >
          <FaAngleLeft />
          <span>Close Menu</span>
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-white/40 text-xs uppercase tracking-widest mb-4 font-medium">Navigation</h3>
        <ul className="space-y-1">
          {list.map((item) => (
            <li key={item.link}>
              <Link
                to={item.link}
                onClick={() => {
                  playClickSound();
                  sidebarHandler();
                }}
                className="glass flex items-center px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-lg group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <h3 className="text-white/40 text-xs uppercase tracking-widest mb-4 font-medium">Genres</h3>
          <Genres
            event={sidebarHandler}
            className="genre-item"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
