/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import Image from "../components/Image";
import { FaAngleRight } from "react-icons/fa";
import { useClickSound } from "../utils/clickSound";

const MainLayout = ({ title, data, endpoint }) => {
  const { play: playClickSound } = useClickSound();
  
  return (
    <div className="pb-8">
      <div className="header flex justify-between items-center mb-6">
        <Heading>{title}</Heading>
        <Link to={`/animes/${endpoint}`} onClick={playClickSound}>
          <div className="sleek-btn inline-flex items-center gap-2 px-4 py-2 text-sm font-medium">
            <span>View more</span>
            <FaAngleRight className="text-xs" />
          </div>
        </Link>
      </div>
      <div className="wrapper grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
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
