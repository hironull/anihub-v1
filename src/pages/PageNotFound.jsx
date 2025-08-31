import React from "react";
import pageNotFound from "../assets/404.png";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { Helmet } from "react-helmet";

const PageNotFound = () => {
  return (
    <div className="min-h-[100dvh] flex justify-center flex-col items-center relative overflow-x-hidden cyber-grid">
      <Helmet>
        <title>404 PAGE NOT FOUND</title>
        <meta property="og:title" content="PAGE NOT FOUND - watanuki" />
      </Helmet>
      
      {/* Enhanced container with glass morphism */}
      <div className="glass modern-card p-8 text-center max-w-md w-full mx-4 popup-animation">
        <img
          className="max-w-60 mb-6 w-full h-auto mx-auto hover-glow transition-all duration-300"
          src={pageNotFound}
          alt="404 page not found"
        />
        
        <h1 className="text-4xl font-bold mb-3 gradient-text">
          404 Error
        </h1>
        
        <h2 className="text-lg text-white/80 mb-8 leading-relaxed">
          Oops! The page you&apos;re looking for seems to have vanished into the digital void.
        </h2>
        
        <Link to={`/home`}>
          <button className="futuristic-btn flex items-center gap-3 px-6 py-3 mx-auto hover-scale transition-all duration-300">
            <FaAngleLeft className="text-lg" />
            <span className="font-semibold">Return to Home</span>
          </button>
        </Link>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-3 h-3 bg-white/15 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-white/25 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
    </div>
  );
};

export default PageNotFound;
