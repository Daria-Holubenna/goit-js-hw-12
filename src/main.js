import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import getImagesByQuery from './js/pixabay-api';
import createGallery from './js/render-functions';

const formData = document.querySelector('.form');
const inputSearch = document.querySelector('input[name="search-text"]');
const btnSubmit = document.querySelector('button[type="submit"]');
const gallery = document.querySelector('.gallery');

document.addEventListener('DOMContentLoaded', ()=> {
    validateInput();
});

formData.addEventListener('submit', ev => {
    ev.preventDefault();
    if (validateInput()) {
        getImagesByQuery(inputSearch.value);
        console.log(inputSearch.value);
// createGallery(data);
    } else {
        return iziToast.error({
            title: 'Поле не може бути порожнім',
            message: 'Будь ласка, введіть текст для пошуку.',
            position: 'topRight',
            timeout: 2000,
        });
    }
});

inputSearch.addEventListener('input', validateInput);

function validateInput() {
    if (inputSearch.value.trim() !== '') {
        btnSubmit.disabled = false;
        return true;
    } else {
        btnSubmit.disabled = true;
        return false;
    }
}
