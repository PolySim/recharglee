import { InfoAPI } from "src/type";
const cleAPI = process.env.REACT_APP_API_URL;

export default async function GetInfo(): Promise<InfoAPI> {
  let res = await fetch(`${cleAPI}/api/info`);
  let data: InfoAPI = await res.json();
  return data;
}
