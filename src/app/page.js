import React from "react";
import { Grid, Paper } from "@mui/material";

import OrdersWidget from "./../../components/OrdersWidget/OrdersWidget";
import Sidebar from "./../../components/Sidebar/Sidebar";
import Navbar from "./../../components/Navbar/Navbar";
import QualityWidget from "../../components/QualityWidget/QualityWidget";
import ReviewsWidget from "../../components/ReviewsWidget/ReviewsWidget";
import SalesTipsWidget from "../../components/SalesTipsWidget/SalesTipsWidget";
// import SalesChartWidget from "./../../components/SalesChartWidget/SalesChartWidget";
// import QualityWidget from "./../../components/QualityWidget/QualityWidget";
// import RankingWidget from "./../../components/RankingWidget/RankingWidget";
// import ReviewsWidget from "./../../components/ReviewsWidget/ReviewsWidget";
// import SalesTipsWidget from "./../../components/SalesTipsWidget/SalesTipsWidget";
// import OrdersWidgetChat from "./../../components/OrdersWidgetChat";

const Dashboard = () => {
  return (
    <div>
      <div className=" max-w-screen-xl w-full mx-auto">
        <Sidebar />
        <div className="grid grid-cols-12 auto-rows-max gap-5 ">
          <div className="col-span-12">
            <Navbar />
          </div>

          <div className="col-span-4">
            <OrdersWidget />
          </div>
          <div className="col-span-8">
            <OrdersWidget />
          </div>
          <div className="col-span-4">
            <OrdersWidget />
          </div>
          <div className="col-span-8">
            <SalesTipsWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
