import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const useGetBlogById = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/blog/${blogId}`
        );
        console.log(response.data.message);
        setBlog(response.data.message);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };
    fetchData();
  }, [blogId]);

  return {
    blog,
    blogId,
  };
};

export default useGetBlogById;
