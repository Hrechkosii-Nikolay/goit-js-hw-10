import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function fetchCountries(name) {
  if (name.trim() === '') {
    return;
  }
  const BASE_URL = 'https://restcountries.com/v2/';
  const END_POINT = 'name/';
  return fetch(
    `${BASE_URL}${END_POINT}${name}?capital,currencies,name.official,population,flags.svg,languages`
  ).then(res => {
    if (res.ok === false) {
      Notify.failure('Oops, there is no country with that name');
    }
    return res.json();
  });
}
