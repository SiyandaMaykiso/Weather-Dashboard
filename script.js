// Function Commands

function createCityList(citySearchList) {
    $("#city-list").empty();
  
    var keys = Object.keys(citySearchList);
    for (var i = 0; i < keys.length; i++) {
      var cityListEntry = $("<button>");
      cityListEntry.addClass("list-group-item list-group-item-action");
  
      var splitStr = keys[i].toLowerCase().split(" ");
      for (var j = 0; j < splitStr.length; j++) {
        splitStr[j] =
          splitStr[j].charAt(0).toUpperCase() + splitStr[j].substring(1);
      }
      var titleCasedCity = splitStr.join(" ");
      cityListEntry.text(titleCasedCity);
  
      $("#city-list").append(cityListEntry);
    }
  }

  // Directions for the user
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

   // This shows the first slide
   showSlide(currentSlide);


    // These are the Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);

  // API

  function populateCityWeather(city, citySearchList) {
    createCityList(citySearchList);
  
    var queryURL =
      "https:api.openweathermap.org/data/2.5/weather?q={city name}&appid={0d1c817b4d550379fbd5478824849526}"+
      city;
  
    
    });