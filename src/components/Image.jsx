/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useClickSound } from "../utils/clickSound";
import { FaPlay, FaStar, FaEye } from "react-icons/fa";

const Image = ({ data }) => {
  const { play: playClickSound } = useClickSound();

  return (
    <div className="group relative transform hover:-translate-y-2 transition-all duration-300">
      <Link
        to={`/anime/${data.id}`}
        onClick={playClickSound}
        className="block w-full h-0 pb-[135%] relative overflow-hidden rounded-xl border border-white/10 hover:border-white/30 hover:shadow-2xl hover:shadow-black/60 transition-all duration-300"
      >
        <img
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          src={data.poster}
          alt={data.title}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
            <FaPlay className="text-white text-xl ml-1" />
          </div>
        </div>

        {/* Episode Badge */}
        {data.episodeNumber && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-blue-500 px-3 py-1 rounded-full text-white text-xs font-bold shadow-lg backdrop-blur-sm">
            EP {data.episodeNumber}
          </div>
        )}

        {/* Type Badge */}
        {data.subType && (
          <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-bold border border-white/20">
            {data.subType}
          </div>
        )}

        {/* Rating Badge */}
        {data.rating && (
          <div className="absolute bottom-3 right-3 bg-yellow-500/90 backdrop-blur-sm px-2 py-1 rounded-full text-black text-xs font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FaStar className="text-xs" />
            {data.rating}
          </div>
        )}

        {/* Quality Badge */}
        {data.quality && (
          <div className="absolute bottom-3 left-3 bg-purple-600/90 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {data.quality}
          </div>
        )}
      </Link>

      {/* Title Section */}
      <div className="mt-3 space-y-2">
        <h3 
          title={data.title}
          className="text-white text-sm font-semibold line-clamp-2 leading-tight group-hover:text-blue-400 transition-colors duration-300"
        >
          {data.title}
        </h3>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-xs text-white/60">
          <span className="flex items-center gap-1">
            {data.type && (
              <span className="bg-white/10 px-2 py-1 rounded-md">
                {data.type}
              </span>
            )}
          </span>
          {data.year && (
            <span className="text-white/50">
              {data.year}
            </span>
          )}
        </div>

        {/* Additional Info on Hover */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-white/50">
          {data.alternativeTitle && (
            <p className="line-clamp-1 italic">
              {data.alternativeTitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Image;