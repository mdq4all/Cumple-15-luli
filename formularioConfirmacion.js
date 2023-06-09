
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import getJSON from './getJSON.js';
import addJSON from './addJSON.js';
import notification from './notification.js';
import { createMailMessage } from './createMailMessage.js';

const formularioConfirmacion = () => {
    
    const form = document.querySelector('#form_attendance');

    form.addEventListener('submit', async function(event) {
        
        event.preventDefault();

        const endpoint = "guests";
        const btn = document.getElementById('button_submit_confirmation');
        const mailMessage = document.getElementById('message').value;
        
        if (event.target.name.value === "") {
            const emptyName = document.querySelector("#error_input");
            emptyName.style.opacity = "1";
            setTimeout(() => {
                emptyName.style.opacity = "0";
            }, 3000);
            return
        }
        btn.value = 'Enviando...';

        try {
            const res = await getJSON(endpoint);
            console.log(res)
            mailMessage = createMailMessage(res);
            console.log(mailMessage);
            //res.map(element => {
                // mailMessage.value += 
                // `${element.name} ha confirmado con ${element.members} participantes
                // `;
            //});
            console.log("mailMessage ", mailMessage.value);
            const serviceID = 'default_service';
            const templateID = 'service_5dwzphp';
    
            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                btn.value = 'Confirmar';
                const data = {
                             id: uuidv4(),
                             name: event.target.name.value,
                             members: event.target.members.value,
                        };  
                        console.log(data);
                notification("success", "Confirmacion enviada");
                setTimeout(() => addJSON(data, endpoint), 4000); 
                }, (err) => {
                btn.value = 'Confirmar';
                notification("error", "Error - " + err);
                });
            

        } catch (error) {
            notification("error", "Se ha producido un error en get - intenta mas tarde");
        }

    });
 
 }
export default formularioConfirmacion;