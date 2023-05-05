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

var geolocation = fetch(cityUserInput.val)

// var geoLocation = cityUserInput.value

console.log(geoLocation)

var exampleGeo= `http://api.openweathermap.org/geo/1.0/direct?q=Miami&limit=1&appid=3484e08d51e803d19133758ad6e77ac5`

// var requestGeocodeUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${geoLocation}&appid=3484e08d51e803d19133758ad6e77ac5`;


//var requestWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${geolocation}&lon=${geolocation}&appid=3484e08d51e803d19133758ad6e77ac5`;
// var myName = "Allan"
// var templateLiteralExample = `Hi my name is ${myName}`

// console.log(templateLiteralExample);

var exampleWeatherUrl= `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=3484e08d51e803d19133758ad6e77ac5&units=imperial`

function getApi(requestUrl) {
    fetch(requestUrl)
      .then(function (response) {
        console.log(response.status);
        return response.json();
      })
      .then(function (data) {

        // console.log(data)
        for (var i = 0; i<data.length;i++)
        {

          if (data[i].country==="US"){
            console.log(data[i]);
          }
            
        }  
        

        // var countryCode=data[0].country

        // if (countryCode==="GB"){
        //   alert ("you got it")
        // }

        // var forecastDate = data.list[0].dt_txt

        // var firstDayForecast=dayjs(forecastDate).format("(MM/DD/YYYY)")

        // console.log(firstDayForecast)

      });
  }

getApi(exampleGeo);
// var firstDayForecast=dayjs(forecastDate).format("(MM/DD/YYYY)")

// console.log(firstDayForecast)

