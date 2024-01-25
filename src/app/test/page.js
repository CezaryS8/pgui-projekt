import React from "react";
import ReviewsWidget from "../../../components/ReviewsWidget/ReviewsWidget";
import SalesTipsWidget from "../../../components/SalesTipsWidget/SalesTipsWidget";
import RankingWidget from "../../../components/RankingWidget/RankingWidget";
// import SalesChartWidget from "./../../components/SalesChartWidget/SalesChartWidget";
// import QualityWidget from "./../../components/QualityWidget/QualityWidget";
// import RankingWidget from "./../../components/RankingWidget/RankingWidget";
// import ReviewsWidget from "./../../components/ReviewsWidget/ReviewsWidget";
// import SalesTipsWidget from "./../../components/SalesTipsWidget/SalesTipsWidget";
// import OrdersWidgetChat from "./../../components/OrdersWidgetChat";

const Dashboard = () => {
  return (
    <div>
      <div>
        <ReviewsWidget />
      </div>
      <div>
        <SalesTipsWidget />
      </div>
      <div>
        <RankingWidget />
      </div>
    </div>
  );
};

export default Dashboard;
