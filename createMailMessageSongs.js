export function createMailMessageSongs (data) {

    let mailMessage = '';

    if (data != []) {
        data.map(element => {
            mailMessage += `${element.name} ha sugerido ${element.song} de ${element.artist}
                            `;
        })
      return mailMessage;

    } else  return mailMessage = "Aun no han sugerido ningun tema";
}