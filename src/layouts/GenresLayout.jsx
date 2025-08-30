import React from "react";
import Genres from "../components/Genres";
import Heading from "../components/Heading";

const GenresLayout = () => {
  return (
    <div className="bg-black/60 border border-white/10 rounded-lg p-6">
      <Heading className="mb-4 text-lg font-semibold text-white">Genres</Heading>
      <Genres />
    </div>
  );
};

export default GenresLayout;
