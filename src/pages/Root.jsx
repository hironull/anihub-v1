import { FaSearch, FaPlay, FaStar, FaHeart } from "react-icons/fa";
import { FaArrowRight, FaSparkles } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    <div className="min-h-[100dvh] bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-x-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center min-h-[calc(100dvh-80px)] px-6 md:px-8 py-12">
          
          {/* Main Title Section */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-none">
                ANI<span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">HUB</span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8 rounded-full"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
              Discover thousands of anime series and movies in stunning quality
            </p>
          </div>

          {/* Search Section */}
          <div className={`w-full max-w-2xl mb-16 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <form onSubmit={handleSubmit} className="relative">
              <div className="relative group">
                <input
                  value={value}
                  onChange={changeInput}
                  type="text"
                  placeholder="Search for anime..."
                  className="w-full h-16 px-6 pr-20 text-lg bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300 backdrop-blur-lg"
                  style={{ fontSize: '16px' }}
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 h-12 w-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white hover:scale-105 transition-all duration-300 shadow-lg"
                  onClick={playClickSound}
                >
                  <FaSearch className="text-lg" />
                </button>
              </div>
            </form>
          </div>

          {/* Feature Cards */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaPlay className="text-white text-lg" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">HD Streaming</h3>
              <p className="text-gray-400 text-sm">Crystal clear quality up to 1080p</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaHeart className="text-white text-lg" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">Ad-Free</h3>
              <p className="text-gray-400 text-sm">Uninterrupted viewing experience</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaSparkles className="text-white text-lg" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">Latest Episodes</h3>
              <p className="text-gray-400 text-sm">Updated daily with new content</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className={`transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link
              to="/home"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl overflow-hidden"
              onClick={playClickSound}
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
              
              <span className="relative z-10">Start Watching</span>
              <FaArrowRight className="relative z-10 text-lg group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className={`mt-16 text-center transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                <span className="text-sm">10,000+ Anime Series</span>
              </div>
              <div className="flex items-center gap-2">
                <FaHeart className="text-red-400" />
                <span className="text-sm">Millions of Happy Users</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;
