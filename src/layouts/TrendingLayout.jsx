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
    <div className="trending mt-8">
      <Heading className="mb-6">Trending Now</Heading>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1320: { slidesPerView: 6 },
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
                  className="modern-card block w-full h-0 pb-[150%] relative overflow-hidden"
                >
                  <img
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    src={item.poster}
                    alt={item.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="glass-dark absolute top-3 left-3 px-3 py-1">
                    <span className="text-white text-xs font-bold">#{item.rank}</span>
                  </div>
                </Link>
                <h3
                  title={item.title}
                  className="text-sm font-medium text-center mt-3 line-clamp-2 leading-tight text-white/90 group-hover:text-white transition-colors duration-200"
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
