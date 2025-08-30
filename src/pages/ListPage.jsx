/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from "react-router-dom";
import { useInfiniteApi } from "../services/useApi";
import Loader from "../components/Loader";
import PageNotFound from "./PageNotFound";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "../components/Image";
import Heading from "../components/Heading";
import AZ from "../layouts/AZ";
import React from "react";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const ListPage = () => {
  const validateQueries = [
    "top-airing",
    "most-popular",
    "most-favorite",
    "completed",
    "recently-added",
    "recently-updated",
    "top-upcoming",
    "subbed-anime",
    "dubbed-anime",
    "movie",
    "tv",
    "ova",
    "ona",
    "special",
    "az-list",
    "genre",
    "producer",
  ];
  const { category, query = null } = useParams();

  const isValidQuery = validateQueries.includes(category);

  if (!isValidQuery) {
    return <PageNotFound />;
  }

  const endpoint = `/animes/${category}${query ? `/${query}` : ""}?page=`;
  const { data, isError, error, isLoading, hasNextPage, fetchNextPage } =
    useInfiniteApi(endpoint);

  if (isError) {
    return <PageNotFound />;
  }
  const pages = data?.pages;

  return (
    <div className="min-h-screen bg-black pt-16">
      <Helmet>
        <title>{category} animes</title>
        <meta property="og:title" content="explore - AniHub" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4">
        {category === "az-list" && <AZ selected={query} />}
        
        {pages && !isLoading ? (
          <InfiniteScroll
            dataLength={data?.pages.flat().length || 0}
            next={fetchNextPage}
            hasMore={hasNextPage}
            loader={<div className="py-8"><Loader className="h-fit" /></div>}
            endMessage={<Footer />}
          >
            <div className="mb-8">
              <Heading>
                {query ? "" : category} {query} Anime
              </Heading>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {pages?.map((page, pageIndex) => (
                <React.Fragment key={pageIndex}>
                  {page.data.response.map((item, index) => (
                    <div key={item.id + index} className="w-full">
                      <Image data={item} />
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </InfiniteScroll>
        ) : (
          <div className="min-h-screen flex items-center justify-center">
            <Loader className="h-fit" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ListPage;
