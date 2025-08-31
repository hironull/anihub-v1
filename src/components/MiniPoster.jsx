/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SoundsInfo from "./SoundsInfo";
import { useClickSound } from "../utils/clickSound";

const MiniPoster = ({ item }) => {
  const { play: playClickSound } = useClickSound();
  
  return (
    <div key={item.id} className="group flex items-center gap-2 md:gap-3 p-2 md:p-3 hover:bg-white/8 rounded-lg md:rounded-xl transition-all duration-300 hover:scale-[1.02]" data-testid={`card-mini-${item.id}`}>
      <Link className="" to={`/anime/${item.id}`} onClick={playClickSound} data-testid={`link-mini-${item.id}`}>
        <div className="poster flex-shrink-0 relative overflow-hidden w-12 md:w-14 h-16 md:h-18 rounded-md md:rounded-lg border border-white/15 group-hover:border-white/25 transition-all duration-300">
          <img
            className="h-full w-full object-cover object-center transition-transform duration-200 group-hover:scale-105"
            src={item.poster}
            alt={item.title}
            loading="lazy"
          />
        </div>
      </Link>
      <div className="text flex-1">
        <Link to={`/anime/${item.id}`} onClick={playClickSound} data-testid={`link-mini-title-${item.id}`}>
          <h3 className="title hover:text-white mb-1 md:mb-2 font-semibold text-xs md:text-sm line-clamp-2 leading-tight text-white/90 transition-colors duration-300" data-testid={`text-mini-title-${item.id}`}>
            {item.title}
          </h3>
        </Link>
        <div className="flex items-center gap-1 md:gap-1.5 text-[9px] md:text-[10px] text-white/50">
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
