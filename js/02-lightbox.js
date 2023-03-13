import { galleryItems } from './gallery-items.js';






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


let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });




