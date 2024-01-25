import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const OrdersWidget = () => {
  const textStyle = {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: "22px",
    letterSpacing: "0px",
    textAlign: "left",
  };

  const OrderItem = ({ label, value }) => (
    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
      <Typography sx={textStyle}>{label}</Typography>
      <Typography sx={textStyle}>{value}</Typography>
    </Box>
  );

  return (
    <Card sx={{ width: "100%", height: "100%" }}>
      <CardContent>
        <Typography
          variant="h5"
          sx={{
            ...textStyle,
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "28px",
            mb: 2,
          }}
        >
          Zamówienia
          <img
            className="w-[18px] relative h-[18px] pl-2"
            alt=""
            src="feathericon--alertcircle.svg"
          />
        </Typography>

        <OrderItem label="Nieopłacone" value="63" />
        <OrderItem label="Niewysłane" value="532" />
        <OrderItem label="Zwroty" value="22" />
      </CardContent>
    </Card>
  );
};

export default OrdersWidget;
