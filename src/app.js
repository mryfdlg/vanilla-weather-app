function showWeatherInfo(response) {
  document.querySelector("#city-name").innerHTML = response.data.name;
  document.querySelector("#temperature-degrees").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#weather-description").innerHTML =
    response.data.weather[0].description;
  document.querySelector(
    "#precipitation"
  ).innerHTML = `Precipitation: ${response.data.main.precipitation}%`;
  document.querySelector("#wind").innerHTML = `Wind: ${Math.round(
    response.data.wind.speed
  )} km/h`;
}
function citySearch(city) {
  let apiKey = "fcdc838ee1dab066d3dcd7fb3d434327";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeatherInfo);
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  citySearch(city);
}
let searchedCity = document.querySelector("#form-input");
searchedCity.addEventListener("submit", handleSubmit);

function searchLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "fcdc838ee1dab066d3dcd7fb3d434327";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeatherInfo);
  axios.get(apiUrl).then(citySearch);
}

let now = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let currentDate = days[now.getDay()];
let currentHours = ("0" + now.getHours()).slice(-2);
let currentMinutes = ("0" + now.getMinutes()).slice(-2);

let dateTime = document.querySelector("#date");
dateTime.innerHTML = `${currentDate} ${currentHours}:${currentMinutes}`;