import React, { useState, useEffect, useRef } from "react";
import { H1, Teaser, LineFoundYesterday, Iphone, Rules } from "src/styled";
import Already from "src/composent/Right/Found/index";
import Yesterday from "src/composent/Right/Yesterday/index";
import PhoneBack from "src/composent/Left/PhoneBack";
import ShareOnTwitter from "src/composent/Left/ShareTwitter";
import CreateFooter from "src/composent/Left/Footer";

export default function ViewPhone(): JSX.Element {
  const ref = useRef<HTMLHeadingElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setHeight(ref.current.offsetHeight);
      }
    };
    if (height === 0) {
      handleResize();
    }
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "#fff", height: "40vh" }}>
        <H1>RECHARGLE</H1>
        <Teaser>Guess the celebrity before the phone battery runs out</Teaser>
        <LineFoundYesterday>
          <Already />
          <Yesterday />
        </LineFoundYesterday>
      </div>
      <div ref={ref} style={{ height: "90vh", position: "relative" }}>
        <Iphone src={require("./iphone.png")} alt="iphone" />
        <PhoneBack height={1.125 * height} />
        <ShareOnTwitter height={1.2 * height} />
      </div>
      <Rules>
        <p>Game rules</p>
        <p>
          1) Guess which <strong>celebrity</strong> corresponds to the picture
          before the <strong>battery</strong> runs out
        </p>
        <p>
          2) For each <strong>error</strong> you randomly <strong>lose</strong>{" "}
          between <strong>15</strong> and <strong>30%</strong> of battery
        </p>
        <p>
          3) You get two new <strong>clues</strong> when your phone battery goes
          under <strong>60</strong> and <strong>30%</strong>
        </p>
        <p>
          4) The battery recharges every <strong>24 hours</strong> and a new
          photo appears
        </p>
      </Rules>
      <CreateFooter />
    </>
  );
}
