function dqs(cssSelector) {
  return document.querySelector(cssSelector);
}

const signsImagesObj = {
  aries:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Aries.svg/372px-Aries.svg.png",
  taurus:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Taurus.svg/338px-Taurus.svg.png"
};

// grab the sign
const selectElement = dqs("[name=sign]");
// console.dir(selectElement);

// when someone clicks submit, get the value
// listen to the click on the submit button
//  1. grab the submit button
const formEl = dqs("form");
//  2. add event listener to it
// * submit only fires on a form
// * the button will only fire a click event
formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  // event.preventDefault() will stop a "submit" event from causing a reload
  event.preventDefault();

  const zodiacSign = selectElement.value;
  console.log("🌟🚨: zodiacSign", zodiacSign);

  // fetch some data!!!
  fetch("http://horoscope-lhl.herokuapp.com/horoscopes/" + zodiacSign)
    .then(function(data) {
      const jsondData = data.json();
      return jsondData;
    })
    .then(data => {
      // display the data!!!

      const contentDiv = dqs(".content");

      contentDiv.style.display = "block";

      const date = data.date;
      const horoscope = data.horoscope;
      const sign = data.sign;

      const signImageSrc = signsImagesObj[sign];
      // destructuring
      // const {date, horoscope, sign} = data

      const contentTemplate = `

      <div class="signImage"><img src="${signImageSrc}"></div>
      <div class="date">${date}</div>
      <div class="horoscope">${horoscope}</div>
      `;

      contentDiv.innerHTML = contentTemplate;
    });
}
