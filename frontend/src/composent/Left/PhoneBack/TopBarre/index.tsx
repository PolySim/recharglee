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
      {parseInt(battery) === 0 ? (
        <img src={require("./6.png")} alt="batterie" height={"100%"} />
      ) : parseInt(battery) <= 20 ? (
        <img src={require("./5.png")} alt="batterie" height={"100%"} />
      ) : parseInt(battery) <= 40 ? (
        <img src={require("./4.png")} alt="batterie" height={"100%"} />
      ) : parseInt(battery) <= 60 ? (
        <img src={require("./3.png")} alt="batterie" height={"100%"} />
      ) : parseInt(battery) <= 80 ? (
        <img src={require("./2.png")} alt="batterie" height={"100%"} />
      ) : (
        <img src={require("./1.png")} alt="batterie" height={"100%"} />
      )}
    </Barre>
  );
}
