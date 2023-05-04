var searchHistory=$("#search-history");
var cityUserInput=$(".city-input");
var citySearchBtn=$(".search");
var requestedWeather=$(".weather-display");
var weatherHeaderEl=$(".weather-header");
var futureForecast=$(".future-forecast");
var currentForecast=$("current-forecast");
var weatherTemperature=$("#temp");
var weatherWind=$("#wind");
var weatherHumidity=$("#humidity");



var currentDay = dayjs().format("MM/DD/YYYY");
$("#currentDay").text(currentDay);

var requestWeatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}id=3484e08d51e803d19133758ad6e77ac5&appid={API key}}';

function getApi(requestUrl) {
    fetch(requestUrl)
      .then(function (response) {
        console.log(response.status);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  }

getApi(requestWeatherUrl);