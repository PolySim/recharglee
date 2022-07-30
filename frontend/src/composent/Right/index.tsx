import React from "react";
import { Right, H1, Teaser, Rules, LineFoundYesterday } from "src/styled";
import Already from "src/composent/Right/Found/index";
import Yesterday from "src/composent/Right/Yesterday/index";

export default function ViewRight(): JSX.Element {
  return (
    <Right>
      <H1>RECHARGLE</H1>
      <Teaser>Guess the celebrity before the phone battery runs out</Teaser>
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
      <LineFoundYesterday>
        <Already />
        <Yesterday />
      </LineFoundYesterday>
    </Right>
  );
}
