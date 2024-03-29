import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignupForm = () => {
  const {
    formData,
    handleSubmitForm,
    handleInputChange,
    handleFileChange,
    ToastContainer,
  } = useSignup();

  return (
    <>
      <ToastContainer theme="dark" />
      <form
        className="signup-form flex col"
        onSubmit={handleSubmitForm}
        autoComplete="off"
      >
        <input
          type="file"
          name="profilePic"
          id="profilePic"
          onChange={handleFileChange}
        />
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Mike Ethan"
          value={formData.username}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="mikeethan@gmail.com"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
        <p>
          Already have an account? <Link to={"/login"}>Login</Link>
        </p>
      </form>
    </>
  );
};

export default SignupForm;
