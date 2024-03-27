import React from "react";
import useUpdateBlog from "../../hooks/useUpdateBlog";
import Button from "@mui/material/Button";

const UpdateBlogForm = () => {
  const {
    formData,
    handleInputChange,
    handleSubmitBLog,
    ToastContainer,
    handleFileChange,
  } = useUpdateBlog();
  return (
    <>
      <ToastContainer theme="dark" />
      <form className="create-blog-form flex col" onSubmit={handleSubmitBLog}>
        <input
          type="file"
          name="blogPic"
          id="blogPic"
          onChange={handleFileChange}
        />
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          placeholder="Enter description"
          value={formData.description}
          onChange={handleInputChange}
        ></textarea>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </>
  );
};

export default UpdateBlogForm;
