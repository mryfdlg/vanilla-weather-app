function displayTemperature(response) {
    console.log(response.data);
    let cityName = document.querySelector("#city");
    cityName.innerHTML = response.data.name;
    let temperatureDegrees = document.querySelector("#temperature");
    temperatureDegrees.innerHTML = Math.round(response.data.main.temp);
    let weatherDesc = document.querySelector("#weather-description");
    weatherDesc.innerHTML = response.data.weather[0].description;
}
  let apiKey = "fcdc838ee1dab066d3dcd7fb3d434327";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);

let now = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let currentDay = days[now.getDay()];
let currentDate = now.getDates();
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
let currentMonth = months[now.getMonth()];
let currentHours = ("0" + now.getHours()).slice(-2);
let currentMinutes = ("0" + now.getMinutes()).slice(-2);

let dateTime = document.querySelector("#date");
dateTime.innerHTML = `${currentDay} ${currentMonth} ${currentDate}, ${currentHours}:${currentMinutes}`;