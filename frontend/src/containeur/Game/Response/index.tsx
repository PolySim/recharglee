import React, { useContext, useRef, useEffect } from "react";
import { Response } from "src/styled";
import Icone_Rechargle from "src/composent/Left/PhoneBack/Game/Icone";
import { MainContext } from "src/context";
import { ButtonSubmit } from "src/styled";

export default function EnterResponse(): JSX.Element {
  const { message, OnToogleMessage } = useContext(MainContext);
  const inputRef: React.MutableRefObject<any> = useRef(null);

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
        <Icone_Rechargle image="iconeInvit.png" />
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
            }
          }}
        />
      </ButtonSubmit>
    </>
  );
}
