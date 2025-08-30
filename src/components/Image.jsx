/* eslint-disable react/prop-types */
import SoundsInfo from "../components/SoundsInfo";
import { Link } from "react-router-dom";
import { useClickSound } from "../utils/clickSound";

const Image = ({ data }) => {
  return (
    <div className="modern-anime-card group">
      <Link to={`/anime/${data.id}`}>
        <div className="modern-card w-full h-0 pb-[140%] mb-4 relative overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="z-20 absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <SoundsInfo episodes={data.episodes} />
          </div>
          <img
            className="absolute h-full w-full inset-0 object-cover object-center transition-transform duration-500 group-hover:scale-110"
            src={data.poster}
            alt={data.title}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </Link>
      <Link to={`/anime/${data.id}`}>
        <h3
          title={data.title}
          className="title line-clamp-2 text-sm md:text-base font-medium hover:text-white transition-colors duration-200 mb-2 leading-tight"
        >
          {data.title}
        </h3>
      </Link>
      {data.type && (
        <div className="flex items-center gap-2 text-xs text-white/60">
          <span>{data.type}</span>
          <div className="h-1 w-1 bg-white/40 rounded-full"></div>
          <span>{data.duration}</span>
        </div>
      )}
    </div>
  );
};

export default Image;
