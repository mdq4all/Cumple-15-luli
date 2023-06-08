import notification from "./notification.js";

export default async function addJSON (data, endpoint) {
    try {
        await fetch(`https://cumple-15-luli.vercel.app/${endpoint}.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    } catch (error) {
        notification("error", error);
    } 
}
