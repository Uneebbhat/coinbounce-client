import { useState } from "react";
import axios from "axios";
import authStore from "../context/authStore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const [formData, setFormData] = useState({
    profilePic: null,
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { setSignupToken } = authStore();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profilePic: file });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if (
      !formData.profilePic ||
      !formData.username ||
      !formData.email ||
      !formData.password
    ) {
      toast.error("All fields are required");
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("profilePic", formData.profilePic);
      formDataToSend.append("username", formData.username);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("password", formData.password);

      const response = await axios.post(
        "http://localhost:5000/api/v1/signup",
        formDataToSend
      );

      setSignupToken(response.data.token);
      toast.success("Successfully signed up");
      console.log(response.data);
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
    handleFileChange,
    ToastContainer,
  };
};

export default useSignup;
