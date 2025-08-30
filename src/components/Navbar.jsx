import { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useClickSound } from "../utils/clickSound";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { play: playClickSound } = useClickSound();

  const navLinks = [
    { name: "Home", id: "/home" },
    { name: "Movies", id: "/animes/movie" },
    { name: "TV Series", id: "/animes/tv" },
    { name: "Most Popular", id: "/animes/most-popular" },
    { name: "Top Airing", id: "/animes/top-airing" },
  ];
  return (
    <nav className="cyber-grid">
      <div className="nav hidden md:flex justify-center items-center py-4">
        <ul className="flex gap-8">
          {navLinks.map((item, index) => (
            <li 
              className="hover:text-primary font-bold glint-effect hover-scale popup-animation" 
              key={item.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a 
                className="futuristic-btn px-4 py-2 block text-center text-sm" 
                href={item.id}
                onClick={playClickSound}
              >
                {item.name}
              </a>
            </li>
          ))}
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
          {navLinks.map((item, index) => (
            <li
              className="hover:text-primary hover-glow w-full text-center py-2 popup-animation"
              key={item.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link 
                className="futuristic-btn w-full block py-2" 
                to={item.id}
                onClick={playClickSound}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
