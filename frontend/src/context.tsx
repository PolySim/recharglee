import React from "react";
import { MainContextType } from "./type";

export const MainContext = React.createContext<MainContextType>({
  image: {
    id: "",
    img1: "",
    img2: "",
    alt1: "",
    alt2: "",
    indice1: "",
    indice2: "",
    response: "",
  },
  info: { win: "", lose: "", numero: "", jour: "" },
  setInfo: () => {},
  message: "",
  OnToogleMessage: () => {},
  battery: "",
  setBattery: () => {},
  round: 0,
  setRound: () => {},
  displayWait: false,
  setDisplayWait: () => {},
  start: true,
  setStart: () => {},
  finish: false,
  setFinish: () => {},
});
