import React from "react";
import BlogsCard from "../components/ui/BlogsCard";
import useGetAllBlogs from "../hooks/useGetAllBlogs";

const BlogsPage = () => {
  const { allBlogs } = useGetAllBlogs();
  return (
    <>
      <div className="wrapper blogs-wrapper">
        <h2>Blogs</h2>
        {allBlogs.length > 0 ? (
          <div className="blogs-card-wrapper flex col">
            {allBlogs.map((blog) => (
              <BlogsCard blog={blog} />
            ))}
          </div>
        ) : (
          <div>
            <p style={{ textAlign: "center" }}>There's nothing here yet</p>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogsPage;
