import { ImageAPI } from "src/type";
const cleAPI = process.env.REACT_APP_API_URL;

export default async function GetInfo(numero: string): Promise<ImageAPI> {
  let res = await fetch(`${cleAPI}/api/images?num=${numero}`);
  let data: ImageAPI = await res.json();
  return data;
}
