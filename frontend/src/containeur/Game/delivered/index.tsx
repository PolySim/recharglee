import React, { useRef, useEffect, useContext } from "react";
import { MainContext } from "src/context";
import { Delivered } from "src/styled";

export default function DeliveredAt({ num }: { num: number }): JSX.Element {
  const deliveredRef: React.MutableRefObject<any> = useRef(null);

  const { round } = useContext(MainContext);

  useEffect(() => {
    if (deliveredRef.current && round !== 0) {
      deliveredRef.current.scrollIntoView();
    }
  });

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
  return <Delivered ref={deliveredRef}>Delivered at {time}</Delivered>;
}
