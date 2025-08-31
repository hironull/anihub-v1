import {
  FaAngleRight,
  FaCalendarDay,
  FaCirclePlay,
  FaClock,
  FaStar,
  FaEye,
  FaHeart
} from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade, Parallax } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/parallax";

import "./hero.css";
import SoundsInfo from "./SoundsInfo";
import { Link } from "react-router-dom";
import { useState } from "react";

const HeroBanner = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Swiper
      speed={800}
      grabCursor={true}
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true
      }}
      navigation={true}
      onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
      className="slider h-[55vh] md:h-[65vh] pt-16 mb-6 relative overflow-hidden rounded-xl"
    >
      {slides &&
        slides.map((item, index) => (
          <SwiperSlide
            key={item.id}
            className="relative h-full overflow-hidden bg-black"
          >
            <div className="content w-full h-full relative">
              {/* Backdrop */}
              <div className="hero-backdrop absolute inset-0 overflow-hidden">
                <img
                  className="h-full w-full object-cover object-center opacity-40"
                  loading="lazy"
                  alt={item.title}
                  src={item.poster}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>

              {/* Content Container */}
              <div className="glass-dark z-10 mx-4 md:mx-8 max-w-2xl absolute bottom-6 p-5 md:p-7 rounded-xl backdrop-blur-lg border border-white/20 bg-black/20"></div>
                {/* Header Section */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="sleek-btn text-xs px-2 py-1 uppercase tracking-wider">
                    #{item.rank} Spotlight
                  </div>
                  <div className="h-1 w-1 bg-white rounded-full opacity-50"></div>
                  <div className="text-white/70 text-xs uppercase tracking-wide">
                    Featured
                  </div>
                </div>

                {/* Title */}
                <h1
                  title={item.title}
                  className="text-xl md:text-2xl xl:text-3xl font-bold mb-3 line-clamp-2 leading-tight"
                >
                  {item.title}
                </h1>

                {/* Meta Information */}
                <div className="flex flex-wrap gap-3 mb-4 text-white/80 text-xs">
                  <div className="flex items-center gap-2">
                    <FaCirclePlay className="text-white" />
                    <span>{item.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-white" />
                    <span>{item.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendarDay className="text-white" />
                    <span>{item.aired}</span>
                  </div>
                  <div className="glass px-3 py-1 text-xs text-white font-medium uppercase tracking-wide">
                    {item.quality}
                  </div>
                </div>

                {/* Episodes Info */}
                <div className="mb-3">
                  <SoundsInfo episodes={item.episodes} />
                </div>

                {/* Synopsis */}
                <p className="text-white/70 text-xs md:text-sm line-clamp-2 mb-4 leading-relaxed">
                  {item.synopsis}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <Link
                    to={`/watch/${item.id}/1`}
                    className="sleek-btn px-4 py-2 flex items-center justify-center gap-2 text-sm font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FaCirclePlay className="text-lg" />
                    <span>Watch Now</span>
                  </Link>
                  <Link
                    to={`/anime/${item.id}`}
                    className="glass px-4 py-2 flex items-center justify-center gap-2 text-sm font-medium border border-white/20 hover:border-white/40 hover:bg-white/10 rounded-lg transition-all duration-300"
                  >
                    <span>More Info</span>
                    <FaAngleRight className="text-sm" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default HeroBanner;