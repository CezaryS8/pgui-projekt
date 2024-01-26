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
    fontSize: "14px",
  };

  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "0px",
      }}
    >
      <CardContent
        style={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        <Typography
          display="inline"
          variant="h5"
          sx={{
            ...textStyle,
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "28px",
            // mb: 2,
          }}
        >
          Porady sprzedażowe
          <div className="tooltip">
            <img
              className="w-[18px] relative h-[18px] pl-2"
              alt=""
              src="feathericon--alertcircle.svg"
            />
            <span className="tooltiptext">
              Porady dotyczące poprawy sprzedaży wraz ze strategią tygodnia
            </span>
          </div>
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // marginTop: "20px",
          }}
        >
          <Typography
            component="div"
            sx={{
              ...textStyle,
              fontWeight: "600",
              marginBottom: "10px",
              color: "#FBBC05",
              fontSize: "14px",
              lineHeight: "22px",
            }}
          >
            Strategia tygodnia:
          </Typography>
          <Tip tip="Personalizacja komunikacji z klientem" main={true} />
          <br />
          <Tip tip="Zbieranie danych o klientach" main={false} />
          <Tip tip="Segmentacja klientów" />
          <Tip tip="Spersonalizowane treści" />
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesTipsWidget;
