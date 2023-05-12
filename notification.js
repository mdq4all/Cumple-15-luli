const notification = (classContainers, paragraph) => {

    const notificationScreen = document.querySelector("#notification");
    notificationScreen.classList.add("modal_in_out");

    const container = document.querySelector("#container_notification");
    container.classList.add(`${classContainers}_modal`)
    
    const contentModal = `
                    <img src="./img/icons8-${classContainers}-48.png">
                    <p>${paragraph}</p>`
    container.innerHTML = contentModal;
    
    setTimeout(() => {
        notificationScreen.classList.remove("modal_in_out");
    }, 3000);
   
}
export default notification;