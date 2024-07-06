import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useEditBlog = (initialBlogData) => {
  const [blogData, setBlogData] = useState(initialBlogData || {});
  const [isCreating, setIsCreating] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (value, name) => {
    setBlogData({ ...blogData, [name]: value });
  };

  const handleForm = async () => {
    setIsCreating(true);
    try {
      const response = await axios.put(
        `http://localhost:5000/api/edit/${blogData.id}`,
        blogData
      );
      console.log(response.data);
      navigate("/blogs");
    } catch (error) {
      console.error("Error updating blog:", error);
    } finally {
      setIsCreating(false);
    }
  };

  return {
    blogData,
    isCreating,
    handleInputChange,
    handleForm,
  };
};

export default useEditBlog;
