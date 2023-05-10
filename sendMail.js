 const sendMail = (body) => {
    fetch("https://formsubmit.co/ajax/mdq4all@gmail.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    body: JSON.stringify(body)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

export default sendMail;