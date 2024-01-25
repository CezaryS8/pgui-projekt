"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";

const CustomBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(3),
  },
}));

const QualityWidget = () => {
  return (
    <CustomBox sx={{ width: "100%", height: "100%" }}>
      <Stack spacing={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" component="div">
            Jakość sprzedaży
          </Typography>
          <Rating name="read-only" value={4} readOnly />
        </Stack>

        <Typography variant="h3" component="div" gutterBottom>
          85/100
        </Typography>

        <Typography
          variant="h4"
          component="div"
          gutterBottom
          sx={{ opacity: 0.7 }}
        >
          Kategoria B
        </Typography>

        <Typography
          variant="subtitle1"
          component="div"
          gutterBottom
          sx={{ opacity: 0.7 }}
        >
          (80-89)
        </Typography>

        <Box>
          <Typography variant="body1" component="div">
            Najgorsze aspekty:
          </Typography>
          <Stack direction="column" spacing={1}>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Komunikacja</Typography>
              <Typography>15/20</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Szybkość obsługi</Typography>
              <Typography>18/25</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Znajomość produktu</Typography>
              <Typography>18/25</Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </CustomBox>
  );
};

export default QualityWidget;
