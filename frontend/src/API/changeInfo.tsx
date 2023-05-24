import { UpdateWinProps } from "src/type";

const cleAPI = process.env.REACT_APP_API_URL;

export default async function changeInfo(
  updateProps: UpdateWinProps
): Promise<void> {
  console.log(updateProps);
  await fetch(`${cleAPI}/api/update`, {
    method: "PUT",
    body: JSON.stringify(updateProps),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}
