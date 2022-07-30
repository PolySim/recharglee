import React from "react";
import { Name, IconeName, ColumnOnline, TextOnline } from "src/styled";

export default function NameBarre(): JSX.Element {
  return (
    <Name>
      <IconeName>
        <img src={require("./logo.png")} alt="icone" height="100%" />
      </IconeName>
      <ColumnOnline>
        Rechargle n°{"1"}
        <TextOnline>
          <span>🟢</span> Online
        </TextOnline>
      </ColumnOnline>
    </Name>
  );
}
