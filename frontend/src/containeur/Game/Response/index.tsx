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
    lang,
  } = useContext(MainContext);

  const inputRef: React.MutableRefObject<any> = useRef(null);
  const buttonRef: React.MutableRefObject<any> = useRef(null);

  const addIndice = () => {
    if (
      parseInt(localStorage.getItem("battery") || "") <= 85 &&
      parseInt(localStorage.getItem("battery") || "") > 60
    ) {
      if (
        Object.keys(localStorage).some((key) => key.includes("messageLaugh"))
      ) {
        localStorage.setItem(`${round + 1}messageWait`, " ");
      } else {
        localStorage.setItem(`${round + 1}messageLaugh`, " ");
      }
    } else if (
      parseInt(localStorage.getItem("battery") || "") <= 60 &&
      parseInt(localStorage.getItem("battery") || "") > 30
    ) {
      if (Object.keys(localStorage).some((key) => key.includes("indice"))) {
        localStorage.setItem(`${round + 1}messageWait`, " ");
      } else {
        localStorage.setItem(`${round + 1}indice`, image.indice1);
      }
    } else {
      const nbIncide = Object.keys(localStorage).filter((key) =>
        key.includes("indice")
      );
      if (nbIncide.length === 2) {
        localStorage.setItem(`${round + 1}messageWait`, " ");
      } else {
        localStorage.setItem(`${round + 1}indice`, image.indice2);
      }
    }
    setRound(round + 1);
    localStorage.setItem("round", (round + 1).toString());
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
    localStorage.setItem("round", (round + 1).toString());
    if (parseInt(battery) - perte <= 0) {
      let newInfo = info;
      newInfo.lose = (parseInt(newInfo.lose) + 1).toString();
      setInfo(newInfo);
      changeInfo({
        win: false,
        numero: parseInt(newInfo.numero),
        value: newInfo.lose,
      });
      localStorage.setItem(`${round}win`, "false");
      setRound(round + 1);
      localStorage.setItem("round", (round + 1).toString());
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
    changeInfo({
      win: true,
      numero: parseInt(newInfo.numero),
      value: newInfo.win,
    });
    OnToogleMessage("");
    localStorage.setItem(`${round}responseWin`, message);
    setRound(round + 1);
    localStorage.setItem("round", (round + 1).toString());
    localStorage.setItem(`${round}win`, "true");
    setRound(round + 1);
    localStorage.setItem("round", (round + 1).toString());
    setFinish(true);
  };

  const checkResponse = () => {
    setDisplayWait(true);
    setTimeout(() => {
      if (
        message.toLowerCase() === image.response ||
        (message.toLowerCase().slice(0, message.length - 1) ===
          image.response &&
          message.slice(-1) === " ")
      ) {
        goodRep();
      } else {
        badResponse();
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
          {lang === "us" ? (
            <input
              placeholder="Type your answer..."
              autoComplete="off"
              maxLength={25}
              value={message}
              onChange={(e) => {
                OnToogleMessage(e.target.value);
              }}
              ref={inputRef}
            />
          ) : (
            <input
              placeholder="Ecris ta réponse..."
              autoComplete="off"
              maxLength={25}
              value={message}
              onChange={(e) => {
                OnToogleMessage(e.target.value);
              }}
              ref={inputRef}
            />
          )}
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
