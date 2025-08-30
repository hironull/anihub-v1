import { useState } from "react";
import { FaBars, FaHome, FaFilm, FaTv, FaFire, FaRocket } from "react-icons/fa";
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
    <nav className="bg-black/90 backdrop-blur-sm border-b border-white/10">
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center items-center py-4">
        <ul className="flex gap-6">
          {navLinks.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.id}>
                <Link 
                  to={item.id}
                  className="px-4 py-2 flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white border border-white/20 hover:border-white/40 rounded-lg transition-all duration-200 hover:bg-white/5" 
                  onClick={playClickSound}
                >
                  <IconComponent className="text-base" />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      
      {/* Mobile Navigation */}
      <div className="block md:hidden relative">
        <button 
          onClick={() => {
            playClickSound();
            setShow(!show);
          }}
          className="m-4 px-4 py-2 border border-white/20 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200"
        >
          <div className="flex items-center gap-2 text-sm">
            <FaBars />
            <span>Menu</span>
          </div>
        </button>
        
        {show && (
          <ul className="absolute top-full left-4 right-4 bg-black/95 backdrop-blur-md border border-white/20 rounded-lg py-4 space-y-2 z-50">
            {navLinks.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.id} className="px-4">
                  <Link 
                    to={item.id}
                    className="flex items-center gap-3 py-3 text-white/80 hover:text-white transition-colors duration-200" 
                    onClick={() => {
                      playClickSound();
                      setShow(false);
                    }}
                  >
                    <IconComponent className="text-base" />
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
