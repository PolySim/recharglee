import React, { useState } from "react";
import { Back } from "src/styled";
import TopBarre from "src/composent/Left/PhoneBack/TopBarre/index";
import NameBarre from "src/composent/Left/PhoneBack/NameBarre/index";
import ViewGame from "src/containeur/Game";
import StartGame from "src/composent/Left/PhoneBack/Start";

export default function PhoneBack({ height }: { height: number }): JSX.Element {
  const [start, setStart] = useState(true);
  console.log(start);

  const click = () => {
    console.log(1);
  };
  return (
    <Back style={{ width: `${height * 0.35}px` }}>
      {start ? (
        <StartGame setStart={setStart} />
      ) : (
        <>
          <TopBarre />
          <NameBarre />
          <ViewGame height={height} />
        </>
      )}
    </Back>
  );
}
