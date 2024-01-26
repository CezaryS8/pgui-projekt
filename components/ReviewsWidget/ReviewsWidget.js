"use client";

import React, { useState } from "react";
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
  const all = "all";
  const positive = "positive";
  const negative = "negative";

  const [selectedCategory, setSelectedCategory] = useState(all);

  const textStyle = {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: "22px",
    letterSpacing: "0px",
    textAlign: "left",
  };

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
            Opinie kupujących
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
              onClick={() => setSelectedCategory(all)}
            >
              <CategorySelector
                isSelected={selectedCategory === all}
                cx={textStyle}
              >
                Wszystkie
              </CategorySelector>
            </Grid>
            <Grid
              item
              xs={4}
              display="inline"
              pl={2}
              onClick={() => setSelectedCategory(positive)}
            >
              <CategorySelector isSelected={selectedCategory === positive}>
                Pozytywne
              </CategorySelector>
            </Grid>
            <Grid
              item
              xs={4}
              display="inline"
              pl={2}
              onClick={() => setSelectedCategory(negative)}
            >
              <CategorySelector isSelected={selectedCategory === negative}>
                Negatywne
              </CategorySelector>
            </Grid>
          </Grid>
        </div>
        <div hidden={!(selectedCategory === all)}>
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
              review={1}
              date="10.12.2023"
            />
            <Review
              product="Laptop Apple MacBook AIR 13"
              review={4}
              date="15.01.2024"
            />
          </Paper>
        </div>
        <div hidden={!(selectedCategory === positive)}>
          <Paper elevation={0} sx={{ padding: "10px", marginBottom: "15px" }}>
            <Review
              product="Laptop Apple MacBook AIR 13"
              review={4}
              date="15.01.2024"
            />
            <Review
              product="iPhone 12 Pro 128GB Graphite"
              review={4}
              date="10.12.2023"
            />
            <Review
              product="HyperX Alloy Origins Mechaniczna"
              review={5}
              date="01.01.2024"
            />
            <Review
              product="Laptop Apple MacBook AIR 13"
              review={4}
              date="15.01.2024"
            />
            <Review
              product="Logitech G203 LightSync Gaming Mouse"
              review={5}
              date="12.12.2023"
            />
          </Paper>
        </div>
        <div hidden={!(selectedCategory === negative)}>
          <Paper elevation={0} sx={{ padding: "10px", marginBottom: "15px" }}>
            <Review
              product="Laptop Apple MacBook AIR 13"
              review={1}
              date="15.01.2024"
            />
            <Review
              product="HyperX Alloy Origins Mechaniczna"
              review={2}
              date="01.01.2024"
            />
            <Review
              product="iPhone 12 Pro 128GB Graphite"
              review={1}
              date="10.12.2023"
            />
            <Review
              product="Laptop Apple MacBook AIR 13"
              review={1}
              date="15.01.2024"
            />
            <Review
              product="Logitech G203 LightSync Gaming Mouse"
              review={1}
              date="12.12.2023"
            />
          </Paper>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewsWidget;
