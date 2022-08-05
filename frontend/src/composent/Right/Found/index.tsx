import React, { useContext } from "react";
import { MainContext } from "src/context";
import { Found } from "src/styled";

export default function Already(): JSX.Element {
  const { info, lang } = useContext(MainContext);
  return (
    <Found>
      {lang === "us" ? (
        <>
          <p>Already found by :</p>
          <p>
            <span>{info.win}</span> people
          </p>
          <p>
            <span>{info.lose}</span> have failed
          </p>
        </>
      ) : (
        <>
          <p>Déjà trouvée par :</p>
          <p>
            <span>{info.win}</span>{" "}
            {parseInt(info.win) > 1 ? "personnes" : "personne"}
          </p>
          <p>
            <span>{info.lose}</span>{" "}
            {parseInt(info.lose) > 1 ? "ont échouées" : "a échouée"}
          </p>
        </>
      )}
    </Found>
  );
}
