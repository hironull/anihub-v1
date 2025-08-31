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
      <div className="header flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Heading className="text-lg md:text-xl font-bold">{title}</Heading>
          <div className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent"></div>
        </div>
        <Link to={`/animes/${endpoint}`} onClick={playClickSound}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs md:text-sm font-medium text-white/80 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300" data-testid="button-view-all">
            <span>View All</span>
            <FaAngleRight className="text-xs" />
          </div>
        </Link>
      </div>
      <div className="wrapper grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-9 2xl:grid-cols-10 gap-2 md:gap-3">
        {data &&
          data.map((item) => (
            <div key={item.id} className="modern-anime-card transform hover:-translate-y-1 transition-all duration-300" data-testid={`card-anime-${item.id}`}>
              <Image data={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MainLayout;
