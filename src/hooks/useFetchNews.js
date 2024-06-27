import { useEffect, useState } from "react";
import axios from "axios";

const useFetchNews = () => {
  const apiKey = "4ec45d58d6f04f82b59be673e5baf490";
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(apiUrl);
        setData(result.data.articles);
        setLoading(false);
        console.log(result.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  return { data, loading };
};

export default useFetchNews;
