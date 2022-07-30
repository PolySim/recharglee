import React from "react";
import { Game } from "src/styled";
import IntroductionMessage from "./FirstMessage";
import ImageSend from "src/containeur/Game/Image/index";
import DeliveredAt from "src/containeur/Game/delivered/index";
import EnterResponse from "src/containeur/Game/Response";

export default function ViewGame({ height }: { height: number }): JSX.Element {
  return (
    <Game style={{ height: 0.6 * height }}>
      <IntroductionMessage />
      <ImageSend />
      <DeliveredAt num={1} />

      {localStorage.getItem("win") === null ? <EnterResponse /> : <></>}
    </Game>
  );
}
