import React, { useContext } from "react";
import { MainContext } from "src/context";
import { Lose } from "src/styled";

export default function ViewLose(): JSX.Element {
  const { setFinish } = useContext(MainContext);
  return (
    <Lose>
      <div onClick={() => setFinish(false)}>
        <img src={require("./back.png")} alt="back" />
      </div>
      <h2>Rechargle</h2>
      <div>
        <img src={require("./fantoms.png")} alt="fantoms" />
        <img src={require("./fantoms.png")} alt="fantoms" />
        <img src={require("./fantoms.png")} alt="fantoms" />
      </div>
      <div>{localStorage.getItem("battery")}%</div>
      <a
        href="https://twitter.com/intent/tweet?text=Can%20you%20be%20better%20than%20me%20today%20?%20Challenge%20me%20now%20!%20🔋%20🔌%20➡️%20https://www.rechargle.com"
        target="_blank"
      >
        <img src={require("./share.png")} alt="share" />
        <p>SHARE</p>
      </a>
    </Lose>
  );
}
