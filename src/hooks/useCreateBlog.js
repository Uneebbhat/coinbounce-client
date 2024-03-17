import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";

const useCreateBlog = () => {
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

      const response = await axios.post(
        "http://localhost:5000/api/create-blog",
        formDataToSend,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response.data);
      toast.success("Blog created successfully");
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

export default useCreateBlog;
