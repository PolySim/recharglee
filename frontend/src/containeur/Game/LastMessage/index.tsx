import React, { useContext } from "react";
import { MainContext } from "src/context";
import { LastMessage, ImageBack } from "src/styled";
import Icone_Rechargle from "src/composent/Left/PhoneBack/Game/Icone";
import DeliveredAt from "src/containeur/Game/delivered";

export default function FinillyMessage({ win }: { win: boolean }): JSX.Element {
  const { setFinish, lang } = useContext(MainContext);
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
            {lang === "us" ? (
              <p>
                Awesome, You’ve completed this Rechargle before the phone run’s
                out !! Come back tomorrow and discover the answer of the day 😉
              </p>
            ) : (
              <p>
                Bien joué, tu as réussi ce Rechargle avant que la fin de la
                batterie !! Reviens demain et découvre une nouvelle image 😉
              </p>
            )}
          </LastMessage>
        ) : (
          <LastMessage>
            {lang === "us" ? (
              <p>
                Oh no, your phone’s die 😢 ! Come back tomorrow to discover what
                was the answer of the day and try again !!
              </p>
            ) : (
              <p>
                Oh non, tu n'as plus de batterie 😢 ! Reviens demain pour
                découvrir la réponse et avoir une nouvelle image !!
              </p>
            )}
          </LastMessage>
        )}
      </div>
      <DeliveredAt num={2} />
      <ImageBack
        src={require("./back.png")}
        alt="back"
        onClick={() => setFinish(true)}
      />
    </>
  );
}
