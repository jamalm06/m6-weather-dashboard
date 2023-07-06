// // // Today's variables
// // const todayDate = document.getElementById('todayDate');
// // const todayIcon = document.getElementById('todayIcon');
// // const todayTemp = document.getElementById('todayTemp');
// // const todayWind = document.getElementById('todayWind');
// // const todayHumidity = document.getElementById('todayHumidity');
// // const todayUV = document.getElementById('todayUV');

// // // Future variables
// // const futureDate = document.getElementById('futureDate');
// // const futureIcon = document.getElementById('futureIcon');
// // const futureTemp = document.getElementById('futureTemp');
// // const futureWind = document.getElementById('futureWind');
// // const futureHumidity = document.getElementById('futureHumidity');
// // const futureUV = document.getElementById('futureUV');



// // //search varibales

// // var userInput = document.getElementById('userInput').value;

// // // console.log(userInput)
// // var inputButton = document.getElementById('inputButton');
// // var previousSearch = document.getElementById('previousSearch');



// // //API call for city 
// // function citySearch(event) {
// //   event.preventDefault();

// //   // if(priorsearchArr.indexOf(userInput) === -1){
// //   //     priorsearchArr.push(userInput);
// //   //     localStorage.setItem('history', JSON.stringify(priorsearchArr));
// //   //     priorSearch(userInput);
// //   // }
// //   var userInput = document.getElementById('userInput').value;
// //   console.log(userInput)
// //   if (!userInput) {
// //     console.error('You need a search input value!');
// //     return;
// //   }

// //   // api key 9c3e7c5b451d97e284c2869599cc8ecd
// //   weatherApi(userInput);
// // }


// // // function getApi(userSearch) {

// // //   var weatherApi = "https://api.openweathermap.org/data/2.5/forecast?q=" + userSearch + "&appid=9c3e7c5b451d97e284c2869599cc8ecd&units=imperial";
// // //   var currentApi = "https://api.openweathermap.org/data/2.5/weather?q=" + userSearch + "&appid=9c3e7c5b451d97e284c2869599cc8ecd&units=imperial";

// // //   cityval.innerHTML = "";
// // //   fiveDayval.innerHTML = "";
// // //   tempval.innerHTML = "";
// // //   humidityval.innerHTML = "";
// // //   windval.innerHTML = "";
// // //   uvval.innerHTML = "";
// // //   uv2.innerHTML = "";

// // //   fetch(weatherApi)
// // //       .then(function (response) {
// // //           if (!response.ok) {
// // //               throw response.json();
// // //           }
// // //           return response.json();
// // //       })

// // //       .then(function(data) {
// // //           forecastval= data;
// // //           console.log(forecastval)

// // //           for (i = 4; i < forecastval.list.length; i+=8) {
// // //               var card = document.createElement("div");
// // //               card.classList.add("col", "five")

// // //               var date = document.createElement("h2")
// // //               var futuredate = data.list[i].dt_txt;
// // //               date.textContent = new Date(futuredate).toLocaleDateString();

// // //               var temp = document.createElement("p")
// // //               var futuretemp = data.list[i].main.temp;
// // //               temp.textContent = "Temp: " + futuretemp + " ℉";

// // //               var humid = document.createElement("p")
// // //               var futurehumidity = data.list[i].main.humidity;
// // //               humid.textContent = "Humidity: " + futurehumidity + "%";

// // //               var image= document.createElement("img");
// // //               image.setAttribute("src", "http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png")

// // //               card.append(date, image, temp, humid)
// // //               fiveDayval.appendChild(card);

// // //           }
// // //       })

// // //   fetch(currentApi)
// // //       .then(function (response) {
// // //           if (!response.ok) {
// // //               throw response.json();
// // //           }
// // //           console.log(response);
// // //           return response.json();
// // //       })
// // //       .then(function(data) {
// // //           console.log(data);
// // //           console.log("Current data")
// // //           todaydata= data;
// // //           displayCurrent(todaydata);
// // //           console.log("todaydata");
// // //       })
// // // }



// // //added function to get enter keypress for user input with click 
// // // userInput.addEventListener("keypress", function (event) {
// // //   if (event.key === "Enter") {
// // //     event.preventDefault();
// // //     button.click();
// // //   }
// // // })


