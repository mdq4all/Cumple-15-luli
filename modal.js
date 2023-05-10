const modal = () => {
    const btnClose = document.querySelector("#button_close_modal");
    const form = document.querySelector("#form_attendance")
    const modalContainer = document.querySelector("#modal_container");
    
       
        modalContainer.classList.add("open_modal");
        if (form.classList.contains("exit_anim"))  {
            form.classList.remove("exit_anim");
        };

    
    const closeModal = () => {
        form.classList.add("exit_anim");
        
        form.addEventListener('animationend', function removeModalContainer () {
            modalContainer.classList.remove("open_modal");
            form.removeEventListener("animationend", removeModalContainer);
            form.classList.remove("exit_anim");
            
            });
    }

    modalContainer.addEventListener("click", (e) => {
        if(e.target === modalContainer)
            closeModal();
        e.stopPropagation();
    });
    btnClose.addEventListener("click", (e) => {
        e.preventDefault();
        closeModal();
    });
}

export default modal;
