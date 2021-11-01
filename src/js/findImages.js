import { fetchImg } from './apiService.js';
import refs from './refs.js';
const { formEl, listEl, loadMoreBtn } = refs;
import template from '../templateCountryCard.hbs';
// ------------------------------------------
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
// ------------------------------------------
import * as basicLightbox from 'basiclightbox';

let page = 1;
let currentValue = '';

formEl.addEventListener('submit', event => {
  event.preventDefault();
  loadMoreBtn.classList.remove('hidden');
  listEl.innerHTML = '';
  page = 1;
  currentValue = event.target.elements.query.value;

  if (currentValue.length === 0) {
    error('Enter text');
  } else {
    cardsBuilder();
    formEl.reset();
  }

  loadMoreBtn.addEventListener('click', () => cardsBuilder());
});

listEl.addEventListener('click', event => {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  getModalLightbox(event);
});

function createImgCards(result) {
  listEl.insertAdjacentHTML('beforeend', template(result.hits));
}

async function cardsBuilder() {
  try {
    const result = await fetchImg(currentValue, page);
    if (result.total === 0) {
      error("We don't have such a picture");
    }
    createImgCards(result);
    scrollNextImg();
    page += 1;
  } catch {
    error('Ошибка парса');
  }
}

function scrollNextImg() {
  listEl.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}

function getModalLightbox(event) {
  return basicLightbox
    .create(`<img src="${event.target.dataset.largeimg}" alt="${event.target.alt}">`)
    .show();
}
