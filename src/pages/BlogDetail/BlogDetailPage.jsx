import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useGetBlogByID from "@/hooks/useGetBlogByID";
import { Button } from "@/components/ui/button";
import axios from "axios";
import useAuthStore from "@/context/useAuthStore";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BlogDetailPage = () => {
  const { id } = useParams();
  const { blog } = useGetBlogByID(id);
  const navigate = useNavigate();
  const { getId } = useAuthStore();
  const currentUser = getId();

  const createMarkup = (html) => {
    return { __html: html };
  };

  if (!blog) {
    return <p>Loading...</p>;
  }

  const handleDeleteBlog = async (id) => {
    const response = await axios.delete(
      `http://localhost:5000/api/delete/${id}`
    );
    console.log(response.data);
    navigate("/blogs");
  };

  const handleEditBlog = async (id) => {
    const response = await axios.delete(`http://localhost:5000/api/edit/${id}`);
    console.log(response.data);
    navigate("/blogs");
  };

  return (
    <div className="blog-detail-wrapper">
      {blog.blogImg && (
        <div className="image-wrapper h-[400px] object-contain overflow-hidden">
          <img src={blog.blogImg} alt={blog.blogTitle} />
        </div>
      )}
      <Dialog>
        <DialogTrigger>
          {currentUser === blog.userId ? (
            <Button variant="destructive">Delete</Button>
          ) : (
            ""
          )}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-5">
              Are you absolutely sure to delete this blog ?
            </DialogTitle>
            <DialogDescription>
              <DialogClose asChild>
                <Button type="button" className="mr-4">
                  Close
                </Button>
              </DialogClose>
              <Button
                variant="destructive"
                onClick={() => handleDeleteBlog(id)}
              >
                Delete
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {currentUser === blog.userId ? (
        <Link to={`/edit/${id}`}>
          <Button className="ml-4">Edit</Button>
        </Link>
      ) : (
        ""
      )}

      <h2 className="md:text-5xl text-3xl font-bold mt-5 mb-5">
        {blog.blogTitle}
      </h2>

      <div
        className="text-[16px]"
        dangerouslySetInnerHTML={createMarkup(blog.blogDesc)}
      />
    </div>
  );
};

export default BlogDetailPage;
