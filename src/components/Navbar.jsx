import { useState } from "react";
import { FaAlignJustify, FaHome, FaFilm, FaTv, FaFire, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useClickSound } from "../utils/clickSound";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { play: playClickSound } = useClickSound();

  const navLinks = [
    { name: "Home", id: "/home", icon: FaHome },
    { name: "Movies", id: "/animes/movie", icon: FaFilm },
    { name: "TV Series", id: "/animes/tv", icon: FaTv },
    { name: "Most Popular", id: "/animes/most-popular", icon: FaFire },
    { name: "Top Airing", id: "/animes/top-airing", icon: FaRocket },
  ];
  return (
    <nav className="cyber-grid">
      <div className="nav hidden md:flex justify-center items-center py-4">
        <ul className="flex gap-8">
          {navLinks.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <li 
                className="hover:text-primary font-bold transition-all duration-300" 
                key={item.id}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a 
                  className="futuristic-btn px-4 py-2 flex items-center gap-2 text-center text-sm" 
                  href={item.id}
                  onClick={playClickSound}
                >
                  <IconComponent className="text-lg" />
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block md:hidden relative w-full">
        <button 
          onClick={() => {
            playClickSound();
            setShow(!show);
          }}
          className="futuristic-btn m-5 px-4 py-2 glow-hover"
        >
          <h1 className="flex justify-center items-center gap-2 text-sm">
            <FaAlignJustify />
            MENU
          </h1>
        </button>
        <ul
          className={`${
            show ? "flex slide-in-left" : "hidden"
          } w-11/12 mx-3 absolute flex-col justify-center items-center z-10 bg-background border-2 border-white rounded-md py-5 gap-3 md:gap-10 cyber-grid`}
        >
          {navLinks.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <li
                className="hover:text-primary hover-glow w-full text-center py-2"
                key={item.id}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link 
                  className="futuristic-btn w-full flex items-center justify-center gap-2 py-2" 
                  to={item.id}
                  onClick={() => {
                    playClickSound();
                    setShow(false);
                  }}
                >
                  <IconComponent className="text-lg" />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
