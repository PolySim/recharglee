import React, { useContext } from "react";
import { MainContext } from "src/context";
import { Back } from "src/styled";
import TopBarre from "src/composent/Left/PhoneBack/TopBarre/index";
import NameBarre from "src/composent/Left/PhoneBack/NameBarre/index";
import ViewGame from "src/containeur/Game";
import StartGame from "src/composent/Left/PhoneBack/Start";
import ViewFinishGame from "src/composent/Left/PhoneBack/Finish/index";

export default function PhoneBack({ height }: { height: number }): JSX.Element {
  const { start, finish } = useContext(MainContext);
  return (
    <Back style={{ width: `${height * 0.353}px` }}>
      {start ? (
        <StartGame />
      ) : finish ? (
        <ViewFinishGame />
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
