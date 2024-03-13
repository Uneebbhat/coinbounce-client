import { useState } from "react";
import axios from "axios";
import authStore from "../context/authStore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { setLoginToken } = authStore();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("All fields are required");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/login",
        formData
      );

      setLoginToken(response.data.token);
      toast.success("Successfully signed up");
      navigate("/");
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          toast.error(error.response.data.message);
        } else {
          toast.error("An error occurred. Please try again later.");
        }
      } else {
        toast.error("An error occurred. Please check your network connection.");
      }
    }
  };

  return {
    formData,
    handleSubmitForm,
    handleInputChange,
    ToastContainer,
  };
};

export default useLogin;
