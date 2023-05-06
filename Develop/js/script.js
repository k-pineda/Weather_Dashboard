var searchHistory=$("#search-history");
var cityUserInput=$(".city-input");
var citySearchBtn=$(".search");
var requestedWeather=$(".weather-display");
var weatherHeaderEl=$(".weather-header");
var futureForecast=$(".future-forecast");
var currentForecast=$("current-forecast");
var weatherTemperature=$("#current-temp");
var weatherWind=$("#wind");
var weatherHumidity=$("#humidity");

var weatherImg=$("img")

function getWeatherAPI (requestWeatherUrl){
  fetch(requestWeatherUrl)
      .then(function (response) 
      {
        console.log(response.status);
        return response.json();
      })
      .then(function (data) {
        var currentCity=data.city.name
        var currentDayForecast_DT=data.list[0].dt_txt
        var firstDayForecast=dayjs(currentDayForecast_DT).format("(MM/DD/YYYY)")
        var currentDayForecast_Icon=data.list[0].weather[0].icon
        var currentDayForecast_Temp=data.list[0].temp
        var currentDayForecast_Wind=data.list[0].wind.speed
        var currentDayForecast_Humidity=data.list[0].humidity


        var weatherIconUrl=`https://openweathermap.org/img/wn/${currentDayForecast_Icon}@2x.png`
        
        $("#icon").attr("src",weatherIconUrl)

        $(".weather-header h2").append(currentCity + " " + firstDayForecast)

        weatherTemperature.textContent= `Temp:${currentDayForecast_Temp}°F`

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

weatherTemperature.textContent = "hello";



})

