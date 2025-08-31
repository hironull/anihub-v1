import { Link, useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { useApi } from "../services/useApi";
import Loader from "../components/Loader";
import InfoLayout from "../layouts/InfoLayout";
import Recommended from "../layouts/Recommended";
import MostPopular from "../layouts/MostPopular";
import MoreSeasons from "../layouts/MoreSeasons";
import Related from "../layouts/Related";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import VoiceActorsLayout from "../layouts/VoiceActorsLayout";

const DetailPage = () => {
  const { id } = useParams();
  const [bigPoster, setBigPoster] = useState(null);

  const titleId = id.split("-").slice(0, -1).join(" ").replace(",", " ");

  const showBigPoster = (url) => {
    setBigPoster(url);
  };

  const { data: response, isError, error, isLoading } = useApi(`/anime/${id}`);
  const data = response?.data;

  if (isError) {
    return <PageNotFound />;
  }

  return (
    <main className={`min-h-screen bg-black ${bigPoster ? "overflow-y-hidden" : ""}`}>
      {bigPoster && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center">
          <div className="relative max-w-2xl max-h-[90vh] bg-black border border-white/20 rounded-lg overflow-hidden">
            <button
              onClick={() => setBigPoster(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/80 text-white hover:text-red-400 rounded-lg transition-colors"
            >
              <FaWindowClose size={20} />
            </button>
            <img
              src={bigPoster}
              alt="poster"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      <Helmet>
        <title>{titleId}</title>
        <meta property="og:title" content="detail - AniHub" />
      </Helmet>
      
      {data && !isLoading ? (
        <div className={`max-w-7xl mx-auto px-4 py-8 ${bigPoster ? "blur-sm" : ""}`}>
          {/* Main Info Section */}
          <div className="mb-12">
            <InfoLayout showBigPoster={showBigPoster} data={data} />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="xl:col-span-2 space-y-8">
              {data.moreSeasons.length !== 0 && (
                <MoreSeasons data={data.moreSeasons} />
              )}
              <VoiceActorsLayout id={id} />
              {data.recommended && (
                <Recommended data={data.recommended} />
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {data.related.length !== 0 && (
                <Related data={data.related} />
              )}
              {data.mostPopular && (
                <MostPopular data={data.mostPopular} />
              )}
            </div>
          </div>
        </div>
      ) : (
        <Loader className="h-[100dvh]" />
      )}
      <Footer />
    </main>
  );
};

export default DetailPage;
