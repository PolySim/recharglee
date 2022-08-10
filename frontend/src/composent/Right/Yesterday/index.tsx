import React, { useContext } from "react";
import { MainContext } from "src/context";
import { Hier } from "src/styled";

const cleAPI = process.env.REACT_APP_API_URL;

export default function Yesterday(): JSX.Element {
  const { info, image, lang } = useContext(MainContext);

  return (
    <Hier>
      <p>{lang === "us" ? "Yesterday" : "Hier"}</p>
      <img src={`${cleAPI}/image2?num=${info.numero}`} alt={image.alt2} />
      <p>{image.alt2}</p>
    </Hier>
  );
}
