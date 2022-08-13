import React, { useContext } from "react";
import { MainContext } from "src/context";
import { Name, IconsName, ColumnOnline, TextOnline } from "src/styled";

export default function NameBarre(): JSX.Element {
  const { lang, info } = useContext(MainContext);

  return (
    <Name>
      <IconsName>
        <img src={require("./logo.png")} alt="icone" height="100%" />
      </IconsName>
      <ColumnOnline>
        Rechargle n°{parseInt(info.numero) - 1}
        <TextOnline>
          <span>🟢</span> {lang === "us" ? "Online" : "Connecté"}
        </TextOnline>
      </ColumnOnline>
    </Name>
  );
}
