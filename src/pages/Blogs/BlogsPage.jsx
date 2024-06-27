import useGetAllBlogs from "@/hooks/useGetAllBlogs";
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import UserAvatar from "@/components/UserAvatar";
import nothingShow from "@/assets/nothing.jpg";
import { Link } from "react-router-dom";
import BlogSkeleton from "@/components/BlogSkeleton";

const BlogsPage = () => {
  const { allBlogs, loading } = useGetAllBlogs();

  return (
    <div className="blogs-container flex flex-col items-center">
      <div className="blog-wrapper max-w-full w-[800px] mt-4 flex flex-col">
        {loading ? (
          <BlogSkeleton />
        ) : allBlogs.length > 0 ? (
          allBlogs.map((item) => (
            <div className="blog mb-[50px]" key={item._id}>
              <HoverCard>
                <HoverCardTrigger className="font-medium text-gray-800">
                  {item.name}
                </HoverCardTrigger>
                <HoverCardContent className="flex items-center gap-2">
                  <UserAvatar />
                  {item.name}
                </HoverCardContent>
              </HoverCard>
              <h2 className="md:text-3xl text-2xl font-semibold text-gray-900">
                {item.blogTitle}
              </h2>
              <p className="text-gray-800 blog-content">{item.blogDesc}</p>
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
