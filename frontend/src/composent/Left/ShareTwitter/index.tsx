import React from "react";
import { Twitter } from "src/styled";

export default function ShareOnTwitter({
  height,
}: {
  height: number;
}): JSX.Element {
  return (
    <Twitter
      href="https://twitter.com/intent/tweet?text=Can%20you%20be%20better%20than%20me%20today%20?%20Challenge%20me%20now%20!%20🔋%20🔌%20➡️%20https://www.rechargle.com"
      target="_blank"
      style={{ width: `${height * 0.26}px` }}
    >
      <div>Share on Twitter</div>
      <img src={require("./logo.png")} alt="logo Twitter" height="100%" />
    </Twitter>
  );
}
