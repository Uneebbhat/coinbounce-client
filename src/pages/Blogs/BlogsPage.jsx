import useGetAllBlogs from "@/hooks/useGetAllBlogs";
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import nothingShow from "@/assets/nothing.jpg";
import { Link } from "react-router-dom";
import BlogSkeleton from "@/components/BlogSkeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useChangeTitle from "@/hooks/useChangeTitle";

const BlogsPage = () => {
  const { allBlogs, loading } = useGetAllBlogs();
  useChangeTitle("Coinbounce | See all amazing blogs");

  const getInitials = (name) => {
    if (!name) return "";
    const parts = name.split(" ");
    return parts.map((part) => part.charAt(0)).join("");
  };

  const createMarkup = (html) => {
    return { __html: html };
  };

  return (
    <div className="blogs-container flex flex-col items-center">
      <div className="blog-wrapper max-w-full w-[800px] mt-4 flex flex-col">
        {loading ? (
          <BlogSkeleton />
        ) : allBlogs.length > 0 ? (
          allBlogs.map((item) => (
            <div className="blog mb-[50px]" key={item._id}>
              <HoverCard>
                <HoverCardTrigger className="font-medium text-gray-800 underline">
                  {item.name}
                </HoverCardTrigger>
                <HoverCardContent className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={item.userImg} />
                    <AvatarFallback>{getInitials(item.name)}</AvatarFallback>
                  </Avatar>
                  {item.name}
                </HoverCardContent>
              </HoverCard>
              <Link to={`/blog/${item._id}`}>
                <h2 className="md:text-4xl text-xl font-bold text-gray-900">
                  {item.blogTitle}
                </h2>
                <div
                  className="text-[16px] text-gray-800 blog-content"
                  dangerouslySetInnerHTML={createMarkup(item.blogDesc)}
                />
              </Link>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center mt-4">
            <img src={nothingShow} alt="Nothing to show" width={350} />
            <p className="text-3xl font-bold">No blogs uploaded yet</p>
            <Link to="/create-blog" className="mt-2 underline font-semibold">
              Upload your blog
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;
