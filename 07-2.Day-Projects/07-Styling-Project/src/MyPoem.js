import React from "react";
import { styleSheet } from "./styles";

export default function MyPoem() {
  return (
    <div>
      <h1 style={{ color: styleSheet.color, fontSize: styleSheet.color }}>
        SNOW IN THE MORNING
      </h1>
      <div style={{ color: styleSheet.color, fontSize: "15px" }}>
        The couple is traveling up the mountain.<br></br>
        They have been traveling a long time to get to the mountain.<br></br>
        They left early with their son who strums<br></br>
        sweet songs with his fingers,<br></br>
        songs his mother sang when she was young,<br></br>
        singing sweetly like him for...
      </div>
    </div>
  );
}
