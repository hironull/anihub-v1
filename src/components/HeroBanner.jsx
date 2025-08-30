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
      speed={1200}
      grabCursor={true}
      modules={[Navigation, Pagination, Autoplay, EffectFade, Parallax]}
      slidesPerView={1}
      loop={true}
      parallax={true}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      autoplay={{ 
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      pagination={{ 
        clickable: true,
        dynamicBullets: true,
        bulletActiveClass: 'swiper-pagination-bullet-active-custom'
      }}
      navigation={{
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom'
      }}
      onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
      className="slider h-[70vh] pt-16 mb-8 futuristic-hero-slider relative overflow-hidden"
    >
      {slides &&
        slides.map((item, index) => (
          <SwiperSlide
            key={item.id}
            className="relative h-full overflow-hidden bg-black futuristic-slide neural-network"
          >
            <div className="content w-full h-full relative">
              {/* Advanced Backdrop with Parallax */}
              <div className="hero-backdrop absolute inset-0 overflow-hidden">
                <div 
                  className="absolute inset-0 scale-110 transition-transform duration-1000"
                  data-swiper-parallax="-30%"
                >
                  <img
                    className="h-full w-full object-cover object-center opacity-40 transition-all duration-1000"
                    loading="lazy"
                    alt={item.title}
                    src={item.poster}
                  />
                </div>
                {/* Multiple Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/30"></div>
              </div>
              
              {/* Floating Animation Elements */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white/20 rounded-full floating-element"
                    style={{
                      left: `${10 + Math.random() * 80}%`,
                      top: `${10 + Math.random() * 80}%`,
                      animationDelay: `${i * 0.8}s`,
                      animationDuration: `${4 + Math.random() * 2}s`
                    }}
                  ></div>
                ))}
              </div>

              {/* Enhanced Content Container */}
              <div className="glass-dark z-10 mx-4 md:mx-12 max-w-3xl absolute bottom-8 p-8 md:p-10 border border-white/20 neon-glow">
                {/* Enhanced Header Section */}
                <div className="flex items-center gap-4 mb-6" data-swiper-parallax="-100">
                  <div className="sleek-btn text-xs px-4 py-2 uppercase tracking-wider bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm">
                    <FaStar className="inline mr-2" />
                    #{item.rank} Spotlight
                  </div>
                  <div className="h-2 w-2 bg-white rounded-full opacity-60 pulse-border"></div>
                  <div className="text-white/80 text-sm uppercase tracking-wide font-medium">
                    Featured Series
                  </div>
                </div>
                
                {/* Enhanced Title */}
                <h1
                  title={item.title}
                  className="text-3xl md:text-5xl xl:text-7xl font-extrabold mb-8 line-clamp-2 leading-tight gradient-text"
                  data-swiper-parallax="-200"
                >
                  {item.title}
                </h1>
                
                {/* Enhanced Meta Information */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8" data-swiper-parallax="-150">
                  <div className="glass p-3 rounded-xl flex items-center gap-3 text-sm hover:bg-white/10 transition-all duration-300">
                    <FaCirclePlay className="text-green-400 text-lg" />
                    <span className="font-medium">{item.type}</span>
                  </div>
                  <div className="glass p-3 rounded-xl flex items-center gap-3 text-sm hover:bg-white/10 transition-all duration-300">
                    <FaClock className="text-blue-400 text-lg" />
                    <span className="font-medium">{item.duration}</span>
                  </div>
                  <div className="glass p-3 rounded-xl flex items-center gap-3 text-sm hover:bg-white/10 transition-all duration-300">
                    <FaCalendarDay className="text-purple-400 text-lg" />
                    <span className="font-medium">{item.aired}</span>
                  </div>
                  <div className="glass p-3 rounded-xl flex items-center gap-3 text-sm hover:bg-white/10 transition-all duration-300">
                    <FaEye className="text-yellow-400 text-lg" />
                    <span className="font-medium uppercase tracking-wide">{item.quality}</span>
                  </div>
                </div>
                
                {/* Enhanced Episodes Info */}
                <div className="mb-8" data-swiper-parallax="-100">
                  <SoundsInfo episodes={item.episodes} />
                </div>
                
                {/* Enhanced Synopsis */}
                <p className="text-white/80 text-base md:text-lg line-clamp-3 mb-10 leading-relaxed font-light" data-swiper-parallax="-50">
                  {item.synopsis}
                </p>
                
                {/* Enhanced Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4" data-swiper-parallax="-100">
                  <Link
                    to={`/watch/${item.id}`}
                    className="group relative overflow-hidden bg-white text-black px-8 py-4 rounded-full flex items-center justify-center gap-3 text-lg font-bold hover:scale-105 transition-all duration-500 magnetic-hover shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <FaCirclePlay className="text-xl relative z-10" />
                    <span className="relative z-10">Watch Now</span>
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </Link>
                  <Link
                    to={`/anime/${item.id}`}
                    className="glass-dark px-8 py-4 rounded-full flex items-center justify-center gap-3 text-lg font-medium border-2 border-white/30 hover:border-white/60 transition-all duration-300 magnetic-hover group"
                  >
                    <FaHeart className="text-xl group-hover:text-red-400 transition-colors duration-300" />
                    <span>More Info</span>
                    <FaAngleRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      
      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-glass-dark rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all duration-300 magnetic-hover">
        <FaAngleRight className="rotate-180 text-xl" />
      </div>
      <div className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-glass-dark rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all duration-300 magnetic-hover">
        <FaAngleRight className="text-xl" />
      </div>
      
      {/* Enhanced Progress Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides && slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              index === activeSlide 
                ? 'bg-white scale-125 shadow-lg' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          ></div>
        ))}
      </div>
    </Swiper>
  );
};

export default HeroBanner;
