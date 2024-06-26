import { useEffect, useState } from "react";
import axios from "axios";

const useFetchNews = () => {
  const apiUrl = "http://localhost:5000/api/get-news";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(apiUrl);
        setData(result.data.data);
        setLoading(false);
        // console.log(result.data.articles);
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
