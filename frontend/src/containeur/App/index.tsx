import React, { useEffect, useState } from "react";
import { Main } from "src/styled";
import ViewRight from "src/composent/Right";
import ViewLeft from "src/containeur/ViewLeft";
import { ImageAPI, InfoAPI } from "src/type";
import GetInfo from "src/API/getInfo";
import GetImage from "src/API/getImage";
import { MainContext } from "src/context";

export default function App(): JSX.Element {
  const [image, setImage] = useState<ImageAPI>();
  const [info, setInfo] = useState<InfoAPI>();

  useEffect(() => {
    if (!info) {
      async function getData(): Promise<void> {
        const information = await GetInfo();
        setInfo(information);
        const imageInfo = await GetImage(information.numero);
        setImage(imageInfo);
      }
      getData();
    }
  }, []);
  return (
    <>
      {image && info ? (
        <MainContext.Provider value={{ image, info }}>
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
