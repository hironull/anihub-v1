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
    <div className="h-[100dvh] bg-black neural-network quantum-field overflow-hidden relative">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 cyber-grid digital-rain opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 floating-element"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 h-full">
        <Navbar />
        
        {/* Main Content Container */}
        <div className="flex flex-col items-center justify-center h-full px-4 md:px-8">
          {/* Logo Section with Enhanced Animation */}
          <div className={`text-center mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="neon-glow p-6 mb-6 inline-block">
              <Logo />
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold gradient-text mb-4">
              ANIHUB
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light tracking-wide">
              Experience Anime Like Never Before
            </p>
          </div>

          {/* Enhanced Search Section */}
          <div className={`w-full max-w-4xl transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <form
              onSubmit={handleSubmit}
              action={`/search?keyword=${value}`}
              className="glass-dark p-6 mb-8 rounded-3xl"
            >
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                  <input
                    value={value}
                    onChange={changeInput}
                    type="text"
                    placeholder="Search your favorite anime..."
                    className="futuristic-input w-full text-lg px-6 py-4 bg-transparent border-2 border-white/30 rounded-2xl focus:border-white/80 transition-all duration-300 placeholder:text-white/50"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <FaAtom className="text-white/40 animate-spin" style={{animationDuration: '3s'}} />
                  </div>
                </div>
                <button
                  type="submit"
                  className="sleek-btn px-8 py-4 flex items-center gap-3 text-lg font-medium hover-scale magnetic-hover"
                  onClick={playClickSound}
                >
                  <FaSearch className="text-xl" />
                  <span className="hidden md:inline">Search</span>
                </button>
              </div>
              
              {/* Search Suggestions */}
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                {['Naruto', 'Attack on Titan', 'One Piece', 'Dragon Ball'].map((suggestion, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setValue(suggestion)}
                    className="glass px-4 py-2 text-sm rounded-full hover:bg-white/10 transition-all duration-300 magnetic-hover"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </form>
          </div>

          {/* Enhanced Hero Banner Section */}
          <div className={`relative transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="glass-dark p-8 rounded-3xl mb-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
              <img
                className="h-auto w-[300px] md:w-[400px] mx-auto mb-6 floating-element opacity-90"
                src={banner}
                alt="AniHub Banner"
                style={{animationDelay: '1s'}}
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
          <div className={`transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link
              to="/home"
              className="group relative overflow-hidden bg-gradient-to-r from-white to-gray-200 text-black font-bold px-12 py-6 rounded-full text-xl tracking-wider hover:scale-105 transition-all duration-500 magnetic-hover shadow-2xl"
              onClick={playClickSound}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-center gap-4">
                <span>EXPLORE ANIMES</span>
                <FaArrowCircleRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;
