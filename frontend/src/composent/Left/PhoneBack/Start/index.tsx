import React, { useContext } from "react";
import { MainContext } from "src/context";
import { Start } from "src/styled";

export default function StartGame(): JSX.Element {
  const { setStart, lang, setLang } = useContext(MainContext);
  return (
    <Start>
      <h2>Rechargle</h2>
      <div onClick={() => setStart(false)}>
        <img src={require("./Polygon1.png")} alt="Polygon" />
        <p>PLAY</p>
      </div>
      <div>
        <div
          style={{
            transform: lang === "us" ? "scale(1.2" : "none",
            boxShadow:
              lang === "us"
                ? "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
                : "none",
          }}
          onClick={() => {
            setLang("us");
            localStorage.setItem("lang", "us");
          }}
        >
          <img src={require("./US.png")} alt="US Flag" />
        </div>
        <div
          style={{
            transform: lang === "fr" ? "scale(1.2" : "none",
            boxShadow:
              lang === "fr"
                ? "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
                : "none",
          }}
          onClick={() => {
            setLang("fr");
            localStorage.setItem("lang", "fr");
          }}
        >
          <img src={require("./FR.png")} alt="France Flag" />
        </div>
      </div>
    </Start>
  );
}
