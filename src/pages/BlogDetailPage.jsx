import React from "react";
import useGetBlogById from "../hooks/useGetBlogById";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

const BlogDetailPage = () => {
  const { blog, blogId } = useGetBlogById();

  if (!blog) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px", fontSize: "35px" }}>
        Loading...
      </div>
    );
  }

  return (
    <>
      <div className="wrapper blog-detail-page">
        <div className="detail-wrapper">
          <h1>{blog.title}</h1>
          <Link to={`/edit-blog/${blogId}`}>
            <Button variant="contained" style={{ marginTop: "10px" }}>
              <EditIcon style={{ marginRight: "10px" }} />
              Edit
            </Button>
          </Link>
          <hr />
          <p>{blog.description}</p>
        </div>
      </div>
    </>
  );
};

export default BlogDetailPage;
