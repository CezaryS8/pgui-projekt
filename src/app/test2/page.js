import React from "react";
import { Grid, Paper } from "@mui/material";

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

const Dashboard = () => {
  return (
    <div>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <ReviewsWidget />
          <OrdersWidget />
          <SalesChartWidget />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
