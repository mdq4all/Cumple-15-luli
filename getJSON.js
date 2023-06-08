import notification from "./notification.js";

export default async function getJSON(endpoint) {
    try {
        const response = await fetch(`https://cumple-15-luli.vercel.app/${endpoint}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
          };
          return await response.json();
    } catch (error) {
        notification("error", error);
    }
  }