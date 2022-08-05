import React, { useContext, useRef, useEffect } from "react";
import { Response } from "src/styled";
import Icone_Rechargle from "src/composent/Left/PhoneBack/Game/Icone";
import { MainContext } from "src/context";
import { ButtonSubmit } from "src/styled";
import changeInfo from "src/API/changeInfo";

export default function EnterResponse(): JSX.Element {
  const {
    image,
    info,
    setInfo,
    message,
    OnToogleMessage,
    battery,
    setBattery,
    round,
    setRound,
    setDisplayWait,
    setFinish,
  } = useContext(MainContext);

  const inputRef: React.MutableRefObject<any> = useRef(null);
  const buttonRef: React.MutableRefObject<any> = useRef(null);

  const addIndice = () => {
    if (
      parseInt(localStorage.getItem("battery") || "") <= 85 &&
      parseInt(localStorage.getItem("battery") || "") > 60
    ) {
      localStorage.setItem(`${round + 1}messageLaugh`, " ");
    } else if (
      parseInt(localStorage.getItem("battery") || "") <= 60 &&
      parseInt(localStorage.getItem("battery") || "") > 30
    ) {
      localStorage.setItem(`${round + 1}indice`, image.indice1);
    } else {
      localStorage.setItem(`${round + 1}indice`, image.indice2);
    }
    setRound(round + 1);
  };

  const badResponse = () => {
    const perte = Math.floor(Math.random() * 15) + 15;
    setBattery((battery) => {
      if (parseInt(battery) - perte > 0) {
        return (parseInt(battery) - perte).toString();
      } else {
        return "0";
      }
    });
    parseInt(battery) - perte > 0
      ? localStorage.setItem("battery", (parseInt(battery) - perte).toString())
      : localStorage.setItem("battery", "0");
    localStorage.setItem(`${round}responseFalse${perte}`, message);
    setRound(round + 1);
    if (parseInt(battery) - perte <= 0) {
      let newInfo = info;
      newInfo.lose = (parseInt(newInfo.lose) + 1).toString();
      setInfo(newInfo);
      changeInfo(newInfo);
      localStorage.setItem(`${round}win`, "false");
      setRound(round + 1);
      setFinish(true);
    } else {
      addIndice();
      OnToogleMessage("");
    }
  };

  const goodRep = () => {
    let newInfo = info;
    newInfo.win = (parseInt(newInfo.win) + 1).toString();
    setInfo(newInfo);
    changeInfo(newInfo);
    OnToogleMessage("");
    localStorage.setItem(`${round}responseWin`, message);
    setRound(round + 1);
    localStorage.setItem(`${round}win`, "true");
    setRound(round + 1);
    setFinish(true);
  };

  const checkResponse = () => {
    setDisplayWait(true);
    setTimeout(() => {
      if (message !== image.response) {
        badResponse();
      } else {
        goodRep();
      }
      setDisplayWait(false);
    }, 4000);
  };

  useEffect(() => {
    const keyDownReset = (event: {
      key: string;
      preventDefault: () => void;
    }) => {
      if (event.key === "Enter") {
        event.preventDefault();
        if (inputRef.current.value !== "") {
          checkResponse();
        }
      }
    };
    document.addEventListener("keydown", keyDownReset);
    return () => {
      document.removeEventListener("keydown", keyDownReset);
    };
  }, [message]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    if (buttonRef.current && round !== 0) {
      buttonRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [message]);
  return (
    <>
      <div style={{ display: "flex", height: "6.25%", marginTop: "4%" }}>
        <Response>
          <input
            placeholder="Type yours answer ..."
            autoComplete="off"
            maxLength={25}
            value={message}
            onChange={(e) => {
              OnToogleMessage(e.target.value);
            }}
            ref={inputRef}
          />
        </Response>
        <Icone_Rechargle image="iconeInvit.png" height="100%" />
      </div>
      <ButtonSubmit>
        <img
          src={require("./envoie.png")}
          alt="submit"
          onClick={(e) => {
            const target = e.target as HTMLImageElement;
            if (message === "") {
              target.style.animation = "nope 0.4s forwards";
              setTimeout(() => {
                target.style.animation = "none";
              }, 400);
            } else {
              checkResponse();
            }
          }}
        />
      </ButtonSubmit>
    </>
  );
}
