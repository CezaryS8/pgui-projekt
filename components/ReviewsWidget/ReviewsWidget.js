import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Grid";
import CategorySelector from "../commons/CategorySelector";
import DateDisplay from "../commons/DateDisplay";
import { Paper } from "@mui/material";
import Review from "./Review";

const ReviewsWidget = () => {
  const textStyle = {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: "22px",
    letterSpacing: "0px",
    textAlign: "left",
  };

  return (
    <Card sx={{ width: "100%", height: "100%" }}>
      <CardContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <Typography
            variant="h5"
            sx={{ ...textStyle, fontWeight: "bold", width: "25%" }}
          >
            Opinie kupujących
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={0.9}>
              <CategorySelector isSelected={true}>Wszystkie</CategorySelector>
            </Grid>
            <Grid item xs={0.9}>
              <CategorySelector isSelected={false}>Pozytywne</CategorySelector>
            </Grid>
            <Grid item xs={0.9}>
              <CategorySelector isSelected={false}>Negatywne</CategorySelector>
            </Grid>
          </Grid>
        </div>
        <Paper elevation={0} sx={{ padding: "10px", marginBottom: "15px" }}>
          <Review
            product="Laptop Apple MacBook AIR 13"
            review={4}
            date="15.01.2024"
          />
          <Review
            product="HyperX Alloy Origins Mechaniczna"
            review={5}
            date="01.01.2024"
          />
          <Review
            product="Logitech G203 LightSync Gaming Mouse"
            review={4}
            date="12.12.2023"
          />
          <Review
            product="iPhone 12 Pro 128GB Graphite"
            review={3}
            date="10.12.2023"
          />
          <Review
            product="Laptop Apple MacBook AIR 13"
            review={4}
            date="15.01.2024"
          />
        </Paper>
      </CardContent>
    </Card>
  );
};

export default ReviewsWidget;
