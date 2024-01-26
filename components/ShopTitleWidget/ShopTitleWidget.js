"use client";
import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const ShopTitleWidget = () => {
  const textStyle = {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: "22px",
    letterSpacing: "0px",
    textAlign: "left",
  };
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardContent sx={{ display: "flex", alignItems: "center" }}>
        <Box
          className="w-10 h-10 px-4"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <img
            className="h-full"
            src="amazon_square.png"
            alt="shop"
            style={{ borderRadius: "16.875px", objectFit: "cover" }}
          />
        </Box>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Noto Sans",
            letterSpacing: "0px",
            textAlign: "left",
            fontWeight: 700,
            fontSize: "26px",
            lineHeight: "40px",
          }}
        >
          Amazon.com
        </Typography>
        <Box
          className="w-10 h-10 px-4"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <img
            className="h-full"
            src="plus_menu.svg"
            alt="shop"
            style={{ borderRadius: "16.875px", objectFit: "cover" }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ShopTitleWidget;
