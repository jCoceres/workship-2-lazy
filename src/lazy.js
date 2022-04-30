
const isIntersecting = (entry) => {
    return entry.isIntersecting // true dentro de la pantalla
}
const LoadImage = (entry) => {
    const container = entry.target;
    const imagen = container.firstChild;
    const url = imagen.dataset.src
    imagen.src = url;
    observer.unobserve(container)
    console.log('hola')
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(LoadImage);
});
export const registerImage = (imagen) => {
    observer.observe(imagen)
}

