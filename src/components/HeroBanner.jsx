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

  // Don't render if no slides
  if (!slides || slides.length === 0) {
    return (
      <div className="h-[300px] md:h-[400px] pt-16 mb-8 relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900 to-black flex items-center justify-center">
        <div className="text-white/50 text-base md:text-lg">Loading featured content...</div>
      </div>
    );
  }

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
      className="slider h-auto min-h-[400px] md:min-h-[500px] pt-16 mb-8 relative overflow-hidden rounded-2xl"
    >
      {slides &&
        slides.map((item, index) => (
          <SwiperSlide
            key={item.id}
            className="relative h-full overflow-hidden bg-black"
          >
            <div className="content w-full min-h-[400px] md:min-h-[500px] relative flex items-end">
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
              <div className="glass-dark z-10 mx-4 md:mx-12 max-w-2xl w-full md:w-auto mb-6 md:mb-8 p-4 md:p-6 lg:p-8 rounded-2xl backdrop-blur-lg border border-white/20 bg-black/60">
                {/* Header Section */}
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <div className="sleek-btn text-[10px] md:text-xs px-2 md:px-3 py-1 uppercase tracking-wider">
                    #{item.rank} Spotlight
                  </div>
                  <div className="h-1 w-1 bg-white rounded-full opacity-50"></div>
                  <div className="text-white/70 text-xs md:text-sm uppercase tracking-wide">
                    Featured
                  </div>
                </div>

                {/* Title */}
                <h1
                  title={item.title}
                  className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 md:mb-4 line-clamp-1 md:line-clamp-2 leading-tight text-white"
                  data-testid={`text-spotlight-title-${item.id}`}
                >
                  {item.title}
                </h1>

                {/* Meta Information */}
                <div className="flex flex-wrap gap-2 md:gap-3 mb-3 md:mb-4 text-white/80 text-[10px] md:text-xs lg:text-sm">
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
                <p className="text-white/70 text-xs md:text-sm line-clamp-2 mb-3 md:mb-4 leading-relaxed">
                  {item.synopsis}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <Link
                    to={`/watch/${item.id}/1`}
                    className="sleek-btn px-4 md:px-6 py-2 md:py-3 flex items-center justify-center gap-2 text-sm md:text-base font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    data-testid="button-watch-now"
                  >
                    <FaCirclePlay className="text-lg" />
                    <span>Watch Now</span>
                  </Link>
                  <Link
                    to={`/anime/${item.id}`}
                    className="glass px-4 md:px-6 py-2 md:py-3 flex items-center justify-center gap-2 text-sm md:text-base font-medium border border-white/20 hover:border-white/40 hover:bg-white/10 rounded-lg transition-all duration-300"
                    data-testid="button-more-info"
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