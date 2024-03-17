import React from "react";
import Button from "@mui/material/Button";
import useCreateBlog from "../../hooks/useCreateBlog";

const CreateBlogForm = () => {
  const { formData, handleInputChange, handleSubmitBLog } = useCreateBlog();
  return (
    <>
      <form className="create-blog-form flex col" onSubmit={handleSubmitBLog}>
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

export default CreateBlogForm;
