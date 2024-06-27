import React from "react";
import Cards from "@/components/Cards";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Cards />
      </div>
    </div>
  );
};

export default HomePage;
