import React from "react";
import { Delivered } from "src/styled";

export default function DeliveredAt({ num }: { num: number }): JSX.Element {
  const today = new Date();
  let time: string = `${
    today.getHours().toString().length != 1
      ? today.getHours()
      : `0${today.getHours()}`
  }.${
    today.getMinutes().toString().length != 1
      ? today.getMinutes()
      : `0${today.getMinutes()}`
  }`;
  if (localStorage.getItem(`delivered${num}`)) {
    time = localStorage.getItem(`delivered${num}`) || "";
  } else {
    localStorage.setItem(`delivered${num}`, time);
  }
  return <Delivered>Delivered at {time}</Delivered>;
}
