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
function displayTemperature(response) {
    console.log(response.data);
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
}
  let apiKey = "fcdc838ee1dab066d3dcd7fb3d434327";
  let city = "Lisbon";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);