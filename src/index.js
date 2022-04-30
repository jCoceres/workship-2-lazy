import { registerImage } from "./lazy";

const images = document.querySelector('#images');

const addFox = () => {
    return (Math.floor((Math.random() * 125) + 1));
}
const createImageNode = () => {
    const container = document.createElement('div');
    const img = document.createElement('img');
    img.alt = "";
    img.className = 'mx-auto rounded-md bg-gray-300';
    image.src ="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=";
    img.dataset.src = `https://randomfox.ca/images/${addFox()}.jpg`;
    img.width = '320';
    container.appendChild(img);
    container.className = "p-4";
    return container;

}
const addImage = () => {
    const newImage = createImageNode();
    registerImage(newImage);
    images.appendChild(newImage);
}
const addButton = document.querySelector('button')
addButton.addEventListener('click', addImage)

const removeImage = () => {
    return images.innerHTML = ""
}

const deleteButton = document.querySelector('#clear')
deleteButton.addEventListener('click', removeImage)








// images.appendChild(addFox);

