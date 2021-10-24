import { fetchImg } from './apiService.js';
import refs from './refs.js';
const { formEl, listEl, loadMoreBtn } = refs;
// ------------------------------------------
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
// ------------------------------------------

let page = 1;
let currentValue = '';

formEl.addEventListener('submit', event => {
  event.preventDefault();
  currentValue = event.target.elements.query.value;
  fetchImg(currentValue, page).then(result => {
      console.log(result);
  });



  formEl.reset()
});
