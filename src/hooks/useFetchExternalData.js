import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const useFetchExternalData = () => {
  const [articleData, setArticleData] = useState([]);
  const [numArticles, setNumArticles] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=news&apiKey=4ec45d58d6f04f82b59be673e5baf490&pageSize=${numArticles}`
        );
        console.log(response.data.articles);
        setArticleData(response.data.articles);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error(error.message);
      }
    };
    fetchData();
  }, [numArticles]);

  const loadMoreArticles = () => {
    setLoading(true);
    setNumArticles((prevNumArticles) => prevNumArticles + 10);
  };

  return {
    articleData,
    loadMoreArticles,
    loading,
  };
};

export default useFetchExternalData;
