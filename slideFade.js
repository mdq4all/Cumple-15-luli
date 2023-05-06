
function slideFade (images, container, interval = 4000) {
    let position = 0
    setInterval(() => {
            container.innerHTML = "";
            position++;
            if (position >= images.length)
            position = 0;
            const img = `<img  class="imagen-principal fade" id="imagen-principal" src="${images[position]}">`;
            container.innerHTML = img;
        }, interval);
}

export default slideFade;