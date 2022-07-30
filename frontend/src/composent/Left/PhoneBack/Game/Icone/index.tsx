import React from "react";
import { IconeR } from "src/styled";
import { IconeProps } from "src/type";

export default function Icone_Rechargle({ image }: IconeProps): JSX.Element {
  return (
    <IconeR>
      <img src={require(`./${image}`)} alt="icone rechargle" />
    </IconeR>
  );
}
