import React, { useContext } from "react";
import { MainContext } from "src/context";

export default function ViewWin(): JSX.Element {
  const { setFinish } = useContext(MainContext);
  return <div>hahaah</div>;
}
