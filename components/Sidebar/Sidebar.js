"use client";
import React, { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState("amazon.png");

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "60px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRight: "0.5px solid #80808050",
      }}
    >
      <img
        src="../../feathericon--menu.svg"
        alt="logo"
        height={20}
        weidth={20}
        style={{ marginTop: "20px", marginBottom: "2px" }}
      />
      <div
        style={{
          height: "3px",
          width: "80px",
          background:
            "linear-gradient(to right, transparent 20%, #EEEEEE 50%, transparent 80%)",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      ></div>
      <SidebarItem icon="amazon.png" active={active} setActive={setActive} />
      <SidebarItem icon="allegro.png" active={active} setActive={setActive} />
      <SidebarItem icon="olx.png" active={active} setActive={setActive} />
    </div>
  );
};

const SidebarItem = ({ icon, active, setActive }) => {
  const handleClick = () => {
    setActive(icon);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        backgroundColor: active === icon ? "#7247CC45" : "white",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <img
        src={icon}
        alt="logo"
        height={40}
        width={40}
        style={{ borderRadius: "18px", objectFit: "cover" }}
      />
    </div>
  );
};

export default Sidebar;
