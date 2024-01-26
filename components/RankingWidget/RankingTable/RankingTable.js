import React from "react";
import Order from "./Order";

const RankingTable = ({ category }) => {
  const textStyle = {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "22px",
    letterSpacing: "0px",
    textAlign: "left",
  };

  const cellStyle = {
    padding: "0 55px", // Adjust the padding to control the gap between columns
    textAlign: "center", // Center the text
  };

  const headerCellStyle = {
    ...cellStyle,
    fontSize: "14px",
    color: "#FBBC05",
    fontFamily: "Poppins",
    fontWeight: 600,
    lineHeight: "22px",
  };

  const getTableBody = (orders) => (
    <tbody>
      {orders.map((order, index) => (
        <tr key={index} style={textStyle}>
          <td style={textStyle}>
            <Order
              name={order.name}
              fontWeight={index === 0 ? "bold" : "normal"}
            />
          </td>
          <td
            style={{
              ...cellStyle,
              fontWeight: index === 0 ? "bold" : "normal",
            }}
          >
            {order.quantity}
          </td>
          <td
            style={{
              ...cellStyle,
              fontWeight: index === 0 ? "bold" : "normal",
            }}
          >
            {order.amount}
          </td>
        </tr>
      ))}
    </tbody>
  );

  const orders = category === "most" ? mostOrders : leastOrders; // Define your mostOrders and leastOrders arrays
  const tableBody = getTableBody(orders);

  return (
    <table>
      <thead>
        <tr>
          <th style={{ ...headerCellStyle, textAlign: "left" }}></th>
          <th style={headerCellStyle}>Sprzedanych sztuk</th>
          <th style={headerCellStyle}>Obrót</th>
        </tr>
      </thead>
      {tableBody}
    </table>
  );
};

export default RankingTable;

const mostOrders = [
  {
    name: "Laptop Lenovo IdeaPad 3 15,6",
    quantity: "12 534 szt.",
    amount: "50 554 002 zł",
    fontWeight: "bold",
  },
  {
    name: "Laptop Apple MacBook Air 13 M1 8GB 256GB",
    quantity: "12 001 szt.",
    amount: "38 554 012 zł",
  },
  {
    name: "Laptop Samsung Galaxy Book Go 15 64GB 128GB",
    quantity: "9 000 szt.",
    amount: "30 554 430 zł",
  },
  {
    name: "Laptop Lenovo Thinkpad E15 15,6 8GB 256GB",
    quantity: "8 021 szt.",
    amount: "28 514 024 zł",
  },
  {
    name: "Laptop Lenovo Legion 5 Pro",
    quantity: "7 534 szt.",
    amount: "25 554 002 zł",
  },
];

const leastOrders = [
  {
    name: "Laptop Apple MacBook Air 13 M1 8GB 256GB",
    quantity: "301 szt.",
    amount: "20 012 zł",
    fontWeight: "bold",
  },
  {
    name: "Laptop Samsung Galaxy Book Go 15,6 4GB 128GB",
    quantity: "200 szt.",
    amount: "20 430 zł",
  },
  {
    name: "Laptop Lenovo IdeaPad 3 15,6",
    quantity: "514 szt.",
    amount: "55 002 zł",
  },
  {
    name: "Laptop Lenovo Legion 5 Pro",
    quantity: "1 201 szt.",
    amount: "201 002 zł",
  },
  {
    name: "Laptop Lenovo Thinkpad E15 15,6 8GB 256GB",
    quantity: "1 321 szt.",
    amount: "224 024 zł",
  },
];
