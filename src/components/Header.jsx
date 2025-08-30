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
      <div className="fixed bg-black/95 backdrop-blur-sm w-full py-3 border-b border-white/10">
        <div className="flex gap-4 px-4 md:px-8 justify-between items-center">
          <div className="flex gap-4 items-center">
            <button 
              className="p-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
              onClick={() => {
                playClickSound();
                sidebarHandler();
              }}
            >
              <FaBars size={18} />
            </button>
            <Logo />
          </div>
          <div className="flex items-center">
            <button
              className="p-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
              onClick={() => {
                playClickSound();
                setShowSearchBar(!showSearchBar);
              }}
            >
              {showSearchBar ? <FaXmark size={18} /> : <FaSearch size={18} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {showSearchBar && (
          <form
            action={`/search?keyword=${value}`}
            onSubmit={handleSubmit}
            className="mt-3 px-4 md:px-8"
          >
            <div className="relative">
              <input
                value={value}
                onChange={changeInput}
                placeholder="Search anime..."
                type="text"
                className="w-full px-4 py-3 bg-black/60 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                {value.length > 1 && (
                  <button 
                    onClick={(e) => {
                      playClickSound();
                      emptyInput(e);
                    }} 
                    type="reset" 
                    className="p-1 text-white/60 hover:text-white transition-colors"
                  >
                    <FaXmark size={14} />
                  </button>
                )}
                <button 
                  type="submit" 
                  className="p-1 text-white/60 hover:text-white transition-colors"
                  onClick={playClickSound}
                >
                  <FaSearch size={14} />
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Search Results */}
        {showSearchBar && (
          <div className="mt-3 px-4 md:px-8">
            {isLoading ? (
              <div className="py-4">
                <Loader />
              </div>
            ) : data && data?.data.length ? (
              <div className="bg-black/60 border border-white/10 rounded-lg overflow-hidden">
                {data?.data?.map((item) => (
                  <div
                    onClick={() => {
                      playClickSound();
                      navigateToAnimePage(item.id);
                    }}
                    className="flex items-start p-3 hover:bg-white/5 border-b border-white/10 last:border-b-0 cursor-pointer transition-colors"
                    key={item.id}
                  >
                    <div className="flex-shrink-0 w-12 h-16 mr-3">
                      <img
                        className="w-full h-full object-cover rounded"
                        src={item.poster}
                        alt={item.title}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white text-sm font-medium line-clamp-2 mb-1">{item.title}</h4>
                      <p className="text-white/60 text-xs line-clamp-1 mb-1">
                        {item.alternativeTitle}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-white/40">
                        <span>{item.aired}</span>
                        <span>•</span>
                        <span>{item.type}</span>
                        <span>•</span>
                        <span>{item.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  className="w-full py-3 bg-white text-black hover:bg-white/90 transition-colors text-sm font-medium"
                  onClick={handleSubmit}
                >
                  View More Results
                </button>
              </div>
            ) : (
              value.length > 2 && (
                <div className="py-4 text-center text-white/60">
                  No anime found :(
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
