export function createMailMessage (res) {
    let mailMessage = '';
    res.map(element => {
        mailMessage += 
        `${element.name} ha confirmado con ${element.members} participantes
        `;
    });
    return mailMessage;
}