import React from "react";
import { Grid, Paper } from "@mui/material";
import Card from "@mui/material/Card";

import OrdersWidget from "../../../components/OrdersWidget/OrdersWidget";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/Navbar/Navbar";
import QualityWidget from "../../../components/QualityWidget/QualityWidget";
import ReviewsWidget from "../../../components/ReviewsWidget/ReviewsWidget";
import SalesChartWidget from "../../../components/SalesChartWidget/SalesChartWidget";
// import QualityWidget from "./../../components/QualityWidget/QualityWidget";
// import RankingWidget from "./../../components/RankingWidget/RankingWidget";
// import ReviewsWidget from "./../../components/ReviewsWidget/ReviewsWidget";
// import SalesTipsWidget from "./../../components/SalesTipsWidget/SalesTipsWidget";
// import OrdersWidgetChat from "./../../components/OrdersWidgetChat";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import RankingWidget from "../../../components/RankingWidget/RankingWidget";
import SalesTipsWidget from "../../../components/SalesTipsWidget/SalesTipsWidget";
import ShopTitleWidget from "../../../components/ShopTitleWidget/ShopTitleWidget";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div style={{ width: "100%" }}>
        <Box backgroundColor="black">
          {/* HEADER */}
          <Box gridColumn="span 12" gridRow="span 1">
            <Navbar />
          </Box>

          {/* GRID & CHARTS */}
          <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="94px"
            gap="2px"
            p="2px"
            backgroundColor="#D0D1D2"
          >
            {/* ROW 1 */}
            <Box
              gridColumn="span 3"
              gridRow="1 / 2"
              backgroundColor="#7247CC45"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <ShopTitleWidget />
            </Box>
            <Box
              gridColumn="span 3"
              gridRow="2 / 4"
              backgroundColor="#7247CC45"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <OrdersWidget />
            </Box>
            <Box
              gridColumn="span 3"
              gridRow="4 / 8"
              backgroundColor="#7247CC45"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <QualityWidget />
            </Box>
            {/* 2a and 2b in the same column */}
            <Box
              gridColumn="span 9"
              gridRow="1 / span 7"
              backgroundColor="#7247CC45"
              display="flex"
              flexDirection="column"
            >
              <Box
                flexGrow={4}
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderBottom="2px solid black"
              >
                <SalesChartWidget />
              </Box>
              <Box
                flexGrow={3}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <RankingWidget />
              </Box>
            </Box>

            {/* ROW 2 */}
            <Box
              gridColumn="span 5"
              gridRow="span 2"
              backgroundColor="#7247CC45"
            >
              <ReviewsWidget />
            </Box>
            <Box
              gridColumn="span 7"
              gridRow="span 2"
              backgroundColor="#7247CC45"
            >
              <SalesTipsWidget />
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Dashboard;
