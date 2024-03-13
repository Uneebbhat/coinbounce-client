import React from "react";
import LoginForm from "../components/ui/LoginForm";

const LoginPage = () => {
  return (
    <>
      <div className="auth-wrapper flex col align-center justify-center">
        <h2>Login</h2>
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
