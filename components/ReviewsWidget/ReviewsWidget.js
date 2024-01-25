import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Grid";
import CategorySelector from "../commons/CategorySelector";
import DateDisplay from "../commons/DateDisplay";
import { Paper } from "@mui/material";

const ReviewsWidget = () => {
    return (
        <Card>
            <CardContent>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', width: "25%" }}>
                        Opinie kupujących
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={0.9}>
                            <CategorySelector isSelected={true}>
                                Wszystkie
                            </CategorySelector>
                        </Grid>
                        <Grid item xs={0.9}>
                            <CategorySelector isSelected={false}>
                                Pozytywne
                            </CategorySelector>
                        </Grid>
                        <Grid item xs={0.9}>
                            <CategorySelector isSelected={false}>
                                Negatywne
                            </CategorySelector>
                        </Grid>
                    </Grid>
                </div>
                <Paper elevation={0} sx={{ padding: "10px", marginBottom: "15px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <DateDisplay date="15.01.2024" />
                        <Rating name="read-only" value={4} readOnly sx={{ marginLeft: 2 }} />
                        <Typography variant="body2" sx={{ fontWeight: 'medium', marginLeft: 2 }}>
                            Laptop Apple MacBook AIR 13" M1 8GB 256GB
                        </Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <DateDisplay date="01.01.2024" />
                        <Rating name="read-only" value={5} readOnly sx={{ marginLeft: 2 }} />
                        <Typography variant="body2" sx={{ fontWeight: 'medium', marginLeft: 2 }}>
                            HyperX Alloy Origins Mechaniczna
                        </Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <DateDisplay date="12.12.2023" />
                        <Rating name="read-only" value={4} readOnly sx={{ marginLeft: 2 }} />
                        <Typography variant="body2" sx={{ fontWeight: 'medium', marginLeft: 2 }}>
                            Logitech G203 LightSync Gaming Mouse
                        </Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <DateDisplay date="10.12.2023" />
                        <Rating name="read-only" value={3} readOnly sx={{ marginLeft: 2 }} />
                        <Typography variant="body2" sx={{ fontWeight: 'medium', marginLeft: 2 }}>
                            iPhone 12 Pro 128GB Graphite
                        </Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <DateDisplay date="09.12.2023" />
                        <Rating name="read-only" value={4} readOnly sx={{ marginLeft: 2 }} />
                        <Typography variant="body2" sx={{ fontWeight: 'medium', marginLeft: 2 }}>
                            Laptop Apple MacBook AIR 13" M1 8GB 256GB
                        </Typography>
                    </div>
                </Paper>

            </CardContent>
        </Card>
    );
};

export default ReviewsWidget;
