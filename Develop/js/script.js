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

var currentDay = dayjs().format("(MM/DD/YYYY)");
$("#currentDay").text(currentDay);


// step 1 fetch geo location and save data to varibale
// step 2 plug in variable name into template literal string

// var geolocation = fetch("geo location")

var geoLocation = cityUserInput.value

var requestGeocodeUrl = `https://api.openweathermap.org/data/2.5/forecast?q={city name},{state code},{country code}&appid=3484e08d51e803d19133758ad6e77ac5`;


var requestWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${geolocation}&lon=${geolocation}&appid=3484e08d51e803d19133758ad6e77ac5`;
var myName = "Allan"
var templateLiteralExample = `Hi my name is ${myName}`

console.log(templateLiteralExample);

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