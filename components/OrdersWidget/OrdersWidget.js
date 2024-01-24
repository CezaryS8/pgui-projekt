import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const OrdersWidget = () => {
  return (
    // <Grid container justifyContent="center" spacing={2}>
    //   <Grid item xs={12} sm={6} md={4}>
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Zamówienia
        </Typography>
        <Typography variant="body2">
          Nieopłacone
          <br />
          {"63"}
        </Typography>
        <Typography variant="body2">
          Niewysłane
          <br />
          {"532"}
        </Typography>
        <Typography variant="body2">
          Zwroty
          <br />
          {"22"}
        </Typography>
      </CardContent>
    </Card>
    //   </Grid>
    // </Grid>
  );
};

export default OrdersWidget;
