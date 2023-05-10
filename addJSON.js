export default async function addJSON (data, endpoint) {
    try {
        const response = await fetch(`http://localhost:3000/${endpoint}`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
       
    } catch (error) {
        console.log(error);
    }
}