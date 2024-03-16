import React from "react";
import Button from "@mui/material/Button";

const CreateBlogForm = () => {
  return (
    <>
      <form className="create-blog-form flex col">
        <input type="text" name="title" id="title" placeholder="Enter title" />
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          placeholder="Enter description"
        ></textarea>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </>
  );
};

export default CreateBlogForm;
