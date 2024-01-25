import { Card, CardContent, Typography, Grid, Paper } from "@mui/material";
import React from "react";
import CategorySelector from "../commons/CategorySelector";

import laptop_icon from "../../public/laptop-icon.png";
import Order from "./RankingTable/Order";
import RankingTable from "./RankingTable/RankingTable";

const RankingWidget = () => {
    return (
        <Card>
            <CardContent>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', width: "25%" }}>
                        Ranking ofert
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <CategorySelector isSelected={true}>
                                Najczęściej kupowane
                            </CategorySelector>
                        </Grid>
                        <Grid item xs={2}>
                            <CategorySelector isSelected={false}>
                                Najrzadziej kupowane
                            </CategorySelector>
                        </Grid>
                    </Grid>
                </div>
                <RankingTable/>
            </CardContent>
        </Card>
    );
};

export default RankingWidget;