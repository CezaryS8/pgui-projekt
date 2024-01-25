import React from "react";
import Typography from "@mui/material/Typography";

const DateDisplay = ({ date }) => {
    return (
        <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
        {date}
        </Typography>
    );
    };
    
export default DateDisplay;