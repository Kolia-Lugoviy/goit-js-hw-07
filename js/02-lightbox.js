import { galleryItems } from './gallery-items.js';



console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery')

const markup = galleryItems.map(({preview, original, description}) =>
 `<a class="gallery__item" href="${original}">
 <img 
 class="gallery__image" 
 src="${preview}" 
 alt="${description}" 
 />
</a>`).join("");

galleryContainer.insertAdjacentHTML('beforeend', markup);




galleryContainer.addEventListener('click', onClick)



function onClick(event) {
  event.preventDefault()

  if (event.target.nodeName !== "IMG") {
    return;
  }


 let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

};






