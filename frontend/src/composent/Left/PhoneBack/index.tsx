import React from "react";
import { Back } from "src/styled";
import TopBarre from "./TopBarre/index";
import NameBarre from "./NameBarre";
import ViewGame from "./Game";

export default function PhoneBack({ height }: { height: number }): JSX.Element {
  return (
    <Back style={{ width: `${height * 0.35}px` }}>
      <TopBarre />
      <NameBarre />
      <ViewGame height={height} />
    </Back>
  );
}
