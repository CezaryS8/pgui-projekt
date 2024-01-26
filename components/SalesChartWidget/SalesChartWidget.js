"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CategorySelector from "../commons/CategorySelector";
import Grid from "@mui/material/Grid";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  {
    name: "pon",
    uv: 190,
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

const data2 = [
  {
    name: "pon",
    uv: 19220,
  },
  {
    name: "wt",
    uv: 16110,
  },
  {
    name: "śr",
    uv: 14480,
  },
  {
    name: "czw",
    uv: 2301,
  },
  {
    name: "pt",
    uv: 22023,
  },
  {
    name: "sob",
    uv: 20002,
  },
  {
    name: "nd",
    uv: 18000,
  },
]

const SalesChartWidget = () => {
  const textStyle = {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: "22px",
    letterSpacing: "0px",
    textAlign: "left",
  };

  const minValue = Math.min(...data.map((item) => item.uv));
  
  const obrot = "obrot";
  const liczbaSztuk = "liczbaSztuk";
  
  const [selectedCategory, setSelectedCategory] = React.useState(obrot);

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
          <div className="tooltip">
            <img
              className="w-[18px] relative h-[18px] pl-2"
              alt=""
              src="feathericon--alertcircle.svg"
            />
            <span className="tooltiptext">
              Wykres sprzedaży w ostatnim tygodniu z podziałem na obrót oraz
              liczbę sprzedanych sztuk
            </span>
          </div>
        </Typography>
        <Grid spacing={2} display="inline">
          <Grid item xs={4} display="inline" pl={2} onClick={() => setSelectedCategory(obrot)}>
            <CategorySelector isSelected={selectedCategory === obrot}>Obrót</CategorySelector>
          </Grid>
          <Grid item xs={4} display="inline" pl={2} onClick={() => setSelectedCategory(liczbaSztuk)}>
            <CategorySelector isSelected={selectedCategory === liczbaSztuk}>
              Liczba sprzedanych sztuk
            </CategorySelector>
          </Grid>
        </Grid>

        <LineChart
          width={1150}
          height={300}
          data={selectedCategory === 'obrot' ? data : data2}
          margin={{
            top: 30,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis domain={[minValue - minValue / 20, "auto"]} />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </CardContent>
    </Card>
  );
};

export default SalesChartWidget;
