"use client";

import { Card, CardContent, Typography, Grid } from "@mui/material";
import React from "react";
import CategorySelector from "../commons/CategorySelector";
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
    <Card sx={{ width: "100%", height: "100%", borderRadius: "0px" }}>
      <CardContent>
        <div
          style={{
            marginBottom: "15px",
          }}
        >
          <Typography
            display="inline"
            variant="h5"
            sx={{
              ...textStyle,
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: "28px",
              mb: 2,
            }}
          >
            Ranking ofert
            <img
              className="w-[18px] relative h-[18px] pl-2"
              alt=""
              src="feathericon--alertcircle.svg"
            />
          </Typography>
          <Grid spacing={2} display="inline">
            <Grid
              item
              xs={4}
              display="inline"
              pl={2}
              onClick={() => setSelectedCategory(most)}
            >
              <CategorySelector
                isSelected={selectedCategory === most}
                cx={textStyle}
              >
                Najczęściej kupowane
              </CategorySelector>
            </Grid>
            <Grid
              item
              xs={4}
              display="inline"
              pl={2}
              onClick={() => setSelectedCategory(least)}
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
