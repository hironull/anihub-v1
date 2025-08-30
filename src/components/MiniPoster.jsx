/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SoundsInfo from "./SoundsInfo";
import { useClickSound } from "../utils/clickSound";

const MiniPoster = ({ item }) => {
  const { play: playClickSound } = useClickSound();
  
  return (
    <div key={item.id} className="group flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-all duration-200">
      <Link className="" to={`/anime/${item.id}`} onClick={playClickSound}>
        <div className="poster flex-shrink-0 relative overflow-hidden w-12 h-16 rounded-md border border-white/10">
          <img
            className="h-full w-full object-cover object-center transition-transform duration-200 group-hover:scale-105"
            src={item.poster}
            alt={item.title}
            loading="lazy"
          />
        </div>
      </Link>
      <div className="text flex-1">
        <Link to={`/anime/${item.id}`} onClick={playClickSound}>
          <h3 className="title hover:text-white mb-1 font-medium text-xs line-clamp-2 leading-tight text-white/80 transition-colors duration-200">
            {item.title}
          </h3>
        </Link>
        <div className="flex items-center gap-1.5 text-[10px] text-white/50">
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
