import axios from "axios";
import { useEffect, useState } from "react";

const useGetBlogByID = (id) => {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/get-blog/${id}`
        );
        setBlog(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setBlog(null);
      }
    };

    fetchData();
  }, [id]);

  return { blog };
};

export default useGetBlogByID;
