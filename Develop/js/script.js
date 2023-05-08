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





function getWeatherAPI (requestWeatherUrl){
  fetch(requestWeatherUrl)
      .then(function (response) 
      {
        console.log(response.status);
        return response.json();
      })
      .then(function (data) {
        console.log(data)

        // $('img').remove

        function dateFormat (_x)
        {
          var currentDayForecast_DT=data.list[_x].dt_txt
          return dayjs(currentDayForecast_DT).format("(MM/DD/YYYY)")
        }

        // current day forecast
        var currentCity=data.city.name
        var currentDayForecast_Icon=data.list[0].weather[0].icon
        var currentDayForecast_Temp=data.list[0].main.temp
        var currentDayForecast_Wind=data.list[0].wind.speed
        var currentDayForecast_Humidity=data.list[0].main.humidity


        var weatherIconUrl=`https://openweathermap.org/img/wn/${currentDayForecast_Icon}@2x.png`
        
        $("#icon").attr("src",weatherIconUrl)

        $(".weather-header h2").text(currentCity + " " + dateFormat(0))

        weatherTemperature.text(`Temp:${currentDayForecast_Temp}°F`)
        
        weatherWind.text(`Wind:${currentDayForecast_Wind}MPH`)

        weatherHumidity.text(`Humidity:${currentDayForecast_Humidity}%`)
      // 1st day of 5 day forecast 
        var firstDayForecast_Icon=data.list[1].weather[0].icon
        var firstDayForecast_Temp=data.list[1].main.temp
        var firstDayForecast_Wind=data.list[1].wind.speed
        var firstDayForecast_Humidity=data.list[1].main.humidity

        var weatherIconUrl=`https://openweathermap.org/img/wn/${firstDayForecast_Icon}@2x.png`
        
        $("#first-day-icon").attr("src",weatherIconUrl)

        $("#first-day").text(dateFormat(1))

        $("#first-day-temp").text(`Temp:${firstDayForecast_Temp}°F`)
        
        $("#first-day-wind").text(`Wind:${firstDayForecast_Wind}MPH`)

        $("#first-day-humidity").text(`Humidity:${firstDayForecast_Humidity}%`)

      // 2nd day of 5 day forecast 
        var secondDayForecast_Icon=data.list[9].weather[0].icon
        var secondDayForecast_Temp=data.list[9].main.temp
        var secondDayForecast_Wind=data.list[9].wind.speed
        var secondDayForecast_Humidity=data.list[9].main.humidity

        var weatherIconUrl=`https://openweathermap.org/img/wn/${secondDayForecast_Icon}@2x.png`
        
        $("#second-day-icon").attr("src",weatherIconUrl)

        $("#second-day").text(dateFormat(9))

        $("#second-day-temp").text(`Temp:${secondDayForecast_Temp}°F`)
        
        $("#second-day-wind").text(`Wind:${secondDayForecast_Wind}MPH`)

        $("#second-day-humidity").text(`Humidity:${secondDayForecast_Humidity}%`)

        // 3rd day of 5 day forecast 
        var thirdDayForecast_Icon=data.list[17].weather[0].icon
        var thirdDayForecast_Temp=data.list[17].main.temp
        var thirdDayForecast_Wind=data.list[17].wind.speed
        var thirdDayForecast_Humidity=data.list[17].main.humidity

        var weatherIconUrl=`https://openweathermap.org/img/wn/${thirdDayForecast_Icon}@2x.png`
        
        $("#third-day-icon").attr("src",weatherIconUrl)

        $("#third-day").text(dateFormat(17))

        $("#third-day-temp").text(`Temp:${thirdDayForecast_Temp}°F`)
        
        $("#third-day-wind").text(`Wind:${thirdDayForecast_Wind}MPH`)

        $("#third-day-humidity").text(`Humidity:${thirdDayForecast_Humidity}%`)

          // 4th day of 5 day forecast 
          var fourthDayForecast_Icon=data.list[25].weather[0].icon
          var fourthDayForecast_Temp=data.list[25].main.temp
          var fourthDayForecast_Wind=data.list[25].wind.speed
          var fourthDayForecast_Humidity=data.list[25].main.humidity
  
          var weatherIconUrl=`https://openweathermap.org/img/wn/${fourthDayForecast_Icon}@2x.png`
          
          $("#fourth-day-icon").attr("src",weatherIconUrl)
  
          $("#fourth-day").text(dateFormat(25))
  
          $("#fourth-day-temp").text(`Temp:${fourthDayForecast_Temp}°F`)
          
          $("#fourth-day-wind").text(`Wind:${fourthDayForecast_Wind}MPH`)
  
          $("#fourth-day-humidity").text(`Humidity:${fourthDayForecast_Humidity}%`)

          // 5th day of 5 day forecast 
          var fifthDayForecast_Icon=data.list[33].weather[0].icon
          var fifthDayForecast_Temp=data.list[33].main.temp
          var fifthDayForecast_Wind=data.list[33].wind.speed
          var fifthDayForecast_Humidity=data.list[33].main.humidity

          var weatherIconUrl=`https://openweathermap.org/img/wn/${fifthDayForecast_Icon}@2x.png`
          
          $("#fifth-day-icon").attr("src",weatherIconUrl)

          $("#fifth-day").text(dateFormat(33))

          $("#fifth-day-temp").text(`Temp:${fifthDayForecast_Temp}°F`)
          
          $("#fifth-day-wind").text(`Wind:${fifthDayForecast_Wind}MPH`)

          $("#fifth-day-humidity").text(`Humidity:${fifthDayForecast_Humidity}%`)

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

        var requestWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${geoLocationLat}&lon=${geoLocationLon}&appid=3484e08d51e803d19133758ad6e77ac5&units=imperial`;
        getWeatherAPI(requestWeatherUrl) 
      }  
      )};


 function userSearch()
{
  cityName = $(cityUserInput).val()
  localStorage.setItem('city',cityName); 
}

citySearchBtn.on('click', function (event){
  event.preventDefault();
  userSearch(); 
var requestGeocodeUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=3484e08d51e803d19133758ad6e77ac5`;

getApi(requestGeocodeUrl);


})

