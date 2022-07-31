import React from "react";
import { IconeR } from "src/styled";
import { IconeProps } from "src/type";

export default function Icone_Rechargle({
  image,
  height,
}: IconeProps): JSX.Element {
  return (
    <IconeR style={{ height: height }}>
      <img src={require(`./${image}`)} alt="icone rechargle" />
    </IconeR>
  );
}
