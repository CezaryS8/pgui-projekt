import React from "react";
import Order from "./Order";

const RankingTable = ({ category }) => {
  const textStyle = {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: "22px",
    letterSpacing: "0px",
    textAlign: "left",
  };

  const mostTable = (
    <tbody>
      <tr style={textStyle}>
        <td>
          <Order name="Laptop Lenovo IdeaPad 3 15,6&ldquo;" fontWeight="bold" />
        </td>
        <td style={{ fontWeight: "bold" }}>12 534 sztuk</td>
        <td style={{ fontWeight: "bold" }}>50 554 002 zł</td>
      </tr>
      <tr style={textStyle}>
        <td>
          <Order name="Laptop Apple MacBook Air 13&ldquo; M1 8GB 256GB" />
        </td>
        <td>12 001 sztuk</td>
        <td>38 554 012 zł</td>
      </tr>
      <tr style={textStyle}>
        <td>
          <Order name="Laptop Samsung Galaxy Book Go 15,6&ldquo; 4GB 128GB" />
        </td>
        <td>9 000 sztuk</td>
        <td>30 554 430 zł</td>
      </tr>
      <tr style={textStyle}>
        <td>
          <Order name="Laptop Lenovo Thinkpad E15 15,6&ldquo; 8GB 256GB" />
        </td>
        <td>8 021 sztuk</td>
        <td>28 514 024 zł</td>
      </tr>
      <tr style={textStyle}>
        <td>
          <Order name="Laptop Lenovo Legion 5 Pro" />
        </td>
        <td>7 534 sztuk</td>
        <td>25 554 002 zł</td>
      </tr>
    </tbody>
  );

  const leastTable = (
    <tbody>
      <tr>
        <td>
          <Order
            name="Laptop Apple MacBook Air 13&ldquo; M1 8GB 256GB"
            fontWeight="bold"
          />
        </td>
        <td style={{ fontWeight: "bold" }}>301 sztuk</td>
        <td style={{ fontWeight: "bold" }}>20 012 zł</td>
      </tr>
      <tr>
        <td>
          <Order name="Laptop Samsung Galaxy Book Go 15,6&ldquo; 4GB 128GB" />
        </td>
        <td>200 sztuk</td>
        <td>20 430 zł</td>
      </tr>
      <tr>
        <td>
          <Order name="Laptop Lenovo IdeaPad 3 15,6&ldquo;" />
        </td>
        <td>514 sztuk</td>
        <td>55 002 zł</td>
      </tr>
      <tr>
        <td>
          <Order name="Laptop Lenovo Legion 5 Pro" />
        </td>
        <td>1 201 sztuk</td>
        <td>201 002 zł</td>
      </tr>
      <tr>
        <td>
          <Order name="Laptop Lenovo Thinkpad E15 15,6&ldquo; 8GB 256GB" />
        </td>
        <td>1 321 sztuk</td>
        <td>224 024 zł</td>
      </tr>
    </tbody>
  );

  const table = category === "most" ? mostTable : leastTable;

  return (
    <table>
      <thead>
        <tr>
          <th>{}</th>
          <th style={{ color: "#FBBC05" }}>Sprzedanych sztuk</th>
          <th style={{ color: "#FBBC05" }}>Obrót</th>
        </tr>
      </thead>
      {table}
    </table>
  );
};

export default RankingTable;
