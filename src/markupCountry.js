export default function markupCountry(countrys) {
  return countrys
    .map(({ flag, name, capital, population, languages }) => {
      const languagesArr = [];
      languages.map(el => languagesArr.push(Object.values(el)));

      return ` <img class="img-flag" src='${flag}' alt='flag' />
        <h1>${name}</h1>
        <p><b>Capital:</b> ${capital}</p>
        <p><b>Population:</b> ${population}</p>
        <p><b>Languages:</b> ${languagesArr[0].join(', ')}</p>
        `;
    })
    .join('');
}
