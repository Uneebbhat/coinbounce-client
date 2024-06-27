import axios from "axios";
import { useState } from "react";

const useFetchNews = async () => {
  const apiKey = "4ec45d58d6f04f82b59be673e5baf490";
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  const [data, setData] = useState([]);

  try {
    const result = await axios.get(apiUrl);
    setData(result.data.articles);
    console.log(result.data.articles);
  } catch (e) {
    console.log("Error: ", e.message);
  }
  return { data };
};

export default useFetchNews;
