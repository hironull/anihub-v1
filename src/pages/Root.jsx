import { FaArrowCircleRight, FaSearch, FaPlay, FaRocket } from "react-icons/fa";
import { FaWaveSquare, FaAtom } from "react-icons/fa6";
import banner from "../assets/homeBanner.png";
import background from "../assets/background.jpg";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { useClickSound } from "../utils/clickSound";

const Root = () => {
  const [value, setValue] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const { play: playClickSound } = useClickSound();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const changeInput = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    playClickSound();
    navigate(`/search?keyword=${value}`);
  };
  return (
    <div className="min-h-[100dvh] bg-black relative overflow-x-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>

      <div className="relative z-10 h-full">
        <Navbar />
        
        {/* Main Content Container */}
        <div className="flex flex-col items-center justify-center min-h-[calc(100dvh-80px)] px-4 md:px-8 py-8">
          {/* Logo Section */}
          <div className={`text-center mb-8 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6">
              <Logo />
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white mb-4">
              ANIHUB
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light tracking-wide">
              Experience Anime Like Never Before
            </p>
          </div>

          {/* Search Section */}
          <div className={`w-full max-w-4xl transition-all duration-500 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <form
              onSubmit={handleSubmit}
              action={`/search?keyword=${value}`}
              className="glass-dark p-6 mb-8 rounded-2xl"
            >
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <input
                  value={value}
                  onChange={changeInput}
                  type="text"
                  placeholder="Search your favorite anime..."
                  className="futuristic-input flex-1 w-full text-lg px-6 py-4"
                />
                <button
                  type="submit"
                  className="sleek-btn px-8 py-4 flex items-center gap-3 text-lg font-medium"
                  onClick={playClickSound}
                >
                  <FaSearch className="text-xl" />
                  <span className="hidden md:inline">Search</span>
                </button>
              </div>
            </form>
          </div>

          {/* Hero Banner Section */}
          <div className={`relative transition-all duration-500 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="glass-dark p-6 rounded-2xl mb-8 text-center">
              <img
                className="h-auto w-[300px] md:w-[400px] mx-auto mb-6"
                src={banner}
                alt="AniHub Banner"
              />
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
                  <FaPlay className="text-green-400" />
                  <span className="text-sm">HD Quality</span>
                </div>
                <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
                  <FaWaveSquare className="text-blue-400" />
                  <span className="text-sm">No Ads</span>
                </div>
                <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
                  <FaRocket className="text-purple-400" />
                  <span className="text-sm">Fast Streaming</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className={`transition-all duration-500 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link
              to="/home"
              className="bg-white text-black font-bold px-12 py-4 rounded-full text-xl tracking-wider hover:bg-gray-200 transition-all duration-300 shadow-lg inline-flex items-center gap-4"
              onClick={playClickSound}
            >
              <span>EXPLORE ANIMES</span>
              <FaArrowCircleRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;
