import axios from "axios";
import { useEffect, useState } from "react";

const useGetAllBlogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = "http://localhost:5000/api/get-blogs";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(apiUrl);
        setAllBlogs(result.data.data);
        setLoading(false);
        console.log(result.data);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { allBlogs, loading };
};

export default useGetAllBlogs;
