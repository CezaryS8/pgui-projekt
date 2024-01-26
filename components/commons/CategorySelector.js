import React from "react";
import Typography from "@mui/material/Typography";

const CategorySelector = ({ isSelected, children }) => {
  const categoryStyle = {
    fontSize: "14px",
    color: isSelected ? "#7459D9" : "#D0D1D2",
    fontWeight: isSelected ? 600 : 600,
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
