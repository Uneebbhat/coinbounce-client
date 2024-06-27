import React from "react";
import notFound from "@/assets/not-found.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="not-found-wrapper h-[530px] flex flex-col items-center justify-center gap-[50px]">
        <h2 className="text-4xl font-bold">Page not found</h2>
        <img src={notFound} alt="Not Found" width={400} />
        <Link to="/" className="underline text-xl font-bold">
          Back to home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
