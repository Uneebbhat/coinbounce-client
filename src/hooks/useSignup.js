import axios from "axios";
import { useState } from "react";
import useAuthStore from "@/context/useAuthStore.js";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const [formData, setFormData] = useState({
    profilePic: null,
    name: "",
    email: "",
    password: "",
  });
  const [isCreating, setIsCreating] = useState(false);
  const [userData, setUserData] = useState("");
  const { setToken, setPic } = useAuthStore();
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePic: e.target.files[0] });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleForm = async () => {
    setIsCreating(true);
    try {
      const formDataWithFile = new FormData();
      formDataWithFile.append("profilePic", formData.profilePic);
      formDataWithFile.append("name", formData.name);
      formDataWithFile.append("email", formData.email);
      formDataWithFile.append("password", formData.password);

      const result = await axios.post(
        "http://localhost:5000/api/v1/signup",
        formDataWithFile,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setToken(result.data.token);
      setUserData(result.data.newUser.profilePic);
      setPic(result.data.newUser.profilePic);
      setIsCreating(false);
      // console.log(userData);
      navigate("/");
      // console.log(result.data);
    } catch (error) {
      console.error("Error signing up:", error.message);
      setIsCreating(false);
    }
  };

  return {
    handleFileChange,
    handleInputChange,
    handleForm,
    isCreating,
    userData,
  };
};

export default useSignup;
