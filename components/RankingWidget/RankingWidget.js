"use client";

import { Card, CardContent, Typography, Grid, Paper } from "@mui/material";
import React from "react";
import CategorySelector from "../commons/CategorySelector";

import Order from "./RankingTable/Order";
import RankingTable from "./RankingTable/RankingTable";

const RankingWidget = () => {
  const textStyle = {
    fontFamily: "Poppins",
    fontWeight: 600,
    lineHeight: "22px",
    letterSpacing: "0px",
    textAlign: "left",
  };

  const most = "most";
  const least = "least";

  const [selectedCategory, setSelectedCategory] = React.useState(most);

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
          <Typography variant="h5" sx={{ fontWeight: "bold", width: "25%" }}>
            Ranking ofert
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={2} onClick={() => setSelectedCategory(most)}>
              <CategorySelector
                isSelected={selectedCategory === most}
                cx={textStyle}
              >
                Najczęściej kupowane
              </CategorySelector>
            </Grid>
            <Grid
              item
              xs={2}
              onClick={() => setSelectedCategory(least)}
              cx={textStyle}
            >
              <CategorySelector isSelected={selectedCategory === least}>
                Najrzadziej kupowane
              </CategorySelector>
            </Grid>
          </Grid>
        </div>
        <div hidden={!(selectedCategory === most)}>
          <RankingTable category={most} />
        </div>
        <div hidden={!(selectedCategory === least)}>
          <RankingTable category={least} />
        </div>
      </CardContent>
    </Card>
  );
};

export default RankingWidget;
