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
      className="slider h-[60vh] pt-16 mb-8 relative overflow-hidden"
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
                  className="h-full w-full object-cover object-center opacity-30"
                  loading="lazy"
                  alt={item.title}
                  src={item.poster}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
              </div>

              {/* Content Container */}
              <div className="glass-dark z-10 mx-4 md:mx-12 max-w-2xl absolute bottom-8 p-6 md:p-8">
                {/* Header Section */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="sleek-btn text-xs px-3 py-1 uppercase tracking-wider">
                    #{item.rank} Spotlight
                  </div>
                  <div className="h-1 w-1 bg-white rounded-full opacity-50"></div>
                  <div className="text-white/70 text-sm uppercase tracking-wide">
                    Featured
                  </div>
                </div>
                
                {/* Title */}
                <h1
                  title={item.title}
                  className="text-2xl md:text-4xl xl:text-6xl font-bold mb-6 line-clamp-2 leading-tight"
                >
                  {item.title}
                </h1>
                
                {/* Meta Information */}
                <div className="flex flex-wrap gap-4 mb-6 text-white/80 text-sm">
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
                <div className="mb-6">
                  <SoundsInfo episodes={item.episodes} />
                </div>
                
                {/* Synopsis */}
                <p className="text-white/70 text-sm md:text-base line-clamp-3 mb-8 leading-relaxed">
                  {item.synopsis}
                </p>
                
                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Link
                    to={`/watch/${item.id}`}
                    className="sleek-btn px-6 py-3 flex items-center gap-3 text-sm font-medium hover:scale-105 transition-transform duration-300"
                  >
                    <FaCirclePlay className="text-lg" />
                    <span>Watch Now</span>
                  </Link>
                  <Link
                    to={`/anime/${item.id}`}
                    className="glass px-6 py-3 flex items-center gap-3 text-sm font-medium border border-white/20 hover:border-white/40 transition-all duration-300"
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
