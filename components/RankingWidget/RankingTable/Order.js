import React from "react";
import Typography from "@mui/material/Typography";

const Order = ({ name, fontWeight = "normal" }) => {
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