// // function weatherApi(userInput) {
// //   var waetherApiURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + userInput + ",US&units=imperial&appid=9c3e7c5b451d97e284c2869599cc8ecd"
// //   fetch(waetherApiURL)
// //     .then(function (response) {
// //       return response.json();
// //     })
// //     .then(function (data) {
// //       console.log(data)
// //       // Create a div element with the class "card"
// //       const cardDiv = document.createElement('div');
// //       cardDiv.className = 'card';

// //       // Create a div element with the class "card-body"
// //       const cardBodyDiv = document.createElement('div');
// //       cardBodyDiv.className = 'card-body';

// //       // Create an h5 element with the class "card-title" for the city name
// //       const cityNameHeading = document.createElement('h5');
// //       cityNameHeading.className = 'card-title cityName';
// //       cityNameHeading.textContent = 'City Name';

// //       // Create a p element with the class "card-text" for the date
// //       const todayDatePara = document.createElement('p');
// //       todayDatePara.className = 'card-text todayDate';
// //       todayDatePara.textContent = 'Date';

// //       // Append the city name and date elements to the card body
// //       cardBodyDiv.appendChild(cityNameHeading);
// //       cardBodyDiv.appendChild(todayDatePara);

// //       // Create a ul element with the classes "list-group" and "list-group-flush"
// //       const listGroupUl = document.createElement('ul');
// //       listGroupUl.className = 'list-group list-group-flush';

// //       // Create li elements with the classes "list-group-item" for each data point
// //       const todayIconLi = document.createElement('li');
// //       todayIconLi.className = 'list-group-item todayIcon';
// //       todayIconLi.textContent = 'Icon';

// //       const todayTempLi = document.createElement('li');
// //       todayTempLi.className = 'list-group-item todayTemp';
// //       todayTempLi.textContent = 'Temp';

// //       const todayWindLi = document.createElement('li');
// //       todayWindLi.className = 'list-group-item todayWind';
// //       todayWindLi.textContent = 'Wind Speed';

// //       const todayHumidityLi = document.createElement('li');
// //       todayHumidityLi.className = 'list-group-item todayHumidity';
// //       todayHumidityLi.textContent = 'Humidity';

// //       const todayUVLi = document.createElement('li');
// //       todayUVLi.className = 'list-group-item todayUV';
// //       todayUVLi.textContent = 'UV Index:';

// //       // Append the li elements to the ul element
// //       listGroupUl.appendChild(todayIconLi);
// //       listGroupUl.appendChild(todayTempLi);
// //       listGroupUl.appendChild(todayWindLi);
// //       listGroupUl.appendChild(todayHumidityLi);
// //       listGroupUl.appendChild(todayUVLi);

// //       // Append the card body and ul elements to the card div
// //       cardDiv.appendChild(cardBodyDiv);
// //       cardDiv.appendChild(listGroupUl);

// //       // Add the card div to the desired container in the DOM
// //       const container = document.getElementsByClassName('todayCast')[0];
// //       container.append(cardDiv);


// //     })
// // }



// // // var priorsearchArr = JSON.parse(localStorage.getItem('history')) || [];

// // // if(priorsearchArr.length){
// // //     for (let i = 0; i < priorsearchArr.length; i++) {
// // //        priorSearch(priorsearchArr[i])

// // //     }
// // // }

// // inputButton.addEventListener("click", citySearch);



// var searchCityEl = document.querySelector('#search-form');

// function searchCitySubmit(event) {
//     event.preventDefault();
//     //get input from search 
//     var cityInputVal = document.querySelector('#weather-search').value;
//     console.log(cityInputVal);

//     //validate that input is not empty
//     if (!cityInputVal) {
//         console.error('You need to enter a city to get the weather!');
//         return;
//     }
//     //adds query search to the weather-display.html call
//     // var queryString = './weather-display.html?q=' + cityInputVal;
//     var queryString = cityInputVal;

//     var citiesList = JSON.parse(localStorage.getItem("cities")) || [];
//     citiesList.push(cityInputVal);

//     //Stores initials and score in local storage to be used in High scores page

//     localStorage.setItem('cities', JSON.stringify(citiesList));

//     //assigns query string as the url
//     location.assign(queryString);
// }

// //event listener for search button
// searchCityEl.addEventListener('submit', searchCitySubmit);





// // var searchCityEl = document.querySelector('#search-form');
// var currentWeatherEl = document.querySelector('.todays-weather');
// var futureWeatherEl = document.querySelector('.upcoming-weather');
// var cityListEl = document.querySelector('#search-history');
// var clearHistoryEl = document.querySelector('.clear-button');

