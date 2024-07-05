import useAuthStore from "@/context/useAuthStore";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useEditBlog = () => {
  const [blogData, setBlogData] = useState({
    blogTitle: "",
    blogDesc: "",
    blogImg: null,
  });
  const [isCreating, setIsCreating] = useState(false);
  const { token } = useAuthStore();
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setBlogData({ ...blogData, blogImg: e.target.files[0] });
  };

  const handleInputChange = (value, name) => {
    setBlogData({ ...blogData, [name]: value });
  };

  const handleForm = async () => {
    setIsCreating(true);
    try {
      const blogDataWithFile = new FormData();
      blogDataWithFile.append("blogImg", blogData.blogImg);
      blogDataWithFile.append("blogTitle", blogData.blogTitle);
      blogDataWithFile.append("blogDesc", blogData.blogDesc);

      const result = await axios.post(
        `http://localhost:5000/api/edit/${id}`,
        blogDataWithFile,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token,
          },
        }
      );
      setIsCreating(false);
      setBlogData(result.data);
      navigate("/blogs");
      console.log(result.data);
    } catch (error) {
      console.error("Error signing up:", error.message);
      setIsCreating(false);
    }
  };

  return {
    blogData,
    setBlogData,
    isCreating,
    handleFileChange,
    handleInputChange,
    handleForm,
  };
};

export default useEditBlog;
