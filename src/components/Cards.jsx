import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import { Link } from "react-router-dom";
import useFetchNews from "@/hooks/useFetchNews";
import CardSkeleton from "./CardSkeleton";

const Cards = () => {
  const { data, loading } = useFetchNews();

  return (
    <>
      {loading ? (
        <CardSkeleton />
      ) : (
        <>
          {data.map((item, i) => (
            <Link
              to={item.url}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="sm:h-[245px] md:h-[345px]">
                <CardHeader>
                  <CardTitle style={{ overflow: "hidden", height: "200px" }}>
                    <img
                      src={item.urlToImage}
                      alt={item.title}
                      style={{ width: "100%", objectFit: "contain" }}
                    />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="card-content">{item.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </>
      )}
    </>
  );
};

export default Cards;
