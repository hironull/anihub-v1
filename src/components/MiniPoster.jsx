/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SoundsInfo from "./SoundsInfo";
import { useClickSound } from "../utils/clickSound";

const MiniPoster = ({ item }) => {
  const { play: playClickSound } = useClickSound();
  
  return (
    <div key={item.id} className="group flex items-center gap-4 p-3 hover:bg-white/5 rounded-lg transition-all duration-300">
      <Link className="" to={`/anime/${item.id}`} onClick={playClickSound}>
        <div className="poster glass flex-shrink-0 relative overflow-hidden w-16 h-20 rounded-lg">
          <img
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
            src={item.poster}
            alt={item.title}
            loading="lazy"
          />
        </div>
      </Link>
      <div className="text flex-1">
        <Link to={`/anime/${item.id}`} onClick={playClickSound}>
          <h3 className="title hover:text-white mb-2 font-medium text-sm line-clamp-2 leading-tight text-white/90 transition-colors duration-200">
            {item.title}
          </h3>
        </Link>
        <div className="flex items-center gap-2 text-xs text-white/60">
          <SoundsInfo episodes={item.episodes} />
          {item.type && (
            <>
              <div className="h-1 w-1 bg-white/40 rounded-full"></div>
              <span>{item.type}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MiniPoster;
