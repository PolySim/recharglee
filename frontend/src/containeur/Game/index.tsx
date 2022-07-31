import React from "react";
import { Game } from "src/styled";
import IntroductionMessage from "src/composent/Left/PhoneBack/Game/FirstMessage";
import ImageSend from "src/containeur/Game/Image/index";
import DeliveredAt from "src/containeur/Game/delivered/index";
import EnterResponse from "src/containeur/Game/Response";
import ViewMessage from "src/composent/Left/PhoneBack/Game/MessageEnter";
import FinillyMessage from "src/containeur/Game/LastMessage";

export default function ViewGame({ height }: { height: number }): JSX.Element {
  return (
    <Game style={{ height: 0.6 * height }}>
      <IntroductionMessage />
      <ImageSend />
      <DeliveredAt num={1} />
      {localStorage.getItem("rep1") ? (
        <ViewMessage
          color="#56A526"
          message={localStorage.getItem("rep1") || ""}
        />
      ) : (
        <></>
      )}
      {localStorage.getItem("win") === null ? <EnterResponse /> : <></>}

      {localStorage.getItem("win") ? (
        <FinillyMessage win={true} />
      ) : localStorage.getItem("win") === "false" ? (
        <FinillyMessage win={false} />
      ) : (
        <></>
      )}
    </Game>
  );
}
