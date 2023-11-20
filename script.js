// script.js

const container = document.querySelector('.container');
const containerr = document.createElement('div');
container.className = 'row'; // Set the class for row layout


// Fetch data from Rest Countries API
fetch('https://restcountries.com/v3.1/name/Comoros')
  .then(response => response.json())
  .then(data => {
    // Process data and display cards
    data.forEach(country => {
      const card = createCountryCard1(country);
      container.appendChild(card);

      // Add button click event handler
      const button = card.querySelector('.btn-primary');
      button.addEventListener('click', () => {
        fetchWeatherData(country);
      });
    });
  });

function createCountryCard1(country) {
  const cardCount = 3; // Define the number of cards to create

for (let i = 0; i < cardCount; i++) {
  const card = document.createElement('div');
  card.className = 'card'; // Set the class for the card
  // Add card content and styles as needed
  container.appendChild(card); // Append the card to the container
}
const parentElement = document.getElementById('card-container'); // Replace with your parent element ID
parentElement.appendChild(container); // Add the row of cards to the parent element


  const card = document.createElement('div');
  card.className = 'card card-header card-body';
  card.className = 'row row-cols-1 row-cols-md-2'
  card.className = 'col mb-4'

  const cardTitle = document.createElement('h5');
  cardTitle.className = 'card-title';
  cardTitle.textContent = country.name.common;

  const cardImage = document.createElement('img');
  cardImage.src = country.flags.png;
  cardImage.alt = country.name.common;
  cardImage.className = 'img-fluid';

  const cardDetails = document.createElement('p');
  cardDetails.textContent = `Capital: ${country.capital} | Region: ${country.region} | Lat/Lng: ${country.latlng}`;

  const countryCodes = document.createElement('p');
  countryCodes.textContent = `Country Codes: ${country.cca2} - ${country.cca3}`;

  card.appendChild(cardTitle);
  card.appendChild(cardImage);
  card.appendChild(cardDetails);
  card.appendChild(countryCodes);

  const button = document.createElement('button');
  button.className = 'btn btn-primary';
  button.textContent = 'Click for weather';

  card.appendChild(button);

  return card;
}

function fetchWeatherData(country) {
  const apiKey = '0939f9b19ec18228f0b36f4e9bbad1f4';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${country.name.common}&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weatherData = {
        temperature: data.main.temp,
        description: data.weather[0].description
      };

      alert(`Current weather in ${country.name.common}: ${weatherData.temperature}°C - ${weatherData.description}`);
    });
}

fetch('https://restcountries.com/v3.1/name/Bulgaria')
  .then(response => response.json())
  .then(data => {
    // Process data and display cards
    data.forEach(country => {
      const card = createCountryCard1(country);
      container.appendChild(card);

      // Add button click event handler
      const button = card.querySelector('.btn-primary');
      button.addEventListener('click', () => {
        fetchWeatherData(country);
      });
    });
  });

function createCountryCard1(country) {
  const card = document.createElement('div');
  card.className = 'card card-header card-body';
  card.className = 'row row-cols-3 row-cols-md-3'
  card.className = 'col mb-4 mb-3'

  const cardTitle = document.createElement('h5');
  cardTitle.className = 'card-title';
  cardTitle.textContent = country.name.common;

  const cardImage = document.createElement('img');
  cardImage.src = country.flags.png;
  cardImage.alt = country.name.common;
  cardImage.className = 'img-fluid';

  const cardDetails = document.createElement('p');
  cardDetails.textContent = `Capital: ${country.capital} | Region: ${country.region} | Lat/Lng: ${country.latlng}`;

  const countryCodes = document.createElement('p');
  countryCodes.textContent = `Country Codes: ${country.cca2} - ${country.cca3}`;

  card.appendChild(cardTitle);
  card.appendChild(cardImage);
  card.appendChild(cardDetails);
  card.appendChild(countryCodes);

  const button = document.createElement('button');
  button.className = 'btn btn-primary';
  button.textContent = 'Click for weather';

  card.appendChild(button);

  return card;
}

fetch('https://restcountries.com/v3.1/name/Djibouti')
  .then(response => response.json())
  .then(data => {
    // Process data and display cards
    data.forEach(country => {
      const card = createCountryCard1(country);
      container.appendChild(card);

      // Add button click event handler
      const button = card.querySelector('.btn-primary');
      button.addEventListener('click', () => {
        fetchWeatherData(country);
      });
    });
  });
function createCountryCard1(country) {
  const card = document.createElement('div');
  card.className = 'card card-header card-body';
  card.className = 'row row-cols-3 row-cols-md-3'
  card.className = 'col mb-4 mb-3'

  const cardTitle = document.createElement('h5');
  cardTitle.className = 'card-title';
  cardTitle.textContent = country.name.common;

  const cardImage = document.createElement('img');
  cardImage.src = country.flags.png;
  cardImage.alt = country.name.common;
  cardImage.className = 'img-fluid';

  const cardDetails = document.createElement('p');
  cardDetails.textContent = `Capital: ${country.capital} | Region: ${country.region} | Lat/Lng: ${country.latlng}`;

  const countryCodes = document.createElement('p');
  countryCodes.textContent = `Country Codes: ${country.cca2} - ${country.cca3}`;

  card.appendChild(cardTitle);
  card.appendChild(cardImage);
  card.appendChild(cardDetails);
  card.appendChild(countryCodes);

  const button = document.createElement('button');
  button.className = 'btn btn-primary';
  button.textContent = 'Click for weather';

  card.appendChild(button);

  return card;
}
