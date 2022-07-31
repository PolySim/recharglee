import React from "react";
import { Message } from "src/styled";
import Icone_Rechargle from "src/composent/Left/PhoneBack/Game/Icone";
import { ViewMessageProps } from "src/type";

export default function ViewMessage({
  color,
  message,
}: ViewMessageProps): JSX.Element {
  return (
    <div style={{ display: "flex", height: "6.25%", marginTop: "4%" }}>
      <Message style={{ color: color }}>{message}</Message>
      <Icone_Rechargle image="iconeInvit.png" height="100%" />
    </div>
  );
}
