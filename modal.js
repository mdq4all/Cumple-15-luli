const modal = () => {
    const btn = document.querySelector("#button_attendance");
    const btnClose = document.querySelector("#button_close_modal");
    const form = document.querySelector("#form_attendance")
    
    btn.addEventListener("click", () => {
        const modalContainer = document.querySelector("#modal_container");
        
        modalContainer.classList.add("open_modal");
        if (form.classList.contains("exit_anim"))  {
            form.classList.remove("exit_anim");
        };
    })
    
    btnClose.addEventListener("click", (e) => {
        e.preventDefault();
        
        const modalContainer = document.querySelector("#modal_container");
        form.classList.add("exit_anim");
        
        form.addEventListener('animationend', function removeModalContainer () {
            modalContainer.classList.remove("open_modal");
            form.removeEventListener("animationend", removeModalContainer);
            form.classList.remove("exit_anim");
        });
    });
}

export default modal;
