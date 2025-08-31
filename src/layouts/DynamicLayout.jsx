/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import Heading from "../components/Heading";
import MiniPoster from "../components/MiniPoster";
import { useClickSound } from "../utils/clickSound";

const DynamicLayout = ({ title, data, endpoint }) => {
  const { play: playClickSound } = useClickSound();
  
  return (
    <div className="group">
      <div className="flex items-center gap-2 mb-3">
        <Heading className="text-sm md:text-base lg:text-lg font-bold">{title}</Heading>
        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
      </div>
      <div className="bg-black/30 backdrop-blur-sm border border-white/15 rounded-xl p-3 md:p-4 flex flex-col gap-2 md:gap-3 hover:border-white/25 transition-all duration-300 hover:bg-black/40">
        {data && data.map((item) => <MiniPoster key={item.id} item={item} />)}
        <div className="mt-1">
          <Link
            className="inline-flex items-center gap-1 px-3 py-1.5 text-[10px] md:text-xs font-medium text-white/70 hover:text-white transition-colors duration-200"
            to={`/animes/${endpoint}`}
            onClick={playClickSound}
            data-testid={`button-view-more-${endpoint}`}
          >
            <span>View More</span>
            <FaAngleRight className="text-[10px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DynamicLayout;
