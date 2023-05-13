import notification from "./notification.js";

export default async function getJSON(endpoint) {
    try {
        const response = await fetch(`http://localhost:3000/${endpoint}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
          };
          return await response.json();
    } catch (error) {
        notification("error", error);
    }
  }