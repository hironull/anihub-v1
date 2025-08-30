import React from "react";
import { useApi } from "../services/useApi";
import Heading from "../components/Heading";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { useClickSound } from "../utils/clickSound";

const VoiceActorsLayout = ({ id }) => {
  const { data, isLoading, isError, error } = useApi(`/characters/${id}`);
  const { play: playClickSound } = useClickSound();

  if (!id) return null;
  if (isError) return null;
  if (!data?.data?.response?.length) return null;

  const characters = data && data?.data?.response.slice(0, 6);

  return characters ? (
    <main className="mt-5">
      <div className="header flex justify-between">
        <Heading>Characters & Voice Actors</Heading>
        <Link to={`/characters/${id}`} onClick={playClickSound}>
          <div className="sleek-btn inline-flex items-center gap-2 px-4 py-2 text-sm font-medium">
            <span>View more</span>
            <FaAngleRight className="text-xs" />
          </div>
        </Link>
      </div>
      <div className="grid mt-2 grid-cols-12 gap-2">
        {characters.map((item) => (
          <div
            key={item.id}
            className="modern-container flex p-4 items-center justify-between col-span-12 md:col-span-6 2xl:col-span-4 hover:bg-white/5 transition-all duration-300"
          >
            <div className="left gap-2 flex items-center">
              <Link to={`/${item.id.replaceAll(":", "/")}`} onClick={playClickSound}>
                <div className="poster h-9 w-9 overflow-hidden rounded-full">
                  <img
                    className="h-full w-full object-cover"
                    src={item.imageUrl}
                    alt={item.name}
                  />
                </div>
              </Link>
              <div className="flex flex-col">
                <Link to={`/${item.id.replaceAll(":", "/")}`} onClick={playClickSound}>
                  <h4 className="text-xs hover:text-white font-medium">{item.name}</h4>
                </Link>
                <span className="text-xs text-white/60">{item.role}</span>
              </div>
            </div>
            {item.voiceActors?.length > 0 && (
              <div className="right flex items-center gap-2">
                <div className="flex items-end flex-col">
                  <Link to={`/${item.voiceActors[0].id.replaceAll(":", "/")}`} onClick={playClickSound}>
                    <h4 className="text-xs hover:text-primary">
                      {item.voiceActors[0].name}
                    </h4>
                  </Link>
                  <span className="text-xs text-lighttext">{"japanese"}</span>
                </div>
                <Link to={`/${item.voiceActors[0].id.replaceAll(":", "/")}`} onClick={playClickSound}>
                  <div className="poster h-9 w-9 rounded-full overflow-hidden">
                    <img
                      className="h-full w-full object-cover"
                      src={item.voiceActors[0].imageUrl}
                      alt={item.voiceActors[0].name}
                    />
                  </div>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  ) : (
    <Loader />
  );
};

export default VoiceActorsLayout;
