import { useEffect } from "react";

const useChangeTitle = (newTitle) => {
  useEffect(() => {
    document.title = newTitle;
  });
};

export default useChangeTitle;
