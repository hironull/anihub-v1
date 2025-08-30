import React from "react";
import pageNotFound from "../assets/404.png";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { Helmet } from "react-helmet";

const PageNotFound = () => {
  return (
    <div className="h-[100dvh] flex justify-center flex-col items-center relative overflow-hidden cyber-grid">
      <Helmet>
        <title>404 PAGE NOT FOUND</title>
        <meta property="og:title" content="PAGE NOT FOUND - watanuki" />
      </Helmet>
      
      {/* Compact container with glass morphism */}
      <div className="glass modern-card p-6 text-center max-w-sm w-full mx-4 popup-animation">
        <img
          className="max-w-40 mb-4 w-full h-auto mx-auto hover-glow transition-all duration-300"
          src={pageNotFound}
          alt="404 page not found"
        />
        
        <h1 className="text-3xl font-bold mb-2 gradient-text">
          404 Error
        </h1>
        
        <h2 className="text-sm text-white/70 mb-6 leading-relaxed">
          Page not found in the digital void.
        </h2>
        
        <Link to={`/home`}>
          <button className="futuristic-btn flex items-center gap-2 px-4 py-2 mx-auto hover-scale transition-all duration-300 text-sm">
            <FaAngleLeft className="text-base" />
            <span className="font-medium">Return Home</span>
          </button>
        </Link>
      </div>
      
      {/* Minimal floating elements */}
      <div className="absolute top-1/4 left-16 w-1 h-1 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-16 w-1 h-1 bg-white/15 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
    </div>
  );
};

export default PageNotFound;
