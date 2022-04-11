const url = "./assets/portfolio.json";
const result = document.querySelector(".js-result");
const form = document.querySelector(".js-form");
const signSelection = document.querySelector(".signSelector");

function getZodiacSignMarkup(zodiacSign) {
    return `
    <li class="col-md-4 zodiac-box zodiac-box-container">
        <div class="zodiac-box-item">
            <img class="zodiacSign-img" src="assets/star-sign-${zodiacSign.name}.jpg" />
        </div>
        <div class="zodiac-box-item zodiac-box-text">
            <div class="zodiac-box-header">
                <h2>${zodiacSign.name}</h2>
                <h4>${zodiacSign.months}</h4>
            </div>
            <div class="signTraits-container">
                <div class="signTraitType">
                    <h4 class="pos">Positive Traits</h4>
                    <p>${zodiacSign.posTraits}</p>
                </div>
                <div class="signTraitType">
                    <h4 class="neg">Negative Traits</h4>
                    <p>${zodiacSign.negTraits}</p>
                </div>
            </div>
        </div>
    </li>
    `;
}

function displayProjectsJson(projects) {
    let selectedSign = signSelection.value;
    let html = '';
    if (selectedSign === 'All') {
        for (let zodiacSign of zodiacSigns.zodiacSigns) {
            html += getZodiacSignMarkup(zodiacSign);
        }
    } 
    else {
        for (let zodiacSign of zodiacSigns.zodiacSigns) {
            if (zodiacSign.name === selectedSign) {
                html += getZodiacSignMarkup(zodiacSign);
                break;
            }
        }
    }
    result.innerHTML = html;
}

function errorHandling() {
    let error = document.querySelector(".js-error");
    error.innerHTML = `
        <h1>Error!</h1>
        <p>Please wait a few minutes before refreshing the page and trying again</p>
    `;

}

function displayProjectsData() {
    fetch(url)
    .then(function (res) {
        return res.json()
    }).then(displayProjectsJson)
    .catch(errorHandling);  
}  

function handleChanged(event) {
    event.preventDefault();
    displayProjectsData();
}

form.addEventListener('change', handleChanged);
