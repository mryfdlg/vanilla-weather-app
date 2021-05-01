function formatDate (timestamp) {
let date = new Date(timestamp);
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let currentDay = days[date.getDay()];
let currentDate = date.getDate();
let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];
let currentMonth = months[date.getMonth()];
let currentHours = ("0" + date.getHours()).slice(-2);
let currentMinutes = ("0" + date.getMinutes()).slice(-2);
return `${currentDay} ${currentMonth} ${currentDate}, ${currentHours}:${currentMinutes}`;
}

function getForecast (coordinates) {
let apiKey = "fcdc838ee1dab066d3dcd7fb3d434327";
let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
axios.get(apiURL).then(displayForecast);
}


function displayTemperature(response) {
    let cityName = document.querySelector("#city");
    cityName.innerHTML = response.data.name;

    let temperatureDegrees = document.querySelector("#temperature");
    temperatureDegrees.innerHTML = Math.round(response.data.main.temp);

    let weatherDesc = document.querySelector("#weather-description");
    weatherDesc.innerHTML = response.data.weather[0].description;

    let humidityElement = document.querySelector("#humidity")
    humidityElement.innerHTML = response.data.main.humidity;

    let windElement = document.querySelector("#wind");
    windElement.innerHTML = Math.round(response.data.wind.speed);

    let dateElement = document.querySelector("#date");
    dateElement.innerHTML = formatDate(response.data.dt * 1000);

    let iconElement = document.querySelector("#icon");
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description);

    celsiusTemp = response.data.main.temp;

    getForecast (response.data.coord);

}
function search(city) {
let apiKey = "fcdc838ee1dab066d3dcd7fb3d434327";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
}
function displayFahrenheitTemp (event) {
    event.preventDefault();
    celsiusLink.classList.remove("active");
    fahrenheitLink.classList.add("active");
    let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
    let tempElement = document.querySelector("#temperature");
    tempElement.innerHTML = Math.round(fahrenheitTemp);
}
function displayCelsiusTemp(event) {
    event.preventDefault();
    celsiusLink.classList.add("active");
    fahrenheitLink.classList.remove("active");
    let tempElement = document.querySelector("#temperature");
    tempElement.innerHTML = Math.round(celsiusTemp);
}

let celsiusTemp = null;

  let form = document.querySelector("#form-input");
  form.addEventListener("submit", handleSubmit);

  let fahrenheitLink = document.querySelector("#fahrenheit");
  fahrenheitLink.addEventListener("click", displayFahrenheitTemp);

  let celsiusLink = document.querySelector("#celsius");
  celsiusLink.addEventListener("click", displayCelsiusTemp);

  search("Toronto");

  function displayForecast() {
      let forecastElement  = document.querySelector("#forecast");
      let forecastHTML = `<div class="row">`;
      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
      days.forEach(function(day) {
      forecastHTML = forecastHTML + 
      `
        <div class="col-2">
          <div class="days-of-week">${day}</div>
          <img src="http://openweathermap.org/img/wn/01d.png" alt=""/>
          <div class="temp-for-week">22°C</div>
        </div>
    `
      });
      forecastHTML = forecastHTML + `</div>`;
      forecastElement.innerHTML = forecastHTML;
  }