// //variables for lon and lat

// var cityLon = '';
// var cityLat = '';

// //get current day using dayjs
// var currDay = dayjs().format('(M/D/YYYY)');

// //Retrieving cities from local storage
// var cityList = JSON.parse(localStorage.getItem("cities"));


// function getParams() {
//     //get the search parameter from the url
//     var getParams = document.location.search.split('=');
//     console.log(getParams);
//     var searchCity = getParams[1];
//     console.log(searchCity);

//     //function call to geo location api
//     searchCities(searchCity);

// }

// //function to get lon lat of city that was searched and then use them to get current weather and future weather forecasts
// function searchCities(searchCity) {

//     var getGeoLoc = 'https://api.openweathermap.org/geo/1.0/direct?limit=5&appid=43b8c16645fd2e7758cee078f50a7301';
//     //if searchCity Param exists it adds it to the query for the api call for the lon lat 

//     if (searchCity) {
//         getGeoLoc = 'https://api.openweathermap.org/geo/1.0/direct?q=' + searchCity + '&limit=5&appid=43b8c16645fd2e7758cee078f50a7301&units';
//     }

//     console.log(getGeoLoc);

//     //Fetching lon lat parameters 
//     fetch(getGeoLoc).then(function (response) {
//         if (response.ok) {
//             response.json().then(function (data) {
//                 console.log(data);

//                 //check to verify location is in the US
//                 for (var i = 0; i < data.length; i++) {

//                     //if it is a US location it takes the lon lat and ends the for loop
//                     if (data[i].country === 'US') {
//                         console.log('This location is in the US');
//                         cityLon = data[i].lon;
//                         cityLat = data[i].lat;
//                         //calls  get current weather and get forecast detail functions
//                         getcurrentWeather(cityLon, cityLat);
//                         getForecastDetail(cityLon, cityLat);

//                         return;
//                     } else {
//                         console.log('This location is not in the US');
//                     }
//                 }
//             })
//         }
//     })
// }


// //Get 5 day forecast detail using lon lat 
// function getForecastDetail(cityLon, cityLat) {
    
//     console.log(cityLon, cityLat);

//     var getCityWeather = 'https://api.openweathermap.org/data/2.5/forecast?&appid=43b8c16645fd2e7758cee078f50a7301&units=imperial';

//     //if lon and lat exist then add the lat to the api link
//     if (cityLon) {
//         getCityWeather = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + cityLat;
//     }

//     //add lon to the api link
//     getCityWeather = getCityWeather + '&lon=' + cityLon + '&appid=43b8c16645fd2e7758cee078f50a7301&units=imperial';
//     console.log(getCityWeather);

//     //call to the weather api
//     fetch(getCityWeather).then(function (response) {
//         if (response.ok) {
//             response.json().then(function (results) {
//                 //logs results to the console
//                 console.log(results);

//                 // set lower date range to the start of the day after the current date
//                 var startDateTime = dayjs().add(1, 'day').startOf('day').unix();

//                 //set upper date range to the start of the day after the 5th day from the current date
//                 var endDateTime = dayjs().add(6, 'day').startOf('day').unix();

//                 console.log(startDateTime, endDateTime);

//                 //print results to the screen
//                 for (var i = 0; i < results.list.length; i++) {

//                     var forecastObject = results.list[i];
//                     //checks to see if the dt field falls within the start and end date date range
//                     if (forecastObject.dt > startDateTime && forecastObject.dt < endDateTime) {
//                         //if condition to call the display5dayWeather function only for the noon time stamp of each date within the 5 day forecast range 
//                         if (forecastObject.dt_txt.includes('12:00:00')) {
//                             console.log(forecastObject);
//                             display5DayWeather(forecastObject);
//                         }
//                     }


//                 }
//             })
//         }
//     })
// }

// //get current weather forecast using lon lat

// function getcurrentWeather(cityLon, cityLat) {

//     var getCurrentWeather = 'https://api.openweathermap.org/data/2.5/weather?&appid=43b8c16645fd2e7758cee078f50a7301&units=imperial';

//     //if lon and lat exist then add the lat to the api link
//     if (cityLon) {
//         getCurrentWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=' + cityLat;
//     }

//     //add lon to the api link
//     getCurrentWeather = getCurrentWeather + '&lon=' + cityLon + '&appid=43b8c16645fd2e7758cee078f50a7301&units=imperial';
//     console.log(getCurrentWeather);

//     //clear the current weather and 5 day forecast sections for function call on search history event

