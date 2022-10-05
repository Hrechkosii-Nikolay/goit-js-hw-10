export default function markupCountrysList(countrys) {
  return countrys
    .map(({ flag, name }) => {
      return `<li class='country-list-element'>
      <img class="img-flag" src='${flag}' alt='flag' />
      <p>${name}</p>
    </li>`;
    })
    .join('');
}
