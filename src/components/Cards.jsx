import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import { Link } from "react-router-dom";

const Cards = () => {
  const apiKey = "4ec45d58d6f04f82b59be673e5baf490";
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(apiUrl);
      setData(result.data.articles);
      console.log(result.data.articles);
    };
    fetchData();
  }, []);
  return (
    <>
      {data.map((item, i) => (
        <Link to={item.url} key={i} target="_blank" rel="noopener noreferrer">
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
  );
};

export default Cards;
