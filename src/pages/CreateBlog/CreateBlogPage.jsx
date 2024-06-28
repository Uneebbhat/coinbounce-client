import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label.jsx";
import useCreateBlog from "@/hooks/useCreateBlog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card.jsx";
import { Textarea } from "@/components/ui/textarea";

const CreateBlogPage = () => {
  const {
    blogData,
    isCreating,
    handleFileChange,
    handleInputChange,
    handleForm,
  } = useCreateBlog();
  return (
    <>
      <div className="create-blog-container max-w-full w-[500px] mx-auto my-[40px]">
        <Card>
          <CardContent className="grid gap-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="blogImg">Blog Image</Label>
              <Input
                type="file"
                id="blogImg"
                name="blogImg"
                onChange={handleFileChange}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="blogTitle">Title</Label>
              <Input
                type="text"
                id="blogTitle"
                name="blogTitle"
                placeholder="Enter blog title"
                onChange={handleInputChange}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="blogDesc">Description</Label>
              <Textarea
                type="text"
                id="blogDesc"
                name="blogDesc"
                placeholder="Enter blog description"
                onChange={handleInputChange}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button
              className="w-full"
              type="submit"
              onClick={handleForm}
              disabled={isCreating || !blogData.blogTitle || !blogData.blogDesc}
            >
              {isCreating ? "Please wait" : "Create blog"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default CreateBlogPage;
