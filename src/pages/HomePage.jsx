import React from "react";
import Cards from "@/components/Cards";
import useFetchNews from "@/hooks/useFetchNews";
import empty from "@/assets/empty.png";
import CardSkeleton from "@/components/CardSkeleton";

const HomePage = () => {
  const { data, loading } = useFetchNews();

  return (
    <>
      {loading ? (
        <CardSkeleton />
      ) : (
        <>
          <div className="container mx-auto px-4 mt-4">
            {data.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Cards data={data} />
              </div>
            ) : (
              <div className="flex flex-col items-center mt-8">
                <img src={empty} alt="Nothing to show" width={300} />
                <p className="text-[1.3rem] sm:text-2xl md:text-3xl font-bold">
                  No news to show
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default HomePage;
