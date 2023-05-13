import addJSON from "./addJSON.js";
import getJSON from "./getJSON.js";
import notification from "./notification.js";

const formularioCanciones = () => {

    const form = document.querySelector("#form_song");
    
    form.addEventListener("submit", async function(event) {
        
        event.preventDefault();

        const btn = document.querySelector("#button_submit_song");
        const mailMessage = document.querySelector('#messageSong');
        const endpoint = "canciones";

        // Muestra el mensaje de error en los input
        function showErrorInput (classInput) {
            const emptyInput = document.querySelector(classInput);
            emptyInput.style.display = "block";
            setTimeout(() => emptyInput.style.display = "none", 3000);
        };

        // Valida los input que no esten vacios
        if (event.target.name.value === "" || event.target.song.value === "") {
                if(event.target.name.value === "")
                    showErrorInput("#error_input_name");
                else {   
                    console.log("estoy aqui");
                    showErrorInput("#error_input_song");
                }
                return;
        }
        if (!event.target.artist.value) event.target.artist.value = "no lo recuerda.";
 
        try {
            const data = await getJSON(endpoint);
            if (data != []) {
                data.map(element => {
                    mailMessage.value += `${element.name} ha sugerido ${element.song} de ${element.artist}
                                    `;
                })
            } else mailMessage.value = "Aun no han sugerido ningun tema";

            btn.value = 'Enviando...';

            const serviceID = 'default_service';
            const templateID = 'template_v01ooep';
         
            emailjs.sendForm(serviceID, templateID, this)
             .then(() => {
                const data = {
                    name: event.target.name.value,
                    song: event.target.song.value,
                    artist: event.target.artist.value || "no lo recuerda."
                }
               btn.value = 'Enviar al DJ!';
               notification("success", "Confirmacion enviada");
               setTimeout(() => addJSON(data, endpoint), 4000);
             }, (err) => {
               btn.value = 'Enviar al DJ!';
               notification("error", "Error - " + err);
             });

        } catch (error) {
            notification("error", error);
        }
    });
}
export default formularioCanciones;