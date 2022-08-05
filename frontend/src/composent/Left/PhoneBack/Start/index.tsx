import React from "react";
import { Start } from "src/styled";

export default function StartGame({
  setStart,
}: {
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  return (
    <Start>
      <h2>Rechargle</h2>
      <div onClick={() => setStart(false)}>
        <img src={require("./Polygon1.png")} alt="Polygon" />
        <p>PLAY</p>
      </div>
    </Start>
  );
}
