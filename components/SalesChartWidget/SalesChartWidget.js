"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CategorySelector from "../commons/CategorySelector";
import Grid from "@mui/material/Grid";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "pon",
    uv: 150,
  },
  {
    name: "wt",
    uv: 160,
  },
  {
    name: "śr",
    uv: 180,
  },
  {
    name: "czw",
    uv: 230,
  },
  {
    name: "pt",
    uv: 220,
  },
  {
    name: "sob",
    uv: 200,
  },
  {
    name: "nd",
    uv: 180,
  },
];

const SalesChartWidget = () => {
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
          Wykres sprzedaży
          <img
            className="w-[18px] relative h-[18px] pl-2"
            alt=""
            src="feathericon--alertcircle.svg"
          />
        </Typography>
        <Grid spacing={2} display="inline">
          <Grid item xs={4} display="inline" pl={2}>
            <CategorySelector isSelected={true}>Obrót</CategorySelector>
          </Grid>
          <Grid item xs={4} display="inline" pl={2}>
            <CategorySelector isSelected={false}>
              Liczba sprzedanych sztuk
            </CategorySelector>
          </Grid>
        </Grid>

        <LineChart
          width={1150}
          height={300}
          data={data}
          margin={{
            top: 30,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </CardContent>
    </Card>
  );
};

export default SalesChartWidget;
