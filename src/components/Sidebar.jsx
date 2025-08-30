import useSidebarStore from "../store/sidebarStore";
import { Link, useLocation } from "react-router-dom";
import Genres from "./Genres";

import { useEffect } from "react";
import { FaAngleLeft, FaHome, FaPlay, FaFire, FaHeart, FaClock, FaPlus, FaCalendar, FaList, FaFilm } from "react-icons/fa";
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
    { name: "Home", link: "/home", icon: FaHome },
    { name: "Subbed Anime", link: "/animes/subbed-anime", icon: FaPlay },
    { name: "Dubbed Anime", link: "/animes/dubbed-anime", icon: FaPlay },
    { name: "Most Popular", link: "/animes/most-popular", icon: FaFire },
    { name: "Top Airing", link: "/animes/top-airing", icon: FaFire },
    { name: "Most Favorite", link: "/animes/most-favorite", icon: FaHeart },
    { name: "Latest Completed", link: "/animes/completed", icon: FaClock },
    { name: "Recently Added", link: "/animes/recently-added", icon: FaPlus },
    { name: "Recently Updated", link: "/animes/recently-updated", icon: FaCalendar },
    { name: "Top Upcoming", link: "/animes/top-upcoming", icon: FaCalendar },
    { name: "A-Z List", link: "/animes/az-list/a", icon: FaList },
    { name: "Movies", link: "/animes/movie", icon: FaFilm },
    { name: "OVAs", link: "/animes/ova", icon: FaPlay },
    { name: "ONAs", link: "/animes/ona", icon: FaPlay },
    { name: "Specials", link: "/animes/special", icon: FaPlay },
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
          {list.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <li key={item.link} style={{animationDelay: `${index * 0.05}s`}}>
                <Link
                  to={item.link}
                  onClick={() => {
                    playClickSound();
                    sidebarHandler();
                  }}
                  className="glass-dark flex items-center px-5 py-4 text-base font-medium text-white/80 hover:text-white hover:bg-white/15 transition-all duration-300 rounded-xl group magnetic-hover border border-white/10 hover:border-white/30 popup-animation"
                >
                  <IconComponent className="mr-4 text-lg group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaAngleLeft className="rotate-180 text-sm" />
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        
        {/* Genres Section */}
        <div className="mt-8">
          <h3 className="text-white/40 text-xs uppercase tracking-widest mb-4 font-medium">Genres</h3>
          <div className="bg-black/40 border border-white/10 rounded-lg p-4">
            <Genres
              event={sidebarHandler}
              className="genre-item"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
