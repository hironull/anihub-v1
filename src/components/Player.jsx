/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";
import { useClickSound } from "../utils/clickSound";

const Player = ({
  episodeId,
  currentEp,
  changeEpisode,
  hasNextEp,
  hasPrevEp,
}) => {
  const [category, setCategory] = useState("sub");
  const [server, setServer] = useState("vidWish");
  const { play: playClickSound } = useClickSound();

  const changeCategory = (newType) => {
    if (newType !== category) {
      setCategory(newType);
    }
  };
  function changeServer(newServer) {
    if (newServer !== server) setServer(newServer);
  }

  return (
    <>
      <div className="w-full bg-background aspect-video relative rounded-sm  max-w-screen-xl overflow-hidden">
        <iframe
          src={`https://${
            server === "vidWish" ? "vidwish.live" : "megaplay.buzz"
          }/stream/s-2/${episodeId.split("ep=").pop()}/${category}`}
          width="100%"
          height="100%"
          allowFullScreen
        ></iframe>
      </div>
      <div className="category flex flex-wrap flex-col sm:flex-row items-center justify-center  sm:justify-between px-2 md:px-20 gap-3 bg-lightbg py-2">
        <div className="servers flex gap-3">
          <button
            onClick={() => {
              playClickSound();
              changeServer("vidWish");
            }}
            className={`${
              server === "vidWish"
                ? "sleek-btn bg-white/20 text-white"
                : "glass text-white/80 hover:text-white"
            } px-4 py-2 rounded-full text-sm font-medium transition-all duration-300`}
          >
            VidWish
          </button>
          <button
            onClick={() => {
              playClickSound();
              changeServer("megaPlay");
            }}
            className={`${
              server === "megaPlay"
                ? "sleek-btn bg-white/20 text-white"
                : "glass text-white/80 hover:text-white"
            } px-4 py-2 rounded-full text-sm font-medium transition-all duration-300`}
          >
            MegaPlay
          </button>
        </div>
        <div className="flex gap-5">
          <div className="sound flex gap-3">
            {["sub", "dub"].map((type) => (
              <button
                key={type}
                onClick={() => {
                  playClickSound();
                  changeCategory(type);
                }}
                className={`${
                  category === type
                    ? "sleek-btn bg-white/20 text-white"
                    : "glass text-white/80 hover:text-white"
                } px-4 py-2 rounded-full text-sm font-medium transition-all duration-300`}
              >
                {type.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="btns flex gap-3">
            {hasPrevEp && (
              <button
                title="Previous Episode"
                className="sleek-btn px-3 py-2 rounded-full text-white hover-scale transition-all duration-300"
                onClick={() => {
                  playClickSound();
                  changeEpisode("prev");
                }}
              >
                <TbPlayerTrackPrevFilled className="text-lg" />
              </button>
            )}
            {hasNextEp && (
              <button
                title="Next Episode"
                className="sleek-btn px-3 py-2 rounded-full text-white hover-scale transition-all duration-300"
                onClick={() => {
                  playClickSound();
                  changeEpisode("next");
                }}
              >
                <TbPlayerTrackNextFilled className="text-lg" />
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-400">
            you are watching Episode {currentEp.episodeNumber}
          </p>
          {currentEp.isFiller && (
            <p className="text-red-400">your are watching filler Episode 👻</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Player;
