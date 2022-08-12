import styled from "styled-components";

export const Left = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  flex-basis: 50%;
  height: 100%;
  min-width: 50%;
  font-family: "M PLUS 2", sans-serif;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-basis: 50%;
  height: 100%;
  max-width: 50%;
`;

export const Main = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    background-color: #0e0d0d;
    height: auto;
  }
`;

export const H1 = styled.h1`
  color: #0e0d0d;
  text-align: center;
  font-size: min(6vw, 8.5vh);
  margin: 0 auto;
  width: min(40vw, 55vh);
  margin-top: 3%;
  animation: 0.8s ease-out forwards apparition;

  &::after {
    content: "";
    display: block;
    height: 3px;
    background: #0e0d0d;
    transform: scale(0);
    transition: transform 0.2s ease-in-out;
  }

  &:hover::after {
    transform: scale(1);
  }

  @media screen and (max-width: 800px) {
    font-size: 13vw;
    width: 83vw;
  }
`;

export const Teaser = styled.p`
  text-align: center;
  color: #0e0d0d;
  margin: 0 10% 0;
  font-size: min(2.1vw, 3.6vh);
  font-weight: bold;

  @media screen and (max-width: 800px) {
    margin-top: 1%;
    font-size: 3.4vw;
  }
`;

export const GameRules = styled.div`
  position: relative;
  top: 5%;

  p:first-child {
    text-align: center;
    font-size: min(2.2vw, 2.7vh);
    margin-bottom: 2%;
  }

  > div:nth-of-type(1) {
    display: flex;
    justify-content: center;
    height: 10%;
    margin-bottom: 4%;
    width: 100%;

    div:nth-of-type(2n + 1) {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 1%;
      height: 100%;
      width: 4%;
      background-color: #0c79c2;
      color: #f9faf6;
      font-family: "M PLUS 2", sans-serif;
      cursor: pointer;
      border-radius: 20%;
    }

    div:nth-of-type(2) {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      height: 20%;
      width: 3%;
      margin-left: 1%;
      background-color: #263238;
      border-radius: 15px;
    }

    img {
      cursor: pointer;
    }

    img:nth-of-type(2) {
      margin-left: 1%;
      transform: rotate(180deg);
    }
  }
`;

export const Rules = styled.div`
  display: flex;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  color: #0e0d0d;
  text-align: center;
  font-size: min(2vw, 2.4vh);
  overflow-x: hidden;
  width: 80%;

  p:first-child {
    font-size: min(2.2vw, 2.7vh);
  }

  p:nth-of-type(n) {
    min-width: 100%;
    transition: transform 0.7s ease-out;
  }
`;

export const RulesResponsive = styled.div`
  display: grid;
  grid-template-columns: 40% 40%;
  row-gap: 25px;
  column-gap: 25px;
  justify-content: center;
  width: 100%;
  background-color: #fefcfc;
  margin: 0;
  padding-top: 5%;
  padding-bottom: 5%;
  font-size: 3vw;
  text-align: center;
  p {
    margin-bottom: 0;
  }
  p:first-child {
    grid-column-start: 1;
    grid-column-end: 3;
    font-size: 3.5vw;
  }

  p:nth-of-type(n)::after {
    content: "";
    margin-top: 5px;
    display: block;
    height: 1.5px;
    background: #0e0d0d;
    transform: scale(0);
    transition: transform 0.2s ease-in-out;
  }

  p:nth-of-type(n):hover::after {
    transform: scale(1);
  }

  p:nth-of-type(1)::after {
    height: 0px;
  }
`;

export const Pub = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  img {
    width: 80%;
  }

  @media screen and (max-width: 800px) {
    margin-bottom: 5%;
    margin-top: 2%;
  }
