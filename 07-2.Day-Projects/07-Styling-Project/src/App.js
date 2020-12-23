import React from "react";
import MyPoem from "./MyPoem";
import { styleSheet } from "./styles";

const divStyle = { background: styleSheet.background };

export default function App() {
  return (
    <div style={divStyle}>
      <h1 style={{ color: "red" }}>Welcome To My Page</h1>
      <MyPoem />
      <footer
        style={{ color: styleSheet.color, fontSize: styleSheet.fontSize }}
      >
        Thank You Visiting My Page!
      </footer>
    </div>
  );
}
