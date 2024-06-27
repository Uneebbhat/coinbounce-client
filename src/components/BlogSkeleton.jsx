import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const BlogSkeleton = () => {
  return (
    <>
      <Skeleton className="w-[150px] h-[20px] rounded" />
      <Skeleton className="w-[300px] h-[20px] rounded mt-2 mb-2" />
      <Skeleton className="w-[100%] h-[20px] rounded" />
    </>
  );
};

export default BlogSkeleton;
