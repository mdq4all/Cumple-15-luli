import addJSON from './addJSON.js';
import getJSON from './getJSON.js';
import sendMail from './sendMail.js';

const handleSubmit = (data, endpoint) => {

    addJSON(data, endpoint)
    .then(() => getJSON(endpoint))
    .then((res) => {
        let mailBody = "";
        res.map(element => {
            mailBody += 
            `${element.name} ha confirmado con ${element.memebrs} participantes
            `;
        });
        console.log(mailBody);
        sendMail(mailBody);
    })
    .catch((error) => {
        console.error(error);
    });
}
export default handleSubmit;