import React from "react";
import Typography from "@mui/material/Typography";

const CategorySelector = ({ isSelected, children }) => {
  const categoryStyle = {
    fontSize: "0.875rem",
    color: isSelected ? "#6200ea" : "rgba(0, 0, 0, 0.54)",
    fontWeight: isSelected ? 600 : 400,
    cursor: "pointer",
    "&:hover": {
      color: "#6200ea",
    },
  };

  return (
    <Typography display="inline" variant="body2" style={categoryStyle}>
      {children}
    </Typography>
  );
};

export default CategorySelector;
