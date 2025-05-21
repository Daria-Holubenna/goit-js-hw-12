import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
const galleryLib = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

const galleryList = document.querySelector('.gallery');


export default function createGallery(images) {
    // Ця функція повинна приймати масив images, створювати HTML - розмітку для галереї, додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh().Нічого не повертає.

    const markup = images
    console.log(images)
    .map(image => {
       const keysToShow = ['likes', 'views', 'comments', 'downloads'];
       const infoMarkup = keysToShow
        .map(key =>`<p class="info-item">${capitalizeFirstLetter(key)}:<span class="info">${image[key]}</span></p>`)
        .join('');
      return `<li class="image-item">
    <a href="${image.largeImageURL}" title="${image.tags}">
    <img src="${image.webformatURL}" 
    alt="${image.tags}"
    />
    </a>
    <div class="gallery-info">
    ${infoMarkup}
    </div>
    </li>`;
    })
    .join('');
  galleryList.insertAdjacentHTML('beforeend', markup);
  galleryLib.refresh();
}

function capitalizeFirstLetter(string){
    if(!string){
        return string
    }
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
function clearGallery() {
    // Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
}
function showLoader() {
    // Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
}
function hideLoader() {
    // Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.
}
function showLoadMoreButton() {
    // Ця функція нічого не приймає, повинна додавати клас для відображення кнопки Load more. Нічого не повертає.
}
function hideLoadMoreButton() {
    // Ця функція нічого не приймає, повинна прибирати клас для відображення кнопки Load more. Нічого не повертає.
} 