import React from "react";
import Icone_Rechargle from "src/composent/Left/PhoneBack/Game/Icone";
import { Indice } from "src/styled";

export default function DisplayIndice({
  value,
}: {
  value: string;
}): JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        height: "10%",
        marginTop: "4%",
      }}
    >
      <Icone_Rechargle image="iconeRechargle.png" height="67%" />
      <Indice>{value}</Indice>
    </div>
  );
}