//     currentWeatherEl.innerHTML = '';
//     futureWeatherEl.innerHTML = '';

//     //call to the weather api
//     fetch(getCurrentWeather).then(function (response) {
//         if (response.ok) {
//             response.json().then(function (results) {
//                 //logs results to the console
//                 console.log(results);

//                 //create card div section
//                 var weatherBody = document.createElement('div');
//                 weatherBody.classList.add('weather-body');

//                 //creates h1 tag and adds current city and date 
//                 var selectedCity = document.createElement('h1');
//                 selectedCity.textContent = results.name + ' ' + currDay;

//                 //Get weather icon
//                 var currIcon = document.createElement('img');
//                 getIcon = 'http://openweathermap.org/img/wn/' + results.weather[0].icon + '@2x.png';
//                 currIcon.setAttribute('src', getIcon)

//                 //creates p tag and adds current temperature
//                 var currTemp = document.createElement('p');
//                 currTemp.textContent = 'Temp: ' + results.main.temp + ' °F';

//                 //creates p tag and adds current wind speed
//                 var currWind = document.createElement('p');
//                 currWind.textContent = 'Wind: ' + results.wind.speed + ' MPH';

//                 //creates p tag and adds current humidity
//                 var currHumidity = document.createElement('p');
//                 currHumidity.textContent = 'Humidity: ' + results.main.humidity + ' %';

//                 //adds current weather to 'todays-weather' class section of HTML
//                 weatherBody.append(selectedCity, currIcon, currTemp, currWind, currHumidity);
//                 currentWeatherEl.append(weatherBody);

//             })
//         }
//     })
// }

// //Function to display the 5 day forecast

// function display5DayWeather(resultObj) {

//     var forecastDay = dayjs(resultObj.dt_txt).format('M/D/YYYY');

//     //create card div section
//     var resultCard = document.createElement('div');
//     resultCard.classList.add('card');

//     //create card body div and appent to result card for 5 day forecast
//     var resultBody = document.createElement('div');
//     resultBody.classList.add('card-body');
//     resultCard.append(resultBody);

//     //creates h1 tag and adds current city and date 
//     var forecastDate = document.createElement('h1');
//     forecastDate.textContent = forecastDay;

//     //get weather icon
//     var forecastIcon = document.createElement('img');
//     dayIcon = 'http://openweathermap.org/img/wn/' + resultObj.weather[0].icon + '@2x.png';
//     forecastIcon.setAttribute('src', dayIcon);

//     //creates p tag and adds current temperature
//     var forecastTemp = document.createElement('p');
//     forecastTemp.textContent = 'Temp: ' + resultObj.main.temp + ' °F';

//     //creates p tag and adds current wind speed
//     var forecastWind = document.createElement('p');
//     forecastWind.textContent = 'Wind: ' + resultObj.wind.speed + ' MPH';

//     //creates p tag and adds current humidity
//     var forecastHumidity = document.createElement('p');
//     forecastHumidity.textContent = 'Humidity: ' + resultObj.main.humidity + ' %';

//     // Add  created 5 day forecast to 'upcoming-weather' section
//     resultBody.append(forecastDate, forecastIcon, forecastTemp, forecastWind, forecastHumidity);

//     futureWeatherEl.append(resultCard);

// }


// //function to render cities list
// function renderCitiesList() {

//     //Makesure local storage is not empty
//     if (cityList && cityList.length) {

//         //render list of cities

//         for (var i = 0; i < 8; i++) {

//             var li = document.createElement('li');
//             li.textContent = cityList[i];
//             li.setAttribute("id", "list-item");
//             cityListEl.append(li);
//         }
//     }

// }

// //event listener for history list items 
// cityListEl.addEventListener('click', function (event) {
//     event.preventDefault;

//     var element = event.target;

//     //target list items
//     if (element.matches("li")) {
//         var selectedOption = element.textContent;
//         searchCities(selectedOption);
//     }
// });

// //event listener for clear search history
// clearHistoryEl.addEventListener('click', function(event){
// event.preventDefault;

// if(event){
//     localStorage.clear();
//     location.reload();
// }
// });

// //Function call for getParams and renderCities 

// getParams();
// renderCitiesList();


var searchCityEl = document.querySelector('#search-form');
var currentWeatherEl = document.querySelector('.todays-weather');
var futureWeatherEl = document.querySelector('.upcoming-weather');
var cityListEl = document.querySelector('#search-history');
var clearHistoryEl = document.querySelector('.clear-button');

