import itemsTemplate from "../templates/gallery-items.hbs";
import menu from "../menu.json"

const galleryRef = document.querySelector('.js-menu');

const markup = itemsTemplate(menu);

galleryRef.insertAdjacentHTML('afterbegin', markup);