`;

export const Iphone = styled.img`
  position: absolute;
  height: 80%;
  width: auto;
  z-index: 1;
  top: 8%;

  @media screen and (max-width: 800px) {
    height: 80vh;
    min-height: 80vh;
    top: 2%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Back = styled.div`
  position: relative;
  top: 10%;
  height: 76%;
  width: 73%;
  background-image: repeating-linear-gradient(
      135deg,
      rgba(189, 189, 189, 0.1) 0px,
      rgba(189, 189, 189, 0.1) 2px,
      transparent 2px,
      transparent 4px
    ),
    linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255));
  margin: 0 auto;
  border-radius: 6%;

  @media screen and (max-width: 800px) {
    height: 76vh;
    top: 4.35%;
    font-family: "M PLUS 2", sans-serif;
  }
`;

export const Barre = styled.div`
  display: flex;
  position: relative;
  padding-top: 8%;
  align-items: center;
  height: 25px;
  width: 100%;
  font-size: max(0.6vw, 1.7vh);
  background-color: #f0f0f0;

  img:first-child {
    height: 75%;
    width: auto;
    margin-left: 2%;
    margin-right: 1%;
  }

  &:nth-child(n) {
    opacity: 90%;
  }

  @media screen and (max-width: 800px) {
    font-size: max(0.8vw, 1.7vh);
  }
`;

export const Hour = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Battery = styled.div`
  position: relative;
  margin-left: auto;
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 0%;
  height: 7%;
  width: 100%;
  font-size: max(0.9vw, 2.1vh);
  background-color: #f0f0f0;
  border-bottom: 0.5px solid #4f772d;

  img {
    margin-left: 54%;
    border-radius: 50%;
  }

  div:first-child {
    display: flex;
  }
`;

export const IconsName = styled.div`
  height: 90%;
  width: auto;
`;

export const ColumnOnline = styled.div`
  position: relative;
  margin-left: 8%;
  width: 100%;
  height: 100%;
`;

export const TextOnline = styled.div`
  position: absolute;
  top: 47%;
  left: 6%;
  font-size: max(0.6vw, 1.7vh);
  color: grey;

  span {
    display: flex;
    align-items: center;
    position: absolute;
    left: -25%;
    top: 26%;
    font-size: 50%;
  }
`;

export const Game = styled.div`
  position: relative;
  margin-top: 4%;
  overflow: hidden;
  overflow-y: scroll;
  z-index: 2;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Twitter = styled.a`
  position: absolute;
  display: flex;
  top: 4%;
  transform: translateY(-50%);
  justify-content: space-evenly;
  align-items: center;
  background-color: #fefcfc;
  height: 4vh;
  border-radius: 5px;
  border-color: #fefcfc;
  text-decoration: none;
  color: #0e0d0d;
  font-size: min(2vw, 2.1vh);
  animation: 0.8s linear infinite alternate boxMagic;
  font-family: "Julius Sans One", sans-serif;
  font-weight: bold;

  @media screen and (max-width: 800px) {
    font-size: min(2.5vw, 2.3vh);
    left: 50%;
    transform: translateX(-50%);
    top: 93%;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 3%;
  color: #fff;
  width: 100%;
  height: auto;
  font-size: min(1.1vw, 2.4vh);
  line-height: 150%;
  font-family: "Julius Sans One", sans-serif;

  @media screen and (max-width: 800px) {
    background-color: #000;
    position: relative;
    height: 6vh;
    margin-top: 0;
    font-size: 2vw;
  }
`;

export const IconsR = styled.div`
  width: 10.85%;
  margin: 0 1% 0 1%;

  img {
    height: 100%;
    width: 100%;
  }
`;

export const FirstMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 1%;
  border: 2px solid black;
  border-radius: 5px;
  margin-top: 0.8%;
  width: 45%;
  height: 80%;
  opacity: 90%;
  font-size: max(0.5vw, 1.1vh);
  text-align: center;
  font-weight: normal;
  background-color: #f9f7f1;
`;

export const FirstImage = styled.img`
  height: 16vh;
  width: auto;
  opacity: 90%;
  border-radius: 10%;
  margin-left: 13%;
  margin-top: 2%;
  transition: transform 0.6s cubic-bezier(0.23, 1.83, 0.42, 1.19);
  z-index: 10;

  :hover {
    transform: scale(1.35);
  }
`;

export const Delivered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  box-sizing: border-box;
  border-radius: 5px;
  margin-left: 13%;
  margin-top: 2%;
  width: 45%;
  height: 5.5%;
  opacity: 90%;
  font-size: max(0.7vw, 1.3vh);
  font-weight: normal;
  background-color: #f9f7f1;
`;

export const Response = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  border: 2px solid black;
  border-radius: 5px;
  width: 45%;
  height: 100%;
  opacity: 90%;
  font-size: max(0.7vw, 1.3vh);
  font-weight: normal;
  margin-left: auto;
  background-color: #f9f7f1;
  transition: transform 0.4s cubic-bezier(0.23, 1.83, 0.42, 1.19);

  input {
    width: 90%;
    text-align: center;
    background-color: #1fe0;
    border: 0;
    font-size: max(0.6vw, 1.2vh);
    font-family: "M PLUS 2", sans-serif;
    outline: none;
  }

  :hover {
    transform: scale(1.35) translateX(-12%);
  }
`;

export const ButtonSubmit = styled.div`
  position: relative;
  margin: 1% 7% 0 auto;
  height: 4.5%;
  width: 15%;
  animation: 3s infinite temp;

  img {
    height: 100%;
    width: auto;
    opacity: 90%;
    cursor: pointer;
  }
`;

export const Found = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #0e0d0d;
  font-weight: bold;
  margin-top: 2%;
  width: 50%;

  p:nth-of-type(1) {
    margin-bottom: 1%;
  }

  p:nth-of-type(2) span {
    color: #56a526;
  }

  p:nth-of-type(3) span {
    color: #d63232;
  }

  @media screen and (max-width: 800px) {
    margin-top: 0;
  }
`;

export const Hier = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #0e0d0d;
  font-weight: bold;
  height: 100%;
  width: 50%;

  img {
    height: 80%;
    transition: transform 0.4s cubic-bezier(0.23, 1.83, 0.42, 1.19);
    z-index: 10;
  }

  img:hover {
    transform: scale(2);
  }

  p:nth-of-type(1) {
    margin-bottom: 1%;
  }

  p:nth-of-type(2) {
    color: #56a526;
    margin-top: 1%;
  }

  @media screen and (max-width: 800px) {
    img {
      height: 70%;
    }
  }
`;

export const LineFoundYesterday = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: min(2.1vw, 2.6vh);
  height: 15vh;

  @media screen and (max-width: 800px) {
    margin-top: 5%;
    font-size: 3vw;
    align-items: center;
  }
`;

export const Message = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  border: 2px solid black;
  border-radius: 5px;
  width: 45%;
  height: 100%;
  opacity: 90%;
  font-size: max(0.7vw, 1.3vh);
  font-weight: normal;
  margin-left: auto;
  padding: 1%;
  overflow: hidden;
  background-color: #f9f7f1;
`;

export const LastMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  border: 2px solid black;
  border-radius: 5px;
  height: 100%;
  width: 45%;
  opacity: 90%;
  font-size: max(0.5vw, 1.3vh);
  padding: 1%;
  background-color: #f9f7f1;
`;

export const Indice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  padding: 1%;
  border: 2px solid black;
  border-radius: 5px;
  width: 45%;
  height: 80%;
  opacity: 90%;
  font-size: max(0.6vw, 1.3vh);
  font-weight: normal;
  background-color: #f9f7f1;
  z-index: -1;
`;

export const Perte = styled.div`
  display: flex;
  color: #d63232;
  font-size: max(0.7vw, 1.3vh);
  margin: 0 6.5% 0 auto;
  font-weight: normal;
  width: 20%;
  transform: scale(8);
  z-index: 10;
  animation: perte 2s forwards;
  top: -25%;
  animation-delay: 0.7s;
`;

export const AnimWait = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 60%;
  width: 25%;
  background-color: #f9f7f1;
  top: 2%;
  border: 2px solid black;
  border-radius: 10%;
  left: 13%;
  font-size: 1.5vh;

  span:nth-of-type(1) {
    animation: wait 1.4s infinite ease-in-out;
  }

  span:nth-of-type(2) {
    animation: wait 1.4s infinite ease-in-out;
    animation-delay: 0.3s;
  }

  span:nth-of-type(3) {
    animation: wait 1.4s infinite ease-in-out;
    animation-delay: 0.6s;
  }
`;

export const Start = styled.button`
  background-color: #f9faf6;
  height: 100%;
  width: 100%;
  border: 0;

  h2 {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    font-family: "Julius Sans One", sans-serif;
    font-weight: normal;
    font-size: 5.3vh;
    z-index: 10;
  }

  > div:nth-of-type(1) {
    position: absolute;
    top: 33%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #a9ca7c;
    height: 21%;
    width: 47%;
    border: 1px solid #76c893;
    border-radius: 15px;
    z-index: 10;
    cursor: pointer;
    transition: transform 0.3s ease-in;

    :hover {
      transform: scale(1.2) translateX(-40%);
      transition: transform 0.5s ease-in;
    }

    img {
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
      height: 40%;
    }

    p {
      position: absolute;
      top: 63%;
      left: 50%;
      transform: translateX(-50%);
      font-size: 3.5vh;
      color: #f9faf6;
      font-family: "M PLUS 2", sans-serif;
      font-weight: bold;
    }
  }

  > :nth-of-type(2) {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 63%;
    width: 100%;
    height: 12.5%;

    div:nth-of-type(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #e2cc93;
      margin-right: 10%;
      width: 25%;
      height: 100%;
      border-radius: 15px;
      cursor: pointer;
      z-index: 10;

      img {
        width: 60%;
        height: auto;
      }
    }

    div:nth-of-type(2) {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #da8697;
      width: 25%;
      height: 100%;
      border-radius: 15px;
      cursor: pointer;
      z-index: 10;

      img {
        width: 60%;
        height: auto;
      }
    }
  }
`;

export const Lose = styled.div`
  position: relative;
  background-color: #263238;
  height: 100%;
  width: 100%;

  div:nth-of-type(1) {
    position: absolute;
    top: 7%;
    left: 9%;
    cursor: pointer;
    z-index: 10;
  }

  h2 {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    font-family: "Julius Sans One", sans-serif;
    font-weight: normal;
    font-size: 5.3vh;
    z-index: 10;
    color: #f9faf6;
  }

  div:nth-of-type(2) {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    height: 12%;
    width: 100%;

    img {
      width: auto;
    }
  }

  div:nth-of-type(3) {
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translateX(-50%);
    font-family: "M PLUS 2", sans-serif;
    font-weight: bold;
    font-size: 5vh;
    color: #f9faf6;
    text-align: center;
    width: 35%;

    ::after {
      content: "";
      display: block;
      width: 100%;
      height: 5px;
      background-color: #5a1aab;
    }
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translateX(-50%);
    width: 40%;
    height: 19%;
    border: 2px solid #5a1aab;
    z-index: 10;
    text-decoration: none;
    cursor: pointer;

    img {
      height: 58%;
      width: auto;
    }

    p {
      color: #f9faf6;
      font-size: 2.5vh;
    }
  }
`;

export const ImageBack = styled.img`
  transform: rotate(180deg);
  position: relative;
  left: 75%;
  top: -3%;
  cursor: pointer;
`;

export const Win = styled.div`
  background-color: #f9faf6;
  height: 100%;
  width: 100%;

  div:nth-of-type(1) {
    position: absolute;
    top: 7%;
    left: 9%;
    cursor: pointer;
    z-index: 10;
  }

  h2 {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    font-family: "Julius Sans One", sans-serif;
    font-weight: normal;
    font-size: 5.3vh;
    z-index: 10;
    color: #0e0d0d;
  }

  div:nth-of-type(2) {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 28%;
    left: 50%;
    transform: translateX(-50%);
    height: 18%;
    width: 100%;

    img {
      width: auto;
    }
  }

  div:nth-of-type(3) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    font-family: "M PLUS 2", sans-serif;
    font-size: 5.5vh;
    font-weight: bold;
    color: #0e0d0d;
    text-align: center;
    width: 45%;

    ::after {
      content: "";
      display: block;
      width: 100%;
      height: 5px;
      background-color: #6bb33b;
    }
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 68%;
    left: 50%;
    transform: translateX(-50%);
    width: 40%;
    height: 19%;
    border: 2px solid #0e0d0d;
    z-index: 10;
    cursor: pointer;
    text-decoration: none;

    img {
      height: 58%;
      width: auto;
    }

    p {
      color: #0e0d0d;
      font-size: 2.5vh;
    }
  }
`;
