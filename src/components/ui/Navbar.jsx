import React from "react";
import logo from "../../assets/logo.svg";
import AvatarMenu from "./AvatarMenu";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import authStore from "../../context/authStore";

const Navbar = () => {
  const { token } = authStore();
  return (
    <>
      <header className="header">
        <div className="upper-nav flex align-center justify-between">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="Coinbounce" />
            </Link>
          </div>
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/">Home</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/create-blog">Create blog</Link>
              </li>
            </ul>
          </nav>
          <div className="avatar-menu">
            {token ? (
              <AvatarMenu />
            ) : (
              <Link to={"/signup"}>
                <Button variant="contained">Signup</Button>
              </Link>
            )}
          </div>
        </div>
        <div className="lower-nav">
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/">Home</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/create-blog">Create blog</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
