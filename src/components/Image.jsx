/* eslint-disable react/prop-types */
import SoundsInfo from "../components/SoundsInfo";
import { Link } from "react-router-dom";
import { useClickSound } from "../utils/clickSound";

const Image = ({ data }) => {
  return (
    <div className="modern-anime-card group">
      <Link to={`/anime/${data.id}`}>
        <div className="w-full h-0 pb-[130%] mb-3 relative overflow-hidden rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200">
          <div className="absolute inset-0 z-10 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          <div className="z-20 absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
            <SoundsInfo episodes={data.episodes} />
          </div>
          <img
            className="absolute h-full w-full inset-0 object-cover object-center transition-transform duration-300 group-hover:scale-105"
            src={data.poster}
            alt={data.title}
            loading="lazy"
          />
        </div>
      </Link>
      <Link to={`/anime/${data.id}`}>
        <h3
          title={data.title}
          className="title line-clamp-2 text-xs font-medium hover:text-white transition-colors duration-200 mb-1 leading-tight text-white/80"
        >
          {data.title}
        </h3>
      </Link>
      {data.type && (
        <div className="flex items-center gap-1.5 text-[10px] text-white/50">
          <span>{data.type}</span>
          <div className="h-0.5 w-0.5 bg-white/40 rounded-full"></div>
          <span>{data.duration}</span>
        </div>
      )}
    </div>
  );
};

export default Image;
