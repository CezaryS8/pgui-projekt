import React from "react";
import Typography from "@mui/material/Typography";

const Order = ({ name, fontWeight = "normal" }) => {
  const textStyle = {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "22px",
    letterSpacing: "0px",
    textAlign: "left",
  };

  return (
    <div style={{ display: "flex", alignItems: "center", width: "315px" }}>
      <img
        src={"../../rectangle-34@2x.png"}
        alt="logo"
        height={30}
        weidth={30}
      />
      <Typography
        variant="body2"
        sx={{
          ...textStyle,
          fontWeight: { fontWeight },
          marginLeft: 1,
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        {name}
      </Typography>
    </div>
  );
};

export default Order;
