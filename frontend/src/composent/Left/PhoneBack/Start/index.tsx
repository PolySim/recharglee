import React, { useContext } from "react";
import { MainContext } from "src/context";
import { Start } from "src/styled";

export default function StartGame(): JSX.Element {
  const { setStart } = useContext(MainContext);
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
