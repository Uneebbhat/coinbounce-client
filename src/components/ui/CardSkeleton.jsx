import React from "react";
import Skeleton from "@mui/material/Skeleton";

const CardSkeleton = () => {
  return (
    <Skeleton
      variant="rectangular"
      sx={{ bgcolor: "grey.800" }}
      width={345}
      height={371.23}
    />
  );
};

export default CardSkeleton;
