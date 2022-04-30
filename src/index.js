import { registerImage } from "./lazy";

const images = document.querySelector('#images');

// const url = "https://randomfox.ca/floof/"
// window.fetch(url)
// .then( respuesta => respuesta.json() )
// .then(({data}) => {
//     console.log(data)
//     // data.forEach( item => {
//     //     console.log (item)
//     // })
//     // console.log(data)
// })
const addFox = () => {
    return (Math.floor((Math.random() * 125) + 1));
}
const createImageNode = () => {
    const container = document.createElement('div');
    const img = document.createElement('img');
    img.dataset.src = `https://randomfox.ca/images/${addFox()}.jpg`;
    img.width = '320';
    img.className = 'mx-auto rounded-md bg-gray-300'
    img.alt = "";
    container.appendChild(img);
    container.className = "p-4";
    return container;

}
const addImage = () => {
    const newImage = createImageNode();
    images.appendChild(newImage);
    registerImage(newImage);
}
const addButton = document.querySelector('button')
addButton.addEventListener('click', addImage)

const removeImage = () => {
    return images.innerHTML = ""
}

const deleteButton = document.querySelector('#clear')
deleteButton.addEventListener('click', removeImage)








// images.appendChild(addFox);

