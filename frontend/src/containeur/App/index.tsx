import React, { useEffect, useState, useRef } from "react";
import { Main } from "src/styled";
import ViewRight from "src/composent/Right";
import ViewLeft from "src/containeur/ViewLeft";
import { ImageAPI, InfoAPI } from "src/type";
import GetInfo from "src/API/getInfo";
import GetImage from "src/API/getImage";
import { MainContext } from "src/context";
import changeInfo from "src/API/changeInfo";
import ViewPhone from "src/composent/PhoneResponsive";

export default function App(): JSX.Element {
  const ref = useRef<HTMLHeadingElement>(null);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [image, setImage] = useState<ImageAPI>();
  const [info, setInfo] = useState<InfoAPI>();
  const [message, setMessage] = useState<string>("");
  const [battery, setBattery] = useState<string>("100");
  const [round, setRound] = useState<number>(
    parseInt(localStorage.getItem("round") || "0")
  );
  const [displayWait, setDisplayWait] = useState<boolean>(false);
  const [start, setStart] = useState<boolean>(true);
  const [finish, setFinish] = useState<boolean>(false);
  const [lang, setLang] = useState<string>(
    localStorage.getItem("lang") || "us"
  );

  const OnToogleMessage = (value: string) => {
    if (value.slice(-2) === "  ") {
      setMessage(value.slice(0, value.length - 1));
    } else {
      setMessage(value);
    }
  };

  useEffect(() => {
    if (!info) {
      async function getData(): Promise<void> {
        const information = await GetInfo();
        setInfo(information);
        const imageInfo = await GetImage(information.numero);
        setImage(imageInfo);
        changeInfo(information);
        if (information.jour !== localStorage.getItem("numero")) {
          localStorage.clear();
          localStorage.setItem("numero", information.jour);
          localStorage.setItem("battery", "100");
          localStorage.setItem("lang", lang);
          localStorage.setItem("round", "0");
          setBattery("100");
        }
      }
      if (localStorage.getItem("battery")) {
        setBattery(localStorage.getItem("battery") || "");
      }
      if (localStorage.getItem(`${round - 1}win`)) {
        setFinish(true);
      }
      getData();
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {image && info ? (
        <MainContext.Provider
          value={{
            image,
            info,
            setInfo,
            message,
            OnToogleMessage,
            battery,
            setBattery,
            round,
            setRound,
            displayWait,
            setDisplayWait,
            start,
            setStart,
            finish,
            setFinish,
            lang,
            setLang,
          }}
        >
          <div ref={ref}>
            {width > 800 ? (
              <Main>
                <ViewLeft />
                <ViewRight />
              </Main>
            ) : (
              <Main>
                <ViewPhone />
              </Main>
            )}
          </div>
        </MainContext.Provider>
      ) : (
        <></>
      )}
    </>
  );
}
