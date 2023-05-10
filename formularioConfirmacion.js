
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import handleSubmit from './handleSubmit.js';

const form = document.querySelector("#form_attendance");
const endpoint = "invitados";

const formularioConfirmacion = () => {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        if (e.target.name.value === "") {
            const errorMessage = document.querySelector("#error_input");
            errorMessage.style.display = "block";
            return;
        }
        const data = {
             id: uuidv4(),
             name: e.target.name.value,
             memebrs: e.target.members.value,
        }
        form.classList.add("exit_anim");
        handleSubmit(data, endpoint);
    });
    
    
}
export default formularioConfirmacion;