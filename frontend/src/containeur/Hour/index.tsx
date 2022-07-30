import React, { useState } from "react";
import { Hour } from "src/styled";
import { useInterval } from "usehooks-ts";

export default function ChangeHour(): JSX.Element {
  const today = new Date();
  const [hour, setHour] = useState<string>(
    `${today.getHours()}.${today.getMinutes()}`
  );

  useInterval(() => {
    const today = new Date();
    setHour(
      (hour) =>
        `${
          today.getHours().toString().length != 1
            ? today.getHours()
            : `0${today.getHours()}`
        }.${
          today.getMinutes().toString().length != 1
            ? today.getMinutes()
            : `0${today.getMinutes()}`
        }`
    );
  }, 30000);
  return (
    <Hour>
      {hour}
      {parseInt(hour) > 11 ? " pm" : " am"}
    </Hour>
  );
}
