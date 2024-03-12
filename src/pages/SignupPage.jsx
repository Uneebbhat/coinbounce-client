import React from "react";
import SignupForm from "../components/ui/SignupForm";

const SignupPage = () => {
  return (
    <>
      <div className="signup-wrapper flex col align-center justify-center">
        <h2>Signup</h2>
        <SignupForm />
      </div>
    </>
  );
};

export default SignupPage;
