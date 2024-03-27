import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const useUpdateBlog = () => {
  const { blogId } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    blogPic: null,
  });

  const token = Cookies.get("token");
  // console.log(token);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, blogPic: file });
  };

  const handleSubmitBLog = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description) {
      toast.error("All fields are required");
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("blogPic", formData.blogPic);
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);

      const response = await axios.put(
        `http://localhost:5000/api/edit-blog/${blogId}`,
        formDataToSend,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response.data);
      toast.success("Blog updated successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return {
    formData,
    handleInputChange,
    handleSubmitBLog,
    ToastContainer,
    handleFileChange,
  };
};

export default useUpdateBlog;
