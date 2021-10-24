import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '24011723-51ecfad92349740cba3768f0d';


export function fetchImg(searchQuery, page) {
  return fetch(BASE_URL + `?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${API_KEY}`)
    
    .then(response => response.json())
    .catch(error => error);
}

