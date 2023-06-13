
import notification from './notification.js';
import { createMailMessage } from './createMailMessage.js';
import { addData, readFS } from './firestore.js';

const formularioConfirmacion = () => {
    
    const form = document.querySelector('#form_attendance');

    form.addEventListener('submit', function(event) {
        
        event.preventDefault();
//--------captura el boton para modificar el value cuanda en via el mail--------------------
        const btn = document.getElementById('button_submit_confirmation');
//--------captura el textArea que sera el cuerpo del mail dinamciamente---------------------        
        const mailMessage = document.getElementById('message');
//----------------el endpoint que nos indica donde se alojara la data-----------------------        
        const endpoint = "invitados";
        
        //----------------------------Evita el nombre vacio-----------------------------------
        if (event.target.name.value === "") {
            const emptyName = document.querySelector("#error_input");
            emptyName.style.opacity = "1";
            setTimeout(() => {
                emptyName.style.opacity = "0";
            }, 3000);
            return
        }
        btn.value = 'Enviando...';
//-------------------Obtiene la data de firestore y crea el cuerpo del mail-----------------  
            readFS(endpoint)
            .then (res => {
              mailMessage.value = createMailMessage(res);

//-----------------------Inicio de servicio de Email JS--------------------------------------
//-----------------------const por default que provee Email JS-------------------------------
              const serviceID = 'default_service';
              const templateID = 'service_5dwzphp';
 //----------------------envia el formulario, codigo por default de Email JS-------------------             
              emailjs.sendForm(serviceID, templateID, this)
              .then(() => {
                btn.value = 'Confirmar';
//------------------------Crea el objeto Data que enviara a firestore-------------------------
                const data = {
                  name: event.target.name.value,
                  members: event.target.members.value,
                  }; 
//-----------------------------Envia el objeto a firestore------------------------------------
                addData(data, endpoint).then (() => {
                    notification("success", "Confirmacion enviada");
                  })
                  .catch ((error) => {
                    notification("error", "Error - " + error);
                  });
              })
              .catch ((error) => {
                console.log("error en sendMail")
                notification("error", "Error - " + error)
                })
            })
            .catch (error => console.log(error, "error obteniendo DATA"));
    });
 
 }
export default formularioConfirmacion;