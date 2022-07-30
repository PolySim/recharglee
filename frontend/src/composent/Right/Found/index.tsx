import React, { useContext } from "react";
import { MainContext } from "src/context";
import { Found } from "src/styled";

export default function Already(): JSX.Element {
  const { info } = useContext(MainContext);
  return (
    <Found>
      <p>Already found by :</p>
      <p>
        <span>{info.win}</span> people
      </p>
      <p>
        <span>{info.lose}</span> have failed
      </p>
    </Found>
  );
}
