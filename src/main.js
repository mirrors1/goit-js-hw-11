import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconRejected from './img/bi_x-octagon.png';

import { fetchData, searchParams } from './js/pixabay-api';
import { createMarkup, lightbox } from './js/render-functions';

const form = document.querySelector('.form');
const container = document.querySelector('.list');

form.addEventListener('submit', searchPicture);

function searchPicture(event) {
  event.preventDefault();
  const searchMsg = event.target.elements.message.value.trim();
  if (!searchMsg) {
    return;
  }
  container.innerHTML = '<span class="loader"></span>';

  searchParams.set('q', searchMsg);
  const BASE_URL = `https://pixabay.com/api/2?${searchParams}`;

  fetchData(BASE_URL)
    .then(data => {
      if (!data.total) {
        iziToast.show({
          theme: 'dark',
          iconUrl: iconRejected,
          backgroundColor: '#EF4040',
          message: `Sorry, there are no images matching your search query. Please try again!`,
          messageSize: '16px',
          messageLineHeight: '150%',
          position: 'topRight',
          maxWidth: '354px',
        });
        container.innerHTML = '';
        return;
      }
      container.innerHTML = createMarkup(data.hits);
      lightbox.refresh();
    })
    .catch(error => {
      iziToast.show({
        theme: 'dark',
        iconUrl: iconRejected,
        backgroundColor: '#EF4040',
        message: `Error: ${error.message}`,
        messageSize: '16px',
        messageLineHeight: '150%',
        position: 'topRight',
        maxWidth: '354px',
      });
      container.innerHTML = '';
    })
    .finally(() => {
      event.target.reset();
    });
}
