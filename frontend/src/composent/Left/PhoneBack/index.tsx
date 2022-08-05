import React, { useState } from "react";
import { Back } from "src/styled";
import TopBarre from "src/composent/Left/PhoneBack/TopBarre/index";
import NameBarre from "src/composent/Left/PhoneBack/NameBarre/index";
import ViewGame from "src/containeur/Game";
import StartGame from "src/composent/Left/PhoneBack/Start";
import ViewFinishGame from "src/composent/Left/PhoneBack/Finish/index";

export default function PhoneBack({ height }: { height: number }): JSX.Element {
  const [start, setStart] = useState<boolean>(true);
  const [finish, setFinish] = useState<boolean>(false);
  return (
    <Back style={{ width: `${height * 0.35}px` }}>
      {start ? (
        <StartGame setStart={setStart} />
      ) : finish ? (
        <ViewFinishGame setFinish={setFinish} />
      ) : (
        <>
          <TopBarre />
          <NameBarre />
          <ViewGame height={height} setFinish={setFinish} />
        </>
      )}
    </Back>
  );
}
