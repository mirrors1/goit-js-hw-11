const API_KEY = '47379272-a961c7172d29abe92af06f616';

export const searchParams = new URLSearchParams({
  key: API_KEY,
  q: 'yellow+flower',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
});

const BASE_URL = `https://pixabay.com/api/?${searchParams}`;

export function fetchData(url = BASE_URL, options = {}) {
  return fetch(url, options).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
