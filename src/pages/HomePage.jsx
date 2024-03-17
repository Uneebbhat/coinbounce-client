import React from "react";
import ArticlesCard from "../components/ui/ArticlesCard";
import useFetchExternalData from "../hooks/useFetchExternalData";
import Button from "@mui/material/Button";
import CardSkeleton from "../components/ui/CardSkeleton";

const HomePage = () => {
  const { articleData, loadMoreArticles, loading } = useFetchExternalData();
  // console.log(articleData);
  return (
    <>
      <div className="wrapper home-wrapper flex col align-center">
        <h2>Latest Articles</h2>
        {loading ? (
          <div className="articles-wrapper flex" style={{ columnGap: "50px" }}>
            <CardSkeleton animation="wave" />
            <CardSkeleton animation="wave" />
            <CardSkeleton animation="wave" />
          </div>
        ) : (
          <div className="articles-wrapper flex">
            {articleData.map((data) => (
              <ArticlesCard data={data} key={data.id} />
            ))}
          </div>
        )}

        <div style={{ marginTop: "30px" }}>
          <Button onClick={loadMoreArticles} variant="contained">
            Load More
          </Button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
