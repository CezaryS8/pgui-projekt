import React from "react";
import Typography from "@mui/material/Typography";

const Tip = ({ tip, main }) => {
  const textStyle = {
    fontFamily: "Poppins",
    textSize: "14px",
    lineHeight: "22px",
    letterSpacing: "0px",
    textAlign: "left",
  };

  return (
    <Typography
      component="div"
      sx={{
        ...textStyle,
        fontWeight: "600",
        fontSize: "14px",
        lineHeight: "22px",
        fontWeight: main ? "600" : "400",
      }}
    >
      {tip}
    </Typography>
  );
};

export default Tip;
