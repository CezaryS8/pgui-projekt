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

const all = "all";
const positive = "positive";
const negative = "negative";

const ReviewsWidget = () => {
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
        <Card>
            <CardContent>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "15px",
                    }}
                >
                    <Typography variant="h5" sx={{ ...textStyle, fontWeight: "bold", width: "25%" }}>
                        Opinie kupujących
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={1} onClick={() => setSelectedCategory(all)}>
                            <CategorySelector
                                isSelected={selectedCategory === all}
                            >
                                Wszystkie
                            </CategorySelector>
                        </Grid>
                        <Grid item xs={1} onClick={() => setSelectedCategory(positive)}>
                            <CategorySelector
                                isSelected={selectedCategory === positive}

                            >
                                Pozytywne
                            </CategorySelector>
                        </Grid>
                        <Grid item xs={1} onClick={() => setSelectedCategory(negative)}>
                            <CategorySelector
                                isSelected={selectedCategory === negative}
                            >
                                Negatywne
                            </CategorySelector>
                        </Grid>
                    </Grid>
                </div>
                <Paper elevation={0} sx={{ padding: "10px", marginBottom: "15px" }}>
                    <Review product="Laptop Apple MacBook AIR 13" review={4} date="15.01.2024" />
                    <Review product="HyperX Alloy Origins Mechaniczna" review={5} date="01.01.2024" />
                    <Review product="Logitech G203 LightSync Gaming Mouse" review={4} date="12.12.2023" />
                    <Review product="iPhone 12 Pro 128GB Graphite" review={3} date="10.12.2023" />
                    <Review product="Laptop Apple MacBook AIR 13" review={4} date="15.01.2024" />
                </Paper>
            </CardContent>
        </Card >
    );
};

export default ReviewsWidget;
