/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
  TbMaximize,
  TbSettings,
  TbVolume,
  TbVolumeOff,
  TbPlayerPlay,
  TbPlayerPause,
} from "react-icons/tb";
import { FaExpand, FaCompress, FaCog, FaDownload } from "react-icons/fa";
import { MdSpeed, MdHd, MdAutoAwesome } from "react-icons/md";
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
  const [isTheaterMode, setIsTheaterMode] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [quality, setQuality] = useState("1080p");
  const [autoPlay, setAutoPlay] = useState(true);
  const [volume, setVolume] = useState(100);
  const [isMuted, setIsMuted] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
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
      {/* Modern Video Player Container */}
      <div className={`${isTheaterMode ? 'fixed inset-0 z-50 bg-black' : 'relative'} transition-all duration-300`}>
        <div className={`${
          isTheaterMode 
            ? 'w-full h-full' 
            : 'w-full bg-black/95 aspect-video relative rounded-xl max-w-screen-xl overflow-hidden border border-white/20'
        } group`}>
          <iframe
            src={`https://${
              server === "vidWish" ? "vidwish.live" : "megaplay.buzz"
            }/stream/s-2/${episodeId.split("ep=").pop()}/${category}`}
            width="100%"
            height="100%"
            allowFullScreen
            className="rounded-xl"
          ></iframe>
          
          {/* Player Overlay Controls */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {/* Top Control Bar */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center pointer-events-auto">
              <div className="flex items-center gap-3">
                <span className="bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                  Episode {currentEp?.episodeNumber}
                </span>
                {currentEp?.isFiller && (
                  <span className="bg-red-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium flex items-center gap-1">
                    👻 Filler
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsTheaterMode(!isTheaterMode)}
                  className="bg-black/80 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/20 transition-all duration-300"
                  title={isTheaterMode ? 'Exit Theater Mode' : 'Theater Mode'}
                  data-testid="button-theater-mode"
                >
                  {isTheaterMode ? <FaCompress className="text-lg" /> : <FaExpand className="text-lg" />}
                </button>
                
                <div className="relative">
                  <button
                    onClick={() => setShowSettings(!showSettings)}
                    className="bg-black/80 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/20 transition-all duration-300"
                    title="Settings"
                    data-testid="button-settings"
                  >
                    <FaCog className="text-lg" />
                  </button>
                  
                  {/* Settings Dropdown */}
                  {showSettings && (
                    <div className="absolute top-12 right-0 bg-black/95 backdrop-blur-lg border border-white/20 rounded-xl p-4 min-w-[200px] space-y-3">
                      <div className="text-white text-sm font-medium mb-3">Player Settings</div>
                      
                      {/* Quality Selector */}
                      <div className="space-y-2">
                        <label className="text-white/70 text-xs">Quality</label>
                        <select 
                          value={quality} 
                          onChange={(e) => setQuality(e.target.value)}
                          className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-white text-sm"
                        >
                          <option value="1080p">1080p HD</option>
                          <option value="720p">720p</option>
                          <option value="480p">480p</option>
                          <option value="360p">360p</option>
                        </select>
                      </div>
                      
                      {/* Auto-play Toggle */}
                      <div className="flex items-center justify-between">
                        <span className="text-white/70 text-xs">Auto-play Next</span>
                        <button
                          onClick={() => setAutoPlay(!autoPlay)}
                          className={`w-10 h-6 rounded-full transition-colors duration-300 ${
                            autoPlay ? 'bg-white' : 'bg-white/20'
                          } relative`}
                        >
                          <div className={`w-4 h-4 ${autoPlay ? 'bg-black' : 'bg-white'} rounded-full absolute top-1 transition-transform duration-300 ${
                            autoPlay ? 'translate-x-5' : 'translate-x-1'
                          }`} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modern Control Panel */}
      <div className="bg-black/40 backdrop-blur-lg border border-white/20 rounded-xl mt-4 p-4 md:p-6">
        {/* Server Selection */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <MdHd className="text-white/70 text-lg" />
            <span className="text-white/70 text-sm font-medium">Server</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                playClickSound();
                changeServer("vidWish");
              }}
              className={`${
                server === "vidWish"
                  ? "bg-white text-black shadow-lg"
                  : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
              } px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border border-white/10`}
              data-testid="button-server-vidwish"
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
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
              } px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border border-white/10`}
              data-testid="button-server-megaplay"
            >
              MegaPlay
            </button>
          </div>
        </div>
        {/* Audio & Navigation Controls */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Audio Language */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <TbVolume className="text-white/70 text-lg" />
              <span className="text-white/70 text-sm font-medium">Audio</span>
            </div>
            <div className="flex gap-2">
              {["sub", "dub"].map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    playClickSound();
                    changeCategory(type);
                  }}
                  className={`${
                    category === type
                      ? "bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg"
                      : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
                  } px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border border-white/10`}
                  data-testid={`button-audio-${type}`}
                >
                  {type.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          
          {/* Episode Navigation */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <MdAutoAwesome className="text-white/70 text-lg" />
              <span className="text-white/70 text-sm font-medium">Episode</span>
            </div>
            <div className="flex gap-2">
              {hasPrevEp && (
                <button
                  title="Previous Episode"
                  className="bg-white/10 hover:bg-white/20 px-4 py-2.5 rounded-xl text-white transition-all duration-300 border border-white/10 flex items-center gap-2"
                  onClick={() => {
                    playClickSound();
                    changeEpisode("prev");
                  }}
                  data-testid="button-prev-episode"
                >
                  <TbPlayerTrackPrevFilled className="text-lg" />
                  <span className="hidden sm:inline text-sm">Previous</span>
                </button>
              )}
              {hasNextEp && (
                <button
                  title="Next Episode"
                  className="bg-white hover:bg-gray-200 px-4 py-2.5 rounded-xl text-black transition-all duration-300 shadow-lg flex items-center gap-2"
                  onClick={() => {
                    playClickSound();
                    changeEpisode("next");
                  }}
                  data-testid="button-next-episode"
                >
                  <span className="hidden sm:inline text-sm">Next</span>
                  <TbPlayerTrackNextFilled className="text-lg" />
                </button>
              )}
            </div>
          </div>
        </div>
        {/* Episode Info */}
        <div className="flex flex-col gap-2 p-4 bg-white/5 rounded-xl border border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">
              Now Watching: Episode {currentEp?.episodeNumber}
            </span>
          </div>
          {currentEp?.isFiller && (
            <div className="flex items-center gap-2 text-red-400 text-sm">
              <span>👻</span>
              <span>Filler Episode</span>
            </div>
          )}
          <div className="flex items-center gap-4 text-xs text-white/60 mt-1">
            <span>Quality: {quality}</span>
            <span>•</span>
            <span>Server: {server === 'vidWish' ? 'VidWish' : 'MegaPlay'}</span>
            <span>•</span>
            <span>Audio: {category.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
