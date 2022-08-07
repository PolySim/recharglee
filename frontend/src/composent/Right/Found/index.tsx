import React, { useContext } from "react";
import { MainContext } from "src/context";
import { Found } from "src/styled";

export default function Already(): JSX.Element {
  const { info, lang } = useContext(MainContext);
  return (
    <Found>
      {lang === "us" ? (
        <>
          <p>Today :</p>
          <p>
            <span>{info.win}</span> people found
          </p>
          <p>
            <span>{info.lose}</span> have failed
          </p>
        </>
      ) : (
        <>
          <p>Aujourd'hui :</p>
          <p>
            <span>{info.win}</span>{" "}
            {parseInt(info.win) === 1 ? "a réussi" : "ont réussi"}
          </p>
          <p>
            <span>{info.lose}</span>{" "}
            {parseInt(info.lose) === 1 ? "a échouée" : "ont échouées"}
          </p>
        </>
      )}
    </Found>
  );
}
