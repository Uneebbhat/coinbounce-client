import { useState } from "react";

const togglePassword = () => {
  const [showPass, setShowPass] = useState(false);
  const togglePass = () => {
    setShowPass(!showPass);
  };
  return { showPass, togglePass };
};

export default togglePassword;
