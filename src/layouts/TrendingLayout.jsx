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
      <div className="flex items-center justify-between mb-6">
        <Heading className="text-xl font-bold">🔥 Trending Now</Heading>
        <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent ml-4"></div>
      </div>
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
              <div className="group relative transform hover:-translate-y-1 transition-all duration-300">
                <Link
                  to={`/anime/${item.id}`}
                  onClick={playClickSound}
                  className="block w-full h-0 pb-[135%] relative overflow-hidden rounded-xl border border-white/10 hover:border-white/30 hover:shadow-xl hover:shadow-black/50 transition-all duration-300"
                >
                  <img
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    src={item.poster}
                    alt={item.title}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <div className="absolute top-2 left-2 bg-gradient-to-r from-blue-600 to-purple-600 px-2 py-1 rounded-lg text-white text-[10px] font-bold shadow-lg">
                    #{item.rank}
                  </div>
                </Link>
                <h3
                  title={item.title}
                  className="text-xs font-semibold text-center mt-3 line-clamp-2 leading-tight text-white/90 group-hover:text-white transition-colors duration-300"
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
