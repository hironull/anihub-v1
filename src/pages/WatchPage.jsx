import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Loader from "../components/Loader";
import Player from "../components/Player";
import Episodes from "../layouts/Episodes";
import { useApi } from "../services/useApi";
import PageNotFound from "./PageNotFound";
import { MdTableRows } from "react-icons/md";
import { HiMiniViewColumns } from "react-icons/hi2";
import { Helmet } from "react-helmet";

const WatchPage = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [layout, setLayout] = useState("row");

  const ep = searchParams.get("ep");

  const { data, isError } = useApi(`/episodes/${id}`);
  const episodes = data?.data;

  const updateParams = (newParam) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set("ep", newParam);
      return newParams;
    });
  };
  // Update document title

  // Auto-redirect to first episode if no `ep` param exists
  useEffect(() => {
    if (!ep && Array.isArray(episodes) && episodes.length > 0) {
      const ep = episodes[0].id.split("ep=").pop();
      updateParams(ep);
    }
  }, [ep, episodes, setSearchParams]);

  if (isError) {
    return <PageNotFound />;
  }

  if (!episodes) {
    return <Loader className="h-screen" />;
  }

  const currentEp =
    episodes &&
    ep !== null &&
    episodes.find((e) => e.id.split("ep=").pop() === ep);

  const changeEpisode = (action) => {
    if (action === "next") {
      const nextEp = episodes[currentEp.episodeNumber - 1 + 1];
      if (!nextEp) return;
      updateParams(nextEp.id.split("ep=").pop());
    } else {
      const prevEp = episodes[currentEp.episodeNumber - 1 - 1];
      if (!prevEp) return;
      updateParams(prevEp.id.split("ep=").pop());
    }
  };

  const hasNextEp = Boolean(episodes[currentEp.episodeNumber - 1 + 1]);
  const hasPrevEp = Boolean(episodes[currentEp.episodeNumber - 1 - 1]);

  return (
    <div className="min-h-screen bg-black pt-16">
      <Helmet>
        <title>
          Watch {id.split("-").slice(0, 2).join(" ")} Online, Free Anime
          Streaming Online on AniHub Anime Website
        </title>
        <meta property="og:title" content="watch - AniHub" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 pb-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-sm text-white/60 mb-6">
          <Link to="/home" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>•</span>
          <Link to={`/anime/${id}`} className="hover:text-white transition-colors">
            {id.split("-").slice(0, 2).join(" ")}
          </Link>
          <span>•</span>
          <span>Episode {currentEp.episodeNumber}</span>
        </div>

        {/* Video Player */}
        {ep && id && (
          <div className="mb-8">
            <Player
              id={id}
              episodeId={`${id}?ep=${ep}`}
              currentEp={currentEp}
              changeEpisode={changeEpisode}
              hasNextEp={hasNextEp}
              hasPrevEp={hasPrevEp}
            />
          </div>
        )}

        {/* Episodes Section */}
        <div className="bg-black/60 border border-white/10 rounded-lg p-6">
          {/* Layout Controls */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-white">Episodes</h3>
            <div className="flex bg-white/10 rounded-lg overflow-hidden">
              <button
                className={`p-2 transition-colors ${
                  layout === "row" 
                    ? "bg-white text-black" 
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
                onClick={() => setLayout("row")}
              >
                <MdTableRows size={18} />
              </button>
              <button
                className={`p-2 transition-colors ${
                  layout === "column" 
                    ? "bg-white text-black" 
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
                onClick={() => setLayout("column")}
              >
                <HiMiniViewColumns size={18} />
              </button>
            </div>
          </div>

          {/* Episodes Grid */}
          <div
            className={`max-h-[50vh] overflow-y-auto grid gap-2 ${
              layout === "row"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12"
            }`}
          >
            {episodes?.map((episode) => (
              <Episodes
                key={episode.id}
                episode={episode}
                currentEp={currentEp}
                layout={layout}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
