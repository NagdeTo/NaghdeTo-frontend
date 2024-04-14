import React from "react";

export default function Decorative() {
  return (
    <div
      style={{
        zIndex: "-1",
        backgroundColor: "rgb(88,129,87,0.6)",
        width: "110rem",
        height: "70rem",
        borderRadius: "6rem",
        position: "absolute",
        right: "7rem",
        bottom: "0rem",
        opacity: "0.7",
        transform: "rotate(-130deg)",
        boxShadow: "0 0 40px gray",
        left: "-72rem",
      }}
    ></div>
  );
}
