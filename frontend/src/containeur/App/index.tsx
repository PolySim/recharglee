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
  const [width, setWidth] = useState<number>(0);
  const [image, setImage] = useState<ImageAPI>();
  const [info, setInfo] = useState<InfoAPI>();
  const [message, setMessage] = useState<string>("");
  const [battery, setBattery] = useState<string>("100");
  const [round, setRound] = useState<number>(0);
  const [displayWait, setDisplayWait] = useState<boolean>(false);

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
          setBattery("100");
        }
      }
      if (localStorage.getItem("battery")) {
        setBattery(localStorage.getItem("battery") || "");
      }
      getData();
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    };
    if (width === 0) {
      handleResize();
    }
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
          }}
        >
          <div ref={ref}>
            {width > 800 || width === 0 ? (
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
