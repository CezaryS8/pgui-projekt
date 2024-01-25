import React from "react";
import Order from "./Order";


const RankingTable = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th style={{ color: "#FBBC05" }}>Sprzedanych sztuk</th>
                    <th style={{ color: "#FBBC05" }}>Obrót</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><Order name="Laptop Lenovo IdeaPad 3 15,6&ldquo;" fontWeight="bold" /></td>
                    <td style={{ fontWeight: "bold" }}>12 534 sztuk</td>
                    <td style={{ fontWeight: "bold" }}>50 554 002 zł</td>
                </tr>
                <tr>
                    <td><Order name="Laptop Apple MacBook Air 13&ldquo; M1 8GB 256GB" /></td>
                    <td>12 001 sztuk</td>
                    <td>38 554 012 zł</td>
                </tr>
                <tr>
                    <td><Order name="Laptop Samsung Galaxy Book Go 15,6&ldquo; 4GB 128GB" /></td>
                    <td>9 000 sztuk</td>
                    <td>30 554 430 zł</td>
                </tr>
                <tr>
                    <td><Order name="Laptop Lenovo Thinkpad E15 15,6&ldquo; 8GB 256GB" /></td>
                    <td>8 021 sztuk</td>
                    <td>28 514 024 zł</td>
                </tr>
                <tr>
                <td><Order name="Laptop Lenovo Legion 5 Pro" /></td>
                    <td>7 534 sztuk</td>
                    <td>25 554 002 zł</td>
                </tr>
            </tbody>
        </table>
    );
}

export default RankingTable;