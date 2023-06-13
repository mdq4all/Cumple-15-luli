import { createMailMessageSongs } from "./createMailMessageSongs.js";
import { addData, readFS } from "./firestore.js";
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

//-------------------Obtiene la data de firestore y crea el cuerpo del mail-----------------  
        readFS(endpoint)
            .then(res => {
                mailMessage.value = createMailMessageSongs(res);
                btn.value = 'Enviando...';
  
//-----------------------Inicio de servicio de Email JS--------------------------------------
//-----------------------const por default que provee Email JS-------------------------------  
                const serviceID = 'default_service';
                const templateID = 'template_v01ooep';

//----------------------envia el formulario, codigo por default de Email JS-------------------             
                emailjs.sendForm(serviceID, templateID, this)
                 .then(() => {
//------------------------Crea el objeto Data que enviara a firestore-------------------------
                    const data = {
                        name: event.target.name.value,
                        song: event.target.song.value,
                        artist: event.target.artist.value || "no lo recuerda."
                    }
                   btn.value = 'Enviar al DJ!';
//-----------------------------Envia el objeto a firestore------------------------------------                   
                   addData(data, endpoint).then (() => {
                    notification("success", "Cancion enviada");
                  })
                  .catch ((error) => {
                    notification("error", "Error - " + error);
                  });
                })
                .catch ((err) => {
                   notification("error", "Error - " + err);
                 });
            })
            .catch(error => {console.log("error read", error)});
       });
}
export default formularioCanciones;