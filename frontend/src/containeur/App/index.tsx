import React, { useEffect, useState } from "react";
import { Main } from "src/styled";
import ViewRight from "src/composent/Right";
import ViewLeft from "src/containeur/ViewLeft";
import { ImageAPI, InfoAPI } from "src/type";
import GetInfo from "src/API/getInfo";
import GetImage from "src/API/getImage";
import { MainContext } from "src/context";
import changeInfo from "src/API/changeInfo";

export default function App(): JSX.Element {
  const [image, setImage] = useState<ImageAPI>();
  const [info, setInfo] = useState<InfoAPI>();
  const [message, setMessage] = useState<string>("");
  const [battery, setBattery] = useState<string>("100");

  const OnToogleMessage = (value: string) => {
    let goodRep = "";
    for (const word of value.split(" ")) {
      if (word !== "") {
        goodRep += word + " ";
      }
    }
    setMessage(goodRep.substring(0, goodRep.length - 1));
  };

  useEffect(() => {
    if (!info) {
      async function getData(): Promise<void> {
        const information = await GetInfo();
        setInfo(information);
        const imageInfo = await GetImage(information.numero);
        setImage(imageInfo);
        changeInfo(information);
        if (information.numero !== localStorage.getItem("numero")) {
          localStorage.clear();
          localStorage.setItem("numero", information.numero);
          localStorage.setItem("battery", "100");
        }
      }
      if (localStorage.getItem("battery")) {
        setBattery(localStorage.getItem("battery") || "");
      }
      getData();
    }
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
          }}
        >
          <Main>
            <ViewLeft />
            <ViewRight />
          </Main>
        </MainContext.Provider>
      ) : (
        <></>
      )}
    </>
  );
}
