import React, { useContext } from "react";
import { MainContext } from "src/context";
import { Right, H1, Teaser, Rules, LineFoundYesterday } from "src/styled";
import Already from "src/composent/Right/Found/index";
import Yesterday from "src/composent/Right/Yesterday/index";

export default function ViewRight(): JSX.Element {
  const { lang } = useContext(MainContext);

  return (
    <Right>
      <H1>RECHARGLE</H1>
      <Teaser>
        {lang === "us"
          ? "Guess the celebrity before the phone battery runs out"
          : "Trouve la célébrité avant que le téléphone ne s'éteigne"}
      </Teaser>
      <Rules>
        <p>{lang === "us" ? "Game rules" : "Règles du jeu"}</p>
        {lang === "us" ? (
          <>
            <p>
              1) Guess which <strong>celebrity</strong> corresponds to the
              picture before the <strong>battery</strong> runs out
            </p>
            <p>
              2) For each <strong>error</strong> you randomly{" "}
              <strong>lose</strong> between <strong>15</strong> and{" "}
              <strong>30%</strong> of battery
            </p>
            <p>
              3) You get two new <strong>clues</strong> when your phone battery
              goes under <strong>60</strong> and <strong>30%</strong>
            </p>
            <p>
              4) The battery recharges every <strong>24 hours</strong> and a new
              photo appears
            </p>
          </>
        ) : (
          <>
            <p>
              1) Trouve à quelle <strong>célébrité</strong> correspond la photo
              avant que la <strong>battery</strong> soit à 0
            </p>
            <p>
              2) Pour chaque <strong>erreur</strong> tu <strong>perds</strong>{" "}
              aléatoirement entre <strong>15</strong> et <strong>30%</strong> de
              batterie
            </p>
            <p>
              3) Tu obtiens deux nouveaux <strong>indices</strong> quand ta
              batterie tombe en dessous de <strong>60</strong> et{" "}
              <strong>30%</strong>
            </p>
            <p>
              4) La batterie se recharge toutes les <strong>24 heures</strong>{" "}
              et une nouvelle photo apparait
            </p>
          </>
        )}
      </Rules>
      <LineFoundYesterday>
        <Already />
        <Yesterday />
      </LineFoundYesterday>
    </Right>
  );
}
