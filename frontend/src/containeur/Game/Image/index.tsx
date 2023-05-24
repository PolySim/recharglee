import React, { useContext } from "react";
import { MainContext } from "src/context";
import { FirstImage } from "src/styled";

const cleAPI = process.env.REACT_APP_API_URL;

export default function ImageSend(): JSX.Element {
  const { image, info } = useContext(MainContext);

  return (
    <FirstImage
      src={`${cleAPI}/image?num=${info.numero}&path=${image.img1}`}
      alt={image.alt1}
    />
  );
}
