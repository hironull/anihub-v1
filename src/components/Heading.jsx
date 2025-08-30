import React from "react";

const Heading = ({ children, className }) => {
  return (
    <h1 className={`text-lg font-bold ml-3 text-white/90 ${className}`}>
      {children}
    </h1>
  );
};

export default Heading;
