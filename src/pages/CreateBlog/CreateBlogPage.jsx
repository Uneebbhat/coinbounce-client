import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label.jsx";
import useCreateBlog from "@/hooks/useCreateBlog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card.jsx";
import useChangeTitle from "@/hooks/useChangeTitle";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreateBlogPage = () => {
  const { blogData, isCreating, handleInputChange, handleForm } =
    useCreateBlog();

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6] }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }],
        ["link", "image"],
        ["clean"],
        ["code"],
      ],
    },
  };

  useChangeTitle("Coinbounce | Create a blog to amaze the world");

  return (
    <>
      <div className="create-blog-container max-w-full w-[800px] mx-auto my-[40px]">
        <Card className="h-[450px]">
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
                onChange={(e) =>
                  handleInputChange(e.target.value, e.target.name)
                }
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="blogTitle">Title</Label>
              <Input
                type="text"
                id="blogTitle"
                name="blogTitle"
                placeholder="Enter blog title"
                onChange={(e) =>
                  handleInputChange(e.target.value, e.target.name)
                }
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="blogDesc">Description</Label>
              <ReactQuill
                className="mb-12 max-h-[100px] h-[100%]"
                theme="snow"
                id="blogDesc"
                name="blogDesc"
                placeholder="Enter blog description"
                onChange={(value) => handleInputChange(value, "blogDesc")}
                modules={modules}
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
