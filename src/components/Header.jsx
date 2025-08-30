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
      <div className="fixed bg-black/95 backdrop-blur-md w-full py-3 border-b border-white/20 cyber-grid">
        <div className="flex gap-3 px-5 md:px-10 md:gap-6 justify-between items-center">
          <div className="left flex gap-3 md:gap-6 items-center">
            <button 
              className="menu sleek-btn p-3 rounded-lg hover:bg-white/10 transition-all duration-300"
              onClick={() => {
                playClickSound();
                sidebarHandler();
              }}
            >
              <FaBars size={20} />
            </button>
            <div className="floating-element">
              <Logo />
            </div>
          </div>
          <div className="right justify-end lg:basis-[40%] flex gap-3 md:gap-6 items-center">
            <button
              className="sleek-btn px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300"
              onClick={() => {
                playClickSound();
                setShowSearchBar(!showSearchBar);
              }}
            >
              {showSearchBar ? <FaXmark size={18} /> : <FaSearch size={18} />}
            </button>
          </div>
        </div>
        <form
          action={`/search?keyword=${value}`}
          onSubmit={handleSubmit}
          className={`search mt-2 px-4 relative items-center w-full ${
            showSearchBar ? "flex" : "hidden"
          }`}
        >
          <input
            value={value}
            onChange={changeInput}
            placeholder="SEARCH ANIME"
            type="text"
            className="futuristic-input w-full px-4 py-2 text-white bg-transparent border-white"
          />
          <div className="btns absolute right-8 flex justify-center items-center gap-3">
            {value.length > 1 && (
              <button 
                onClick={(e) => {
                  playClickSound();
                  emptyInput(e);
                }} 
                type="reset" 
                className="glass text-white p-2 rounded-full transition-all duration-300"
              >
                <FaXmark size={14} />
              </button>
            )}
            <button 
              type="submit" 
              className="sleek-btn text-white p-2 transition-all duration-300"
              onClick={playClickSound}
            >
              <FaSearch size={14} />
            </button>
          </div>
        </form>
        <div className={`${showSearchBar ? "flex flex-col mt-4" : "hidden"}`}>
          {isLoading ? (
            <Loader />
          ) : data && data?.data.length ? (
            <>
              {data?.data?.map((item) => (
                <div
                  onClick={() => {
                    playClickSound();
                    navigateToAnimePage(item.id);
                  }}
                  className="flex w-full justify-start items-start bg-background hover:bg-white/5 px-3 py-5 gap-4 border-b border-white cursor-pointer transition-all duration-300"
                  key={item.id}
                >
                  <div className="poster shrink-0 pb-14 relative w-10">
                    <img
                      className="h-full w-full inset-0 absolute object-cover object-center"
                      src={item.poster}
                      alt={item.title}
                    />
                  </div>
                  <div className="info">
                    <h4 className="title line-clamp-2">{item.title}</h4>
                    <h6 className="gray text-sm line-clamp-1">
                      {item.alternativeTitle}
                    </h6>
                    <div className="flex items-center gap-2 text-sm gray">
                      <h6>{item.aired}</h6>
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      <h6>{item.type}</h6>
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      <h6>{item.duration}</h6>
                    </div>
                  </div>
                </div>
              ))}
              <button
                className="py-2 flex justify-center items-center gap-2 bg-primary text-black"
                onClick={handleSubmit}
              >
                <span className="text-lg font-bold">view More</span>
                <FaArrowCircleRight />
              </button>
            </>
          ) : (
            <>
              {value.length > 2 && (
                <h1 className="text-center text-lg text-primary">
                  anime not found :(
                </h1>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
