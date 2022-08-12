import React from "react";
import { Message, Perte } from "src/styled";
import Icone_Rechargle from "src/composent/Left/PhoneBack/Game/Icone";
import { ViewMessageProps } from "src/type";

export default function ViewMessage({
  color,
  message,
  perte,
  last,
}: ViewMessageProps): JSX.Element {
  const lasted =
    last && !Object.keys(localStorage).some((key) => key.includes("win"));

  return (
    <>
      <div style={{ display: "flex", height: "6.25%", marginTop: "4%" }}>
        <Message style={{ color: color }}>{message}</Message>
        <Icone_Rechargle image="iconeInvit.png" height="100%" />
      </div>

      {perte === "0" ? (
        <></>
      ) : (
        <Perte
          style={{ animation: lasted ? "perte 2s forwards" : "none" }}
        >{`-${perte} %`}</Perte>
      )}
    </>
  );
}
