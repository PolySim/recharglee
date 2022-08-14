import React, { useState, useEffect, useRef, useContext } from "react";
import { MainContext } from "src/context";
import {
  H1,
  Teaser,
  LineFoundYesterday,
  Iphone,
  RulesResponsive,
  Pub,
} from "src/styled";
import Already from "src/composent/Right/Found/index";
import Yesterday from "src/composent/Right/Yesterday/index";
import PhoneBack from "src/composent/Left/PhoneBack";
import ShareOnTwitter from "src/composent/Left/ShareTwitter";
import CreateFooter from "src/composent/Left/Footer";

export default function ViewPhone(): JSX.Element {
  const ref = useRef<HTMLHeadingElement>(null);
  const refResponse = useRef<HTMLHeadingElement>(null);
  const [height, setHeight] = useState<number>(0);
  const { lang } = useContext(MainContext);
  const [position, setPosition] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setHeight(ref.current.offsetHeight);
      }
      if (refResponse.current) {
        setPosition(refResponse.current.offsetTop);
      }
    };
    if (height === 0) {
      handleResize();
    }
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
          height: `calc(${position}px + max(100px, 16vh))`,
        }}
      >
        <H1>RECHARGLE</H1>
        <Teaser>
          {lang === "us"
            ? "Guess the celebrity before the phone battery runs out"
            : "Trouve la célébrité avant que le téléphone ne s'éteigne"}
        </Teaser>
        <LineFoundYesterday ref={refResponse}>
          <Already />
          <Yesterday />
        </LineFoundYesterday>
      </div>
      <div ref={ref} style={{ height: "90vh", position: "relative" }}>
        <Iphone src={require("./iphone.png")} alt="iphone" />
        <PhoneBack height={1.11 * height} />
        <ShareOnTwitter height={1.2 * height} />
      </div>
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
          data-ad-slot="9072226306"
          data-matched-content-rows-num="1"
          data-matched-content-columns-num="2"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </Pub>
      <RulesResponsive>
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
              1) Trouve à quelle <strong>célébrité</strong> correspond l'image
              avant que ta <strong>batterie</strong> ne soit à 0%
            </p>
            <p>
              2) Pour chaque <strong>erreur</strong> tu <strong>perds</strong>{" "}
              entre <strong>15</strong> et <strong>30%</strong> de batterie
            </p>
            <p>
              3) Tu obtiens <strong>deux</strong> nouveaux{" "}
              <strong>indices</strong> à <strong>60</strong> et{" "}
              <strong>30%</strong> de batterie
            </p>
            <p>
              4) Ta batterie se recharge toutes les <strong>24 heures</strong>{" "}
              et une nouvelle énigme apparaît
            </p>
          </>
        )}
      </RulesResponsive>
      <CreateFooter />
    </>
  );
}
