import styled from "styled-components";

export const Left = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  flex-basis: 50%;
  height: 100%;
  font-family: "M PLUS 2", sans-serif;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-basis: 50%;
  height: 100%;
`;

export const Main = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;

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
  margin: 5% 10% 0;
  font-size: min(2.1vw, 3.6vh);
  font-weight: bold;

  @media screen and (max-width: 800px) {
    margin-top: 1%;
    font-size: 3.4vw;
  }
`;

export const Rules = styled.div`
  margin: 4% 15% 0px 15%;
  color: #0e0d0d;
  text-align: center;
  font-size: min(2vw, 2.4vh);

  p:first-child {
    font-size: min(2.2vw, 2.7vh);
  }

  p {
    margin-bottom: 20px;
  }

  p:nth-child(2)::after {
    content: "";
    margin-top: 5px;
    display: block;
    height: 1.5px;
    background: #0e0d0d;
    transform: scale(0);
    transition: transform 0.2s ease-in-out;
  }

  p:nth-child(2):hover::after {
    transform: scale(1);
  }
  p:nth-child(3)::after {
    content: "";
    margin-top: 5px;
    display: block;
    height: 1.5px;
    background: #0e0d0d;
    transform: scale(0);
    transition: transform 0.2s ease-in-out;
  }

  p:nth-child(3):hover::after {
    transform: scale(1);
  }
  p:nth-child(4)::after {
    content: "";
    margin-top: 5px;
    display: block;
    height: 1.5px;
    background: #0e0d0d;
    transform: scale(0);
    transition: transform 0.2s ease-in-out;
  }

  p:nth-child(4):hover::after {
    transform: scale(1);
  }
  p:nth-child(5)::after {
    content: "";
    margin-top: 5px;
    display: block;
    height: 1.5px;
    background: #0e0d0d;
    transform: scale(0);
    transition: transform 0.2s ease-in-out;
  }

  p:nth-child(5):hover::after {
    transform: scale(1);
  }

  @media screen and (max-width: 800px) {
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

    p {
      margin-bottom: 0;
    }

    p:first-child {
      grid-column-start: 1;
      grid-column-end: 3;
      font-size: 3.5vw;
    }
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
  margin: 0 auto;
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
    height: 100%;
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
  margin-top: 8%;
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
`;

export const Perte = styled.div`
  display: flex;
  color: #d63232;
  font-size: max(0.7vw, 1.3vh);
  margin: 0 6.5% 0 auto;
  font-weight: normal;
  width: 20%;
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
  font-size: min(0.7vw, 1.5vh);

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
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
    font-family: "Julius Sans One", sans-serif;
    font-weight: normal;
    font-size: 5.3vh;
    z-index: 10;
  }

  div:nth-of-type(1) {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #a9ca7c;
    height: 21%;
    width: 47%;
    border: 1px solid #76c893;
    border-radius: 15px;
    z-index: 10;
    cursor: pointer;

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
`;
