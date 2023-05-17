var searchHistory=$("#seach-query");
var cityUserInput=$(".city-input");
var citySearchBtn=$(".search");
var requestedWeather=$(".weather-display");
var weatherHeaderEl=$(".weather-header");
var futureForecast=$(".future-forecast");
var currentForecast=$("current-forecast");
var weatherTemperature=$("#current-temp");
var weatherWind=$("#current-wind");
var weatherHumidity=$("#current-humidity");

var cityHistory=("#city-history");


function getWeatherAPI (requestWeatherUrl){
  fetch(requestWeatherUrl)
      .then(function (response) 
      {
        return response.json();
      })
      .then(function (data) {
        $('img').remove()

        function dateFormat (_x)
        {
          var currentDayForecast_DT=data.list[_x].dt_txt
          return dayjs(currentDayForecast_DT).format("(MM/DD/YYYY)")
        }

        function getWeatherIcon(_x) 
        {
          var currentDayForecast_Icon=data.list[_x].weather[0].icon
          var img = $('<img>', {src:`https://openweathermap.org/img/wn/${currentDayForecast_Icon}@2x.png`})
          return img
        }

        // current day forecast
        var currentCity=data.city.name
        var currentDayForecast_Temp=data.list[0].main.temp
        var currentDayForecast_Wind=data.list[0].wind.speed
        var currentDayForecast_Humidity=data.list[0].main.humidity

        
        $("#current-day-icon").append(getWeatherIcon(0))

        $("#currentDay").text(currentCity + " " + dateFormat(0))

        weatherTemperature.text(`Temp:${currentDayForecast_Temp}°F`)
        
        weatherWind.text(`Wind:${currentDayForecast_Wind}MPH`)

        weatherHumidity.text(`Humidity:${currentDayForecast_Humidity}%`)
      // 1st day of 5 day forecast 
        var firstDayForecast_Temp=data.list[1].main.temp
        var firstDayForecast_Wind=data.list[1].wind.speed
        var firstDayForecast_Humidity=data.list[1].main.humidity
        
        $("#first-day-icon").append(getWeatherIcon(1))

        $("#first-day").text(dateFormat(1))

        $("#first-day-temp").text(`Temp:${firstDayForecast_Temp}°F`)
        
        $("#first-day-wind").text(`Wind:${firstDayForecast_Wind}MPH`)

        $("#first-day-humidity").text(`Humidity:${firstDayForecast_Humidity}%`)

      // 2nd day of 5 day forecast 
        var secondDayForecast_Temp=data.list[9].main.temp
        var secondDayForecast_Wind=data.list[9].wind.speed
        var secondDayForecast_Humidity=data.list[9].main.humidity
        
        $("#second-day-icon").append(getWeatherIcon(9))

        $("#second-day").text(dateFormat(9))

        $("#second-day-temp").text(`Temp:${secondDayForecast_Temp}°F`)
        
        $("#second-day-wind").text(`Wind:${secondDayForecast_Wind}MPH`)

        $("#second-day-humidity").text(`Humidity:${secondDayForecast_Humidity}%`)

        // 3rd day of 5 day forecast 
        var thirdDayForecast_Temp=data.list[17].main.temp
        var thirdDayForecast_Wind=data.list[17].wind.speed
        var thirdDayForecast_Humidity=data.list[17].main.humidity
        
        $("#third-day-icon").append(getWeatherIcon(17))

        $("#third-day").text(dateFormat(17))

        $("#third-day-temp").text(`Temp:${thirdDayForecast_Temp}°F`)
        
        $("#third-day-wind").text(`Wind:${thirdDayForecast_Wind}MPH`)

        $("#third-day-humidity").text(`Humidity:${thirdDayForecast_Humidity}%`)

          // 4th day of 5 day forecast 
          var fourthDayForecast_Temp=data.list[25].main.temp
          var fourthDayForecast_Wind=data.list[25].wind.speed
          var fourthDayForecast_Humidity=data.list[25].main.humidity
            
          $("#fourth-day-icon").append(getWeatherIcon(25))
  
          $("#fourth-day").text(dateFormat(25))
  
          $("#fourth-day-temp").text(`Temp:${fourthDayForecast_Temp}°F`)
          
          $("#fourth-day-wind").text(`Wind:${fourthDayForecast_Wind}MPH`)
  
          $("#fourth-day-humidity").text(`Humidity:${fourthDayForecast_Humidity}%`)

          // 5th day of 5 day forecast 
          var fifthDayForecast_Temp=data.list[33].main.temp
          var fifthDayForecast_Wind=data.list[33].wind.speed
          var fifthDayForecast_Humidity=data.list[33].main.humidity
          
          $("#fifth-day-icon").append(getWeatherIcon(33))

          $("#fifth-day").text(dateFormat(33))

          $("#fifth-day-temp").text(`Temp:${fifthDayForecast_Temp}°F`)
          
          $("#fifth-day-wind").text(`Wind:${fifthDayForecast_Wind}MPH`)

          $("#fifth-day-humidity").text(`Humidity:${fifthDayForecast_Humidity}%`)

          // adding conditional statement to prevent double search of same city

          var a=$('.history').text();
          var b=data.city.name;

          if (a.includes(b)){
            return

          } else {
            var button = $("<button>", {class:"history"});
            button.text(data.city.name);
            $("#city-history").prepend(button);
              if ($("button").length>11)
            {
                favorites.find("button:last").remove();
            }
          }


      })
}

function getApi(requestUrl) {
    fetch(requestUrl)
      .then(function (response) 
      {
        return response.json();
      })
      .then(function (data) 
      {
        var geoLocationLat=data.city.coord.lat

        var geoLocationLon=data.city.coord.lon 

        var requestWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${geoLocationLat}&lon=${geoLocationLon}&appid=3484e08d51e803d19133758ad6e77ac5&units=imperial`;
        getWeatherAPI(requestWeatherUrl) 
      }  
      )};

var cityName=""

function userSearch(cityName)
{
  cityName = $(cityUserInput).val() || "Miami"
  localStorage.setItem('city',cityName); 
  var requestGeocodeUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=3484e08d51e803d19133758ad6e77ac5`;
  console.log(requestGeocodeUrl)
  getApi(requestGeocodeUrl);
}

citySearchBtn.on('click', function (event){
  event.preventDefault();
  userSearch(cityName); 
})

$(cityHistory).on("click",".history", function(){
  cityName=$(this).text();
  var requestGeocodeUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=3484e08d51e803d19133758ad6e77ac5`;
  getApi(requestGeocodeUrl);

  $("#first-day-icon img").remove();

})

var city=""
 
  function pageLoad(city)
{
  localStorage.setItem('city',city); 
  var requestGeocodeUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3484e08d51e803d19133758ad6e77ac5`;
  console.log(requestGeocodeUrl)
  getApi(requestGeocodeUrl);
}

pageLoad("Miami")
