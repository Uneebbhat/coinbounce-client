import React from "react";
import { useParams } from "react-router-dom";
import useGetBlogByID from "@/hooks/useGetBlogByID";

const BlogDetailPage = () => {
  const { id } = useParams();
  const { blog } = useGetBlogByID(id);
  console.log(blog);

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="blog-detail-wrapper">
      <div className="image-wrapper h-[400px] object-contain overflow-hidden">
        <img src={blog.blogImg} alt={blog.blogTitle} />
      </div>
      <h2 className="md:text-5xl text-3xl font-bold mt-5 mb-5">
        {blog.blogTitle}
      </h2>

      <p className="text-[16px]">{blog.blogDesc}</p>
    </div>
  );
};

export default BlogDetailPage;
