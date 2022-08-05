import React, { useState, useContext } from "react";
import { MainContext } from "src/context";
import { Hour } from "src/styled";
import { useInterval } from "usehooks-ts";

export default function ChangeHour(): JSX.Element {
  const { lang } = useContext(MainContext);

  const today = new Date();
  const [hour, setHour] = useState<string>(
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
      {lang === "us"
        ? `${hour} ${parseInt(hour) > 11 ? " p.m" : " a.m"}`
        : hour}
    </Hour>
  );
}
