import React from "react";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/UserAvatar";
import { MobileNavbar } from "@/components/MobileNavbar.jsx";
import useAuthStore from "@/context/useAuthStore";

const Navbar = () => {
  const routes = [
    {
      label: "Home",
      route: "/",
    },
    {
      label: "Crypto",
      route: "/crypto",
    },
    {
      label: "Blogs",
      route: "/blogs",
    },
    {
      label: "Create blog",
      route: "/create-blog",
    },
  ];

  const { token } = useAuthStore();
  return (
    <>
      <header className="header flex items-center justify-between border-b-2 py-4">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Coinbounce" />
          </Link>
        </div>
        <div className="navbar-wrapper hidden md:flex items-center gap-2">
          <nav className="navbar">
            <ul className="flex items-center">
              {routes.map((route) => (
                <Link to={route.route} key={route.route}>
                  <Button variant="ghost">{route.label}</Button>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
        <div className="user-avatar flex items-center gap-3">
          {token ? (
            <>
              <div className="flex items-center md:hidden">
                <MobileNavbar />
              </div>
              <UserAvatar />
            </>
          ) : (
            <Button>
              <Link to="/login">Login</Link>
            </Button>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
