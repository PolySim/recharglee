import React from "react";
import { Game } from "src/styled";
import IntroductionMessage from "./FirstMessage";
import ImageSend from "src/containeur/Game/Image";
import DeliveredAt from "src/containeur/Game/delivered";

export default function ViewGame({ height }: { height: number }): JSX.Element {
  return (
    <Game style={{ height: 0.6 * height }}>
      <IntroductionMessage />
      <ImageSend />
      <DeliveredAt num={1} />
    </Game>
  );
}
