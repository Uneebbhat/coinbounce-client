import React from "react";
import CreateBlogForm from "../components/ui/CreateBlogForm";

const CreateBlogPage = () => {
  return (
    <>
      <div className="wrapper create-blog-wrapper flex col align-center justify-center">
        <h2>Create a blog</h2>
        <CreateBlogForm />
      </div>
    </>
  );
};

export default CreateBlogPage;
