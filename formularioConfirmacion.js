
const formularioConfirmacion = () => {

    const form = document.querySelector("#form_attendance");

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const memebrs = e.target.members.value;
        if (name === "") {
            const errorMessage = document.querySelector("#error_input");
            errorMessage.style.display = "block";
            return;
        }
        //TODO enviar data
    })

}
export default formularioConfirmacion;