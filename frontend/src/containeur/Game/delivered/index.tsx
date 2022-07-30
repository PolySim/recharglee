import React from "react";
import { Delivered } from "src/styled";

export default function DeliveredAt({ num }: { num: number }): JSX.Element {
  const today = new Date();
  let time: string | null = "";
  if (localStorage.getItem(`delivered${num}`)) {
    time = localStorage.getItem(`delivered${num}`);
  } else {
    time = `${today.getHours()}.${today.getMinutes()}`;
    localStorage.setItem(`delivered${num}`, time);
  }
  return <Delivered>Delivered at {time}</Delivered>;
}
