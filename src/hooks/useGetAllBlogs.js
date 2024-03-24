import { useEffect, useState } from "react";
import axios from "axios";

const useGetAllBlogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responese = await axios.get(
          "http://localhost:5000/api/get-all-blogs"
        );
        setAllBlogs(responese.data.message);
        console.log(responese.data.message);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, []);

  return {
    allBlogs,
  };
};

export default useGetAllBlogs;
