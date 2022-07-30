import React, { useContext } from "react";
import { Barre, Battery } from "src/styled";
import ChangeHour from "src/containeur/Hour";
import { MainContext } from "src/context";

export default function TopBarre(): JSX.Element {
  const { battery } = useContext(MainContext);
  return (
    <Barre>
      <img src={require("./wifi.png")} alt="wifi" />
      <div>HORIZON</div>
      <ChangeHour />
      <Battery>
        <span>{battery}</span>%
      </Battery>
      <img src={require("./1.png")} alt="batterie" height={"100%"} />
    </Barre>
  );
}
