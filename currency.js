const userInput = document.querySelector('#userInput');
let currenciesEl = document.querySelector('.currencies');
let mmkResult = '';
let bahtResult = '';
let yenResult = '';

let currencyRates = {
  mmk: 1851.26,
  baht: 36.07,
  yen: 135.78,
};

let currencyCountries = ['mmk', 'baht', 'yen'];
// reserved keywords

{
  /* <div class='card'>
  <p class='title'>Myanmar Kyat</p>
  <p class='value'>1 usd = 1000 mmk</p>
</div>; */
}

function convert() {
  const value = userInput.value;
  console.log('convert', userInput.value);
  mmkResult = value * currencyRates.mmk;
  bahtResult = value * currencyRates.baht;
  yenResult = value * currencyRates.yen;
  let results = [mmkResult, bahtResult, yenResult];
  let title = ['Myanmar Kyats', 'Thai Baht', 'Japanese Yen'];
  let cardDOM = '';
  for (let i = 0; i < currencyCountries.length; i++) {
    // Result Card
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    const titleP = document.createElement('p');
    titleP.classList.add('title');
    titleP.textContent = title[i];
    cardDiv.appendChild(titleP);
    const valueP = document.createElement('p');
    valueP.classList.add('value');
    valueP.textContent = results[i];

    cardDiv.appendChild(valueP);
    currenciesEl.appendChild(cardDiv);
  }
}

// convert string to number
Number('1000'); // 1000
// cut decimal place
const rate = 1859.668;
rate.toFixed(2); //1859.66
