import useAuthStore from "@/context/useAuthStore";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isCreating, setIsCreating] = useState(false);
  const { setToken, setPic } = useAuthStore();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleForm = async () => {
    setIsCreating(true);
    try {
      const result = await axios.post(
        "http://localhost:5000/api/v1/login",
        formData
      );
      setToken(result.data.token);
      setPic(result.data.existingUser.profilePic);
      setIsCreating(false);
      navigate("/");
      // console.log(result.data);
    } catch (error) {
      console.error("Error logging in:", error.message);
      setIsCreating(false);
    }
  };

  return { handleInputChange, handleForm, isCreating, formData };
};

export default useLogin;
