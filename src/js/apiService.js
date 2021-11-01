import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '24011723-51ecfad92349740cba3768f0d';

export async function fetchImg(searchQuery, page) {
  const response = await fetch(
    BASE_URL +
      `?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${API_KEY}`,
  );
  return await response.json();
}
