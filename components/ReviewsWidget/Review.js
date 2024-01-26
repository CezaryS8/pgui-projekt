import React from "react";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import DateDisplay from "./../commons/DateDisplay";

const Review = ({ product, review, date }) => {
  const textStyle = {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "22px",
    letterSpacing: "0px",
    textAlign: "left",
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <DateDisplay date={date} sx={{ ...textStyle }} />
      <Rating
        name="read-only"
        value={review}
        readOnly
        sx={{ ...textStyle, marginLeft: 2 }}
      />
      <Typography sx={{ ...textStyle, marginLeft: 2 }}>{product}</Typography>
    </div>
  );
};

export default Review;
