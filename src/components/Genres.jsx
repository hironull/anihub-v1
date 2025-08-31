
import { Link } from "react-router-dom";
import useGenresStore from "../store/genresStore";
import { useClickSound } from "../utils/clickSound";
import { useState } from "react";

const Genres = ({ event, className }) => {
  const genres = useGenresStore((state) => state.genres);
  const { play: playClickSound } = useClickSound();
  const [hoveredGenre, setHoveredGenre] = useState(null);

  return (
    <div className="relative">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {genres.map((genre, index) => (
          <Link
            key={genre}
            to={`/animes/genre/${genre}`}
            onClick={() => {
              playClickSound();
              event && event();
            }}
            onMouseEnter={() => setHoveredGenre(genre)}
            onMouseLeave={() => setHoveredGenre(null)}
            className="group relative overflow-hidden"
            title={genre}
            style={{
              animationDelay: `${index * 50}ms`
            }}
          >
            <div className="genre-card relative bg-gradient-to-br from-slate-800/80 via-slate-900/60 to-black/80 backdrop-blur-md border border-white/10 hover:border-white/30 rounded-xl p-4 h-16 flex items-center justify-center transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-1 cursor-pointer overflow-hidden animate-fade-in-up">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              </div>
              
              {/* Border glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                <span className="text-white/90 group-hover:text-white text-sm font-semibold tracking-wide capitalize transition-all duration-300 transform group-hover:scale-110">
                  {genre}
                </span>
                
                {/* Subtle icon or decoration */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></div>
              </div>
              
              {/* Interactive particles effect */}
              {hoveredGenre === genre && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white/40 rounded-full animate-pulse"
                      style={{
                        left: `${20 + i * 10}%`,
                        top: `${30 + (i % 2) * 40}%`,
                        animationDelay: `${i * 200}ms`,
                        animationDuration: '2s'
                      }}
                    ></div>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
      
      {/* Background ambient effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
    </div>
  );
};

export default Genres;
