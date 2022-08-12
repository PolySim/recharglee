import React, { useContext } from "react";
import { MainContext } from "src/context";
import { FirstMessage } from "src/styled";
import Icone_Rechargle from "src/composent/Left/PhoneBack/Game/Icone/index";

export default function IntroductionMessage(): JSX.Element {
  const { lang } = useContext(MainContext);
  return (
    <div style={{ display: "flex" }}>
      <Icone_Rechargle image="iconeRechargle.png" height="100%" />
      {lang === "us" ? (
        <FirstMessage>
          Hi ! Do u know who's linked to that photo ? ⬇️⬇️
        </FirstMessage>
      ) : (
        <FirstMessage>Hey ! A qui ça te fait penser ?? ⬇️⬇️</FirstMessage>
      )}
    </div>
  );
}