// Retrieve cities from local storage
var cityList = JSON.parse(localStorage.getItem('cities')) || [];

function searchCitySubmit(event) {
  event.preventDefault();
  
  // Get input from search 
  var cityInputVal = document.querySelector('#weather-search').value;
  console.log(cityInputVal);

  // Validate that input is not empty
  if (!cityInputVal) {
    console.error('You need to enter a city to get the weather!');
    return;
  }

  // Add the searched city to the cityList
  cityList.push(cityInputVal);

  // Store the cityList in local storage
  localStorage.setItem('cities', JSON.stringify(cityList));

  // Fetch weather data for the searched city
  getWeatherData(cityInputVal);
}

function getWeatherData(city) {
  var apiKey = '9c3e7c5b451d97e284c2869599cc8ecd'; // Replace with your OpenWeatherMap API key
  var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // Fetch current weather data
  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error: ' + response.status);
      }
    })
    .then(function (data) {
      // Display current weather data
      displayCurrentWeather(data);
    })
    .catch(function (error) {
      console.error('Error:', error);
    });

  // Fetch forecast data
  var forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  fetch(forecastApiUrl)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error: ' + response.status);
      }
    })
    .then(function (data) {
      // Display forecast data
      displayForecast(data);
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
}

function displayCurrentWeather(weatherData) {
  // Clear the current weather section
  currentWeatherEl.innerHTML = '';

  // Create elements to display the current weather data
  var cityNameEl = document.createElement('h2');
  cityNameEl.textContent = weatherData.name;

  var temperatureEl = document.createElement('p');
  temperatureEl.textContent = 'Temperature: ' + weatherData.main.temp + '°C';

  var humidityEl = document.createElement('p');
  humidityEl.textContent = 'Humidity: ' + weatherData.main.humidity + '%';

  var windSpeedEl = document.createElement('p');
  windSpeedEl.textContent = 'Wind Speed: ' + weatherData.wind.speed + ' m/s';

  // Append the elements to the current weather section
  currentWeatherEl.appendChild(cityNameEl);
  currentWeatherEl.appendChild(temperatureEl);
  currentWeatherEl.appendChild(humidityEl);
  currentWeatherEl.appendChild(windSpeedEl);
}

function displayForecast(forecastData) {
  // Clear the upcoming weather section
  futureWeatherEl.innerHTML = '';

  // Create elements for each forecast item
  for (var i = 0; i < forecastData.list.length; i += 8) {
    var forecastItem = forecastData.list[i];

    var date = dayjs.unix(forecastItem.dt).format('YYYY-MM-DD');
    var temperature = forecastItem.main.temp;
    var humidity = forecastItem.main.humidity;

    // Create a card element for the forecast item
    var cardEl = document.createElement('div');
    cardEl.classList.add('forecast-card');

    var dateEl = document.createElement('p');
    dateEl.textContent = 'Date: ' + date;

    var temperatureEl = document.createElement('p');
    temperatureEl.textContent = 'Temperature: ' + temperature + '°C';

    var humidityEl = document.createElement('p');
    humidityEl.textContent = 'Humidity: ' + humidity + '%';

    // Append the elements to the forecast card
    cardEl.appendChild(dateEl);
    cardEl.appendChild(temperatureEl);
    cardEl.appendChild(humidityEl);

    // Append the forecast card to the upcoming weather section
    futureWeatherEl.appendChild(cardEl);
  }
}

function displayCityList() {
  // Clear the city list
  cityListEl.innerHTML = '';

  // Create elements for each city in the cityList
  for (var i = 0; i < cityList.length; i++) {
    var city = cityList[i];

    var cityItemEl = document.createElement('li');
    cityItemEl.textContent = city;
    cityItemEl.classList.add('city-item');

    // Add event listener to each city item for weather search
    cityItemEl.addEventListener('click', function () {
      var selectedCity = this.textContent;
      getWeatherData(selectedCity);
    });

    // Append the city item to the city list
    cityListEl.appendChild(cityItemEl);
  }
}

function clearCityList() {
  // Clear the cityList and local storage
  cityList = [];
  localStorage.removeItem('cities');

  // Clear the city list display
  cityListEl.innerHTML = '';
}

// Event listeners
searchCityEl.addEventListener('submit', searchCitySubmit);
clearHistoryEl.addEventListener('click', clearCityList);

// Display initial city list on page load
displayCityList();
