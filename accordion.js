const accordion = () => {

    const btn = document.querySelector("#button_accordion");

    btn.addEventListener("click", () => {
        btn.nextElementSibling.classList.toggle("show_content_accordion");
    });
};
export default accordion;