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

function getWeatherAPI (requestWeatherUrl){
  fetch(requestWeatherUrl)
      .then(function (response) 
      {
        console.log(response.status);
        return response.json();
      })
      .then(function (data) {
        console.log(data)
      })
}

function getApi(requestUrl) {
    fetch(requestUrl)
      .then(function (response) 
      {
        console.log(response.status);
        return response.json();
      })
      .then(function (data) 
      {

        var geoLocationLat=data.city.coord.lat

        var geoLocationLon=data.city.coord.lon 

        var requestWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${geoLocationLat}&lon=${geoLocationLon}&appid=3484e08d51e803d19133758ad6e77ac5`;
        getWeatherAPI(requestWeatherUrl) 
      }  
      )};


 function userSearch()
{
  cityName = $(cityUserInput).val()
  localStorage.setItem('city',cityName); 
}

citySearchBtn.on('click', function (){
  userSearch(); 
var requestGeocodeUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=3484e08d51e803d19133758ad6e77ac5`;

getApi(requestGeocodeUrl);


})

