import React, { useContext } from "react";
import { MainContext } from "src/context";
import ViewWin from "src/composent/Left/PhoneBack/Finish/win";
import ViewLose from "src/composent/Left/PhoneBack/Finish/lose";

export default function ViewFinishGame({
  setFinish,
}: {
  setFinish: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  const { round } = useContext(MainContext);
  return (
    <>
      {/* {localStorage.getItem(`${round - 1}win`) === "true" ? (
        <ViewWin setFinish={setFinish} />
      ) : (
        <ViewLose setFinish={setFinish} />
      )} */}
      {console.log(round - 1)}
    </>
  );
}
