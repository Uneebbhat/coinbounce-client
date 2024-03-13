import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const LoginForm = () => {
  const { formData, handleSubmitForm, handleInputChange, ToastContainer } =
    useLogin();
  return (
    <>
      <ToastContainer theme="dark" />
      <form
        className="signup-form flex col"
        onSubmit={handleSubmitForm}
        autoComplete="off"
      >
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
          Don't have an account? <Link to={"/signup"}>Signup</Link>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
