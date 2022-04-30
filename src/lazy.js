

const isIntersecting = (entry) => {
    return entry.isIntersecting // true dentro de la pantalla
}
const LoadImage = (entry) => {
    const container = entry.target;
    const imagen = container.firstChild;
    imagen.src = imagen.dataset.src;    
    observer.unobserve(container)
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(LoadImage);
});
export const registerImage = (image) => {
    observer.observe(image)
}
