import React, { useState, useEffect, useRef } from "react";
import { Left, Iphone } from "src/styled";
import PhoneBack from "src/composent/Left/PhoneBack";
import ShareOnTwitter from "src/composent/Left/ShareTwitter";
import CreateFooter from "src/composent/Left/Footer";

export default function ViewLeft(): JSX.Element {
  const ref = useRef<HTMLHeadingElement>(null);
  const [height, setHeight] = useState<number>(0);

  const [start, setStart] = useState<boolean>(true);
  const [finish, setFinish] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setHeight(ref.current.offsetHeight);
      }
    };
    if (height === 0) {
      handleResize();
    }
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Left ref={ref}>
      <Iphone src={require("./iphone.png")} alt="iphone" />
      <PhoneBack height={height} />
      <ShareOnTwitter height={height} />
      <CreateFooter />
    </Left>
  );
}
