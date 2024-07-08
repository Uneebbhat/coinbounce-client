import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useEditProfile = (initialProfileData, id) => {
  const [formData, setFormData] = useState(initialProfileData || {});
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleForm = async () => {
    setIsCreating(true);
    setError(null);
    try {
      const response = await axios.put(
        `http://localhost:5000/api/profile/edit/${id}`,
        formData
      );
      console.log(response.data);
      navigate("/blogs");
    } catch (error) {
      console.error("Error updating profile:", error);
      setError(error.response?.data?.message || "Error updating profile");
    } finally {
      setIsCreating(false);
    }
  };

  return {
    formData,
    isCreating,
    error,
    handleInputChange,
    handleForm,
  };
};

export default useEditProfile;
