import { useRef, useState } from "react";
import { FaArrowCircleRight, FaBars, FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useApi } from "../services/useApi";
import Logo from "./Logo";
import useSidebarStore from "../store/sidebarStore";
import Loader from "./Loader";
import { useClickSound } from "../utils/clickSound";

const Header = () => {
  const sidebarHandler = useSidebarStore((state) => state.toggleSidebar);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState(""); // For debouncing
  const timeoutRef = useRef(null);
  const { play: playClickSound } = useClickSound();

  const navigate = useNavigate();

  // Debounce input value
  const changeInput = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setDebouncedValue(newValue); // Set debounced value after 1 second
    }, 500);
  };

  // React Query hook with `useApi`
  const { data, isLoading, isError, error } = useApi(
    debouncedValue.length > 2 ? `/suggestion?keyword=${debouncedValue}` : null
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?keyword=${value}`);
    resetSearch();
  };

  const navigateToAnimePage = (id) => {
    navigate(`/anime/${id}`);
    resetSearch();
  };
  const resetSearch = () => {
    setValue("");
    setDebouncedValue("");
    setShowSearchBar(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  const emptyInput = () => {
    setValue("");
    setDebouncedValue("");
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  return (
    <div className="relative z-[100]">
      <div className="fixed bg-gradient-to-r from-black/95 via-black/90 to-black/95 backdrop-blur-xl w-full py-3 border-b border-white/20 cyber-grid neural-network">
        <div className="flex gap-3 px-5 md:px-10 md:gap-6 justify-between items-center">
          <div className="left flex gap-3 md:gap-6 items-center">
            <button 
              className="menu glass-dark p-4 rounded-xl neon-glow magnetic-hover group transition-all duration-300"
              onClick={() => {
                playClickSound();
                sidebarHandler();
              }}
            >
              <FaBars size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
            <div className="floating-element">
              <Logo />
            </div>
          </div>
          <div className="right justify-end lg:basis-[40%] flex gap-3 md:gap-6 items-center">
            <button
              className="glass-dark px-5 py-4 rounded-xl neon-glow magnetic-hover group transition-all duration-300"
              onClick={() => {
                playClickSound();
                setShowSearchBar(!showSearchBar);
              }}
            >
              {showSearchBar ? 
                <FaXmark size={18} className="group-hover:rotate-90 transition-transform duration-300" /> : 
                <FaSearch size={18} className="group-hover:scale-110 transition-transform duration-300" />
              }
            </button>
          </div>
        </div>
        <form
          action={`/search?keyword=${value}`}
          onSubmit={handleSubmit}
          className={`search mt-4 mx-4 relative items-center w-auto transition-all duration-500 ${
            showSearchBar ? "flex opacity-100 translate-y-0" : "hidden opacity-0 -translate-y-4"
          }`}
        >
          <div className="relative w-full glass-dark rounded-2xl p-2">
            <input
              value={value}
              onChange={changeInput}
              placeholder="Search anime..."
              type="text"
              className="futuristic-input w-full px-6 py-4 text-white bg-transparent border-2 border-white/30 rounded-xl focus:border-white/80 transition-all duration-300 placeholder:text-white/50"
            />
            <div className="btns absolute right-4 top-1/2 transform -translate-y-1/2 flex justify-center items-center gap-3">
              {value.length > 1 && (
                <button 
                  onClick={(e) => {
                    playClickSound();
                    emptyInput(e);
                  }} 
                  type="reset" 
                  className="glass-dark text-white p-3 rounded-full magnetic-hover group transition-all duration-300"
                >
                  <FaXmark size={14} className="group-hover:rotate-90 transition-transform duration-300" />
                </button>
              )}
              <button 
                type="submit" 
                className="sleek-btn text-white p-3 rounded-full magnetic-hover group transition-all duration-300"
                onClick={playClickSound}
              >
                <FaSearch size={14} className="group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </form>
        <div className={`transition-all duration-500 mx-4 ${showSearchBar ? "flex flex-col mt-4 opacity-100" : "hidden opacity-0"}`}>
          {isLoading ? (
            <div className="glass-dark rounded-2xl p-6">
              <Loader />
            </div>
          ) : data && data?.data.length ? (
            <div className="glass-dark rounded-2xl overflow-hidden border border-white/20">
              {data?.data?.map((item, index) => (
                <div
                  onClick={() => {
                    playClickSound();
                    navigateToAnimePage(item.id);
                  }}
                  className="flex w-full justify-start items-start hover:bg-white/10 px-4 py-4 gap-4 border-b border-white/10 last:border-b-0 cursor-pointer transition-all duration-300 magnetic-hover group"
                  key={item.id}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="poster shrink-0 pb-14 relative w-12 rounded-lg overflow-hidden">
                    <img
                      className="h-full w-full inset-0 absolute object-cover object-center group-hover:scale-110 transition-transform duration-300"
                      src={item.poster}
                      alt={item.title}
                    />
                  </div>
                  <div className="info flex-1">
                    <h4 className="title line-clamp-2 font-semibold group-hover:text-white transition-colors duration-300">{item.title}</h4>
                    <h6 className="text-white/60 text-sm line-clamp-1 mb-2">
                      {item.alternativeTitle}
                    </h6>
                    <div className="flex items-center gap-2 text-xs text-white/50">
                      <span className="glass px-2 py-1 rounded-full">{item.aired}</span>
                      <span className="glass px-2 py-1 rounded-full">{item.type}</span>
                      <span className="glass px-2 py-1 rounded-full">{item.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
              <button
                className="w-full py-4 flex justify-center items-center gap-3 bg-gradient-to-r from-white to-gray-200 text-black font-bold hover:from-gray-200 hover:to-white transition-all duration-300 magnetic-hover group"
                onClick={handleSubmit}
              >
                <span className="text-lg">View More Results</span>
                <FaArrowCircleRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ) : (
            <>
              {value.length > 2 && (
                <div className="glass-dark rounded-2xl p-6 text-center">
                  <h1 className="text-lg text-white/70 font-medium">
                    No anime found matching your search
                  </h1>
                  <p className="text-sm text-white/50 mt-2">Try different keywords or check the spelling</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
