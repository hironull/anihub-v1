
import React from "react";
import Genres from "../components/Genres";
import Heading from "../components/Heading";
import { FaTags } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { genres } from "../utils/genres";

const GenresLayout = () => {
  return (
    <div className="group relative">
      {/* Main container with enhanced glassmorphism */}
      <div className="relative bg-gradient-to-br from-slate-800/40 via-slate-900/30 to-black/50 backdrop-blur-xl border border-white/20 hover:border-white/30 rounded-2xl p-8 transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden">
        
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Header section */}
        <div className="relative z-10 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-500">
                <FaTags className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
                
                {/* Floating sparkle */}
                <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <HiSparkles className="text-yellow-400 text-xs animate-bounce" />
                </div>
              </div>
              
              {/* Icon glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500"></div>
            </div>
            
            <div className="flex-1">
              <Heading className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:via-purple-200 group-hover:to-pink-200 transition-all duration-500">
                Browse Genres
              </Heading>
              <p className="text-white/70 group-hover:text-white/90 text-base mt-1 transition-all duration-300">
                Discover anime by category • {genres?.length || 41} genres available
              </p>
              
              {/* Animated underline */}
              <div className="h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mt-2 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>
          </div>
          
          {/* Stats or additional info */}
          <div className="flex items-center gap-6 text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Live Content</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-500"></div>
              <span>Updated Daily</span>
            </div>
          </div>
        </div>
        
        {/* Genres grid with enhanced container */}
        <div className="relative z-10">
          <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 group-hover:bg-black/30 group-hover:border-white/20 transition-all duration-500">
            <Genres />
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
          <div className="grid grid-cols-3 gap-1">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                style={{
                  animationDelay: `${i * 200}ms`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Outer glow effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000 blur-xl pointer-events-none"></div>
    </div>
  );
};

export default GenresLayout;
