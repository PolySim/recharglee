import React from "react";
import { Barre, Hour, Battery } from "src/styled";
import ChangeHour from "src/containeur/Hour";

export default function TopBarre(): JSX.Element {
  return (
    <Barre>
      <img src={require("./wifi.png")} alt="wifi" />
      <div>HORIZON</div>
      <ChangeHour />
      <Battery>
        <span>100</span>%
      </Battery>
      <img src={require("./1.png")} alt="batterie" height={"100%"} />
    </Barre>
  );
}
