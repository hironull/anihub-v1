/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import Heading from "../components/Heading";
import MiniPoster from "../components/MiniPoster";
import { useClickSound } from "../utils/clickSound";

const DynamicLayout = ({ title, data, endpoint }) => {
  const { play: playClickSound } = useClickSound();
  
  return (
    <div className="col-span-12 md:col-span-6 mt-6 xl:col-span-3">
      <Heading className="mb-3 text-lg">{title}</Heading>
      <div className="bg-black/20 border border-white/10 rounded-lg p-4 flex flex-col gap-3">
        {data && data.map((item) => <MiniPoster key={item.id} item={item} />)}
        <div className="mt-1">
          <Link
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white/70 hover:text-white transition-colors duration-200"
            to={`/animes/${endpoint}`}
            onClick={playClickSound}
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
