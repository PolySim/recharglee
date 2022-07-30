import React from "react";
import { Response } from "src/styled";

export default function EnterResponse(): JSX.Element {
  return (
    <Response>
      <input
        placeholder="Type yours answer ..."
        autoComplete="off"
        maxLength={25}
      />
    </Response>
  );
}
