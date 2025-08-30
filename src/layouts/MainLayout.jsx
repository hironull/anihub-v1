/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import Image from "../components/Image";
import { FaAngleRight } from "react-icons/fa";
import { useClickSound } from "../utils/clickSound";

const MainLayout = ({ title, data, endpoint }) => {
  const { play: playClickSound } = useClickSound();
  
  return (
    <div className="pb-6">
      <div className="header flex justify-between items-center mb-4">
        <Heading className="text-lg">{title}</Heading>
        <Link to={`/animes/${endpoint}`} onClick={playClickSound}>
          <div className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white/70 hover:text-white transition-colors duration-200">
            <span>View more</span>
            <FaAngleRight className="text-[10px]" />
          </div>
        </Link>
      </div>
      <div className="wrapper grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3">
        {data &&
          data.map((item) => (
            <div key={item.id} className="modern-anime-card">
              <Image data={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MainLayout;
