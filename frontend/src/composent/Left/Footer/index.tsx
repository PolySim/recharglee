import React, { useContext } from "react";
import { MainContext } from "src/context";
import { Footer } from "src/styled";

export default function CreateFooter(): JSX.Element {
  const { lang } = useContext(MainContext);
  return (
    <Footer>
      {lang === "us" ? (
        <p>
          © 2022 Rechargle — Designed and developed by @enzo.marie &
          @simon.desdevises
        </p>
      ) : (
        <p>
          © 2022 Rechargle — Designé et developpé par @enzo.marie &
          @simon.desdevises
        </p>
      )}
      <p>Contact : contact@rechargle.com</p>
    </Footer>
  );
}
