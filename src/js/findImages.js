import {fetchImg} from './apiService.js';
import refs from './refs.js';
const{formEl, listEl} = refs;
// ------------------------------------------
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
// ------------------------------------------


console.log(fetchImg("cat", 1));
