import { InfoAPI } from "src/type";

const cleAPI = process.env.REACT_APP_API_URL;

export default async function changeInfo( newInfo :  InfoAPI): Promise<void>{
    await fetch(`${cleAPI}/api/update`, {
        method: 'PUT',
        body: JSON.stringify(newInfo),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
}