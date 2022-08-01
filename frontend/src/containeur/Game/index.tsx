import React from "react";
import { Game } from "src/styled";
import IntroductionMessage from "src/composent/Left/PhoneBack/Game/FirstMessage";
import ImageSend from "src/containeur/Game/Image/index";
import DeliveredAt from "src/containeur/Game/delivered/index";
import EnterResponse from "src/containeur/Game/Response";
import ViewMessage from "src/composent/Left/PhoneBack/Game/MessageEnter";
import FinillyMessage from "src/containeur/Game/LastMessage";
import DisplayIndice from "src/composent/Left/PhoneBack/Game/Indice";

export default function ViewGame({ height }: { height: number }): JSX.Element {
  return (
    <Game style={{ height: 0.6 * height }}>
      <IntroductionMessage />
      <ImageSend />
      <DeliveredAt num={1} />

      {Object.keys(localStorage)
        .sort()
        .map((keyName) => {
          if (keyName.includes("delivered2")) {
            return;
          } else if (keyName.includes("numero")) {
            return;
          } else if (keyName.includes("win")) {
            if (localStorage.getItem("win")) {
              return <FinillyMessage key={keyName} win={true} />;
            } else {
              return <FinillyMessage key={keyName} win={false} />;
            }
          } else if (keyName.includes("responseWin")) {
            return (
              <ViewMessage
                key={keyName}
                color="#56A526"
                message={localStorage.getItem(keyName) || ""}
                perte="0"
              />
            );
          } else if (keyName.includes("responseFalse")) {
            return (
              <ViewMessage
                key={keyName}
                color="#d63232"
                message={localStorage.getItem(keyName) || ""}
                perte={keyName.slice(-2)}
              />
            );
          } else if (keyName.includes("indice")) {
            return (
              <DisplayIndice
                key={keyName}
                value={localStorage.getItem(keyName) || ""}
              />
            );
          } else if (keyName.includes("messageLaugh")) {
            return (
              <DisplayIndice key={keyName} value="Ah Ah ! Not this one 😯" />
            );
          } else if (keyName.includes("battery")) {
            return;
          }
        })}

      {Object.keys(localStorage).some((keyName) => keyName.includes("win")) ? (
        <></>
      ) : (
        <EnterResponse />
      )}
    </Game>
  );
}
