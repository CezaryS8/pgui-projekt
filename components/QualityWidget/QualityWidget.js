"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

// Create styled components using MUI system
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345, // Set the max width as needed
  backgroundColor: "white", // Set the background color as needed
}));

const ScoreTypography = styled(Typography)({
  color: "#7459D9",
  textAlign: "center",
  fontFamily: "Poppins",
  fontSize: "30px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "46px",
});

const CategoryTypography = styled(Typography)({
  color: "#FBBC05",
  textAlign: "center",
  fontFamily: "Poppins",
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "28px",
});

const RangeTypography = styled(Typography)({
  color: "#D0D1D2",
  textAlign: "center",
  fontFamily: "Poppins",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "28px",
});

export default function CustomCard() {
  const textStyle = {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: "22px",
    letterSpacing: "0px",
    textAlign: "left",
  };

  const AspectItem = ({ label, value }) => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mt: 2,
        ml: 3,
        mr: 10,
      }}
    >
      <Typography sx={textStyle}>{label}</Typography>
      <Typography sx={textStyle}>{value}</Typography>
    </Box>
  );
  return (
    <Card sx={{ width: "100%", height: "100%", borderRadius: "0px" }}>
      <CardContent>
        <Typography
          variant="h5"
          sx={{
            ...textStyle,
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "28px",
            mb: 2,
          }}
        >
          Jakość sprzedaży
          <img
            className="w-[18px] relative h-[18px] pl-2"
            alt=""
            src="feathericon--alertcircle.svg"
            title="Ocena sprzedaży biorąca pod uwagę różne aspekty."
          />
        </Typography>

        <ScoreTypography variant="h1" component="div">
          85/100
        </ScoreTypography>
        <CategoryTypography variant="h3">Kategoria B</CategoryTypography>
        <RangeTypography variant="h4">(80–89)</RangeTypography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
          }}
        >
          <Typography sx={textStyle}>Najgorsze aspekty:</Typography>
        </Box>

        <AspectItem label="Komunikacja" value="15/20" />
        <AspectItem label="Szybkość obsługi" value="18/25" />
        <AspectItem label="Znajomość produktu" value="18/25" />
      </CardContent>
    </Card>
  );
}

// const CustomBox = styled(Box)(({ theme }) => ({
//   backgroundColor: theme.palette.background.paper,
//   padding: theme.spacing(2),
//   borderRadius: theme.shape.borderRadius,
//   [theme.breakpoints.up("sm")]: {
//     padding: theme.spacing(3),
//   },
// }));

// const QualityWidget = () => {
//   const textStyle = {
//     fontFamily: "Poppins",
//     fontSize: "14px",
//     fontWeight: 600,
//     lineHeight: "22px",
//     letterSpacing: "0px",
//     textAlign: "left",
//   };

//   const OrderItem = ({ label, value }) => (
//     <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
//       <Typography sx={textStyle}>{label}</Typography>
//       <Typography sx={textStyle}>{value}</Typography>
//     </Box>
//   );

//   return (
//     <Card sx={{ width: "100%", height: "100%" }}>
//       <CardContent>
//         <Typography
//           variant="h5"
//           sx={{
//             ...textStyle,
//             fontWeight: 700,
//             fontSize: "18px",
//             lineHeight: "28px",
//             mb: 2,
//           }}
//         >
//           Jakość sprzedaży
//           <img
//             className="w-[18px] relative h-[18px] pl-2"
//             alt=""
//             src="feathericon--alertcircle.svg"
//           />
//         </Typography>
//         <Typography variant="h3">85/100</Typography>

//         <OrderItem label="Nieopłacone" value="63" />
//         <OrderItem label="Niewysłane" value="532" />
//         <OrderItem label="Zwroty" value="22" />
//       </CardContent>
//     </Card>

// <CustomBox sx={{ width: "100%", height: "100%" }}>
//   <Stack spacing={2}>
//     <Stack
//       direction="row"
//       justifyContent="space-between"
//       alignItems="center"
//     >
//       <Typography variant="h6" component="div">
//         Jakość sprzedaży
//       </Typography>
//       <Rating name="read-only" value={4} readOnly />
//     </Stack>

//     <Typography variant="h3" component="div" gutterBottom>
//       85/100
//     </Typography>

//     <Typography
//       variant="h4"
//       component="div"
//       gutterBottom
//       sx={{ opacity: 0.7 }}
//     >
//       Kategoria B
//     </Typography>

//     <Typography
//       variant="subtitle1"
//       component="div"
//       gutterBottom
//       sx={{ opacity: 0.7 }}
//     >
//       (80-89)
//     </Typography>

//     <Box>
//       <Typography variant="body1" component="div">
//         Najgorsze aspekty:
//       </Typography>
//       <Stack direction="column" spacing={1}>
//         <Stack direction="row" justifyContent="space-between">
//           <Typography>Komunikacja</Typography>
//           <Typography>15/20</Typography>
//         </Stack>
//         <Stack direction="row" justifyContent="space-between">
//           <Typography>Szybkość obsługi</Typography>
//           <Typography>18/25</Typography>
//         </Stack>
//         <Stack direction="row" justifyContent="space-between">
//           <Typography>Znajomość produktu</Typography>
//           <Typography>18/25</Typography>
//         </Stack>
//       </Stack>
//     </Box>
//   </Stack>
// </CustomBox>
//   );
// };

// export default QualityWidget;
