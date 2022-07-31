export type InfoAPI = {
  win: string;
  lose: string;
  numero: string;
  jour: string;
};

export type ImageAPI = {
  id: string;
  img1: string;
  img2: string;
  alt1: string;
  alt2: string;
  indice1: string;
  indice2: string;
  response: string;
};

export type IconeProps = {
  image: string;
  height: string;
};

export type MainContextType = {
  image: ImageAPI;
  info: InfoAPI;
  setInfo: React.Dispatch<React.SetStateAction<InfoAPI | undefined>>;
  message: string;
  OnToogleMessage: (value: string) => void;
  battery: string;
  setBattery: React.Dispatch<React.SetStateAction<string>>;
};

export type ViewMessageProps = {
  color: string;
  message: string;
};
