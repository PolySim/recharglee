import React, { useContext } from "react";
import { MainContext } from "src/context";
import { Game } from "src/styled";
import IntroductionMessage from "src/composent/Left/PhoneBack/Game/FirstMessage";
import ImageSend from "src/containeur/Game/Image/index";
import DeliveredAt from "src/containeur/Game/delivered/index";
import EnterResponse from "src/containeur/Game/Response";
import ViewMessage from "src/composent/Left/PhoneBack/Game/MessageEnter";
import FinillyMessage from "src/containeur/Game/LastMessage";
import DisplayIndice from "src/composent/Left/PhoneBack/Game/Indice";
import { AnimWait } from "src/styled";
import Icone_Rechargle from "src/composent/Left/PhoneBack/Game/Icone";

export default function ViewGame({ height }: { height: number }): JSX.Element {
  const { displayWait, message, lang, round } = useContext(MainContext);
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
            if (localStorage.getItem(keyName) === "true") {
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
                last={false}
              />
            );
          } else if (keyName.includes("responseFalse")) {
            return (
              <ViewMessage
                key={keyName}
                color="#d63232"
                message={localStorage.getItem(keyName) || ""}
                perte={keyName.slice(-2)}
                last={parseInt(keyName.slice(0, 1)) === round - 1}
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
              <DisplayIndice
                key={keyName}
                value={
                  lang === "us"
                    ? "Bahah ! Not this one 😯"
                    : "Bahah ! Pas cette fois 😯"
                }
              />
            );
          } else if (keyName.includes("messageWait")) {
            return (
              <DisplayIndice
                key={keyName}
                value={
                  lang === "us"
                    ? "Maybe next time 😉"
                    : "Peut être la prochaine fois 😉"
                }
              />
            );
          } else if (keyName.includes("battery")) {
            return;
          }
        })}

      {displayWait ? (
        <>
          <ViewMessage color="#000" perte="0" message={message} last={false} />
          <div
            style={{
              display: "flex",
              position: "relative",
              height: "10.5%",
              marginTop: "6%",
            }}
          >
            <Icone_Rechargle image="iconeRechargle.png" height="67%" />
            <AnimWait>
              <span>⚫</span>
              <span>⚫</span>
              <span>⚫</span>
            </AnimWait>
          </div>
        </>
      ) : (
        <></>
      )}

      {Object.keys(localStorage).some((keyName) => keyName.includes("win")) ? (
        <></>
      ) : displayWait ? (
        <></>
      ) : (
        <EnterResponse />
      )}
    </Game>
  );
}
