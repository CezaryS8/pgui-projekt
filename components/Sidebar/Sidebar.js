// Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <div style={{ backgroundColor: "white", width: "60px", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", borderRight:"0.5px solid #80808050"}}>
      <img src="../../feathericon--menu.svg" alt="logo" height={20} weidth={20} />
      <div style={{
        height: "3px",
        width: "80px",
        background: "linear-gradient(to right, transparent 20%, #EEEEEE 50%, transparent 80%)",
        marginTop: "20px",
        marginBottom: "20px"
      }}></div>
      <div style={{
        width: "100%", // Adjust the size of the square container
        height: "60px", // Adjust the size of the square container
        backgroundColor: "#7247CC45", // Background color for the square
        overflow: "hidden", // Ensure the rounded corners are visible
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <img
          src="../../frame-17@2x.png"
          alt="logo"
          height={40} // Set the height to match the square container
          width={40} // Set the width to match the square container
          style={{ borderRadius: "18px", objectFit: "cover" }} // Adjust the radius to make the image a rounded square
        />
      </div>
    </div>
  );
};

export default Sidebar;
