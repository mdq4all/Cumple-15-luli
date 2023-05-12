import notification from "./notification.js";

export default async function addJSON (data, endpoint) {
    try {
        await fetch(`http://localhost:3000/${endpoint}`, {
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
