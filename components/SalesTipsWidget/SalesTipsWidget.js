import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Grid";
import CategorySelector from "../commons/CategorySelector";
import DateDisplay from "../commons/DateDisplay";
import { Paper } from "@mui/material";

const SalesTipsWidget = () => {
    return (
        <Card>
            <CardContent  style={{ display: "flex", width: "800px"}}>
                <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
                    Porady sprzedażowe
                </Typography>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop:"20px" }}>
                    <Typography variant="h6" component="div" sx={{ fontWeight: "bold", marginTop: "15px", color: "#FBBC05" }}>
                        Strategia tygodnia:
                    </Typography>
                    <Typography variant="h7" component="div" sx={{ fontWeight: "bold", marginTop: "15px" }}>
                        Personalizacja komunikacji z klientem
                    </Typography>
                    <div style={{ marginTop: "10px" }}>
                        <Typography variant="h7" component="div" sx={{ marginTop: "5px", textAlign: "center" }}>
                            Zbieranie danych o klientach
                        </Typography>
                        <Typography variant="h7" component="div" sx={{ marginTop: "5px", textAlign: "center"  }}>
                            Segmentacja klientów
                        </Typography>
                        <Typography variant="h7" component="div" sx={{ marginTop: "5px", textAlign: "center"  }}>
                            Spersonalizowane treści
                        </Typography>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default SalesTipsWidget;