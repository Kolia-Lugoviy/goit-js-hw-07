import { galleryItems } from './gallery-items.js';



console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery')

const markup = galleryItems.map(({preview, original, description}) =>
 `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"

  />
</a>
</div>`).join("");

galleryContainer.insertAdjacentHTML('beforeend', markup);



galleryContainer.addEventListener('click', onClick)


function onClick(event) {
  event.preventDefault()

  if (event.target.nodeName !== "IMG") {
    return;
  }


  const instance = basicLightbox.create(`
<img src="${event.target.dataset.source}" width="400" height="600">
`)

instance.show()

galleryContainer.addEventListener('keydown', onEscape)

function onEscape(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}


};

