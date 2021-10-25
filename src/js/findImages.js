import { fetchImg } from './apiService.js';
import refs from './refs.js';
const { formEl, listEl, loadMoreBtn } = refs;
import template from '../templateCountryCard.hbs';
// ------------------------------------------
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
// ------------------------------------------

let page = 1;
let currentValue = '';

formEl.addEventListener('submit', event => {
  event.preventDefault();
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


function createImgCards(result) {
  listEl.insertAdjacentHTML('beforeend', template(result.hits));
}

function cardsBuilder() {
  fetchImg(currentValue, page).then(result => {
    if (result.total === 0) {
      error("We don't have such a picture");
    }
    createImgCards(result);
  });
  page += 1;
}
