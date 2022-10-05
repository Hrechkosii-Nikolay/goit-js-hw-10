import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchCountries from './fetchCountries';
import markupCountrysList from './markupCountrysList';
import markupCountry from './markupCountry';

const DEBOUNCE_DELAY = 300;
const refs = {
  input: document.getElementById('search-box'),
  countrysList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(onInputWrite, DEBOUNCE_DELAY));

function onInputWrite(event) {
  if (event.target.value.trim() === '') {
    refs.countrysList.innerHTML = '';
    refs.countryInfo.innerHTML = '';
    return;
  }
  fetchCountries(event.target.value.trim())
    .then(res => makeMarkup(res))
    .catch(err => console.log(err.messagr));
}

function makeMarkup(countrys) {
  if (countrys.length > 10) {
    refs.countryInfo.innerHTML = '';
    refs.countrysList.innerHTML = '';
    Notify.info('Too many matches found. Please enter a more specific name.');
  } else if (countrys.length === 1) {
    refs.countryInfo.innerHTML = markupCountry(countrys);
    refs.countrysList.innerHTML = '';
  } else {
    refs.countryInfo.innerHTML = '';
    refs.countrysList.innerHTML = markupCountrysList(countrys);
  }
}
