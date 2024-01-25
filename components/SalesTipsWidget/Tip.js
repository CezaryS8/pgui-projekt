import React from "react";
import Typography from "@mui/material/Typography";

const Tip = ({tip, main}) => {
    
    const textStyle = {
        fontFamily: "Poppins",
        lineHeight: "22px",
        letterSpacing: "0px",
        textAlign: "left",
    };

    return (
        <Typography variant="h6" component="div" sx={{ ...textStyle, fontWeight: main ? '600': '500' }}>
            {tip}
        </Typography>
    );
};

export default Tip;