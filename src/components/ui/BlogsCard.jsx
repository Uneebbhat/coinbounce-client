import React from "react";

const BlogsCard = ({ blog }) => {
  return (
    <>
      <div className="blog">
        <div className="blog-title">
          <h3>{blog.title}</h3>
        </div>
        <div className="blog-description">
          <p>{blog.description}</p>
        </div>
      </div>
    </>
  );
};

export default BlogsCard;
