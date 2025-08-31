/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { FaPlay, FaCheck } from "react-icons/fa";
import { MdPlayArrow } from "react-icons/md";
const Episodes = ({ episode, currentEp, layout }) => {
  const isCurrent = episode.id === currentEp.id;
  return (
    <>
      {layout === "row" ? (
        <div
          className={`group relative overflow-hidden rounded-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
            isCurrent
              ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/50 shadow-blue-500/25"
              : episode.isFiller
              ? "bg-red-500/10 border-red-500/30 hover:border-red-500/50"
              : "bg-white/5 border-white/10 hover:border-white/30"
          }`}
        >
          <Link
            to={`/watch/${episode.id.replaceAll("::", "?")}`}
            className="block w-full p-4"
            data-testid={`link-episode-${episode.episodeNumber}`}
          >
            <div className="flex items-center gap-4">
              {/* Episode Number */}
              <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg relative ${
                isCurrent
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : episode.isFiller
                  ? "bg-red-500/20 text-red-400"
                  : "bg-white/10 text-white/80"
              }`}>
                {isCurrent ? <FaPlay className="text-sm" /> : episode.episodeNumber}
                {isCurrent && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-75 blur-sm"></div>
                )}
              </div>
              
              {/* Episode Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className={`font-semibold truncate ${
                    isCurrent ? "text-white" : "text-white/90"
                  }`}>
                    {episode.title}
                  </h4>
                  {episode.isFiller && (
                    <span className="bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full text-xs font-medium flex items-center gap-1">
                      👻 Filler
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-xs text-white/60">
                  <span>Episode {episode.episodeNumber}</span>
                  {isCurrent && (
                    <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                      Now Playing
                    </span>
                  )}
                </div>
              </div>
              
              {/* Play Icon */}
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                isCurrent
                  ? "bg-white/20 text-white"
                  : "bg-white/10 text-white/60 group-hover:bg-white/20 group-hover:text-white"
              }`}>
                <MdPlayArrow className="text-lg" />
              </div>
            </div>
          </Link>
        </div>
      ) : (
        <div
          title={episode.title}
          className={`group relative aspect-square rounded-lg border transition-all duration-300 hover:scale-105 ${
            isCurrent
              ? "bg-gradient-to-br from-blue-500 to-purple-500 border-blue-400 shadow-lg shadow-blue-500/25"
              : episode.isFiller
              ? "bg-red-500/20 border-red-500/50 hover:border-red-500"
              : "bg-white/10 border-white/20 hover:border-white/40"
          }`}
        >
          <Link
            to={`/watch/${episode.id.replaceAll("::", "?")}`}
            className="absolute inset-0 flex flex-col items-center justify-center p-2"
            data-testid={`link-episode-grid-${episode.episodeNumber}`}
          >
            <div className={`text-sm md:text-base font-bold ${
              isCurrent ? "text-white" : "text-white/90"
            }`}>
              {episode.episodeNumber}
            </div>
            {episode.isFiller && (
              <div className="text-xs text-red-400 mt-1">👻</div>
            )}
            {isCurrent && (
              <div className="absolute top-1 right-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            )}
          </Link>
        </div>
      )}
    </>
  );
};

export default Episodes;