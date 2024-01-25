import React from "react";
import { Grid, Paper } from "@mui/material";

import OrdersWidget from "./../../components/OrdersWidget/OrdersWidget";
import Sidebar from "./../../components/Sidebar/Sidebar";
import Navbar from "./../../components/Navbar/Navbar";
import QualityWidget from "../../components/QualityWidget/QualityWidget";
import ReviewsWidget from "../../components/ReviewsWidget/ReviewsWidget";
import SalesTipsWidget from "../../components/SalesTipsWidget/SalesTipsWidget";
import SalesChartWidget from "../../components/SalesChartWidget/SalesChartWidget";
import RankingWidget from "../../components/RankingWidget/RankingWidget";
// import SalesChartWidget from "./../../components/SalesChartWidget/SalesChartWidget";
// import QualityWidget from "./../../components/QualityWidget/QualityWidget";
// import RankingWidget from "./../../components/RankingWidget/RankingWidget";
// import ReviewsWidget from "./../../components/ReviewsWidget/ReviewsWidget";
// import SalesTipsWidget from "./../../components/SalesTipsWidget/SalesTipsWidget";
// import OrdersWidgetChat from "./../../components/OrdersWidgetChat";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div style={{ width: "100%" }}>
        <Navbar />
        <div>
          <div>
            <OrdersWidget />
          </div>
          <div>
            <QualityWidget />
          </div>
          <div>
            <ReviewsWidget />
          </div>
          <div>
            <SalesChartWidget />
          </div>
          <div>
            <RankingWidget />
          </div>
          <div>
            <SalesTipsWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
