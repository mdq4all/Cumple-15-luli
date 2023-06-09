export function createMailMessage (res) {
    let mailMessage = '';
    res.map(element => {
        mailMessage += 
        `${element.name} ha confirmado con ${element.members} participantes
        `;
    });
    console.log(mailMessage);
    return mailMessage;
}