import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Grid";
import CategorySelector from "../commons/CategorySelector";

const ReviewsWidget = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Opinie kupujących
        </Typography>

        {/* Categories: Wszystkie, Pozytywne, Negatywne */}
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <CategorySelector isSelected={true}>
              Wszystkie
              <br />
              {"63"}
            </CategorySelector>
          </Grid>
          <Grid item xs={4}>
            <CategorySelector isSelected={false}>
              Pozytywne
              <br />
              {"532"}
            </CategorySelector>
          </Grid>
          <Grid item xs={4}>
            <CategorySelector isSelected={false}>
              Negatywne
              <br />
              {"22"}
            </CategorySelector>
          </Grid>
        </Grid>

        {/* Reviews: Data, Ratings, Product Name - all in one line */}
        <Typography variant="body2">
          2021-10-10 <Rating name="read-only" value={4} readOnly /> Laptop Apple MacBook AIR 13" M1 8GB 256GB
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewsWidget;
