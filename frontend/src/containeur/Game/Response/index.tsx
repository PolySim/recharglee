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
  } = useContext(MainContext);
  const inputRef: React.MutableRefObject<any> = useRef(null);

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
    localStorage.setItem("rep1", message);
    if (parseInt(battery) - perte <= 0) {
      let newInfo = info;
      newInfo.lose = (parseInt(newInfo.lose) + 1).toString();
      setInfo(newInfo);
      changeInfo(newInfo);
      localStorage.setItem("win", "false");
    } else {
      OnToogleMessage("");
    }
  };

  const goodRep = () => {
    let newInfo = info;
    newInfo.win = (parseInt(newInfo.win) + 1).toString();
    setInfo(newInfo);
    changeInfo(newInfo);
    OnToogleMessage("");
    localStorage.setItem("win", "true");
  };

  const checkResponse = () => {
    if (message !== image.response) {
      badResponse();
    } else {
      goodRep();
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <div style={{ display: "flex", height: "6.25%", marginTop: "4%" }}>
        <Response>
          <input
            placeholder="Type yours answer ..."
            autoComplete="off"
            maxLength={25}
            onChange={(e) => OnToogleMessage(e.target.value)}
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
