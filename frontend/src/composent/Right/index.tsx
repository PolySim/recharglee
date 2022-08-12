import React, { useContext, useState, useEffect } from "react";
import { MainContext } from "src/context";
import {
  Right,
  H1,
  Teaser,
  Rules,
  LineFoundYesterday,
  Pub,
  GameRules,
} from "src/styled";
import Already from "src/composent/Right/Found/index";
import Yesterday from "src/composent/Right/Yesterday/index";

export default function ViewRight(): JSX.Element {
  const { lang } = useContext(MainContext);
  const [rule, setRule] = useState<number>(1);

  const ontoggleRule = (add: boolean, val?: number) => {
    if (val) {
      setRule(val);
    } else {
      if (add) {
        if (rule === 4) {
          setRule(1);
        } else {
          setRule(rule + 1);
        }
      } else {
        if (rule === 1) {
          setRule(4);
        } else {
          setRule(rule - 1);
        }
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => ontoggleRule(true), 8000);
    return () => clearInterval(interval);
  }, [rule]);

  return (
    <Right>
      <H1>RECHARGLE</H1>
      <Teaser>
        {lang === "us"
          ? "Guess the celebrity before the phone battery runs out"
          : "Trouve la célébrité avant que le téléphone ne s'éteigne"}
      </Teaser>
      <GameRules>
        <p>{lang === "us" ? "Game rules" : "Règles du jeu"}</p>
        <div>
          <img
            src={require("./click.png")}
            alt="click"
            onClick={() => ontoggleRule(false)}
          />
          <div onClick={() => ontoggleRule(false, 1)}>1</div>
          <div></div>
          <div onClick={() => ontoggleRule(true, 4)}>4</div>
          <img
            src={require("./click.png")}
            alt="click"
            onClick={() => ontoggleRule(true)}
          />
        </div>
        {lang === "us" ? (
          <Rules>
            <p style={{ transform: `translateX(${-(rule - 1) * 100}%)` }}>
              1) Guess which <strong>celebrity</strong> corresponds to the
              picture before the <strong>battery</strong> runs out
            </p>
            <p style={{ transform: `translateX(${-(rule - 1) * 100}%)` }}>
              2) For each <strong>error</strong> you randomly{" "}
              <strong>lose</strong> between <strong>15</strong> and{" "}
              <strong>30%</strong> of battery
            </p>
            <p style={{ transform: `translateX(${-(rule - 1) * 100}%)` }}>
              3) You get two new <strong>clues</strong> when your phone battery
              goes under <strong>60</strong> and <strong>30%</strong>
            </p>
            <p style={{ transform: `translateX(${-(rule - 1) * 100}%)` }}>
              4) The battery recharges every <strong>24 hours</strong> and a new
              photo appears
            </p>
          </Rules>
        ) : (
          <Rules>
            <p style={{ transform: `translateX(${-(rule - 1) * 100}%)` }}>
              1) Trouve à quelle <strong>célébrité</strong> correspond l'image
              avant que ta <strong>batterie</strong> soit à 0%
            </p>
            <p style={{ transform: `translateX(${-(rule - 1) * 100}%)` }}>
              2) Pour chaque <strong>erreur</strong> tu <strong>perds</strong>{" "}
              aléatoirement entre <strong>15</strong> et <strong>30%</strong> de
              batterie
            </p>
            <p style={{ transform: `translateX(${-(rule - 1) * 100}%)` }}>
              3) Tu obtiens <strong>deux</strong> nouveaux{" "}
              <strong>indices</strong> à <strong>60</strong> et{" "}
              <strong>30%</strong> de batterie
            </p>
            <p style={{ transform: `translateX(${-(rule - 1) * 100}%)` }}>
              4) Ta batterie se recharge toutes les <strong>24 heures</strong>{" "}
              et une nouvelle énigme apparait
            </p>
          </Rules>
        )}
      </GameRules>
      <LineFoundYesterday>
        <Already />
        <Yesterday />
      </LineFoundYesterday>
      <Pub>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2719238446617123"
          crossOrigin="anonymous"
        ></script>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-format="autorelaxed"
          data-ad-client="ca-pub-2719238446617123"
          data-matched-content-rows-num="1"
          data-matched-content-columns-num="2"
          data-ad-slot="9072226306"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </Pub>
    </Right>
  );
}
