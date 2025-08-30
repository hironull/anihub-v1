/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import Heading from "../components/Heading";
import MiniPoster from "../components/MiniPoster";
import { useClickSound } from "../utils/clickSound";

const DynamicLayout = ({ title, data, endpoint }) => {
  const { play: playClickSound } = useClickSound();
  
  return (
    <div className="col-span-12 md:col-span-6 mt-8 xl:col-span-3">
      <Heading className="mb-4">{title}</Heading>
      <div className="modern-container flex flex-col gap-4">
        {data && data.map((item) => <MiniPoster key={item.id} item={item} />)}
        <div className="mt-2">
          <Link
            className="sleek-btn inline-flex items-center gap-2 px-4 py-2 text-sm font-medium"
            to={`/animes/${endpoint}`}
            onClick={playClickSound}
          >
            <span>View More</span>
            <FaAngleRight className="text-xs" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DynamicLayout;
