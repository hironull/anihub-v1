import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import { useClickSound } from "../utils/clickSound";

const TrendingLayout = ({ data }) => {
  const { play: playClickSound } = useClickSound();
  
  return (
    <div className="trending mt-6">
      <Heading className="mb-4 text-lg">Trending Now</Heading>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
          1320: { slidesPerView: 8 },
        }}
        className="trending-swiper"
      >
        {data &&
          data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="group relative">
                <Link
                  to={`/anime/${item.id}`}
                  onClick={playClickSound}
                  className="block w-full h-0 pb-[135%] relative overflow-hidden rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200"
                >
                  <img
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    src={item.poster}
                    alt={item.title}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded text-white text-[10px] font-bold">
                    #{item.rank}
                  </div>
                </Link>
                <h3
                  title={item.title}
                  className="text-xs font-medium text-center mt-2 line-clamp-2 leading-tight text-white/80 group-hover:text-white transition-colors duration-200"
                >
                  {item.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default TrendingLayout;
