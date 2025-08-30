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
    <nav className="neural-network quantum-field relative">
      {/* Desktop Navigation */}
      <div className="nav hidden md:flex justify-center items-center py-6">
        <ul className="flex gap-6">
          {navLinks.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <li 
                className="group" 
                key={item.id}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a 
                  className="glass-dark px-6 py-3 rounded-xl flex items-center gap-3 text-sm font-medium hover:bg-white/15 transition-all duration-300 magnetic-hover border border-white/20 hover:border-white/40 glint-effect" 
                  href={item.id}
                  onClick={playClickSound}
                >
                  <IconComponent className="text-lg group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      
      {/* Mobile Navigation */}
      <div className="block md:hidden relative w-full">
        <button 
          onClick={() => {
            playClickSound();
            setShow(!show);
          }}
          className="glass-dark m-5 px-6 py-4 rounded-xl neon-glow magnetic-hover group transition-all duration-300"
        >
          <div className="flex justify-center items-center gap-3 text-base font-medium">
            <FaAlignJustify className="group-hover:rotate-90 transition-transform duration-300" />
            <span>MENU</span>
          </div>
        </button>
        
        <ul
          className={`${
            show ? "flex slide-in-left opacity-100" : "hidden opacity-0"
          } w-11/12 mx-3 absolute flex-col justify-center items-center z-10 glass-dark border border-white/30 rounded-2xl py-6 gap-3 transition-all duration-500 neural-network`}
        >
          {navLinks.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <li
                className="w-full px-4 popup-animation"
                key={item.id}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link 
                  className="glass flex items-center justify-center gap-3 w-full py-4 rounded-xl font-medium hover:bg-white/15 transition-all duration-300 magnetic-hover border border-white/10 hover:border-white/30 group" 
                  to={item.id}
                  onClick={() => {
                    playClickSound();
                    setShow(false);
                  }}
                >
                  <IconComponent className="text-lg group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
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
