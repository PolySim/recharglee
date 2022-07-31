import React from "react";
import { LastMessage } from "src/styled";
import Icone_Rechargle from "src/composent/Left/PhoneBack/Game/Icone";
import DeliveredAt from "src/containeur/Game/delivered";

export default function FinillyMessage({ win }: { win: boolean }): JSX.Element {
  return (
    <>
      <div
        style={{
          display: "flex",
          position: "relative",
          height: "27.4%",
          marginTop: "4%",
        }}
      >
        <Icone_Rechargle image="iconeRechargle.png" height="25%" />
        {win ? (
          <LastMessage>
            <p>
              Awesome, You’ve completed this Rechargle before the phone run’s
              out !! Come back tomorrow and discover a new image 😉
            </p>
          </LastMessage>
        ) : (
          <LastMessage>
            <p>
              Oh no, your phone’s die 😢 ! Come back tomorrow to discover what
              was the answer of the day and try again !!
            </p>
          </LastMessage>
        )}
      </div>
      <DeliveredAt num={2} />
    </>
  );
}
