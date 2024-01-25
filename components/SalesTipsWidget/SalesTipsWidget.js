import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Tip from "./Tip";

const SalesTipsWidget = () => {
    const textStyle = {
        fontFamily: "Poppins",
        fontWeight: 600,
        lineHeight: "22px",
        letterSpacing: "0px",
        textAlign: "left",
      };
      
    return (
        <Card>
            <CardContent  style={{ display: "flex", width: "800px"}}>
                <Typography variant="h5" component="div" sx={{ ...textStyle, fontWeight: "bold" }}>
                    Porady sprzedażowe
                </Typography>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop:"20px" }}>
                    <Typography variant="h6" component="div" sx={{ ...textStyle, fontWeight: "bold", marginTop: "15px", marginBottom: "10px" ,color: "#FBBC05" }}>
                        Strategia tygodnia:
                    </Typography>
                    <Tip tip="Personalizacja komunikacji z klientem" main={true}/>
                    <div style={{ marginTop: "10px" }}>
                        <Tip tip="Zbieranie danych o klientach" main={false}/>
                        <Tip tip="Segmentacja klientów"/>
                        <Tip tip="Spersonalizowane treści"/>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default SalesTipsWidget;