import React from "react";
import { Name, IconsName, ColumnOnline, TextOnline } from "src/styled";

export default function NameBarre(): JSX.Element {
  return (
    <Name>
      <IconsName>
        <img src={require("./logo.png")} alt="icone" height="100%" />
      </IconsName>
      <ColumnOnline>
        Rechargle n°{"1"}
        <TextOnline>
          <span>🟢</span> Online
        </TextOnline>
      </ColumnOnline>
    </Name>
  );
}
