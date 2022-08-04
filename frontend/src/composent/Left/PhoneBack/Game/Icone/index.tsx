import React from "react";
import { IconsR } from "src/styled";
import { IconsProps as IconsProps } from "src/type";

export default function Icone_Rechargle({
  image,
  height,
}: IconsProps): JSX.Element {
  return (
    <IconsR style={{ height: height }}>
      <img src={require(`./${image}`)} alt="icone rechargle" />
    </IconsR>
  );
}
