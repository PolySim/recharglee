import React from "react";
import { FirstMessage } from "src/styled";
import Icone_Rechargle from "src/composent/Left/PhoneBack/Game/Icone/index";

export default function IntroductionMessage(): JSX.Element {
  return (
    <div style={{ display: "flex" }}>
      <Icone_Rechargle image="iconeRechargle.png" height="100%" />
      <FirstMessage>Hi ! Do u know who's that ? ⬇️⬇️</FirstMessage>
    </div>
  );
}
