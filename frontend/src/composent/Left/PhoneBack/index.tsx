import React from "react";
import { Back } from "src/styled";
import TopBarre from "src/composent/Left/PhoneBack/TopBarre/index";
import NameBarre from "src/composent/Left/PhoneBack/NameBarre/index";
import ViewGame from "src/containeur/Game";

export default function PhoneBack({ height }: { height: number }): JSX.Element {
  return (
    <Back style={{ width: `${height * 0.35}px` }}>
      <TopBarre />
      <NameBarre />
      <ViewGame height={height} />
    </Back>
  );
}
