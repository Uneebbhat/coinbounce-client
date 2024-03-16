import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const useCreateBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    blogPic: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitBLog = async (e) => {
    e.preventDefault();

    const { title, description } = formData;

    if (!title || !description) {
      toast.error("All fields are required");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/create-blog",
        formData
      );
      console.log(response.data);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return {
    formData,
    handleInputChange,
    handleSubmitBlog,
  };
};

export default useCreateBlog;
